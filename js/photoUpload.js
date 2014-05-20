var swfu = {};
$(function () {

    if (!gs_ua.pv[0]) {
        $('.upload_btn').html('请安装或启用<a href="http://www.adobe.com/go/getflashplayer/" target="_blank">Flash组件</a>');
        return false;
    };

    var upLoadApi = $('#gs_uploadurl').val(); //上传图片
    var upLoadPath = $('#imgRootPath').val(); //上传路径

    function fileList(file) {
        return '<li id=' + file.id + ' data-imgId=""><div><a class=\'btnCancel\' href=\'javascript:void(0);\'>×</a><span></span><p title="' + file.name + '">' + file.name + '</p></div><i></i></li>';
    }

    function errList(file) {
        return '<li id=' + file.id + ' class="errorMsg"><div><span>大于10M，请重新选择</span><p title="' + file.name + '">' + file.name + '</p></div></li>';
    }

    function get_swf_path(u) {
        re = /(.*\/)/ig;
        r = u.match(re);
        return r[0] + 'images/swfupload_fp9.swf';
    };

    swfu = new SWFUpload({
        upload_url: upLoadApi,
        flash_url: get_swf_path(upLoadApi),

        file_types: "*.jpg;*.jpeg;*.png;*.bmp;*.gif",
        file_size_limit: "10MB",
        file_queue_limit: 0,

        debug: false,

        prevent_swf_caching: false,
        preserve_relative_urls: false,

        button_placeholder_id: "flashLink",
        button_image_url: INTERFACE.button_image,
        button_width: 128,
        button_height: 36,
        button_text: "<span class='redText'>上传照片</span>",
        button_text_style: ".redText { color: #666666; font-weight: bold; font-size: 14px; }",
        button_text_left_padding: 45,
        button_text_top_padding: 8,
        button_action: SWFUpload.BUTTON_ACTION.SELECT_FILES,
        button_cursor: SWFUpload.CURSOR.HAND,
        button_disabled: false,
        // button_window_mode : SWFUpload.WINDOW_MODE.TRANSPARENT,

        post_params: {
            'new': 1,
            'source': 1,
            "type": "journals",
            "token": "78A566F2-AA8A-4C4C-8EE8-F99FB3D4A1D8",
            "randomKey": new Date().getTime(),
            "typeid": INTERFACE.typeid,
            'title': INTERFACE.title,
            'userid': INTERFACE.userid,
            'journalid': INTERFACE.TravelId
        },

        file_queue_error_handler: function (file, errorCode, message) {
            try {
                var errorName = "";
                switch (errorCode) {
                    case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
                        $('#file_list').append(errList(file));
                        $('#' + file.id).find('p').width(355);
                        toggleDet(swfu);
                        var stats = swfu.getStats();
                        ++stats.upload_errors;
                        swfu.setStats(stats);
                        state_text(stats);
                        break;
                    case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
                        errorName = '您选择的文件含有其他格式文件';
                        toggleDet(errorName);
                        break;
                    default:
                        //alert(message);
                        break;
                }
            } catch (ex) {
                this.debug(ex);
            }
        },
        file_queued_handler: function (file) {
            try {
                $('#step2_button').disableButton(false);
                $('#file_list').append(fileList(file));
                toggleDet(swfu);
                toggleCancel(file.id, this);
            } catch (ex) {
                this.debug(ex);
            }
        },
        file_dialog_complete_handler: function (numFilesSelected, numFilesQueued) {
            try {
                if (numFilesQueued > 0) {
                    this.startUpload();
                    var numObj = this.getStats();
                    var numAll = numObj.files_queued + numObj.successful_uploads + numObj.upload_errors + numObj.upload_cancelled;
                    $('.state_proccessing').html('已上传 <span class="green">' + numObj.successful_uploads + '</span> / ' + numAll + '张...').css('color', '#666');
                };
            } catch (ex) {
                this.debug(ex);
            };
        },
        upload_progress_handler: function(file, bytesLoaded, bytesTotal) {
            try {
                var percent = Math.ceil((bytesLoaded / bytesTotal) * 100);
                var fileObj = $("#" + file.id);
                fileObj.find('i').width(percent + '%');
                percent == 100 ? fileObj.find('span').html('100% 处理中') : fileObj.find('span').html(percent + '%');
            } catch (ex) {
                this.debug(ex);
            };
        },
        upload_complete_handler: function(file) {
            try {
                var numObj = this.getStats();
                var numAll = numObj.files_queued + numObj.successful_uploads + numObj.upload_errors + numObj.upload_cancelled;
                if (numObj.files_queued) {
                    $('.state_proccessing').html('已上传 <span class="green">' + numObj.successful_uploads + '</span> / ' + numAll + ' 张...');
                } else {
                    state_text(numObj);
                };
            } catch (ex) {
                this.debug(ex);
            };
        },
        upload_success_handler: function(file, server_data) {
            try {
                var data_val = format_data(server_data);
                var stats = this.getStats();
                if (data_val.data == '0') {
                    --stats.successful_uploads;
                    this.setStats(stats);
                    state_text(stats);
                    window.console && console.log('图片服务端无数据返回！请确认服务器端口是否正确！');
                    return;
                } else {
                    if (this.getStats().successful_uploads != 0 && !this.getStats().files_queued) $('#step2_button').disableButton(true);
                };

                var fileAttr = data_val.server_data == '' ? 0 : data_val.data;
                $("#" + file.id).find('span').html('完成');
                $("#" + file.id).attr('data-imgId', fileAttr);

                if (data_val.width >= 600) {
                    //图片上传成功，和后台数据交互
                    INTERFACE.upload_success({
                        'TravelId': INTERFACE.TravelId,
                        'ImageId': data_val.data,
                        'ImageName': encodeURIComponent(data_val.fileName),
                        'ImageDate': data_val.shootTime,
                        'TravelDate': INTERFACE.TravelDate
                    });
                } else {
                    $('#' + file.id).addClass('errorMsg').find('p').width(310).end().find('a,i').remove().end().find('span').html('宽度小于600像素，请重新选择');
                    var numObj = this.getStats();
                    var numGreen = $('#file_list').find('li').not('.errorMsg').length;
                    --numObj.successful_uploads;
                    ++numObj.upload_errors;
                    this.setStats(numObj);
                };
            } catch (ex) {
                this.debug(ex);
            }
        }

    });

    function toggleCancel(fileID, SWFUploadObj) {
        $('#' + fileID).find('.btnCancel').click(function () {
            SWFUploadObj.cancelUpload(fileID, false);
            //未成功上传不需要后台交互
            var data_imgId = $("#" + fileID).attr('data-imgId');
            if (data_imgId != '') {
                //删除图片与后台交互
                INTERFACE.del_img($.toJSON({
                    'TravelId': INTERFACE.TravelId,
                    'ImageId': data_imgId
                }));
            }

            setTimeout(function() {
                $('#' + fileID).animate({
                    opacity: 0.15,
                    height: 0
                }, 600, function() {
                    var stats = SWFUploadObj.getStats();
                    if (data_imgId != '') {
                        --stats.successful_uploads;
                        SWFUploadObj.setStats(stats);
                        state_text(stats);
                    };
                    $(this).remove();
                    SWFUploadObj.getStats().files_queued ? $('#step2_button').disableButton(false) : toggleDet(SWFUploadObj);
                })
            }, 300)
        })
    };

    function state_text(statsObj) {
        var sucNum = statsObj.successful_uploads == 0 ? '。' : '照片已保存。';
        var errNum = statsObj.upload_errors > 0 ? '上传失败 <span class="red">' + statsObj.upload_errors + '</span> 张' + (sucNum == '。' ? '' : '，') : '';
        var webErr = (errNum + sucNum) == '。' ? '' : '，';
        $('.state_proccessing').html('已成功上传 <span class="green">' + statsObj.successful_uploads + '</span> 张' + webErr + errNum + sucNum);
        $('#step2_button').disableButton(statsObj.successful_uploads == 0 ? false : true);
    };

});

