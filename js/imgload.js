(function($) {
    $.fn.imgloaded = function(opts) {
        opts = $.extend({
            srcAttr: '',
            errorSrc: 'http://you.ctrip.com/newimg/nophoto.jpg',
            width: '',
            height: ''
        }, opts);
        return this.each(function() {
            var realSrc = $(this).attr(opts.srcAttr || 'realSrc') || '';
            var ele = this;
            if (realSrc) {
                new imgReadyObj(realSrc, function() {
                    var ratio = this.width / this.height;
                    if (ratio >= opts.width / opts.height) {
                        ele.height = opts.height;
                        ele.width = opts.height * ratio;
                    } else {
                        ele.width = opts.width;
                        ele.height = opts.width / ratio;
                    }
                    typeof opts.readyCallback === 'function' && setTimeout(function() {
                        opts.readyCallback.call(ele);
                    }, 10);
                }, function() {
                    ele.src = realSrc;
                    typeof opts.loadCallback === 'function' && setTimeout(function() {
                        opts.loadCallback.call(ele);
                    }, 10);
                }, function() {
                    ele.src = opts.errorSrc;
                    typeof opts.errorCallback === 'function' && opts.errorCallback.call(ele);
                });
            }
        });
    };
})(jQuery)

/*img preload*/
function imgReadyObj(url, ready, load, error) {
    this.arrfn = [];
    this.intervalId = null;
    this.url = url;
    this.ready = ready;
    this.load = load;
    this.error = error;
    this.inte();
}
imgReadyObj.prototype = {
    exec: function() {
        this.arrfn[0].end ? this.arrfn.length = 0 : this.arrfn[0]();
        !this.arrfn.length && this.stop();
    },
    stop: function() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    },
    inte: function() {
        var onready, width, height, newWidth, newHeight, img = new Image(),
            _this_ = this;
        img.src = this.url;
        if (img.complete) {
            this.ready.call(img);
            this.load && this.load.call(img);
            return;
        };
        width = img.width;
        height = img.height;
        img.onerror = function() {
            _this_.error && _this_.error.call(img);
            onready.end = true;
            img = img.onload = img.onerror = null;
        };
        onready = function() {
            newWidth = img.width;
            newHeight = img.height;
            if (newWidth !== width || newHeight !== height || newWidth * newHeight > 1024) {
                _this_.ready.call(img);
                onready.end = true;
            };
        };
        img.onload = function() {
            !onready.end && onready();
            _this_.load && _this_.load.call(img);
            img = img.onload = img.onerror = null;
        };
        img.src = this.url;
        if (!onready.end) {
            _this_.arrfn.push(onready);
            if (this.intervalId === null) {
                this.intervalId = setInterval(function() {
                    _this_.exec.apply(_this_);
                }, 40);
            }
        };
    }
};