//[\s\n\r\t]*$ Conversion format
;
$(function() {
    //替换所有的匹配项
    var replaceAll = function(str, s1, s2) {
        return str.replace(new RegExp(s1, "igm"), s2);
    };
    //Html格式化 
    function HtmlEncode(str) {
        if ($.browser.msie) {
            str = str.replace(/&/igm, "&amp;");
            str = str.replace(/\</igm, "&lt;");
            str = str.replace(/\>/igm, "&gt;");
            return str;
        } else {
            var div = document.createElement("div");
            var text = document.createTextNode(str);
            div.appendChild(text);
            return div.innerHTML;
        }
    }

    function HTMLDecode(text) {
        if ($.browser.msie) {
            text = text.replace(/&lt;/igm, "<");
            text = text.replace(/&gt;/igm, ">");
            text = text.replace(/&amp;/igm, "&");
            return text;
        } else {
            var temp = document.createElement("div");
            temp.innerHTML = text;
            var output = temp.innerText || temp.textContent;
            temp = null;
            return output;
        }
    }
    /**
     *  转换文本格式 文本中 "\r\n" 和 "<br/>"、 "\n" 和 "<br/>"、 " " 和 "&nbsp;" 之间相互转换
     */
    var conversionFormat = function(str, toTextArea) {
        var aTypeArr = ["<BR>", "\r\n"],
            bTypeArr = ["<BR>", "\n"],
            cTypeArr = ["&nbsp;", " "];
        var toHtml = toTextArea === 0 ? 1 : 0;
        var a = replaceAll(str, aTypeArr[toHtml], aTypeArr[toTextArea]);
        var b = replaceAll(a, bTypeArr[toHtml], bTypeArr[toTextArea]);
        var c = replaceAll(b, cTypeArr[toHtml], cTypeArr[toTextArea]);
        return c;
    }

    var updateSaveTime = function() {
        var $time = $(".edit_botfixed p span.time");
        var date = new Date(),
            month = date.getMonth() + 1,
            day = date.getDate() + "",
            hours = date.getHours() + "",
            minutes = date.getMinutes() + "",
            seconds = date.getSeconds() + "";
        day = day.length == 1 ? (0 + "" + day) : day;
        hours = hours.length == 1 ? (0 + "" + hours) : hours;
        minutes = minutes.length == 1 ? (0 + "" + minutes) : minutes;
        // seconds = seconds.length == 1 ? (0 +""+seconds) : seconds;
        // var time = "草稿已自动保存&nbsp;" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
        var time = "自动保存于&nbsp;" + hours + ":" + minutes;
        $time.html(time);
    };

    //保存草稿
    $('.edit_botfixed .save_drafts').click(function() {
        var $this = $(this);
        updateSaveTime();
        var str = $(".edit_botfixed").find('.time').text();
        _str = str.replace(/^自动保存于/g, '保存于');
        $(".edit_botfixed").find('.time').text(_str);
        $.gs_alert({
            text: '草稿保存成功，可到<a href="' + INTERFACE.MemberUrl + '" target="_blank">个人主页</a>中查看。',
            time: 3000,
            hasCloseBtn: true,
            hasDetermineBtn: false,
            width: "auto"
        });
    });

    $('.submit_go').length == 1 ? $('.edit_botfixed dl').width(470) : $('.edit_botfixed dl').width(600);

    //发表按钮
    var hideSaveTipTimer = null;
    $('.edit_botfixed .submit_go').click(function() {
        clearTimeout(hideTagTipTimer);
        clearTimeout(hideSaveTipTimer);
        var go = true;
        var $textAreas = $(".daybox.editbox").find(".textarea"),
            $first = null;
        var textareaArr = [];

        $textAreas.each(function() {
            var $this = $(this);
            if ($this.is(":visible")) {
                go = false;
                textareaArr.push($this);
                $first = $first ? $first : $this;
                $this.addClass("red-border");
                if (!$this.parents(".addtagbox").length) {
                    var $redTip = $('<div data-id="save-tip" style="margin-left:20px;line-height:30px;color:#B94A48;float:right;font-size: 12px;">请保存内容</div>');
                    var $parent = $this.parent();
                    $parent.find(".msg").hide();
                    var $saveTip = $parent.find("div[data-id='save-tip']");
                    if ($saveTip.length === 0) {
                        $redTip.appendTo($parent);
                    } else {
                        $saveTip.show();
                        $redTip = $saveTip;
                    }
                } else {
                    var $tagTip = $this.parents(".addtagbox").siblings(".tag-tip");
                    $tagTip.text("请保存内容");
                    $tagTip.show();
                    updateBotFixedTop();
                }
            }
        });
        if ($first) {
            var firstTop = $first.offset().top;
            $('body,html').animate({
                scrollTop: firstTop - 60
            }, 800);
        }

        function hideSaveTip() {
            var len = textareaArr.length;
            for (var i = 0; i < len; i++) {
                var $textArea = textareaArr[i],
                    $parent = $textArea.parent();
                $textArea.removeClass("red-border");
                if (!$textArea.parents(".addtagbox").length) {
                    $parent.find("div[data-id='save-tip']").hide();
                    $parent.find(".msg").show();
                } else {
                    var $tagTip = $textArea.parents(".addtagbox").siblings(".tag-tip");
                    $tagTip.hide();
                    updateBotFixedTop();
                    $tagTip.text("标签请控制在10个字以内");
                }
            }
        }

        hideSaveTipTimer = setTimeout(hideSaveTip, 3000);

        if (go) {
            var $this = $(this);
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
            $this.gsdisable({
                disable: 'submit_go gsn-btn-20-load',
                time: 20000,
                text: '<img class="btn_ajax" src="http://youresource.c-ctrip.com/img/load.gif" alt="...">正在提交', //也可以传入ajax的图片
                callback: function() {}
            });
        }
    });

    //点击弹出餐馆评价窗
    $('.singledes[data-id="chanGuanAssess"] a').on('click', function() {
        var config = {};
        var $parent = $(this).parent(),
            $li = $parent.siblings('ul').find('li'),
            contentId = $(this).parents(".singledes").attr("data-contentId") || 0,
            commentId = $(this).parents(".singledes").attr("data-commentId") || 0;
        travelPOIId = $(this).parents(".singledes").attr("data-travelPOIId") || 0,
        businessType = $(this).parents(".singledes").attr("data-businessType") || 0;
        isCustom = $(this).parents(".singledes").attr("data-isCustom") || 0;

        config.isViewpoint = false;
        config.contentId = contentId;
        config.commentId = commentId;
        config.travelPOIId = travelPOIId;
        config.businessType = businessType;
        config.isCustom = isCustom;

        if ($(this).hasClass('edit_comment')) {
            config.zongtiPoint = parseInt($li.find("span[data-name='gs_zongtiPoint']").css('width'), 10) / 14;
            config.kouweiPoint = $li.find("span[data-name='gs_kouweiPoint']").text();
            config.fengweiPoint = $li.find("span[data-name='gs_fengweiPoint']").text();
            config.fuwuPoint = $li.find("span[data-name='gs_fuwuPoint']").text();
            config.xiaofei = $li.find("span[data-name='gs_xiaofei']").text();
            config.pinglun = $parent.siblings("p[data-name='gs_pinglun']").html();
        }
        config.callback = function(obj) {
            $li.find("span[data-name='gs_zongtiPoint']").css({
                width: obj.zongtiPoint * 14
            });
            $li.find("span[data-name='gs_kouweiPoint']").text(obj.kouweiPoint);
            $li.find("span[data-name='gs_fengweiPoint']").text(obj.fengweiPoint);
            $li.find("span[data-name='gs_fuwuPoint']").text(obj.fuwuPoint);
            $li.find("span[data-name='gs_xiaofei']").text(obj.xiaofei);
            var pLun = obj.pinglun.replace(/[\s\n\r\t]*$/, "");
            pLun = HtmlEncode(pLun);
            pLun = conversionFormat(pLun, 0);
            $parent.siblings("p[data-name='gs_pinglun']").html(pLun);
            $parent.parents(".singledes").attr("data-commentId", obj.commentId);

            $parent.siblings('ul').show();
            $parent.parent().find('h3 a').hide();
            $parent.parent().find('p').show();
            updateSaveTime();
        }
        initAssessWindow(config);
    });

    //点击弹出景点评价窗
    $('.singledes[data-id="jingDianAssess"] a').click(function() {
        var config = {},
            $parent = $(this).parent(),
            $li = $parent.siblings('ul').find('li');
        contentId = $(this).parents(".singledes").attr("data-contentId") || 0,
        commentId = $(this).parents(".singledes").attr("data-commentId") || 0;
        travelPOIId = $(this).parents(".singledes").attr("data-travelPOIId") || 0,
        businessType = $(this).parents(".singledes").attr("data-businessType") || 0;
        isCustom = $(this).parents(".singledes").attr("data-isCustom") || 0;

        config.contentId = contentId;
        config.commentId = commentId;
        config.travelPOIId = travelPOIId;
        config.businessType = businessType;
        config.isCustom = isCustom;

        if ($(this).hasClass('edit_comment')) {
            config.zongtiPoint = parseInt($li.find("span[data-name='gs_zongtiPoint']").css('width'), 10) / 14;
            config.kouweiPoint = 0;
            config.fengweiPoint = 0;
            config.fuwuPoint = 0;
            config.xiaofei = 0;
            config.pinglun = $parent.siblings("p[data-name='gs_pinglun']").html();
        }
        config.callback = function(obj) {
            $parent.siblings('ul').show();
            $parent.parent().find('h3 a').hide();
            $parent.parent().find('p').show();
            $li.find("span[data-name='gs_zongtiPoint']").css({
                width: obj.zongtiPoint * 14
            });
            var pLun = obj.pinglun.replace(/[\s\n\r\t]*$/, "");
            pLun = HtmlEncode(pLun);
            pLun = conversionFormat(pLun, 0);
            $parent.siblings("p[data-name='gs_pinglun']").html(pLun);
            $parent.parents(".singledes").attr("data-commentId", obj.commentId);
            updateSaveTime();
        }
        initAssessWindow(config);
    })

    var xianfeiTimer = null;
    $('#xiaofei').unbind();
    $('#xiaofei').change(function() {
        clearTimeout(xianfeiTimer);
        $('#fraction-avgVerify').hide();
    });
    $('#xiaofei').bind("paste", function() {
        var el = $(this);
        xianfeiTimer = setTimeout(function() {
            var value = el.val();
            value = value.replace(/^0+|[^\d]/g, '');
            el.val(value);
        }, 100);
    });

    //创建评价窗口
    function initAssessWindow(config) {
        $.popupbox.show({
            id: 'poi_pingjia',
            callback: function() {

            }
        });
        var $win = $('#poi_pingjia'),
            $textarea = $win.find('#reviewContent'),
            $tipSpan = $win.find('.input_tips .tips span'),
            $warning = $win.find('.input_tips .warning'),
            maxLen = 1000,
            $saveBtn = $win.find('.fr .gsn-btn-2'),
            $cancelBtn = $win.find('.fr .gsn-btn-6');

        config = $.extend({
            isViewpoint: true, //是不是景点评价
            zongtiPoint: 0, //总体评价
            kouweiPoint: 0, //口味评价
            fengweiPoint: 0, //氛围
            fuwuPoint: 0, //服务
            xiaofei: "", //人均消费
            pinglun: "",
            callback: function() {}
        }, config);
        $win.find(".fr span").hide();
        var hideWr = function() {
            $win.find(".fr span").fadeOut(200);
        }
        var hideWrTimer = null;
        $('#zongtiPointVerify').hide();
        $('#kouweiPointVerify').hide();
        $('#fengweiPointVerify').hide();
        $('#fuwuPointVerify').hide();
        $('#fraction-avgVerify').hide();
        $warning.hide();

        //口味、氛围、服务打分
        $tipSpan.text(1000);
        if (!config.isViewpoint) {
            $win.find("h3").text("餐馆点评");
            $('.restaurant').show();
            $win.find('.for-piont').each(function(i, that) {
                var $this = $(that),
                    $clsSet = $this.find('.cls-set'),
                    val = 0,
                    $fraction = $this.find('.fraction-num');
                switch (i) {
                    case 0:
                        val = parseInt(config.kouweiPoint, 10);
                        break;
                    case 1:
                        val = parseInt(config.fengweiPoint, 10);
                        break;
                    case 2:
                        val = parseInt(config.fuwuPoint, 10);
                        break;
                }

                $clsSet.val(val);
                $fraction.find("i").removeClass("selected");
                $fraction.find("i:lt(" + val + ")").addClass("selected");

                $fraction.find('i').unbind();
                $fraction.find('i').bind("click", function() {
                    $fraction.find("i").removeClass("selected");
                    var index = $(this).index() + 1;
                    $fraction.find("i:lt(" + index + ")").addClass("selected");
                    $clsSet.val(index);
                    $fraction.siblings('em').hide();
                });
            });
        } else {
            $win.find("h3").text("景点点评");
            $('.restaurant').hide();
        }

        //初始化总体点评星值
        $win.find(".fraction-star").find("i").removeClass("selected");
        $('#zongtiPoint').val(parseInt(config.zongtiPoint, 10));
        $win.find(".fraction-star").find("i:lt(" + parseInt(config.zongtiPoint, 10) + ")").addClass("selected");

        if (config.xiaofei != "" && !isNaN(config.xiaofei)) {
            $('#xiaofei').val(config.xiaofei);
        } else {
            $('#xiaofei').val("");
        }


        //选中星
        var hoverTipArr = ["差", "一般", "好", "很好", "推荐"];
        $win.find(".fraction-star i").unbind();
        var $starHoverTip = $win.find(".star-hover-tip");
        $win.find(".fraction-star i").bind("mousedown", function() {
            $(this).parent().find("i").removeClass("selected");
            var index = $(this).index() + 1;
            $(this).parent().find("i:lt(" + index + ")").addClass("selected");
            $(this).parent().parent().find(".cls-set").val(index);
            $('#zongtiPointVerify').hide();
        }).hover(function() {
            $('#zongtiPointVerify').hide();
            var $this = $(this);
            $this.addClass("hovered");
            $this.prevAll().addClass("hovered");
            $starHoverTip.show();
            $starHoverTip.text(hoverTipArr[$this.index()]);
        }, function() {
            var $this = $(this);
            $this.removeClass("hovered");
            $this.siblings().removeClass("hovered");
            $starHoverTip.hide();
        });

        //对文本域的处理
        $textarea.unbind();
        $textarea.gsInputLen(function(len) {
            if (len >= 10) {
                $warning.hide();
            }
            var lastLen = maxLen - len;
            if (lastLen <= -1) {
                var text = $textarea.val();
                var newText = $.gsSubstring(text, maxLen, 1); //截字函数
                $textarea.val(newText); //多出来的文字删除
                $tipSpan.html(0); //提示文字减少  
            } else {
                $tipSpan.html(lastLen); // 提示文字减少
            }
        });
        var pLun = conversionFormat(config.pinglun, 1);
        if (pLun) {
            $textarea.focus();
            pLun = HTMLDecode(pLun);
            $textarea.val(pLun);
            //$textarea.focus();
            $textarea.trigger("focus");
        } else {
            $textarea.val("");
            $textarea.placeholder();
        }
        $cancelBtn.unbind("click");
        $saveBtn.unbind("click");
        $cancelBtn.bind("click", function() {
            $.popupbox.close();
            config = null;
        });
        $saveBtn.bind("click", function() {
            var go = 1;
            if ($win.find('#zongtiPoint').val() == 0) {
                $('#zongtiPointVerify').show();
                go = 0;
            }
            if (!config.isViewpoint) {
                if ($win.find('#kouweiPoint').val() == 0) {
                    $('#kouweiPointVerify').show();
                    go = 0;
                }
                if ($win.find('#fengweiPoint').val() == 0) {
                    $('#fengweiPointVerify').show();
                    go = 0;
                }
                if ($win.find('#fuwuPoint').val() == 0) {
                    $('#fuwuPointVerify').show();
                    go = 0;
                }
                if ($win.find('#xiaofei').val() == "") {
                    $('#fraction-avgVerify').show();
                    go = 0;
                }
            }
            var textareaVal = $textarea.val();
            if (textareaVal == "" || textareaVal == "你的点评会帮助到千万网友哦～" || textareaVal.length < 10) {
                $warning.show();
                go = 0;
            }
            if (go) {
                obj = {};
                obj.zongtiPoint = $win.find('#zongtiPoint').val() || 0;
                obj.kouweiPoint = $win.find('#kouweiPoint').val() || 0;
                obj.fuwuPoint = $win.find('#fuwuPoint').val() || 0;
                obj.fengweiPoint = $win.find('#fengweiPoint').val() || 0;
                obj.xiaofei = $win.find('#xiaofei').val() || 0;
                obj.pinglun = $textarea.val() || 0;
                $.popupbox.close();
                var pinglun = encodeURIComponent(obj.pinglun);
                $.post(
                    INTERFACE.POICommentAddOrEdit, {
                        travelId: INTERFACE.TravelId,
                        contentId: config.contentId,
                        commentId: config.commentId,
                        travelPOIId: config.travelPOIId,
                        businessType: config.businessType,
                        isCustom: config.isCustom,
                        allRating: obj.zongtiPoint,
                        foodRating: obj.kouweiPoint,
                        serviceRating: obj.fuwuPoint,
                        atmosphereRating: obj.fengweiPoint,
                        avgPrice: obj.xiaofei,
                        data: pinglun
                    },
                    function(data) {
                        if (data && data.RetCode && data.RetCode == 1) {
                            obj.commentId = data.Html;
                            config.callback(obj);
                            clearTimeout(hideWrTimer);
                            config = null;
                        } else {
                            $win.find(".fr span").fadeIn(200);
                            hideWrTimer = setTimeout(hideWr, 3000);
                        }
                    }
                );
            }
        });
    }

    //修改发表游记的 edit_botfixed 的高度
    function updateBotFixedTop() {
        var $botfixed = $('.edit_botfixed');
        var $t_step_4 = $('.t_step_4'),
            top = parseInt($t_step_4.offset().top, 10),
            th = top + $t_step_4.height();
        botfixedHiehgt = $botfixed.height(),
        st = $(window).scrollTop();
        maxLastPos = th - ($(window).height() - botfixedHiehgt);
        //超过最大时隐藏 左边
        if (st > maxLastPos) {
            $botfixed.css({
                position: 'absolute',
                bottom: 'auto',
                top: th
            });
        } else {
            $botfixed.css({
                position: 'fixed',
                bottom: '0',
                top: 'auto'
            });
        }
    }

    //添加游记标签的文本域组件
    var hideTagTipTimer = null;
    $('.addtagbox[data-id="addTagBox"]').inlineEdit({
        maxlen: 0,
        type: 'input',
        btnYes: {
            text: '保存',
            classname: 'gsn-btn-2'
        },
        btnNo: {
            text: '取消',
            classname: 'editcancel'
        },
        beginFN: function(that) {
            $(that).find('.textundis').text('');
            $(that).find('.textarea').val('');
            updateBotFixedTop();
            //编辑游记标签时限制字数
            var $text = $(that).find('.textarea');
            $text.bind("keyup change mousedown blur focus", function() {
                var oldval = $text.val();
                var newVal = oldval.replace(/\s/ig, 'x').replace(/[^x00-xff]/g, 'xx');
                var len = Math.ceil(newVal.length / 2);
                if (len > 10) {
                    clearTimeout(hideTagTipTimer);
                    $(that).siblings(".tag-tip").text("标签请控制在10个字以内");
                    $(that).siblings(".tag-tip").show(); //.css({display: "block"});
                    updateBotFixedTop();
                    var newText = $.gsSubstring(oldval, 10, 1); //截字函数
                    $text.val(newText); //多出来的文字删除
                    function hideTagTip() {
                        $(that).siblings(".tag-tip").hide(); //.css({display: "none"});
                        updateBotFixedTop();
                    }
                    hideTagTipTimer = setTimeout(hideTagTip, 3000);
                }
            });
        },
        endFN: function(that, data, oldData, t) {
            clearTimeout(hideTagTipTimer);
            var $that = $(that),
                go = true,
                $newLi = null;
            $(that).siblings(".tag-tip").hide(); //.css({display: "none"});
            updateBotFixedTop();
            $that.find('.textundis').css('display', 'none');
            var litag = $(that).find(' .textundis').text();
            litag = $.trim(litag);
            //循环判断该标签是否已经存在
            var $ul = $(that).siblings("ul");
            $ul.find("li").each(function() {
                var tagText = $(this).find("a").text();
                if (litag == tagText) {
                    if ($(this).hasClass("current")) {
                        go = false;
                    } else {
                        $(this).addClass("current");
                        $newLi = $(this);
                    }
                }
            });
            if (litag !== "" && go) {
                var $li = null;
                if (!$newLi) {
                    $li = $("<li class=\"current\"><a href=\"javascript:;\" data-tagqouteid=\"0\" data-tagid=\"0\">" + litag + "</a></li>");
                    $(".edit_tag ul").append($li);
                } else {
                    $li = $newLi;
                }

                var tagData = encodeURIComponent(litag);
                var tagId = $li.find("a").attr("data-tagId") || 0;
                $.post(INTERFACE.AddTravelTag, {
                        travelId: INTERFACE.TravelId,
                        tagId: tagId,
                        data: tagData
                    },
                    function(data) {
                        if (data && data.RetCode && data.RetCode == 1) {
                            var cId = data.Html;
                            $li.find("a").attr("data-tagQuoteId", cId);
                            updateSaveTime();
                        } else {
                            if ($newLi) {
                                $newLi.removeClass("current");
                            } else {
                                $li.remove();
                            }
                            $.gs_alert({
                                text: "添加标签失败！"
                            });
                        }
                    });
            }
            updateBotFixedTop();
        }
    });

    //给图片添加心情
    $('.addpictext').inlineEdit({
        maxlen: 140,
        btnYes: {
            text: '保存',
            classname: 'gsn-btn-2'
        },
        btnNo: {
            text: '取消',
            classname: 'editcancel'
        },
        beginFN: function(that) {
            updateBotFixedTop();
            var oldData = $.trim($(that).find('div[data-text]').html());
            var areaData = conversionFormat(oldData, 1);
            areaData = HTMLDecode(areaData);
            $(that).find(".textarea").val(areaData);
        },
        endFN: function(that, data, oldData, t) {
            updateBotFixedTop();
            var $that = $(that);
            if (data != "") {
                $(that).find(' .link_addpictxt span').hide();
            } else {
                $that.find(' .link_addpictxt span').show();
            }
            if (t == "yes") {
                var nextId = $that.attr("data-nextId") || 0;
                var contentId = $that.attr("data-contentId") || 0;
                var scheduleId = $that.attr("data-scheduleId") || 0;
                var enData = encodeURIComponent(data);
                $.post(INTERFACE.EditImageDesc, {
                        travelId: INTERFACE.TravelId,
                        nextId: nextId,
                        contentId: contentId,
                        scheduleId: scheduleId,
                        data: enData
                    },
                    function(data) {
                        //var data = $.parseJSON(data);
                        if (data && data.RetCode && data.RetCode == 1) {
                            updateSaveTime();
                            //给笔添加title
                            $(that).find("a[data-edit]").attr("title", "编辑照片描述");
                        } else {
                            var $text = $that.find('div[data-text]'),
                                $textarea = $that.find(".textareaframe .textarea");
                            $text.html(oldData);
                            $textarea.val(oldData);
                            if (oldData != "") {
                                $(that).find(' .link_addpictxt span').hide();
                            } else {
                                $that.find(' .link_addpictxt span').show();
                            }
                            $.gs_alert({
                                text: "文字保存失败！"
                            });
                        }
                    });
                var htmlData = data.replace(/[\s\n\r\t]*$/, "");
                htmlData = HtmlEncode(htmlData);
                htmlData = conversionFormat(htmlData, 0);
                $(that).find('div[data-text]').html(htmlData);
            } else {
                $(that).find('div[data-text]').html(oldData);
            }
        }
    });

    //游记名称文本修改
    $('.edittitle[data-id="journalTitle"]').inlineEdit({
        maxlen: 50,
        type: 'input',
        btnYes: {
            text: '保存',
            classname: 'gsn-btn-2'
        },
        btnNo: {
            text: '取消',
            classname: 'editcancel'
        },
        beginFN: function(that) {
            var oldData = $.trim($(that).find('div[data-text]').html());
            var areaData = conversionFormat(oldData, 1);
            areaData = HTMLDecode(areaData);
            var $textarea = $(that).find(".textarea")
            $textarea.val(areaData);
            updateBotFixedTop();
        },
        endFN: function(that, data, oldData, t) {
            updateBotFixedTop();
            var $that = $(that);
            if (t == "yes") {
                var nextId = $that.attr("data-nextId") || 0;
                var contentId = $that.attr("data-contentId") || 0;
                var scheduleId = $that.attr("data-scheduleId") || 0;
                data = $.trim(data);
                if (data == "") {
                    $.gs_alert({
                        text: "标题不能为空！"
                    });
                    $(that).find('div[data-text]').html(oldData);
                    return;
                }
                var enData = encodeURIComponent(data);
                $.post(INTERFACE.UpdateTravelTitleAPI, {
                        travelId: INTERFACE.TravelId,
                        nextId: nextId,
                        contentId: contentId,
                        scheduleId: scheduleId,
                        data: enData
                    },
                    function(data) {
                        //var data = $.parseJSON(data);
                        if (data && data.RetCode && data.RetCode == 1) {
                            var cId = data.Html;
                            $that.attr("data-contentId", cId);
                            updateSaveTime();
                            //给笔添加title
                            $(that).find("a[data-edit]").attr("title", "编辑游记标题");
                        } else {
                            var $text = $that.find('div[data-text]'),
                                $textarea = $that.find(".textareaframe .textarea");
                            $text.html(oldData);
                            $textarea.val(oldData);
                            $.gs_alert({
                                text: "标题保存失败！"
                            });
                        }
                    });
                htmlData = HtmlEncode(data);
                htmlData = conversionFormat(htmlData, 0);
                $(that).find('div[data-text]').html(htmlData);
            } else {
                $(that).find('div[data-text]').html(oldData);
            }
        }
    });


    //添加游记正文的处理
    $('.addtxtline').add('.daytext').inlineEdit({
        maxlen: 1000,
        beginFN: function(that) {
            $(that).removeClass().addClass('addtext');
            updateBotFixedTop();
            var oldData = $.trim($(that).find('div[data-text]').html());
            var areaData = conversionFormat(oldData, 1);
            areaData = HTMLDecode(areaData);
            var $textarea = $(that).find(".textarea")
            $textarea.val(areaData);
            if (!$textarea.attr("placeholder")) {
                $textarea.attr("placeholder", "记录旅途中的点点滴滴…");
            }
            $textarea.placeholder();
        },
        endFN: function(that, data, oldData, t) {
            var $that = $(that);
            if (data == "" || data == "记录旅途中的点点滴滴…") {
                $that.removeClass().addClass('addtxtline');
                $that.find('a.normaltext').removeClass('edit_title').html('<strong></strong>添加游记正文');
            } else {
                $that.removeClass().addClass('daytext').find(' .normaltext').addClass('edit_title').text('');
            }
            updateBotFixedTop();
            if (t == "yes") {
                var nextId = $that.attr("data-nextId") || 0;
                var contentId = $that.attr("data-contentId") || 0;
                var scheduleId = $that.attr("data-scheduleId") || 0;
                if (data == "记录旅途中的点点滴滴…") {
                    data = "";
                }
                var dataVal = data;
                var enData = encodeURIComponent(data);
                $.post(INTERFACE.TextAddOrEdit, {
                        travelId: INTERFACE.TravelId,
                        nextId: nextId,
                        contentId: contentId,
                        scheduleId: scheduleId,
                        data: enData
                    },
                    function(data) {
                        if (data && data.RetCode && data.RetCode == 1) {
                            var cId = data.Html;
                            $that.attr("data-contentId", cId);
                            updateSaveTime();
                            //给笔添加title
                            $(that).find("a[data-edit]").attr("title", "编辑游记正文");
                            if (dataVal == "") {
                                var $prev = $that.prev(),
                                    $next = $that.next();
                                if ($prev.hasClass("daytext") || $prev.hasClass("addtxtline") || $next.hasClass("daytext") || $next.hasClass("addtxtline")) {
                                    $that.remove();
                                }
                            }
                        } else {
                            var $text = $that.find('div[data-text]'),
                                $textarea = $that.find(".textareaframe .textarea");
                            $text.html(oldData);
                            $textarea.val(oldData);
                            if (oldData != "") {
                                $that.removeClass().addClass('daytext').find(' .normaltext').addClass('edit_title').text('');
                            } else {
                                $that.removeClass().addClass('addtxtline');
                                $that.find('a.normaltext').removeClass('edit_title').html('<strong></strong>添加游记正文');
                            }
                            $.gs_alert({
                                text: "文字保存失败！"
                            });
                        }
                    });
                var htmlData = data.replace(/[\s\n\r\t]*$/, "");
                htmlData = HtmlEncode(htmlData);
                htmlData = conversionFormat(htmlData, 0);
                $(that).find('div[data-text]').html(htmlData);
            } else {
                $(that).find('div[data-text]').html(oldData);
            }
        },
        btnYes: {
            text: '保存',
            classname: 'gsn-btn-2'
        },
        btnNo: {
            text: '取消',
            classname: 'editcancel'
        }
    });
    //图片的收起和展开
    $(".singleimg .toggleimgbox").toggle(function(e) {
        $(this).find(".bottomline").children('span').addClass("packup").html('收起');
        $(this).css({
            height: 'auto'
        });
        updateBotFixedTop();
    }, function() {
        $(this).find(".bottomline").children('span').removeClass("packup").addClass("develop").html('展开');
        $(this).css({
            height: '200px'
        });
        updateBotFixedTop();
    });

    //关闭展开图片提示
    $('.singleimg .edit_optips .close').click(function(e) {
        $(this).parent().fadeOut(300);
        $.post(INTERFACE.CloseTravelTips, {
            type: 1
        });
    });
    $(".singleimg .edit_optips").click(function(e) {
        // 如果传入了事件对象，那么就是非ie浏览器  
        if (e && e.stopPropagation) {
            //因此它支持W3C的stopPropagation()方法  
            e.stopPropagation();
        } else {
            //否则我们使用ie的方法来取消事件冒泡  
            window.event.cancelBubble = true;
        }
    });

    //滚动fixed发表游记的 edit_botfixed
    (function() {
        var st = $(window).scrollTop(),
            $t_step_4 = $('.t_step_4'),
            $botfixed = $('.edit_botfixed'),
            top = parseInt($t_step_4.offset().top, 10),
            botfixedHiehgt = $botfixed.height(),
            th = top + $t_step_4.height(),
            maxLastPos = th - ($(window).height() - botfixedHiehgt);

        //fix botfixed
        var fixPos = function() {
            $botfixed.css({
                position: 'fixed',
                bottom: '0',
                top: 'auto'
            });
        }

        //解除fix botfixed
        var unFixPos = function(thParam) {
            $botfixed.css({
                position: 'absolute',
                bottom: 'auto',
                top: thParam
            });
        }

        //刚进入页面时即做判断是否需要解除fixed edit_botfixed
        if (st > maxLastPos) {
            unFixPos(th);
        }
        //滚动时
        $(window).scroll(function() {
            st = $(window).scrollTop();
            th = top + $t_step_4.height();
            maxLastPos = th - ($(window).height() - botfixedHiehgt);
            //超过最大时隐藏 左边
            if (st > maxLastPos) {
                GS.throttle(unFixPos(th), 500);
            } else {
                GS.throttle(fixPos(), 500);
            }
        });
    })();

    //游记标签选择操作
    $(document).on('click', '.edit_tag li', function() {
        var $this = $(this);
        var timer = null;
        if ($this.data("stop")) {
            return
        };
        var $a = $this.find("a");
        if ($this.hasClass('current')) {
            var tagQuoteId = $a.attr("data-tagQuoteId") || 0;
            $.post(INTERFACE.RemoveTravelTag, {
                    travelId: INTERFACE.TravelId,
                    tagQuoteId: tagQuoteId
                },
                function(data) {
                    if (data && data.RetCode && data.RetCode == 1) {
                        updateSaveTime();
                        $this.removeClass('current');
                    } else {
                        $.gs_alert({
                            text: "标签设置失败！"
                        });
                    }
                });
        } else {
            var selLiNum = $('#editTag').find('.current').length;
            if (selLiNum >= 10) {
                $('#editTag').find('.gsn-formerr').show();
                return false;
            };
            var tagData = encodeURIComponent($a.text());
            var tagId = $a.attr("data-tagId") || 0;
            $.post(INTERFACE.AddTravelTag, {
                    travelId: INTERFACE.TravelId,
                    tagId: tagId,
                    data: tagData
                },
                function(data) {
                    if (data && data.RetCode && data.RetCode == 1) {
                        var cId = data.Html;
                        $a.attr("data-tagQuoteId", cId);
                        updateSaveTime();
                        $this.addClass('current');
                    } else {
                        $.gs_alert({
                            text: "标签设置失败！"
                        });
                    }
                });
        }
        $this.data("stop", true);

        function updateGo() {
            $this.data("stop", false);
        }
        clearTimeout(timer);
        timer = setTimeout(updateGo, 2000);
    });

    //初始化edit_botfixed 中的天数信息
    (function() {
        var $botfixedDl = $('.edit_botfixed dl'),
            num = $('.dayframe').length,
            j = 0,
            m = 1;
        for (; j < num; j++) {
            m = j + 1;
            var id = $('.dayframe').eq(j).attr("id");
            id = parseInt(id.substring(3, id.length), 10);
            if (id != 0) {
                var html = '<dd><a data-id="day' + id + '" href="javascript:;">第' + id + '天</a>';
                if (j != num - 1) {
                    html += '&gt;</dd>';
                } else {
                    html += '</dd>';
                }
                $botfixedDl.append(html);
            }
        }

        $botfixedDl.find("dd a").click(function() {
            var $this = $(this),
                dataId = $this.attr("data-id"),
                $dayFrame = $("#" + dataId);
            var top = $dayFrame.offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 800);
        });
    })();

    //设置图片为封面
    //TODO 和后台对接
    $('.singleimg .setcover').click(function() {
        var $this = $(this);
        var contentId = $this.parents(".singleimg").attr("data-contentId") || "";
        contentId = contentId == "" ? 0 : contentId;
        $.post(
            INTERFACE.SetTravelCoverImageId, {
                travelId: INTERFACE.TravelId,
                contentId: contentId,
                isOn: true
            },
            function(data) {
                //data.RetCode 0：失败；1：成功
                if (data && data.RetCode && data.RetCode == 1) {
                    $('.singleimg .coverpic').hide();
                    $this.siblings('.coverpic').show();
                    $this.hide();
                    updateSaveTime();
                }
            });
    });
    //设为封面的hover
    $('.singleimg').hover(function() {
        var $this = $(this);
        if ($this.find('.coverpic').css('display') == 'none') {
            $this.find('.setcover').show();
        }
    }, function() {
        var $this = $(this);
        $this.find('.setcover').hide();
    });

    //游记图片异步加载处理
    $(".imglink img").lazyload();



});