//返回过程中的图片删除（后台调用）
function delImg(imgId) {
	var fileLength = $('.photo_progress ul li').length;
	var fileNum = $('.state_proccessing').find('span:first').text();
	$('.state_proccessing').find('span:first').text(fileNum - 1);

	//删除图片与后台交互
	INTERFACE.del_img($.toJSON({
		'TravelId': INTERFACE.TravelId,
		'ImageId': imgId
	}));

	setTimeout(function() {
		$('.photo_progress ul li[data-imgId=' + imgId + ']').animate({
			opacity: 0.15,
			height: 0
		}, 600, function() {
			$(this).remove();
			toggleDet(swfu);
		});
	}, 300)
};

function toggleDet(SWFUploadObj, errorName) {
	var fileLength = $('.photo_progress ul li').length;
	SWFUploadObj.setButtonTextStyle(".redText { color: #666666; font-weight: bold; font-size: 14px; }");
	if (fileLength === 0) {
		SWFUploadObj.setButtonText("<span class='redText'>上传照片</span>");
		$('.upload_btn').addClass('abs_btn');
		$('.btn_center').hide().find('.state_proccessing').html('');
		$('.upload_det').show();
		errorName ? $('.limit').css('color', 'red').html(errorName) : $('.limit').css('color', '#999').html('一次性传完照片，你的丰富行程将立即展现！');
	} else {
		SWFUploadObj.setButtonText("<span class='redText'>继续上传</span>");
		$('.upload_btn').removeClass('abs_btn');
		$('.btn_center').show();
		$('.upload_det').hide();
		errorName ? $('.state_proccessing').css('color', 'red').html(errorName) : $('.state_proccessing').css('color', '#666');
	};
};

function format_data(serverData) {
	var data = (new Function("return " + serverData.replace(/(<script)+[^<>]*>[^\0]*(<\/script>)+/gm, "")))();
	if ("undefined" != typeof data.error && "" == data.error) {
		var d = data.data[0];
	}
	return d
};

//判断按钮disabled
$.fn.disableButton = function(arg) {
    var el = $(this);
    var elDisabled = el.attr('disabled');
    if (arg) {
        el.removeAttr('disabled');
        el.removeClass('disable');
    } else {
        el.attr('disabled', 'true');
        el.addClass('disable');
    };
};