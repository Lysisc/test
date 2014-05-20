$(function() {

    //用cookie保存用户喜欢的状态
    function save_usernotlogin_like() {
        if (privateObject.CurrentUserId == '0') {
            $.cookiedb({
                'name': 'gs_link_like',
                'value': INTERFACE.TravelId
            });
        }
    }

    //判断未登录是否喜欢
    function find_usernotlogin_like() {
        if (privateObject.CurrentUserId == '0') {
            var isFind = $.cookiedb({
                'name': 'gs_link_like',
                'value': INTERFACE.TravelId,
                'isfind': 1
            });
            if (isFind == 'repeat') {
                //标记压顶条按钮喜欢
                $('.top_inbox .btn_like').addClass('click_like').text("已喜欢").attr("title", "已喜欢");
                //标记文章喜欢
                var $otherLike = $('.titlebox .titleright .link_like');
                $otherLike.addClass('click_like').attr("title", "已喜欢");
            }
        }
    }

    find_usernotlogin_like(); //判断未登录是否喜欢

    //对图片下边普通的喜欢按钮
    $('.link_like').gsbaselike({
        api: INTERFACE.likeUrl,
        callback: function(that) {
            if ($(that).parents('.titleright').length > 0) { //处理标题上的喜欢
                var $btnLike = $('.top_inbox .btn_like');
                $btnLike.addClass('click_like');
                $btnLike.text("已喜欢");
                $btnLike.attr("title", "已喜欢");
            }
            save_usernotlogin_like();
        }
    });
    //固定头部的 喜欢按钮
    $('.top_inbox .btn_like').gsbaselike({
        api: INTERFACE.likeUrl,
        callback: function(that) {
            $(that).text("已喜欢");
            var $otherLike = $('.titlebox .titleright .link_like'),
                $span = $otherLike.find('span'),
                count = parseInt($span.text(), 10);
            count = isNaN(count) ? 0 : count;
            count++;

            $otherLike.addClass('click_like');
            $otherLike.attr("title", "已喜欢");
            $span.text(count);

            save_usernotlogin_like();

        }
    });

    //分享处理
    $('.btn_share').gsbaseshare({
        api: INTERFACE.shareUrl, //分享请求连接
        fixed: true,
        top: 35,
        hasCount: true,
        callback: function($that) {
            var $count = $(".titlebox .link_share span"),
                count = parseInt($count.text(), 10);
            count = isNaN(count) ? 0 : count;
            count++;
            $count.text(count);
        }
    });

    $('.singleimg .link_share').gsbaseshare({
        api: INTERFACE.shareUrl
    });
    $(".titlebox .link_share").gsbaseshare({
        api: INTERFACE.shareUrl,
        hasCount: true
    });
    $('.img_box .link_share').gsbaseshare({
        api: INTERFACE.shareUrl
    });

    //拼图hover效果
    $('.img_block').hover(function() {
        $(this).addClass('over').find('.img_text div').css({
            height: $(this).find('.img_text').height() + 'px'
        }).end().siblings('.img_block.over').removeClass('over');
        var width = $(this).find("img").width();
        if (width < 290) {
            $(this).find(".describe").hide();
        } else {
            $(this).find(".describe").show();
        }
    }, function() {
        var that = $(this);

        function one_off() {
            if ($('#bdshare').css('display') != 'none') {
                that.find('.img_text div').css({
                    height: that.find('.img_text').height() + 'px'
                })
            } else {
                that.removeClass('over').find('.img_text div').css({
                    height: '30px'
                })
            }
        }
        setTimeout(one_off, 50);
    });

    //收藏
    $('.link_collect').add('.top_inbox .btn_collect').gsbasecollect({
        api: INTERFACE.collectUrl,
        callback: function(that) {
            var $that = $(that);
            if ($(that).hasClass("btn_collect")) {
                $that.text("已收藏");
                var $linkCollect = $('.link_collect');
                $linkCollect.addClass('click_collect');
                $linkCollect.attr("title", "已收藏");
                var $span = $linkCollect.find("span"),
                    count = parseInt($span.text(), 10);
                count = isNaN(count) ? 0 : count;
                count++;
                $span.text(count);
            } else {
                $('.top_inbox .btn_collect').addClass('click_collect');
                $('.top_inbox .btn_collect').attr("title", "已收藏");
                $('.top_inbox .btn_collect').text("已收藏");
            }
        }
    });

    //更改显示 fixed的top_article 中面包屑内容
    function changeTopArticle(info) {
        var $desArea = $(".top_article .des-area");
        if (!$desArea.find("a.first").length) {
            $desArea.append('<a href="/" target="_blank" class="first">攻略社区</a>');
        }
        if (info) {
            var des = info.des,
                desLink = info.desLink,
                poi = info.poi,
                poiLink = info.poiLink,
                html = "";
            $desArea.find(".first").nextAll().remove();
            if (des) {
                html += '<i>/</i>';
                if (desLink) {
                    html += '<a target="_blank" href="' + desLink + '">' + des + '</a>';
                } else {
                    html += '<span>' + des + '</span>';
                }
            }
            if (poi) {
                html += '<i>/</i>';
                if (poiLink) {
                    html += '<a target="_blank" href="' + poiLink + '">' + poi + '</a>';
                } else {
                    html += '<span>' + poi + '</span>';
                }
            }
            $desArea.find(".first").after(html);
        } else {
            if ($desArea.find("a").length !== 1) {
                $desArea.find(".first").nextAll().remove();
            }
        }
    }

    //天数连接
    function initDayFrame() {
        var curUpNum = 0,
            liHeight = 0,
            dayFrame = $('.daybox .dayframe'),
            $ul = $('.daylinkbox ul')
            showNum = 5, //显示出多少个天连接
            $upbtn = $('.daylink .upbtn'),
            $downbtn = $('.daylink .downbtn'),
            poiList = []; //存放poi点信息
        var $showPoi = $("#showPoi");

        //初始化daylink 的位置
        var linkTop = $('.titlebox ').offset().top + $('.titlebox ').outerHeight() + 10;
        $('.daylink').css({
            top: linkTop,
            display: "block"
        });
        var posdifference = linkTop + 50; //100是滚动条与左边浮动的差距

        /*
         *初始化dayLink
         */
        (function() {
            var num = dayFrame.length,
                showTimer = null,
                i = 0;

            $upbtn.hide();
            $downbtn.hide();

            for (; i < num; i++) {
                //创建左侧link导航
                var $day = dayFrame.eq(i),
                    idStr = $day.attr("id");
                idStr = idStr.substring(1, idStr.length);
                id = parseInt(idStr, 10);
                var html = "";
                if (i > 0) {
                    html = '<li><a href="javascript:;" data-id="#d' + id + '">' + id + '</a></li>';
                } else {
                    html = '<li class="current"><a href="javascript:;" data-id="#d' + id + '">' + id + '</a></li>';
                }
                var $li = $(html);
                if (idStr.length > 3) {
                    $li.find("a").css({
                        "font-size": "16px"
                    });
                } else if (idStr.length > 2) {
                    $li.find("a").css({
                        "font-size": "20px"
                    });
                }
                $ul.append($li);

                //存储poi点
                var $pois = $day.find(".singledes"),
                    titleList = [],
                    nameList = [],
                    topList = [],
                    desList = [], //目的地
                    desLinkList = [],
                    linkList = []; //连接
                $pois.each(function() {
                    var $this = $(this),
                        name = $.trim($this.find("h3").text()),
                        top = $this.offset().top - 40,
                        destination = $this.find("h3").attr("data-destination") || "",
                        desLink = $.trim($this.find("h3").attr("data-destination-href")),
                        poiLink = $.trim($this.find("h3 a").attr("href"));
                    destination = $.trim(destination);
                    name = name.replace(/\'|\"/g, "");
                    titleList.push(name);
                    var lenName = name.replace(/\s/ig, 'x').replace(/[^x00-xff]/g, 'xx');
                    if (lenName.length > 50) {
                        name = $.gsSubstring(name, 25, 1) + "...";
                    }
                    nameList.push(name);
                    topList.push(top);
                    desList.push(destination);
                    desLinkList.push(desLink);
                    linkList.push(poiLink);
                });
                poiList.push({
                    name: nameList,
                    top: topList,
                    len: $pois.length,
                    destination: desList,
                    link: linkList,
                    desLink: desLinkList,
                    title: titleList
                });
            }
            liHeight = $ul.find('li').outerHeight();
            var mixUp = showNum - num;

            //判断poi是否存在
            if ($showPoi.length === 0) {
                $showPoi = $('<div id="showPoi" class="show-poi"><div class="join-side"></div><div class="name-area"></div></div>');
                $showPoi.appendTo(document.body);
            }

            $upbtn.click(function() {
                clearTimeout(showTimer);
                if (num > showNum && curUpNum < 0) {
                    curUpNum += 1;
                    var top = curUpNum * liHeight;
                    $ul.animate({
                        'top': top
                    }, 150);
                }
                if (curUpNum === 0) {
                    $upbtn.fadeOut(200);
                }
                if ($downbtn.css('display') == "none") {
                    $downbtn.fadeIn(200);
                }
            });

            $downbtn.click(function() {
                clearTimeout(showTimer);
                if (num > showNum && curUpNum > mixUp) {
                    curUpNum -= 1;
                    var top = curUpNum * liHeight;
                    $ul.animate({
                        'top': top
                    }, 150);
                }
                if (curUpNum === mixUp) {
                    $downbtn.fadeOut(200);
                }
                if ($upbtn.css('display') == "none") {
                    $upbtn.fadeIn(200);
                }
            });
            //延迟判断是否显示上下箭头

            function showUpDown() {
                var curIndex = $(".daylink li.current").index();
                if (num > showNum && curUpNum !== 0) {
                    $upbtn.show();
                }
                if (num > showNum && curUpNum !== mixUp) {
                    $downbtn.show();
                }
            }
            showTimer = setTimeout(showUpDown, 10);
        })();


        var curst = 0,
            dir = $('.daylink li'),
            st,
            d = [],
            first = 0,
            $daylink = $(".daylink");
        var lastNode = maxLastPos = 0;

        if (!('filter' in Array.prototype)) {
            Array.prototype.filter = function(filter, that /*opt*/ ) {
                var other = [],
                    v;
                for (var i = 0, n = this.length; i < n; i++)
                    if (i in this && filter.call(that, v = this[i], i, this))
                        other.push(v);
                return other;
            };
        }
        if (!('indexOf' in Array.prototype)) {
            Array.prototype.indexOf = function(find, i /*opt*/ ) {
                if (i === undefined) i = 0;
                if (i < 0) i += this.length;
                if (i < 0) i = 0;
                for (var n = this.length; i < n; i++)
                    if (i in this && this[i] === find)
                        return i;
                return -1;
            };
        }

        function callFilter(element) {
            return element <= curst;
        }

        function scrollFn() {
            st = $(window).scrollTop();
            if (first == 0) {
                //写入坐标
                dayFrame.each(function() {
                    d.push($(this).offset().top);
                });
                lastNode = d.length - 1;
                maxLastPos = d[lastNode] + dayFrame.eq(lastNode).height() - posdifference;
                first++;
            }
            if (st > maxLastPos) {
                GS.throttle(hideFixPos(), 500);
            } else {
                GS.throttle(fixPos(st), 500);
            }
        }
        scrollFn();

        //天数连接click
        dir.click(function() {
            var index = $(this).index();
            var diffTop = parseInt($daylink.css("top"), 10);
            var top = d[index] - diffTop + 55;
            $('body,html').animate({
                scrollTop: top
            }, 800);
        });

        //天数连接hover
        var poiTimer = null;
        $('.daylink li').hover(function() {
            showPoi($(this));
        }, function() {
            var index = $(this).index();
            if (!poiList[index].len) {
                return;
            }
            $("#showPoi").data("show", 0);
            poiTimer = setTimeout(hidePoi, 50);
        });

        //hover事件
        $showPoi.hover(function() {
            $showPoi.data("show", 1);
        }, function() {
            $showPoi.data("show", 0);
            poiTimer = setTimeout(hidePoi, 50);
        });
        //显示poi
        function showPoi($curLink) {
            var index = $curLink.index(),
                titleList = poiList[index].title,
                nameList = poiList[index].name,
                topList = poiList[index].top,
                len = poiList[index].len,
                pp = 0;
            if (!len) {
                return;
            }
            $showPoi.find(".name-area").empty();
            var nameHtml = '<div class="mask"></div>';
            for (; pp < len; pp++) {
                var name = nameList[pp];
                var title = titleList[pp];
                nameHtml += '<a href="javascript:;" title="' + title + '">' + name + '</a>';
                if (pp != len - 1) {
                    nameHtml += '<i class="arrow">&gt;</i>';
                }
            }
            $showPoi.find(".name-area").append(nameHtml);
            var top = linkTop + $curLink.offset().top - $daylink.offset().top;
            var width = $curLink.width(),
                poiLeft = $curLink.offset().left + width;
            $showPoi.css({
                top: top,
                left: poiLeft
            });
            $showPoi.show();
            $showPoi.data("show", 1);
            $showPoi.data("dayNum", index);
            //打开时选中的poi
            if ($curLink.hasClass("current")) {
                var poiFilter = topList.filter(callFilter);
                var filterLen = poiFilter.length;
                if (filterLen > 0) {
                    var poiNum = topList.indexOf(poiFilter[filterLen - 1]);
                    $showPoi.find("a").removeClass("current");
                    $showPoi.find("a").eq(poiNum).addClass("current");
                }
            } else {
                $showPoi.find("a").removeClass("current");
            }
            $showPoi.find("a").unbind().bind("click", function() {
                var poiIndex = $showPoi.find("a").index($(this));
                var poiTop = topList[poiIndex] - posdifference + 50; // - linkTop + 35;
                $('body,html').animate({
                    scrollTop: poiTop
                }, 800);
            });
        }
        //隐藏poi
        function hidePoi() {
            if ($showPoi.data("show")) {
                clearTimeout(poiTimer);
            } else {
                $showPoi.hide();
            }
        }
        //滚动时
        $(window).scroll(function() {
            scrollFn()
        });

        //隐藏左边

        function hideFixPos() {
            $daylink.hide();
            $showPoi.data("show", 0);
            $showPoi.hide();
            var info = {};
            changeTopArticle(info);
        }

        function fixPos(st) {
            $daylink.show();

            curst = st + posdifference;
            var filtered = d.filter(callFilter);
            var len = filtered.length;
            if (len > 0) {
                var v = d.indexOf(filtered[len - 1]),
                    num = dayFrame.length,
                    numb = showNum - 1;
                if (v > -1) {
                    if (v <= numb) {
                        if (-v >= curUpNum) {
                            curUpNum = -v;
                        }
                    } else if (v > numb && v < num - numb) {
                        if (-v > curUpNum) {
                            curUpNum = -v;
                        } else if ((numb - v) < curUpNum) {
                            curUpNum = (numb - v);
                        }
                    } else if (v >= num - numb) {
                        if ((numb - v) < curUpNum) {
                            curUpNum = (numb - v);
                        }
                    }
                    if (curUpNum <= 0) {
                        var top = curUpNum * liHeight;
                        $ul.css({
                            'top': top
                        });
                    }

                    var mixUp = showNum - num;
                    var $li = dir.eq(v);
                    $li.addClass('current').siblings().removeClass('current');
                    if (num > showNum) {
                        if (curUpNum === 0) {
                            $upbtn.fadeOut(200);
                            if ($downbtn.css('display') == "none") {
                                $downbtn.fadeIn(200);
                            }
                        } else if (curUpNum === mixUp) {
                            $downbtn.fadeOut(200);
                            if ($upbtn.css('display') == "none") {
                                $upbtn.fadeIn(200);
                            }
                        } else {
                            if ($downbtn.css('display') == "none") {
                                $downbtn.fadeIn(200);
                            }
                            if ($upbtn.css('display') == "none") {
                                $upbtn.fadeIn(200);
                            }
                        }
                    }
                    //获取当前位置的poi点
                    var list = poiList[v],
                        listLen = list.len,
                        isShow = $showPoi.data("show"),
                        dayNum = $showPoi.data("dayNum");
                    var topList = list.top;
                    var poiFilter = topList.filter(callFilter);
                    var len = poiFilter.length;
                    var poiNum = topList.indexOf(poiFilter[len - 1]);
                    var info = {};
                    if (poiNum >= 0) {
                        info.des = list.destination[poiNum];
                        info.desLink = list.desLink[poiNum];
                        info.poi = list.name[poiNum];
                        info.poiLink = list.link[poiNum];
                    }
                    changeTopArticle(info);
                    if (listLen && isShow && v === dayNum && len) {
                        $showPoi.find("a").removeClass("current");
                        $showPoi.find("a").eq(poiNum).addClass("current");
                        var curTop = linkTop + $li.offset().top - $daylink.offset().top;
                        var oldTop = parseInt($showPoi.css("top"), 10);
                        if (curTop !== oldTop) {
                            $showPoi.css({
                                top: curTop
                            });
                        }
                    } else {
                        $showPoi.find("a").removeClass("current");
                    }
                }
            }
        };
    }

    initDayFrame();
    //window.onload = initDayFrame;


    //定位头部元素
    var isIE6 = ($.browser.msie) && ($.browser.version == "6.0");
    if (!isIE6) {
        var ulPos = $('.titleright ul').offset().top;
        var top_article = $('.top_article');
        $(window).scroll(function() {
            st = $(window).scrollTop();
            if (st > ulPos) {
                top_article.show();
            } else {
                top_article.hide();
            }
        });
    }

    //游记图片异步加载处理
    $(".imglink img").lazyload({
        threshold: 500,
        failurelimit: 5
    });

    //滚动播放动定时
    $('#strategy_info').gsnoderoll();


    //免登录喜欢
    function user_no_login_like() {
        if (privateObject.CurrentUserId == '0') {
            $.cookiedb({
                'name': 'gs_link_like',
                'value': INTERFACE.TravelId
            });
        }
    }


});