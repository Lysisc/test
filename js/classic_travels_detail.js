//经典游记详情页改版
//@version 1.0
//@author lusc
//@date 20140213

(function($) {

	//游记访问状态校验（从后台取数据判断游记当前访问状态）
	if (INTERFACE.isHost != true) {
		INTERFACE.accessState(function(data1, data2) {
			var visitCount = data2.VisitCount,
				zeroNull = function(num) {
					if (num == 0) num = '';
					return num;
				},
				toFixed = function(number, fractionDigits) {
					with(Math) {
						return round(number * pow(10, fractionDigits)) / pow(10, fractionDigits);
					}
				};
			if (visitCount > 100000) {
				visitCount = toFixed(visitCount / 10000, 0) + "万+";
			};
			$('.link_browse').find('span').text(zeroNull(visitCount));
			$('.link_comment').find('span').text(zeroNull(data2.CommentCount));
			$('.ctd_comments_title').find('span').text('(' + data2.CommentCount + ')');
			$('.link_share').find('span').text(zeroNull(data2.ShareCount));
			$('.link_like').find('span').text(zeroNull(data2.LikeCount));
			$('.link_collect').find('span').text(zeroNull(data2.FavouriteCount));
			if (data2.CanDownLoadPDF == true) $('.link_pdf').attr('href', data2.DownLoadPDFUrl);
			$.ifPdfVisible();
			if (data1.RetCode == 0) return false;
			var userName = data1.UserInfo.DisplayName,
				userUrl = data1.UserInfo.HomePageUrl,
				userSrc = data1.UserInfo.HeadPhotoUrl,
				userState = '<a class="img" title="' + userName + '" target="_blank" href="' + userUrl + '"><img src="' + userSrc + '"></a>';
			if (data1.RetCode == 1 || data1.RetCode == 2) {
				$('.a_popup_login').removeClass('a_popup_login');
				$('.ctd_comments_box:first').append(userState);
				if (data1.RetCode == 2) {
					$('.ctd_bread').prepend('<a class="ctd_head_a" href="' + data1.TravelMasterUrl + '"><i class="edit"></i>编辑游记</a>');
				};
			};
		});
	};

	//封面图自适应
	coverAdaptive(); //初始化
	function coverAdaptive() {
		$('.ctd_head_mask').width(document.documentElement.clientWidth);
		var coverObj = $('.ctd_cover').css('width', '100%'),
			coverHeight = null,
			img = new Image();
		img.src = coverObj.attr('src');
		if ($.browser.msie) {
			img.onreadystatechange = function() {
				if (img.readyState == "complete" || img.readyState == "loaded") coverAdaptiveCall(coverObj);
			};
		} else {
			img.onload = function() {
				if (img.complete == true) coverAdaptiveCall(coverObj);
			};
		};
	};

	function coverAdaptiveCall(coverObj) {
		var coverHeight = coverObj.height(),
			coverChangeY = parseInt(coverObj.attr('data-CoverLocationY')) / 10000 * coverHeight;
		if (coverHeight + coverChangeY > 450) {
			coverObj.css({
				'width': '100%',
				'height': 'auto',
				'top': coverChangeY
			});
		};
	};

	//徽章弹层
	if ($.browser.msie && $.browser.version < 9) $('.badge_box').addClass('hack_ie8');
	$('.ctd_head_right').on('mouseover', '.info_badge a', function() {
		var objAttr = $(this).attr('class'),
			offset = $(this).offset(),
			objBox = $('.badge_box.' + objAttr),
			objWidth = objBox.outerWidth(),
			objHeight = objBox.outerHeight(),
			offsetP = $(this).parent('.info_badge').offset(),
			offsetPP = $(this).parents('.ctd_head_right').offset();
		objBox.css({
			top: offset.top - offsetPP.top - objHeight - 16,
			left: offset.left - offsetPP.left - objWidth / 2 + 11
		}).show();
		var windowWidth = document.documentElement.clientWidth, //可视区域处理
			objLeft = objBox.offset().left,
			offsetL = objLeft + objWidth,
			_objLeft = offset.left - offsetPP.left - objWidth / 2 + 11 + windowWidth - offsetL;
		if (offsetL > windowWidth) {
			$('.badge_box.' + objAttr).css('left', _objLeft).find('.badge_box_arr').css('margin-left', offsetL - windowWidth - 67);
		} else {
			$('.badge_box.' + objAttr).find('.badge_box_arr').css('margin-left', '-67px');
		};
	}).on('mouseout', '.info_badge a', function() {
		var objAttr = $(this).attr('class');
		$('.badge_box.' + objAttr).hide();
	});

	$('.ctd_head_right').on('mouseover', '.badge_box', function() {
		$(this).show();
	}).on('mouseout', '.badge_box', function() {
		$(this).hide();
	});

	//页面浮动层
	var floatDiv = $('.float_div'),
		ttdObj = $('#ctd_ttd_tab'),
		sideObj = $('.ctd_side'),
		toObj = $('.ctd_main_body'),
		toTop = toObj.offset().top,
		titileWidth = $('.ttd_title').length == 1 ? $('.ttd_title').outerWidth() : 0,
		offsetLeft = $('.btn_index').outerWidth() + titileWidth,
		offsetRight = $('.item_div:first').outerWidth() * $('.item_div').length,
		ttdObjFixed = function(docTop) { //相关目的地浮动效果
			if (ttdObj.length == 0) return false;
			var ttdObjH = ttdObj.outerHeight(),
				sideHeight = sideObj.outerHeight(),
				seoBoxTop = $('#ctd_ttd_stop').offset().top;
			if (docTop > sideObj.offset().top + sideHeight && docTop <= seoBoxTop - 80 - ttdObjH) {
				ttdObj[0].style.cssText = 'position:fixed;top:70px;left:' + sideObj.offset().left + ';';
			} else if (docTop < sideObj.offset().top + sideHeight) {
				ttdObj[0].style.cssText = '';
			} else if (docTop > seoBoxTop - 80 - ttdObjH) {
				ttdObj[0].style.cssText = 'position:absolute;top:' + (seoBoxTop - sideObj.offset().top - ttdObjH - 70) + 'px;right:0;';
			};
		},
		floatDivPosition = function(docTop) {
			var mainH = toObj.outerHeight() - 50,
				percent = (docTop - toTop) / mainH * 100;
			floatDiv.width(document.documentElement.clientWidth <= 980 ? 980 : '100%');
			$('.progress_line').find('.line').width(percent + '%').siblings('.point').css('left', percent - 0.85 + '%');
			if (docTop > toTop + mainH) $('.progress_line').find('.line').css('width', '100%');
			docTop >= toTop ? floatDiv.show() : floatDiv.hide();
		},
		pDotResize = function(b) {
			$('.ctd_content').each(function() { //生成续写锚点
				var that = this,
					index = $(that).index('.ctd_content'),
					left = (($(that).offset().top - toObj.offset().top) / toObj.outerHeight()) * 100 - 0.7 + '%';
				if ($(that).data('hadP') != 1 && index > 0) {
					$(that).data('hadP', 1);
					var text = $(that).find('h3').text().replace('编辑', '');
					$('.progress_line').append('<p class="p_content_' + index + '" style="left:' + left + ';"><i></i><span>' + text + '<em></em></span></p>');
				} else if (index > 0) $('.p_content_' + index).css('left', left);
			});
		};

	if (ttdObj.length == 1) { //相关目的地模块操作
		ttdObj.on('mouseover', '.fl', function() { //相关目的地hover样式
			$(this).css('background-color', '#fff');
		}).on('mouseout', '.fl', function() {
			$(this).css('background-color', 'transparent');
		});

		$.phBackground = function() {
			var ttdboxlist = $(".ctd_ttd_box"),
				districtId = 0,
				productCount = 0;
			ttdboxlist.each(function() {
				if ($(this).find(".fl").length > productCount) {
					productCount = $(this).find(".fl").length;
					districtId = $(this).attr("data-districtId");
				};
				if ($(this).find('.fl').length > 0) {
					$(this).parent('li').css('background', 'none');
				};
			});
			if (districtId > 0) {
				ttdboxlist.each(function() {
					if ($(this).attr("data-districtId") == districtId) {
						$(this).parent('li').show();
						var index = ttdboxlist.index(this);
						$(".ctd_ttd_ctrl span").text(index + 1 + "/" + ttdboxlist.length);
						if (index == 0) {
							$(".ctd_ttd_ctrl .prev").addClass("disable");
						} else {
							$(".ctd_ttd_ctrl .prev").removeClass("disable");
						}
						if (index == ttdboxlist.length - 1) {
							$(".ctd_ttd_ctrl .next").addClass("disable");
						} else {
							$(".ctd_ttd_ctrl .next").removeClass("disable");
						}
					} else {
						$(this).parent('li').hide();
					}
				});
			};
		};

		var ttdObjUl = ttdObj.find('.ctd_ttd');
		if (ttdObjUl.find('li').length > 1) ttdObj.find('.ctd_ttd_ctrl').show(); //如果li唯一则不显示控件按钮
		ttdObj.data('moveAble', 1).find('.ctd_ttd_ctrl a').click(function() { //相关目的地切换
			if (!$(this).hasClass('disable')) {
				if ($(this).hasClass('prev')) coverTurn(1);
				if ($(this).hasClass('next')) coverTurn(0);
			};
			return false;
		});

		function coverTurn(t) { //左右切换
			var ttdObjLi = t ? ttdObjUl.find('li:visible').prev() : ttdObjUl.find('li:visible').next();
			if (ttdObj.data('moveAble') == 1) {
				ttdObj.data('moveAble', 0);
				if (!($.browser.msie && $.browser.version == "6.0")) {
					ttdObjLi.siblings('li').fadeOut(300);
					ttdObjLi.fadeIn(300, judgeDisable);
				} else {
					ttdObjLi.siblings('li').hide();
					ttdObjLi.show(0, judgeDisable);
				}
			};
		};

		function judgeDisable() { //判断disable
			var ttdObjLi = ttdObjUl.find('li:visible'),
				index = ttdObjLi.index('.ctd_ttd li') + 1;
			ttdObj.find('.ctd_ttd_ctrl a').removeClass('disable');
			ttdObj.find('.ctd_ttd_ctrl span').html(index + '/' + ttdObj.find('.ctd_ttd li').length);
			if (ttdObjLi.is('.ctd_ttd li:last')) {
				ttdObj.find('.ctd_ttd_ctrl .next').addClass('disable');
			};
			if (ttdObjLi.is('.ctd_ttd li:first')) {
				ttdObj.find('.ctd_ttd_ctrl .prev').addClass('disable');
			};
			ttdObj.data('moveAble', 1);
		};
	};

	$('.progress_bar').css({ //获取progress_bar的宽度
		'margin-left': offsetLeft,
		'margin-right': offsetRight
	}).data('imgShow', 1);

	var clickTime = null;
	floatDiv.on('mouseover', '.progress_line p', function() { //锚点事件绑定
		$(this).find('span').show();
	}).on('mouseout', '.progress_line p', function() {
		$(this).find('span').hide();
	}).on('click', '.progress_line p', function() {
		if ($('.progress_line').data('isClick') != 0) {
			$('.progress_line').data('isClick', 0);
			var index = parseInt($(this).attr('class').replace('p_content_', '')),
				offsetTop = $('.ctd_content').eq(index).offset().top - 50;
			$('html, body').animate({
				scrollTop: offsetTop
			}, 500);
			clearTimeout(clickTime);
			clickTime = setTimeout(function() {
				$('.progress_line').data('isClick', 1);
			}, 600);
		};
	});

	if (!($.browser.msie && $.browser.version == "6.0")) { //置顶层滚动IE6无视
		var timer = null;
		$(function() {
			setTimeout(function() {
				pDotResize($('.progress_bar').data('imgShow')); //锚点定位
				floatDivPosition($(window).scrollTop());
			}, 500);
		});
		$(window).scroll(function() {
			scrollEvents();
		});
		$(window).resize(function() { //自适应
			coverAdaptive(); //封面自适应
			scrollEvents(); //scrollEvents相关事件重载
		});

		function scrollEvents() {
			var docTop = $(window).scrollTop();
			clearTimeout(timer);
			timer = setTimeout(function() {
				pDotResize($('.progress_bar').data('imgShow'));
			}, 500);
			floatDivPosition(docTop); //置顶条自适应
			ttdObjFixed(docTop); //相关目的地自适应
		}
	} else {
		$(window).resize(function() { //自适应
			coverAdaptive(); //封面自适应
		});
	};

	//图文切换
	$('.ctd_controls .fl, .text_pic').on('click', function() {
		var imgObj = $('.ctd_content').find('.img, img'),
			_true = $(this).is('.text_pic');
		if (imgObj.is(':visible')) {
			_true ? $('.ctd_controls .fl').html('<i></i>图文模式') : $(this).html('<i></i>图文模式');
			$('.ctd_controls .fl, .text_pic').addClass('clicked').attr('title', '图文模式');
			imgObj.hide();
			$('.progress_bar').data('imgShow', 0);
		} else {
			_true ? $('.ctd_controls .fl').html('<i></i>只看文字') : $(this).html('<i></i>只看文字');
			$('.ctd_controls .fl, .text_pic').removeClass('clicked').attr('title', '只看文字');
			imgObj.show();
			$('.progress_bar').data('imgShow', 1);
		};
		if (!($.browser.msie && $.browser.version == "6.0")) {
			pDotResize($('.progress_bar').data('imgShow'));
			floatDivPosition($(window).scrollTop());
		};
	});

	//删除评论弹层
	var popObj = $('#del_comment');
	$('.ctd_comments').on('click', '.link_delete', function() {
		var replyId = $(this).attr('data-replyId'),
			offset = $(this).offset();
		if (popObj.css('display') == 'none') {
			popObj.show().offset({
				top: offset.top - popObj.outerHeight() - 3,
				left: offset.left - popObj.outerWidth() + 28
			}).data('replyId', replyId);
		} else {
			popObj.hide();
		};
		return false;
	});

	popObj.hover(function() { //判断是否在popObj内
		popObj.data('isHover', 1);
	}, function() {
		popObj.data('isHover', 0);
	}).find('.confirm, .color_white').click(function() {
		if ($(this).hasClass('confirm')) {
			INTERFACE.del_reply({
				replyId: popObj.data('replyId')
			});
		};
		popObj.hide();
	});

	$(document).click(function() { //如果不在popObj内隐藏popObj
		if (popObj.data('isHover') == 0) popObj.hide();
	});

	//ctd_travels模块hover效果
	$('.ctd_travels').on('mouseover', '.img', function() {
		$(this).find('.text').show();
	}).on('mouseout', '.img', function() {
		$(this).find('.text').hide();
	});;

	//翻页跳转
	$.pageLinkJump = function(value) {
		INTERFACE.page_link({
			pageNum: value
		});
	};
	$('.ctd_comments').on('click', '.pager_v1 a:not(.gopage)', function() { //动态绑定翻页按钮
		var value = $(this).attr('data-page');
		if (value != '0') {
			INTERFACE.page_link({
				pageNum: value
			});
		};
	});

})(jQuery);