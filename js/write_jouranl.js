var doTime = {
    debug: false,
    time: null,
    s: '',
    e: '',
    begin: function() {
        var d = new Date();
        this.s = x = d.getTime();
        this.log('开始 : ' + d.toLocaleTimeString());
    },
    end: function() {
        var d = new Date();
        this.e = x = d.getTime();
        this.log('结束 : ' + d.toLocaleTimeString());
    },
    cal: function() {
        var t = this.e - this.s;
        this.log('运行时间:' + t + '毫秒');
    },
    log: function(s) {
        this.debug && console.log(s);
    }
}

/**
 * 富文本编辑器过滤函数
 * ver 0.1 2013-5-10
 */
    function filterBaiduEdit(c) {
        c = c.replace(/<script[^>]*?>[\s\S]*?<\/script>|<link.*?>|<style[^>]*?>[\s\S]*?<\/style>|<iframe.*?>[\s\S]*?<\/iframe>/ig, '');
        //c = c.replace(/<a[^<]*?>[\n\r]*?(<img .*?>)[\n\r]*?<\/a>/igm, "$1"); //图片链接过滤
        c = c.replace(/<pre.*?>|<\/pre>/igm, '');
        c = c.replace(/<\/(?!p|strong)[^>]*?>|<(?!img|p|strong|hr|br|\/)[^>]*?>/gi, '');
        c = c.replace(/<((?:img)|(?:p)|(?:strong)|(?:hr)|(?:br))[^>]*?>/gi, function(a) {
            if (undefined == a) {
                return '';
            }
            var sx = a;
            sx = sx.replace(/\s{1,}/g, ' ');
            sx = sx.replace(/[<'">]/g, ''); //去掉空格与标签
            var sxarry = sx.split(' ');
            var htmlstr = '';
            var htmldom = sxarry[0].toLowerCase();

            switch (htmldom) {
                case 'img':
                    var subnode = '';
                    for (var i = 1 in sxarry) {
                        var str = sxarry[i];
                        if (str.indexOf('=') != -1) {
                            var inode = str.split('=');
                            if (inode[0] == 'src') {
                                var srcarr = [];
                                //url中可能包含 = 号
                                for (i = 1; i < inode.length; i++) {
                                    srcarr.push(inode[i]);
                                }
                                subnode += " src=\"" + srcarr.join("=") + "\"";
                            }
                            if (inode[0] == 'phsid') {
                                subnode += " phsid=\"" + inode[1] + "\"";
                            }
                            if (inode[0] == 'cover') {
                                subnode += " cover=\"selected\" class=\"cover\"";
                            }
                            if (inode[0] == 'data-id') {
                                subnode += " data-id=\"" + inode[1] + "\"";
                            }
                            htmlstr = htmldom + subnode + ' /';
                        }
                    }
                    break;

                default:
                    htmlstr = htmldom;
                    break;
            }
            if (htmlstr) {
                htmlstr = '<' + htmlstr + '>';
                return htmlstr;
            }
        });
        //console.log(c);
        return c;
    };

(function($) { //20140319新增 经典游记结构化修改

    $.editTagArr = function() {
        var editTagArr = [];
        $(".edit_tag .current").each(function() {
            editTagArr.push($(this).find('a').text());
        });
        editTagArr = editTagArr.join(',');
        return editTagArr;
    };

    /**
     * @description: 行内编辑插件, 需要 gs_input插件支持
     * @author: chenwp@ctrip.com
     * @update: chenwp (2013-07-23 11:32)
     */
    $.fn.extend({
        inlineEdit: function(opts) {
            opts = $.extend({
                'type': 'textarea', //编辑器类形
                'maxlen': 10, //倒计时数字
                'btnYes': {
                    'text': '确认',
                    'classname': 'gsn-btn-2'
                },
                'btnNo': {
                    'text': '取消',
                    'classname': 'gsn-btn-6'
                },
                'callback': '', //按钮后回调
                'beginFN': '', //点击编辑时回调函数
                'endFN': '' //处理完成后回调函数
            }, opts);

            return this.each(function() {
                var that = this;
                var id = $(this).attr('id');

                var oldVal = $.trim($(that).find('div[data-text]').html());
                var isEdit = false;
                var init = function() {
                    if (!isEdit) {
                        var html = [];
                        if (oldVal == null) {
                            html.push('<div data-text="1"></div>');
                        }
                        html.push('<div class="textareaframe" style="display:none">');
                        if (opts.type == 'textarea') {
                            html.push('<textarea class="textarea"></textarea>');
                        } else {
                            html.push('<input type="text" class="textarea" />');
                        }
                        html.push('<a href="javascript:;" data-id="yes" class="' + opts.btnYes.classname + '">' + opts.btnYes.text + '</a>');
                        html.push('<a href="javascript:;" data-id="no" class="' + opts.btnNo.classname + '">' + opts.btnNo.text + '</a>');
                        if (opts.maxlen > 0) {
                            html.push('<div class="msg">还可以输入<span>' + opts.maxlen + '</span>字</div>');
                        }
                        html.push('</div>');

                        $(that).prepend($(html.join('')));
                        isEdit = true;
                    }
                }
                init();

                var btnEdit = $(this).find('a[data-edit]');
                var textareaframe = $(this).find('.textareaframe');
                var msg = textareaframe.find('.msg');
                var textarea = textareaframe.find('.textarea');
                var text = $(this).find('div[data-text]');

                //textarea.val(oldVal); //旧的数据填入
                if (opts.maxlen > 0) {
                    var num = textareaframe.find('.msg').find('span');
                    var oldNum = num.text();

                    textarea.gsInputLen(function(len) {
                        var lastLen = oldNum - len;
                        if (lastLen <= -1) {
                            var text = textarea.val();
                            var newText = $.gsSubstring(text, oldNum, 1); //截字函数
                            textarea.val(newText); //多出来的文字删除
                            num.html(0); //提示文字减少
                        } else {
                            num.html(lastLen); // 提示文字减少
                        }
                    });
                }

                btnEdit.on('click', function() {
                    oldVal = $.trim($(that).find('div[data-text]').html());
                    textarea.val(oldVal); //旧的数据填入
                    doTime.begin();
                    $(this).hide();
                    text.hide();
                    textareaframe.show();
                    if (typeof opts.beginFN == 'function') {
                        opts.beginFN(that);
                    }
                    doTime.end();
                    doTime.cal();
                    textarea.triggerHandler("focus");
                    return false;
                });

                var reset = function(t) {
                    btnEdit.show();
                    textareaframe.hide();
                    text.show();
                    if (typeof opts.endFN == 'function') {
                        opts.endFN(that, textarea.val(), oldVal, t);
                    }
                }

                btnYN = textareaframe.find('a');

                btnYN.on('click', function(e) {
                    var t = $(this).attr('data-id');
                    switch (t) {
                        case 'yes':
                            btnYesFN();
                            break;
                        case 'no':
                            //oldVal
                            textarea.val(text.text()); //旧的数据填入
                            break;
                    }

                    if (typeof opts.callback == 'function') {
                        opts.callback(t);
                    };
                    reset(t);
                    return false;
                });

                var btnYesFN = function() {
                    var val = textarea.val();
                    val = HtmlEncode(val); //TODO问大叔是不是该加
                    text.html(val); //生成
                }

            });
        }
    });
    //TODO问大叔是不是该加
    function HtmlEncode(str) {
        var div = document.createElement("div");
        var text = document.createTextNode(str);
        div.appendChild(text);
        return div.innerHTML;
    }
})(jQuery);

$(function() {

    var CDN = $('#gs_static_resource').val();
    var UPLOADAPI = $('#gs_uploadurl').val();

    //console.log(UPLOADAPI);

    var UPLOADPATH = $('#gs_imgRootPath').val(); //上传路径

    //编辑器配置
    window.UEDITOR_CONFIG = {
        UEDITOR_HOME_URL: $('#gs_edit_istest').val() == 1 ? "/js/app/member/ueditor_utf8/" : "/j/member/ueditor/",
        initialContent: $("#addText").val(),
        initialFrameWidth: 'auto',
        elementPathEnabled: false,
        contextMenu: []
        //,autoHeightEnabled:false
        ,
        zIndex: 100,
        wordCount: 0,
        sourceEditor: 'textarea'
        //,toolbars:[["bold","horizontal","link"]]
        ,
        toolbars: [
            ["bold", "horizontal"]
        ],
        labelMap: {
            'anchor': '',
            'undo': ''
        },
        lang: 'zh-cn-utf8' //改为utf8编码
    };

    var ue = UE.getEditor('editor-wrap');


    ue.addListener("ready", function() {
        var editC = $('#addText').val();
        //console.log('ready');
        //if (editC.length > 0) {
        window.setTimeout(function() {
            ue.setContent(editC);
            iframe_edit_event();
        }, 500);
        JournalAction.init('editor-wrap');
        //}
    });



    //fix ie 10
    if ($.browser.msie && $.browser.version == '10.0') {
        ue.ready(function() {
            window.setTimeout(function() {
                iframe_edit_event(); //todo ie10下面这个无效
            }, 500);
            JournalAction.init('editor-wrap');
        });
    }

    //过滤不是我们的代码
    ue.addListener("beforePaste", function(type, data) {
        data.html = filterBaiduEdit(data.html);
        iframe_edit_event();
    });



    var photoMaskcon = null;

    var mask_init = function() {
        photoMaskcon = $('<div>').attr('class', 'photo-mask').html('<div class="mask-bg"></div>');
        titlePagecon = $('<em>').attr('class', 'mask-name').html('设为封面');
        photoMaskcon.append(titlePagecon).appendTo('body');
    }

    mask_init();

    iframe_edit_event = function() {

        window.iframe_init = 1;

        var editer = $(document.getElementById('baidu_editor_0').contentWindow.document.body);
        var iframeEdit_offset = $('#baidu_editor_0');
        editer.find('img').live('mouseover', function(e) {
            photoMaskcon.css({
                width: $(this).css('width')
            });

            if ($(this).attr('data-id') == undefined) {
                $(this).attr('data-id', new Date().getTime().toString()); //没有id默认一个
            }
            var x = $(this).offset().left + iframeEdit_offset.offset().left;
            var y = $(this).offset().top + iframeEdit_offset.offset().top;
            var w = $(this).width();
            var h = $(this).height();
            var css = {
                top: y + 12,
                left: x + 2
            }

            if (w > 180) {
                //console.log(css);
                //phsid="3837361" 
                photoMaskcon.find('em').attr('data-id', $(this).attr('data-id'));
                photoMaskcon.css(css).show().hover(function() {
                    $(this).show();
                });
            }

            //判断是否是已经选择过的
            if ($(this).hasClass('cover')) {
                photoMaskcon.find('em').addClass('ok').html('已设为封面');
            } else {
                photoMaskcon.find('em').removeClass('ok').html('设为封面');
            }

        })
            .live('mouseout', function() {
                photoMaskcon.hide();
            });

        editer.live('mouseout', function() {
            photoMaskcon.hide();
        });

        photoMaskcon.click(function(e) {
            var id = $(this).find('em').attr('data-id');
            $(this).find('em').addClass('ok').html('已设为封面');
            editer.find('img').each(
                function(i) {
                    if (id == $(this).attr('data-id')) {
                        $(this).attr('cover', 'selected').addClass('cover');
                    } else {
                        $(this).removeAttr('cover').removeClass('cover');
                    }
                }
            );
            return false;
        });
    }



    //fix right
    $('.sideCon').setfixed();

    //tags
    $('#tags-avilable').find('em').click(function() {
        var tagval = $('#tag').val() + ',';
        var meval = $(this).text();
        if (tagval.indexOf(meval) == -1) {
            var inputTag = $(this).text().trim();
            var newTag = $('#tag').val();
            if (newTag != '') {
                newTag += ',';
            }
            $('#tag').val(newTag + inputTag);
        };
        return false;
    });

    var thatSWFUpload = {};

    //取flash接口地址同 UPLOADAPI
    function get_swf_path(u) {
        re = /(.*\/)/ig;
        r = u.match(re);
        return r[0] + 'images/swfupload_fp9.swf';
        //return r[0] + 'images/swfupload.swf';
    }

    //call head.js gs_ua();
    if (gs_ua.pv[0]) {

        /**
         * 判断一下是否显示默认信息
         */
        var show_def_info = function() {
            var n = $('#photolist').find('li').length;
            if (n == '1') {
                $('.uplpad_info_pic_1').show();
            }
            return;
        };


        var swfu, thatSWFUpload, beginTime, endTime, rnd = new Date().getTime();
        var settings = {
            debug: false,
            flash_url: get_swf_path(UPLOADAPI),
            upload_url: UPLOADAPI,
            post_params: {
                "type": "journals",
                "typeID": 13,
                "token": "78A566F2-AA8A-4C4C-8EE8-F99FB3D4A1D8",
                "randomKey": rnd
            },
            //file_size_limit: "50 KB",
            file_size_limit: "10 MB",
            file_types: "*.jpg;*.jpeg;*.png",
            file_types_description: "JPG Images",
            file_upload_limit: 0,
            file_queue_limit: 50,

            // Button settings
            button_image_url: CDN + "/img/member/editor/bg-swfuploadimg.png?" + rnd,
            button_width: 74,
            button_height: 24,
            button_placeholder_id: "spanButtonPlaceholder",
            button_text: '<span class="theFont">&nbsp;</span>',
            button_text_style: ".theFont { font-size: 16; }",
            button_cursor: SWFUpload.CURSOR.HAND,
            button_text_left_padding: 0,
            button_text_top_padding: 0,
            file_queued_handler: function(file) {
                this.uploadNumber = this.getStats().files_queued;
                this.isOverMaxcount = false;
                thatSWFUpload = this;

                var li = $('<li class="item" id="' + file.id + '"><span></span><i class="close"></i><a style="display:none" class="btn_cancel" href="javascript:;">取消上传</a></li>');
                li.hover(function() {
                    $(this).find('.close').show().click(function() {
                        $(this).parent().remove();
                        show_def_info(); //显示默认提示信息;
                        return false;
                    });
                }, function() {
                    $(this).find('.close').hide();
                });

                //todo 需要移动成功后绑定
                li.bind('click', function() {
                    var html = ue.getContent();
                    var img = $(this).find('img');
                    var phsid = img.attr('imgid');
                    var imgW = $(img).attr('width');
                    if (!isNaN(phsid)) {
                        if (imgW > 560) {
                            imgW = 560;
                        }
                        var imgSrc = img.attr('data-pic');
                        var imgBox = '<p><img width="' + imgW + '" data-id="' + phsid + '" phsid="' + phsid + '" src="' + imgSrc + '" alt=""></p>';
                        //ue.setContent(html + imgBox);
                        //ue.execCommand('insertHtml', html + imgBox);
                        ue.execCommand('insertHtml', imgBox);
                        //ue.focus();
                        $(this).remove();
                        iframe_edit_event();
                    }
                    show_def_info();
                    return false;
                })

                li.find('a.btn_cancel').bind('click', function(e) {
                    try {
                        this.stopUpload();
                        this.cancelUpload();
                        $(this).parent().remove();
                        return false;
                    } catch (ex) {
                        //this.debug(ex);
                    }
                });

                if ($('.uplpad_info_pic_1').css('display') !== 'none') {
                    $('.uplpad_info_pic_1').hide();
                }
                $('#photolist ul').append(li);

            },
            file_queue_error_handler: function(file, errorCode, message) {
                try {
                    var errorName = "";
                    switch (errorCode) {

                        case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:

                            try {
                                $("#tipOverMaxcount,.bgbox").show();
                                thatSWFUpload.isOverMaxcount = true;
                                thatSWFUpload.stopUpload();
                            } catch (ex) {
                                //this.debug(ex);
                                //console.log(ex);
                            }

                            break

                        case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                            $('.uplpad_info_pic_1').hide();
                            var errorMsg = '<span class="filename">' + file.name.lastsubCHStr(10) + '</span><span class="errorMsg">文件超过10M</span>';
                            $('<li class="ui-widget-content failed">').append('<span id="' + file.id + '"><strong class="failed"></strong></span>' + errorMsg + '<i class="close"></i>').appendTo($('#photolist ul')).hover(
                                function() {
                                    $(this).find('i').show();
                                },
                                function() {
                                    $(this).find('i').hide();
                                })
                                .find('i')
                                .click(function() {
                                    $(this).parent().remove();
                                    show_def_info(); //显示默认提示信息;
                                    return false;
                                });
                            break;
                        case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
                            alert("您选择的文件含有其他格式文件");
                            break;
                        default:
                            $('.uplpad_info_pic_1').hide();
                            var errorMsg = '<span class="filename">' + file.name.lastsubCHStr(10) + '</span><span class="errorMsg">上传失败</span>';
                            $('<li class="ui-widget-content failed">').append('<span id="' + file.id + '"><strong class="failed"></strong></span>' + errorMsg + '<i class="close"></i>').appendTo($('#photolist ul')).hover(
                                function() {
                                    $(this).find('i').show();
                                },
                                function() {
                                    $(this).find('i').hide();
                                })
                                .find('i')
                                .click(function() {
                                    $(this).parent().remove();
                                    return false;
                                });
                            break;
                    }
                } catch (ex) {
                    this.debug(ex);
                }

            },
            file_dialog_complete_handler: function(numFilesSelected, numFilesQueued) {
                //console.log(numFilesQueued)
                try {
                    if (numFilesQueued > 0) {
                        //beginTime = new Date().getTime();
                        //console.log('开始上传时间: ', beginTime );
                        this.startUpload();
                        doTime.begin();

                    }
                } catch (ex) {
                    //this.debug(ex);
                }
            },
            upload_start_handler: function() {},
            upload_progress_handler: function(file, bytesLoaded, bytesTotal) {
                var percent = Math.ceil((bytesLoaded / bytesTotal) * 100);
                $('#' + file.id + ' span').html(percent + '%');
                //$('#' + file.id + ' span').html('上传中...');
                //console.log('上传进度: ' + percent + '%');

            },
            upload_error_handler: function(file, errorCode, message) {
                //errorCallBack(file, errorCode, message)
                if (SWFUpload.UPLOAD_ERROR.FILE_CANCELLED == errorCode && thatSWFUpload.isOverMaxcount) {
                    $('#' + file.id).remove();
                }
            },
            upload_success_handler: function(file, serverData) {
                doTime.end();
                doTime.cal();
                doTime.begin();
                var data = (new Function("return " + serverData.replace(/(<script)+[^<>]*>[^\0]*(<\/script>)+/gm, "")))();
                if ("undefined" != typeof data.error && "" == data.error) {
                    var d = data.data[0];
                    var img = '<img data-pic="' + d.metalUrl + '" imgid="' + d.data + '" src="' + d.thumbUrl + '" width="' + d.width + '" alt="">';
                    $('#' + file.id + ' span').html($(img));
                    doTime.end();
                } else {
                    alert('无效的数据');
                }
                doTime.cal();
            },
            upload_complete_handler: function(file) {
                $('#' + file.id).find('a').hide();
            },
            queue_complete_handler: function() {} // Queue plugin event
        };

        swfu = new SWFUpload(settings);

    } else {
        //flash无效果
        $('.btn-upload').html('请安装或启用<a href="http://www.adobe.com/go/getflashplayer/" target="_blank">Flash组件</a>');
    }
    //call

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
            $(that).find('.textarea').val('').focus();
            //编辑游记标签时限制字数
            var $text = $(that).find('.textarea');
            $text.bind("keyup change mousedown blur focus", function() {
                var oldval = $text.val().replace(/\,*/g, '');
                var newVal = oldval.replace(/\s/ig, 'x').replace(/[^x00-xff]/g, 'xx');
                var len = Math.ceil(newVal.length / 2);
                if (len > 10) {
                    clearTimeout(hideTagTipTimer);
                    $(that).siblings(".tag-tip").text("标签请控制在10个字以内").show();
                    var newText = $.gsSubstring(oldval, 10, 1); //截字函数
                    $text.val(newText); //多出来的文字删除
                    function hideTagTip() {
                        $(that).siblings(".tag-tip").hide(); //.css({display: "none"});
                    }
                    hideTagTipTimer = setTimeout(hideTagTip, 3000);
                } else {
                    $text.val(oldval);
                }
            });
        },
        endFN: function(that, data, oldData, t) {
            clearTimeout(hideTagTipTimer);
            var $that = $(that),
                go = true,
                $newLi = null;
            $(that).siblings(".tag-tip").hide(); //.css({display: "none"});
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
                };
            }
        }
    });

    //游记标签选择操作
    $(document).on('click', '.edit_tag li', function() {
        if ($(this).hasClass('current')) {
            $(this).removeClass('current');
        } else {
            $(this).addClass('current');
        };
        return false;
    });

});