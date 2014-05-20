/**
 * 详细页面一些私用方法
 */

;
(function($) {

    $.cookie.raw = true;

    //删除游记
    $('.link_delete,.btn_delete').click(function() {
        $.popupbox.show({
            id: 'delJournal'
        });
    });

    //取消与close
    $('#delJournal').on('click', '.close, .gsn-btn-6', function() {
        $.popupbox.close();
        $('#pic_content').val('');
    });

    //确认
    $('#delJournal').on('click', '.gsn-btn-2', function() {
        $(this).gsdisable({
            callback: function() {
                //游记删除于后台交互
                INTERFACE.del_journal({
                    TravelId: INTERFACE.TravelId
                });
                $.popupbox.close();
            }
        });
    });

    //评论弹出层 --    
    $(".link_comment, .btn_comment").click(function() {
        $('#picComment').find('.gsn-tiptext').show();
        $('#picComment').find('.journal-comment-tip').hide();
        $('#pic_content').click();
        var type = $(this).attr('data-referenceCategory');
        var $areaObj = $('#pic_content');
        var areaObj = $areaObj[0];
        if (!$(this).hasClass('a_popup_login')) {
            $.popupbox.show({
                id: 'picComment'
            });
            var itemID = $(this).parents('.img_block').attr('id');
            $('#picComment').data('quote', itemID);
            $('#picComment').data('type', type);
            if (itemID != undefined) {
                var replyName = $('#authorDisplayName').html();
                var strFormat = "引用 @" + replyName + " 的照片" + "\n";
                $('#picComment').data('text', strFormat);
                $areaObj.val(strFormat);
            };
        }
        con_focus(areaObj);

    });

    var co_count = $("#picComment .count"),
        co_conut_val = co_count.text();

    $('#picComment').on('click', '.close, .gsn-btn-6', function() {
        $('#picComment').find(".count").text('1000');
        $('#pic_content').val('');
        $.popupbox.close();
    });

    $('#picComment').on('click', '.gsn-btn-2', function() {
        var areaVal = $(this).parents('#picComment').find('#pic_content').val();
        var quoteName = $('#picComment').data('text');
        var inputVal = areaVal.replace(quoteName, '');
        var boolArg = /\S/g.test(inputVal);
        if (boolArg) {
            var quote = $('#picComment').data('quote');
            var type = $('#picComment').data('type');
            $('#picComment').find('.gsn-tiptext').show();
            $('#picComment').find('.journal-comment-tip').hide();
            $(this).gsdisable({
                callback: function() {

                    //todo 需要有个作者名与id传到后台
                    var objId = quote != undefined ? quote : '';
                    INTERFACE.add_comment($.toJSON({
                        TravelId: INTERFACE.TravelId,
                        ReferenceIds: objId,
                        ReferenceCategory: type,
                        RemarkContent: encodeURIComponent($('#pic_content').val())
                    }));
                    $("#picComment .count").val(co_conut_val);
                }
            });
        } else {
            $('#picComment').find('.gsn-tiptext').hide();
            $('#picComment').find('.journal-comment-tip').show();
        };
    });

    $('#pic_content').gsInputLen(function(len) {

        //复制状态态的倒计时会不准
        var lastLen = co_conut_val - len;
        if (lastLen <= -1) {
            var inputName = $('#pic_content');
            var text = inputName.val();
            var newText = $.gsSubstring(text, co_conut_val, 1);
            inputName.val(newText);
        } else {
            co_count.html(lastLen);
        };
        $('#picComment').find('.gsn-tiptext').show();
        $('#picComment').find('.journal-comment-tip').hide();

    });

    //页脚评论
    var re_count = $(".reportmain .count"),
        re_count_val = re_count.text();

    $('#report_area').placeholder();

    $('.reportmain').on('click', '#btnJournalCommment', function() {
        var type = $(this).attr('data-referenceCategory');
        var report_area = $.trim($('#report_area').val());
        if (!$(this).hasClass('a_popup_login')) {
            if (report_area == '' || report_area == $('#report_area').attr('placeholder')) {
                $('.reportmain').find('.gsn-tiptext').hide();
                $('#journal-comment-tip').show();
            } else {
                $('.reportmain').find('.gsn-tiptext').show();
                $('#journal-comment-tip').hide();
                $('#btnJournalCommment').gsdisable({
                    callback: function() {

                        //todo 需要有个作者名与id传到后台
                        var objId = $('#report_area').attr('data-referenceids');
                        INTERFACE.add_comment($.toJSON({
                            TravelId: INTERFACE.TravelId,
                            ReferenceIds: objId,
                            ReferenceCategory: type,
                            RemarkContent: encodeURIComponent($('#report_area').val())
                        }));

                        //重置状态
                        $('#report_area').val();
                        $(".reportmain .count").val(re_count_val);
                    }
                });
            };

        }
    });

    $('#report_area').gsInputLen(function(len) {

        //复制状态态的倒计时会不准
        var lastLen = re_count_val - len;
        if (lastLen <= -1) {
            var inputName = $('#report_area');
            var text = inputName.val();
            var newText = $.gsSubstring(text, re_count_val, 1);
            inputName.val(newText);
        } else {
            re_count.html(lastLen);
        };
        $('.reportmain').find('.gsn-tiptext').show();
        $('.reportmain').find('.journal-comment-tip').hide();

    });

    //-- 评论弹出层

    //回复框定位焦点 
    function con_focus(areaObj) {
        var $areaObj = $(areaObj);
        var str = $areaObj.val();
        var len = str.length;
        $areaObj.focus();
        if (document.selection) {
            if ($areaObj[0].createTextRange) {
                var textRange = $areaObj[0].createTextRange();
                textRange.moveStart('character', len);
                textRange.collapse();
                textRange.select();
            } else {
                $areaObj.focus();
            }
        } else if (typeof areaObj.selectionStart == 'number' && typeof areaObj.selectionEnd == 'number') {
            areaObj.selectionStart = areaObj.selectionEnd = len;
        }
    }

    $.con_focus = function(areaObj) {
        con_focus(areaObj);
    };

    //游记访问状态校验（从后台取数据判断游记当前访问状态）
    if (INTERFACE.isHost != true) {
        INTERFACE.accessState(function(data1, data2) {
            var zeroNull = function(num) {
                if (num == 0) num = '';
                return num;
            };
            $('.link_browse').text(zeroNull(data2.VisitCount));
            $('.graylink').text(zeroNull(data2.CommentCount));
            $('.link_share').find('span').text(zeroNull(data2.ShareCount));
            $('.link_like').find('span').text(zeroNull(data2.LikeCount));
            $('.link_collect').find('span').text(zeroNull(data2.FavouriteCount));
            if (data2.CanDownLoadPDF == true) $('.link_pdf').attr('href', data2.DownLoadPDFUrl);
            $.ifPdfVisible();
            if (data1.RetCode == 0) return false;
            var userName = data1.UserInfo.DisplayName,
                userUrl = data1.UserInfo.HomePageUrl,
                userSrc = data1.UserInfo.HeadPhotoUrl,
                userState = '<a title="' + userName + '" rel="nofollow" href="' + userUrl + '" target="_blank" rel="nofollow"><img width="60" height="60" src="' + userSrc + '"></a><a title="' + userName + '" rel="nofollow" href="' + userUrl + '" target="_blank" rel="nofollow">' + userName + '</a>';
            if (data1.RetCode == 1 || data1.RetCode == 2) {
                $('.a_popup_login').removeClass('a_popup_login');
                $('.headside').append(userState);
                if (data1.RetCode == 2) {
                    $('.titler_div').children('div').addClass('titler_div_right');
                    $('.titler_div').prepend('<a id="master_link" class="titler_a" href="' + data1.TravelMasterUrl + '"><i class="edit"></i>编辑游记</a>');
                };
            };
        });
    };

})(jQuery);