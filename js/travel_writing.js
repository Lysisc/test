$(function() {
    var objInput = $('#travel_name'),
        oldValue = $('#len_span span').html(),
        diableObj = $('.travel_template');
    objInput.gsInputLen(function(len) {
        var lastLen = len;
        if (lastLen >= 51) {
            var newText = $.gsSubstring(objInput.val(), 50, 1);
            objInput.val(newText);
        } else {
            $('#len_span span').html(lastLen);
        };
        if (!/\S/g.test(objInput.val()) || objInput.val() === '好名字会让你的游记脱颖而出引人注目') {
            diableObj.addClass('disable');
            diableObj.find('a').removeAttr('href');
        } else {
            diableObj.removeClass('disable');
            diableObj.find('a').each(function() {
                var href = $(this).attr('data-href');
                $(this).attr('href', href);
            });
        };
    });
    objInput.placeholder();
});