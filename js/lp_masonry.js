(function($) {
    /**
     * 底层弹出注册弹出层组件 , 需要 cookie 与 jquery 支持
     * @param json参数
     * @returns this;
     */
    $.fn.gsBottomRegister = function(opts) {

        opts = $.extend({
            'reg_url': 'https://accounts.ctrip.com/member/emailregist.aspx',
            'login_url': 'https://accounts.ctrip.com/member/login.aspx?BackURL=' + escape(window.location.href),
            'time': 10000 //延迟几移弹出
            ,
            'cookieName': 'is_open_bottom_reg',
            'cookieDay': 1 //1天
        }, opts);

        var isIE6 = $.browser.version == 6.0 && $.browser.msie;
        if (isIE6) {
            return false;
        }

        var that = $(this);
        //初始化
        function init() {
            var _html = [],
                i = 0;
            _html.push('<div class="gs_bottom_pop_blk" id="regGuide">');
            _html.push('    <div class="gs_bottom_pop_inforout">');
            _html.push('        <a class="gs_bottom_pop_close" href="javascript:void(0);"></a>');
            _html.push('        <div class="gs_bottom_pop_inforin cf">');
            _html.push('            <div class="gs_bottom_pop_left">');
            _html.push('                <div class="gs_pop_animation_show">');
            _html.push('                    <span class="gs_bpop_wd"></span><span class="gs_bpop_jd"></span><span class="gs_bpop_yj"></span><span class="gs_bpop_gl"></span><span class="gs_bpop_mdd"></span><span class="gs_bpop_ms"></span><span class="gs_bpop_yl"></span><span class="gs_bpop_qt"></span>');
            _html.push('                </div>');
            _html.push('            </div>');
            _html.push('            <div class="gs_bottom_pop_mid">');
            _html.push('                <a href="' + opts.reg_url + '" class="regbutton" target="_blank">注册</a><a href="' + opts.login_url + '" class="loginbutton" target="_blank">登录</a>');
            _html.push('            </div>');
            _html.push('            <div class="gs_bottom_pop_right">');
            _html.push('                <span class="gs_micromes"></span><a href="http://weibo.com/ctripyou" title="关注我们" target="_blank" class="gs_focus_us"></a>');
            _html.push('            </div>');
            _html.push('        </div>');
            _html.push('    </div>');
            _html.push('</div>');
            that.append(_html.join(''));
        }
        //操作动作
        function show() {
            var regGuide = $('#regGuide');
            regGuide.find('.gs_bottom_pop_close').on('click', function() {
                regGuide.hide();
                //写入cookie
                $.cookie(opts.cookieName, 1, {
                    expires: opts.cookieDay,
                    path: '/'
                });
            });
            var xtime = window.setTimeout(function() {
                var float_level = $('#float_level').css('display');

                //判断一下无线弹出层
                if (float_level == undefined || float_level == 'none') {
                    regGuide.show();
                }
                xtime = null;
            }, opts.time);
        }
        $.cookie.raw = true;
        if (!$.cookie(opts.cookieName) && !$.cookie('CtripUserInfo')) {
            init(opts);
            show();
        }
        return this;
    }
})(jQuery);

$(function() {
    //直接启动
    $('body').gsBottomRegister();

    //tab导航切换
    if ($('.despop_nav .first').hasClass('f_current')) {
        $('.despop_nav .first').data('f_cur', 1);
    }
    $('.despop_nav li').hover(function() {
        if ($(this).hasClass('first')) {
            $(this).data('cur', true);
            $(this).addClass('f_current');
        } else {
            $(this).data('cur', false);
            $(this).addClass('current');
            $('.despop_box div').eq($(this).index() - 1).show();
        };
    }, function() {
        if ($(this).data('cur')) {
            if ($('.despop_nav .first').data('f_cur') != 1) {
                $(this).removeClass('f_current');
            }
        } else {
            $(this).removeClass('current');
            $('.despop_box div').eq($(this).index() - 1).hide();
        }
    });
    $('.despop_box div').hover(function() {
        $(this).show();
        $('.despop_nav li').eq($(this).index() + 1).addClass('current');
    }, function() {
        $(this).hide();
        $('.despop_nav li').eq($(this).index() + 1).removeClass('current');
    });
});

//lpMasonry.js
$(function($) {
    $.fn.lpMasonry = function(opts) {
        opts = $.extend({
            cellspace: 15,
            cols: 4,
            cellwidth: 226,
            cellele: 'div.item',
            url: '',
            ajaxpage: 1,
            loading: '#fall-loading',
            pagesize: 16
        }, opts);
        return this.each(function() {
            var col = [],
                index = 0;
            var width = opts.cellwidth + opts.cellspace;
            var $this = $(this),
                that = this,
                loading = opts.loading,
                ajaxpage = opts.ajaxpage;
            var stopload = !1,
                isie = $.browser.msie;
            this.position = function(ele) {
                var h = ele.outerHeight(true);
                var minh = Math.min.apply(Math, col);
                for (var i = 0, ml = opts.cols; i < ml; i++) {
                    if (col[i] === minh) {
                        ele.css({
                            'position': 'absolute',
                            'left': i * width,
                            top: col[i],
                            'opacity': !isie && 0
                        }).attr({
                            'data-index': index,
                            'col': i
                        });
                        col[i] += h;
                        break;
                    }
                }!isie && this.animate({
                    'opacity': 1
                }, 300);
                $this.height(Math.max.apply(Math, col));
                index++;
            };
            this.add = function() {
                var pagesize = opts.pagesize;
                var sdata = opts.data || {};
                $.ajax({
                    type: 'GET',
                    url: opts.url,
                    data: $.extend({
                        p: ajaxpage
                    }, sdata),
                    success: function(data) {

                        var ele = $(data).appendTo($this).css({
                            'opacity': !$.browser.msie && 0
                        });
                        var count = 1;
                        $(loading).hide();
                        ele.each(function() {
                            that.position.call(ele, $(this));
                            count++;
                        });
                        if (count < pagesize) {
                            stopload = !0;
                            return;
                        }
                        ajaxpage++;
                        stopload = !1;
                    }
                });
            };
            $(window).scroll(function() {
                if (stopload) return;
                if ($this.offset().top + $this.height() - 600 < $(document).scrollTop() + $(window).height()) {
                    $(loading).show();
                    that.add();
                    stopload = !0;
                }
            });
            this.init = function() {
                var items = $this.find(opts.cellele);
                $this.css({
                    'position': 'relative'
                });
                for (var i = 0, ml = opts.cols; i < ml; i++) {
                    col[i] = 0;
                }
                if (items.length > 0) {
                    items.each(function() {
                        that.position.call(items, $(this));
                    });
                } else {
                    that.add();
                }
            }();
        });
    };
});