$(function() {
    if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) $('body').width($('html').width() - 21);

    $.imgTotal = 500 - parseInt(imgCount);
    var flashvars = {
        //isDebugMode:false,    //是否使用js alert输出错误信息
        appWidth: 956,
        appHeight: 401,
        limitW: 600, //最小宽
        limitH: 0, //最小高
        limitMaxW: 10000, //最大宽
        limitMaxH: 10000, //最大高
        limitSize: 10, //最大图片文件大小
        limitTotal: $.imgTotal, //限制最多上传张数
        hasUploadNum: 500 - $.imgTotal, //已经上传了的张数

        defaultMsg: "（单张图片上限10M，可旋转图片，拖拽图片能更改顺序！）", //头部提示信息 
        uploadLabel: '一次性传完照片,你的丰富行程将立即展现!\n\n照片宽度需大于600像素，单张照片最大可10M',
        filterDesc: "请选择图片(*.jpg;*.jpeg;*.png)", //资源浏览器提示信息
        filterType: "*.jpg;*.jpeg;*.png", //类型筛选
        waterLabel: "使用水印", //左下角水印提示
        parsingImgLabel: "正在加载第<font face='Arial' color='#339900'> {0} </font>张照片，请稍等",
        finishLabel: "已成功上传<font face='Arial' color='#339900'> {0} </font>张，照片可旋转或删除",
        progressLabel: "正在上传<font face='Arial' color='#339900'> {0} </font>/<font face='Arial' color='#339900'> {1} </font>张，上传完成后可旋转或删除",
        finishErrorLabel: "已成功保存<font face='Arial' color='#339900'> {0} </font>张，失败<font color='#FF6606'> {1} </font>张，照片可旋转或删除",
        finishErrorLabel2: "上传失败<font face='Arial' color='#FF6606'> {1} </font>张",

        errorMsg1: "上传图片地址出错", //错误提示1
        errorMsg2: "有 {0} 张图片不符合上传规则", //错误提示2
        errorLabel1: "大于10M\n请重新选择",
        errorLabel2: "宽小于600像素\n请重新选择",
        errorLabel3: "网络错误\n<u>重传</u>",
        errorLabel6: "您已经上传过 {0} 张图片，只能再上传 {1} 张图片",

        // finishUploads: 'finishUploads', //全部上传完成后调用函数
        // closeCall: 'closeCall', //关闭应用回调
        checkResponse: 'checkResponse', //成功后回调(主要处理 后台的输出与 本地)
        webNext: 'webNext',
        deleteCall: 'delete_img',
        scrollCall: 'mouseScroll',
        canDrag: 0, //不要拖动, 1可以拖动
        server: $('#gs_uploadurl').val(), //上传地址
        postData: "new=1|source=1|type=journals|typeID=13|token=78A566F2-AA8A-4C4C-8EE8-F99FB3D4A1D8|randomKey=" + Math.random() + '|typeid=' + INTERFACE.typeid + '|title=' + INTERFACE.title + '|userid=' + INTERFACE.userid + '|journalid=' + INTERFACE.TravelId,
        history: escape(INTERFACE.JsonTravelImageList)
    };

    var params = {
        wmode: "window",
        quality: "high",
        menu: "false",
        scale: "noScale",
        allowFullscreen: "true",
        allowScriptAccess: "always"
    };

    var attributes = {
        id: "photo_upload",
        name: "photo_upload"
    };

    //使用 swfobject 组件来初始化方法
    swfobject.embedSWF($('#flashUrl').val() + "?r=" + Math.random(), "photo_upload", "956", "401", "10.2.0", "expressInstall.swf", flashvars, params, attributes);

});

//  //全部完成时调用
// function finishUploads(obj) {
//   console.log(obj);
// }

//  //关闭事件，暂不使用
// function closeCall(obj) {
//   console.log(obj);
// }

//单个上传完成时调用
var imgIdArr = [],
    noRep = false;

function checkResponse(str) {
    var data = str.replace(/<script.*?script>/ig, '');
    data = $.parseJSON(data);
    var imgObj = data.data[0];
    var imgid = imgObj.data;
    if (imgid == '0') {
        window.console && console.log('图片服务端无数据返回！请确认服务器端口是否正确！');
        return 0
    };
    if (imgIdArr.length == 0) {
        imgIdArr.push(imgid)
    } else {
        for (var i = 0; i < imgIdArr.length; i++) {
            if (imgIdArr[i] == imgid) {
                return imgid
            } else {
                noRep = true
            }
        }
    };
    if (noRep) {
        imgIdArr.push(imgid);
        noRep = false
    };
    $.imgTotal = $.imgTotal - 1;
    swfobject.getObjectById("photo_upload").setLimitTotal(500 - $.imgTotal, $.imgTotal);
    INTERFACE.upload_success({
        'TravelId': INTERFACE.TravelId,
        'ImageId': imgid,
        'ImageName': encodeURIComponent(imgObj.fileName),
        'ImageDate': imgObj.shootTime,
        'TravelDate': INTERFACE.TravelDate,
        'POIId': imgObj.poiId,
        'POIType': imgObj.poiType,
        'DistrictId': imgObj.districtId,
        'POIContentId': INTERFACE.POIContentId
    });
    return imgid
}

//删除图片与后台交互
function delete_img(imgID) {
    if (imgID != 0) {
        for (var i = 0; i < imgIdArr.length; i++) {
            if (imgIdArr[i] == imgID) delete imgIdArr[i];
        };
        $.imgTotal = $.imgTotal + 1;
        swfobject.getObjectById("photo_upload").setLimitTotal(500 - $.imgTotal, $.imgTotal);
        INTERFACE.del_img($.toJSON({
            'TravelId': INTERFACE.TravelId,
            'ImageId': imgID
        }))
    }
}

//显示与隐藏下一步
function webNext(picNumber, stat) {
    var nextBtn = $('#step2_button');
    if (picNumber == '0') {
        nextBtn.parent('.btn_center').hide();
    } else {
        nextBtn.parent('.btn_center').show();
        stat == '1' ? nextBtn.removeClass('disable').removeAttr('disabled') : nextBtn.addClass('disable').attr('disabled', 'disabled');
    }
}

//鼠标滑过flash锁频
function mouseScroll(e) {
    if (e == 0) {
        var rightLine = function() {
            if (!$('#rightLine')[0]) {
                return $('<div id="rightLine"></div>');
            } else {
                return null
            };
        };
        $('html').css({
            'overflow': 'hidden',
            'padding-right': 16
        }).find('body').prepend(rightLine());
        $('.t_step_2').on('mouseover', '#photo_upload', function() {
            $('html').css({
                'overflow': 'hidden',
                'padding-right': 16
            }).find('body').prepend(rightLine());
        }).on('mouseout', '#photo_upload', function() {
            $('html').css({
                'overflow': 'auto',
                'padding-right': 0
            }).find('#rightLine').remove();
        });
    };
    if (e == 1) {
        $('html').css({
            'overflow': 'auto',
            'padding-right': 0
        }).find('#rightLine').remove();
        $('.t_step_2').off('mouseover mouseout', '#photo_upload');
    }
}