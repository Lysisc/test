// $.ifPdfVisible = function() { //pdf按钮存在判断
//     if ($('.link_pdf').length == 1) {
//         var btnOffset = $('.link_pdf').offset();
//         if ($('.pdf_tip').length == 1) {
//             $('.pdf_tip').css({
//                 top: btnOffset.top + 20,
//                 left: btnOffset.left - 95
//             }).show();
//         };
//     } else {
//         $('.pdf_tip').hide();
//     };
// };

$(function() {

    // $.cookie.raw = true;

    // if ($.cookie('seenTheTip') != 1) { //判断cookie是否存在，如果不存在则给body加入tip
    //     $('body').append('<div class="pdf_tip"><a href="javascript:;"></a></div>');
    //     $.ifPdfVisible();
    // };

    // $('body').on('click', '.pdf_tip a', function() { //tip层事件绑定
    //     $('.pdf_tip').hide();
    //     $.cookie('seenTheTip', 1, {
    //         expires: 30,
    //         path: '/'
    //     });
    // });

    $(window).resize(function() { //自适应定位
        $.ifPdfVisible();
    });

    var loadingObj = $('#generatPDF').find('.generat_loading'),
        loadingHtml = loadingObj.html();
    $('.btn_pdf, .link_pdf').click(function() { //pdf按钮事件绑定
        if (!$(this).hasClass('a_popup_login') && $(this).attr('href') == 'javascript:;') {
            $.get(INTERFACE.pdfCheckUrl + '?travelId=' + INTERFACE.TravelId + '&rnd=' + new Date(), function(data) {
                if (data.Status == 5) {
                    var dom = '<div></div><p>游记PDF下载异常火爆，请耐心等待一下，稍后再试！</p>';
                    loadingObj.attr('class', 'generat_failure').html(dom);
                    $.popupbox.show({
                        id: 'generatPDF'
                    });
                    $('#generatPDF').find('.close').click(function() {
                        $.popupbox.close();
                    });
                } else if (data.Status != 2) {
                    $('#generatPDF > div').attr('class', 'generat_loading').html(loadingHtml);
                    $.popupbox.show({
                        id: 'generatPDF',
                        callback: pdfLoading
                    });
                };
            });
        };
    });

    function pdfLoading() { //ajax轮询
        var obj = $('#generatPDF');
        var self = setInterval(function() {
            $.get(INTERFACE.pdfCheckUrl + '?travelId=' + INTERFACE.TravelId + '&rnd=' + new Date(), function(data) {
                switch (data.Status) {
                    case 2:
                        clearInterval(self);
                        var title = data.Title,
                            size = parseInt(data.FileSize * 10 / 1024) / 10,
                            dom = '<h2>让你久等了，游记已制作成PDF</h2><div><i></i><h4>' + title + '</h4><p>PDF大小：' + size + 'MB</p><p>下载你喜爱的游记一起去旅行吧！</p><a class="generat_btn" href="javascript:;">点击下载PDF</a></div>';
                        loadingObj.attr('class', 'generat_success').html(dom);
                        obj.find('.generat_btn').add('.btn_pdf, .link_pdf').attr({
                            'href': INTERFACE.pdfDownUrl + '?travelId=' + INTERFACE.TravelId,
                            'target': '_blank'
                        });
                        break;
                    case 4:
                        clearInterval(self);
                        var dom = '<div></div><p>服务器好像出了点问题，PDF生成失败…</p><a class="generat_btn" href="javascript:;">重新制作PDF</a>';
                        loadingObj.attr('class', 'generat_failure').html(dom);
                        obj.find('.generat_btn').click(function() {
                            obj.find('.generat_failure').attr('class', 'generat_loading').html(loadingHtml);
                            pdfLoading();
                            return false;
                        });
                        break;
                    default:
                        return;
                        break;
                };
            });
        }, 5000);
        obj.find('.close').click(function() {
            $.popupbox.close();
            clearInterval(self);
        });
    };

});