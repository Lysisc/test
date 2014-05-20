//20140415 新增 by lusc
(function($) {

    var pubPopUp = $('#publish_popup'),
        pubLabel = pubPopUp.find('.ttd');
    $('.submit_pop').click(function() { //发表游记弹出层
        var that = this;
        if (pubPopUp.data('hasClick') != 1) {
            pubPopUp.data('hasClick', 1);
            INTERFACE.classified_info(function(data) {
                var dom = '';
                if ($(that).attr('data-release') == '1') {
                    pubLabel.data('rel', 1);
                    for (var i = 0; i < data.DistrictList.length; i++) {
                        var isSelect = data.DistrictList[i].IsSelected ? ' selected"><i></i>' : '">';
                        dom += '<a href="javascript:;" data-id="' + data.DistrictList[i].DistrictId + '" class="dest' + isSelect + data.DistrictList[i].DistrictName + '</a>';
                    };
                } else {
                    pubLabel.data('rel', 0);
                    for (var i = 0; i < data.TagList.length; i++) {
                        var isSelect = data.TagList[i].IsSelected ? ' selected"><i></i>' : '">';
                        dom += '<a href="javascript:;" class="dest' + isSelect + data.TagList[i].TagName + '</a>';
                    };
                };
                pubLabel.prepend(dom);
                var dayVal = data.PracticalInfo.TravelDays == 0 ? '' : data.PracticalInfo.TravelDays,
                    whoVal = $('#tpi_who_select').find('a[data-id=' + data.PracticalInfo.CompanionType + ']').text(),
                    costVal = data.PracticalInfo.Consume == 0 ? '' : data.PracticalInfo.Consume,
                    timeVal = data.PracticalInfo.DepartureDate;
                $('#tpi_day').val(dayVal).data('val', dayVal);
                $('#tpi_who').val(whoVal).data('val', data.PracticalInfo.CompanionType);
                $('#tpi_cost').val(costVal).data('val', costVal);
                $('#tpi_time').val(timeVal).data('val', timeVal);
                if ($(that).attr('data-release') == '1') {
                    if (pubLabel.find('.dest').length >= 12) {
                        pubLabel.find('.add_dest, .search_dest').hide();
                        pubLabel.find('.error_tip').text('您已经添加了足够的目的地').show();
                    } else {
                        pubLabel.find('.add_dest').show();
                        pubLabel.find('.search_dest, .error_tip').hide();
                    };
                } else {
                    if (pubLabel.find('.selected').length >= 10) {
                        pubLabel.find('.error_tip').text('最多可以添加10个分类标签').show();
                    } else {
                        pubLabel.find('.error_tip').hide();
                    };
                };
            });
        };
        $.popupbox.show({
            id: 'publish_popup',
            callback: function() {
                $('.search_dest').find('input').add('#tpi_who, #tpi_time').placeholder();
                if (pubPopUp.data('hasClick') == 1) pubLabel.find('.search_dest, .error_tip').hide();
            }
        })
    });

    pubPopUp.on('click', '.close, .cancel', function() { //关闭弹出层
        $.popupbox.close();
    });

    pubPopUp.on('click', '.dest', function() { //标签选择
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected').find('i').remove()
        } else {
            $(this).addClass('selected').prepend('<i></i>')
        };
    });

    var sDest = $('.search_dest'),
        sSelect = $('#search_select'),
        searchApi = $('#gs_search').val();
    pubLabel.find('.add_dest').click(function() { //添加标签按钮
        pubLabel.find('.error_tip').hide();
        $(this).add(sSelect).hide();
        sDest.show().find('input').focus().val('');
    });

    pubLabel.find('.cancel_dest').click(function() { //隐藏输入框
        pubLabel.find('.add_dest').show();
        sDest.hide();
    });

    sSelect.on('mouseover', 'a', function() { //搜索结果事件绑定
        $(this).addClass('over').siblings().removeClass('over')
    }).on('click', 'a', function() {
        searchSelect();
        return false;
    });

    sDest.find('input').blur(function() { //失去焦点时候隐藏搜索框
        if (sSelect.data('isHover') != 1) sSelect.html('').hide();
    });
    sSelect.hover(function() {
        sSelect.data('isHover', 1)
    }, function() {
        sSelect.data('isHover', 0)
    });

    sDest.on('keyup beforepaste ', 'input', function(e) { //拿快搜数据
        if (e.keyCode == 40 || e.keyCode == 38 || e.keyCode == 13) return false;
        var key = GS.xssFilter(sDest.find('input').val());
        if (!/\S/g.test(key)) {
            sSelect.html('').hide();
            return false;
        };
        $.getJSON(searchApi, {
            para: escape($.trim(key))
        }, function(d) {
            if (d.success == 0) {
                var data = d.destinations,
                    html = [];
                if (d.destinations.length == 0) {
                    sSelect.html('<em>请输入正确的城市名</em>').show();
                    return false;
                };
                for (i in data) {
                    var city = data[i].name.split('，')[0],
                        country = data[i].name.split('，')[1];
                    html.push('<a data-id="' + data[i].id + '" href="javascript:;"><span class="search_city" title="' + city + '">' + city + '</span>，<span class="search_country" title="' + country + '">' + country + '</span></a>');
                };
                sSelect.html(html.join('')).show().find('a:first').addClass('over');
            } else {
                window.console && console.log('搜索接口无数据返回，请检查接口配置！');
            };
        })
    });

    sDest.on('keydown', 'input', function(e) { //键盘操作
        if (e.keyCode == 40 || e.keyCode == 38) { //键盘上下操作
            var resultA = sSelect.find('a');
            if (resultA.length == 0) return false;
            if (resultA.hasClass('over')) {
                var resultOver = sSelect.find('.over');
                if (resultOver.prev('a').is(':first') && e.keyCode == 38) {
                    resultA.last().addClass('over');
                } else if (resultOver.next('a').is(':last') && e.keyCode == 40) {
                    resultA.first().addClass('over');
                } else {
                    e.keyCode == 38 ? resultOver.prev('a').addClass('over') : resultOver.next('a').addClass('over');
                };
                resultOver.removeClass('over');
            } else {
                e.keyCode == 38 ? resultA.last().addClass('over') : resultA.first().addClass('over');
            };
            return false;
        } else if (e.keyCode == 13) { //键盘enter操作
            searchSelect();
            return false;
        };
    });

    function searchSelect() { //搜索项选定
        sDest.find('input').focus().val('');
        var resultA = sSelect.find('.over');
        if (resultA.length > 0) {
            var dataVal = resultA.find('.search_city').text() + '，' + resultA.find('.search_country').text(),
                dataId = resultA.attr('data-id'),
                _dest = pubPopUp.find('.dest');
            for (var i = 0; i < _dest.length; i++) {
                if (dataId == _dest.eq(i).attr('data-id')) {
                    sSelect.html('<em>您已添加过该城市</em>').show();
                    return false;
                };
            };
            pubLabel.find('.add_dest').before($('<a class="dest selected" data-id="' + dataId + '" href="javascript:;"><i></i>' + dataVal + '</a>').fadeIn());
            sSelect.html('').hide();
            var popHeight = pubPopUp.outerHeight();
            pubPopUp.css('margin-top', 0 - popHeight / 2);
            if (pubLabel.find('.dest').length >= 12) {
                pubLabel.find('.add_dest, .search_dest').hide();
                pubLabel.find('.error_tip').text('您已经添加了足够的目的地').show();
            };
        };
    };

    $('#tpi_day, #tpi_cost').keyup(function() { //行程天数和人民币过滤
        if (/\D|^0+/g.test($(this).val())) $(this).val('');
        $(this).data('val', $(this).val());
    });

    //select标签模拟
    var selectObj = $('#tpi_who'),
        selectBox = $('#tpi_who_select');
    selectObj.focus(function() {
        selectBox.show();
    }).blur(function() {
        if (selectBox.data('isHover') != 1) selectBox.hide();
    });
    selectBox.find('a').click(function() {
        selectObj.val($(this).text()).css('color', '#666').data('val', $(this).attr('data-id'));
        selectBox.hide();
    });
    selectBox.hover(function() {
        selectBox.data('isHover', 1)
    }, function() {
        selectBox.data('isHover', 0)
    });

    //日期控件
    var dateObj = $('#tpi_time');
    dateObj.click(function() {
        dateObj.calendar({
            foretime: 'no',
            callback: function() { //日期控件格式化
                var inputVal = dateObj.val(),
                    strs = inputVal.match(/-[\d]{1}\b/g);
                if (strs != null) {
                    for (var i = 0; i < strs.length; i++) {
                        var str = strs[i].replace('-', '-0');
                        inputVal = inputVal.replace(/-[\d]{1}\b/, str)
                    }
                };
                dateObj.val(inputVal).css('color', '#666').data('val', inputVal);
            }
        }).focus();
    });

    //提交
    $('#publish_submit').click(function() {
        var errTip01 = pubLabel.find('.selected').length == 0 && pubLabel.data('rel') == 1,
            errTip02 = new Date(dateObj.val().replace(/-/g, "/")) > new Date();
        if (errTip01 || errTip02) {
            if (errTip01) {
                pubLabel.find('.error_tip').text('请至少选择1个目的地').show()
            } else {
                pubLabel.find('.error_tip').hide();
            };
            if (errTip02) {
                $('.tpi_time').find('.error_tip').text('不能选择当天之后日期').show()
            } else {
                $('.tpi_time').find('.error_tip').hide();
            };
            return false;
        } else {
            pubPopUp.find('.error_tip').hide();
        };
        var $this = $(this),
            DistrictList = [],
            TagList = [];
        if (pubLabel.data('rel') == 1) {
            pubLabel.find('.selected').each(function() {
                DistrictList.push({
                    DistrictId: $(this).attr('data-id'),
                    DistrictName: $(this).text(),
                    IsSelected: true
                });
            });
        } else {
            var selLabel = pubLabel.find('.selected').length;
            if (selLabel > 10) {
                pubLabel.find('.error_tip').text('最多可以添加10个分类标签').show();
                return false;
            };
            pubLabel.find('.selected').each(function() {
                TagList.push({
                    TagName: $(this).text(),
                    IsSelected: true
                });
            });
        };
        var dayVal = $('#tpi_day').data('val') == '' ? 0 : $('#tpi_day').data('val'),
            whoVal = $('#tpi_who').data('val'),
            costVal = $('#tpi_cost').data('val') == '' ? 0 : $('#tpi_cost').data('val'),
            timeVal = $('#tpi_time').data('val'),
            PracticalInfo = {
                TravelDays: dayVal,
                CompanionType: whoVal,
                Consume: costVal,
                DepartureDate: timeVal
            };
        INTERFACE.UpdateTravelExtraInfo({ //和后台交互
            DistrictList: DistrictList,
            TagList: TagList,
            PracticalInfo: PracticalInfo
        }, function() {
            if (pubLabel.data('rel') == 1) {
                $.post(INTERFACE.ReleaseTravel, {
                        travelId: INTERFACE.TravelId,
                        stepNo: 100
                    },
                    function(data) {
                        if (data && data.RetCode && data.RetCode == 1) {
                            window.location.href = INTERFACE.GoToNextStep + "&score=" + data.Html;
                        } else {
                            $.gs_alert({
                                text: "发表游记失败，请重试！"
                            });
                        }
                    });
            } else {
                // window.location.reload(true);
            };
            $this.gsdisable({
                disable: 'gs_btn_v4 gsn-btn-20-load',
                time: 20000,
                text: '<img class="btn_ajax" src="http://youresource.c-ctrip.com/img/load.gif" alt="...">正在提交', //也可以传入ajax的图片
                callback: function() {}
            });
        });
    });
})(jQuery);