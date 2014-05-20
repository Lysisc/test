//回复
var doReply = function() {

	$('.ctd_comments_box').hover(function() {
		$(this).find('.ctd_comments_contrl .contrl_01').css('color', '#999');
	}, function() {
		$(this).find('.ctd_comments_contrl .contrl_01').css('color', '#f2f2f2');
	});

	$('[data-onsubmit]').each(function() {
		$(this).data('isOne', 0);
	});
	var total = 1000;
	$(".ctd_comments .link_reply").click(function() {
		if (!$(this).hasClass("a_popup_login")) {
			var $reply = $(this).parent().siblings(".ctd_comments_reply");
			if ($reply.is(':visible')) {
				$reply.slideUp(200);
			} else {
				$reply.slideDown(200);
				$reply.find("textarea").val("");
				var name = $(this).parents(".ctd_comments_box").find(".ctd_comments_username").text();
				name = "@" + $.trim(name) + "\n";
				$reply.find("textarea").val(name);
				$reply.find("textarea").data("name", name);
				con_focus($reply.find("textarea")[0]);
			};
		}
	});

	$(".ctd_comments .ctd_comments_reply .contrl_01").click(function() {
		$(this).parent().slideUp(200);
		return false;
	});

	$(".ctd_comments_reply textarea").each(function() {
		var $that = $(this);
		$that.gsInputLen(function(len) {
			var $parent = $that.parents(".ctd_comments_reply");
			var $len = $parent.find(".word_length");
			var lastLen = total - len;
			if (lastLen <= -1) {
				var text = $that.val();
				var newText = $.gsSubstring(text, total, 1);
				$that.val(newText);
			} else {
				$len.html(lastLen);
			};
			$parent.find('.error_tip').hide();
		});
	});

	$(".ctd_comments_reply .gs_btn_v2").click(function() {
		var $textArea = $(this).siblings(".textarea").find("textarea"),
			$errorTip = $(this).siblings(".error_tip");
		areaVal = $.trim($textArea.val());
		var name = $.trim($textArea.data("name"));
		var val = areaVal.replace(name, "");
		var type = $textArea.attr('data-referenceCategory') || "",
			referenceid = $textArea.attr("data-referenceids") || "";
		if (val) {
			$(this).gsdisable({
				callback: function() {
					INTERFACE.add_comment({
						TravelId: INTERFACE.TravelId,
						ReferenceIds: referenceid,
						ReferenceCategory: type,
						RemarkContent: encodeURIComponent(areaVal)
					}, function() {
						addCommentNum();
					});
				}
			});
		} else {
			$errorTip.show();
		};
	});
};
/* 四舍五入 */
function toFixed(number, fractionDigits) {
	with(Math) {
		return round(number * pow(10, fractionDigits)) / pow(10, fractionDigits);
	}
}

function addCommentTotal(total) {
	var isHost = INTERFACE.isHost,
		total = total || 0;
	if (isHost) {
		var $span = $(".ctd_data .ctd_georgia.color_05"),
			text = $span.text();
		text = total;
		if (text > 100000) {
			text = toFixed(text / 100000, 0) + "<em>万+</em>";
		}
		$span.text(text);
		$span.attr("title", total);
	} else {
		var $linkCollect = $(".ctd_controls .link_comment"),
			$span = $linkCollect.find("span");
		$span.text(total);
	}
	$(".ctd_comments .ctd_comments_title span").html('(' + total + ')');
}

/* 评论加1 */
function addCommentNum() {
	var isHost = INTERFACE.isHost,
		count = 0;
	if (isHost) {
		var $span = $(".ctd_data .ctd_georgia.color_05"),
			text = $span.text();
		count = parseInt($span.attr("title"), 10);
		count = isNaN(count) ? 0 : count;
		count++;
		text = count;
		if (text > 100000) {
			text = toFixed(text / 100000, 0) + "<em>万+</em>";
		}
		$span.text(text);
		$span.attr("title", count);
	} else {
		var $linkCollect = $(".ctd_controls .link_comment"),
			$span = $linkCollect.find("span");
		count = parseInt($span.text(), 10);
		count = isNaN(count) ? 0 : count;
		count++;
		$span.text(count);
	}
	$(".ctd_comments .ctd_comments_title span").html('(' + count + ')');
}

$(function() {
	var isHost = INTERFACE.isHost;
	//收藏
	$('.ctd_controls .link_collect').gsbasecollect({
		requestFn: function(that) {
			$('.float_div .btn_collect').addClass("click_collect");
			INTERFACE.collectRequestFn($(that));
		}
	});
	//定头部的 收藏
	$('.float_div .btn_collect').gsbasecollect({
		requestFn: function(that) {
			var $linkCollect = $(".ctd_controls .link_collect"),
				$span = $linkCollect.find("span"),
				count = parseInt($span.text(), 10),
				count = isNaN(count) ? 0 : count;
			count++;
			$span.text(count);
			$linkCollect.addClass("click_collect");
			INTERFACE.collectRequestFn($(that));
		}
	});



	/*  用cookie保存用户喜欢的状态  */
	function save_usernotlogin_like() {
		if (privateObject.CurrentUserId == '0') {
			$.cookiedb({
				'name': 'gs_link_like',
				'value': INTERFACE.TravelId
			});
		}
	}

	/*  判断未登录是否喜欢  */
	function find_usernotlogin_like() {
		if (privateObject.CurrentUserId == '0') {
			var isFind = $.cookiedb({
				'name': 'gs_link_like',
				'value': INTERFACE.TravelId,
				'isfind': 1
			});
			if (isFind == 'repeat') {
				$('.float_div .btn_like').addClass("click_like");
				$('.ctd_controls .link_like').addClass("click_like");
			}
		}
	}

	find_usernotlogin_like(); //判断未登录是否喜欢


	//抽取公用代码(喜欢)
	function linkLikeFN(that) {
		var $that = $(that),
			$span = $(".ctd_data .color_03"),
			text = $span.text(),
			count = parseInt($span.attr("title"), 10);
		count = isNaN(count) ? 0 : count;
		count++;
		text = count;
		if (text > 100000) {
			text = toFixed(text / 100000, 0);
		}
		$span.text(text);
		$span.attr("title", count);
		$that.html('<i></i>已自恋');
		$that.attr("title", "已自恋");
	}


	//喜欢按钮
	$('.ctd_controls .link_like').gsbaselike({
		requestFn: INTERFACE.likeRequestFn,
		callback: function(that) {
			if (isHost) {
				linkLikeFN(that)
				$('.float_div .btn_like').addClass("click_like_host");
			} else {
				$('.float_div .btn_like').addClass("click_like");
				save_usernotlogin_like(); //免登录喜欢 by cwp
			};
		}
	});
	//固定头部的 喜欢按钮
	$('.float_div .btn_like').gsbaselike({
		requestFn: INTERFACE.likeRequestFn,
		callback: function(that) {
			var $linkCollect = $(".ctd_controls .link_like");
			if (isHost) {
				linkLikeFN($linkCollect);
				$('.float_div .btn_like').addClass("click_like_host");
			} else {
				var $span = $linkCollect.find("span"),
					count = parseInt($span.text(), 10);
				count = isNaN(count) ? 0 : count;
				count++;
				$linkCollect.html('<i></i>已喜欢<span>' + count + '</span>');
				$('.float_div .btn_like').addClass("click_like");
				save_usernotlogin_like(); //免登录喜欢 by cwp
			}
			$linkCollect.addClass("click_like");
		}
	});
	//图片中的喜欢按钮
	$('.img_controls .link_like').gsbaselike({
		requestFn: INTERFACE.likeRequestFn,
		callback: function(that) {
			var $that = $(that);
			if (isHost) {
				var $span = $that.find("span"),
					text = $span.text(),
					count = parseInt($span.attr("title"), 10);
				count = isNaN(count) ? 0 : count;
				count++;
				$that.html('<i></i>已自恋<span>' + count + '</span>');
				$that.attr("title", "已自恋");
			}
		}
	});

	//分享处理
	$(".ctd_controls .link_share").gsbaseshare({
		api: INTERFACE.ShareUrl,
		hasCount: true,
		callback: function($that) {
			if (isHost) {
				var $span = $(".ctd_data .color_04"),
					text = $span.text(),
					count = parseInt($span.attr("title"), 10);
				count = isNaN(count) ? 0 : count;
				count++;
				text = count;
				if (text > 100000) {
					text = toFixed(text / 100000, 0);
				}
				$span.text(text);
				$span.attr("title", count);
			}
		}
	});
	//固定头部的 分享处理
	$('.float_div .btn_share').gsbaseshare({
		api: INTERFACE.ShareUrl, //分享请求连接
		fixed: true,
		top: 50,
		hasCount: false,
		callback: function($that) {
			if (isHost) {
				var $span = $(".ctd_data .color_04"),
					text = $span.text(),
					count = parseInt($span.attr("title"), 10);
				count = isNaN(count) ? 0 : count;
				count++;
				text = count;
				if (text > 100000) {
					text = toFixed(text / 100000, 0);
				}
				$span.text(text);
				$span.attr("title", count);
			} else {
				var $count = $(".ctd_controls .link_share span"),
					count = parseInt($count.text(), 10);
				count = isNaN(count) ? 0 : count;
				count++;
				$count.text(count);
			}
		}
	});
	$('.img_controls .link_share').gsbaseshare({
		api: INTERFACE.ShareUrl
	});

	//hover图片显示
	var fateOutTimer = null;
	$('.ctd_main').on("mouseenter", ".img", function() {
		var $this = $(this).data("isOver", 1),
			ch = $this.find('.img_controls'),
			widthSub = ($this.outerWidth() - $this.find('img').outerWidth()) / 2;
		if (widthSub > 267) {
			ch.css('visibility', 'hidden');
		} else {
			ch.css('visibility', 'visible').fadeIn('fast');
		};
		//获取图片宽度
		ch.fadeIn("fast");
		$("#bdshare").hover(function() {
			$this.data("isOver", 0);
		}, function() {
			$this.data("isOver", 1);
		});
	});
	$('.ctd_main').on("mouseleave", ".img", function() {
		clearTimeout(fateOutTimer);
		var $this = $(this);

		function fadeOut() {
			if ($this.data("isOver") == 1) {
				$this.children('.img_controls').fadeOut("fast");
			}
		}
		fateOutTimer = setTimeout(fadeOut, 50);
	});
});
//评论代码
$(function() {
	//发表点评
	(function() {
		var $publishTextArea = $("#report_area"),
			$errorTip = $publishTextArea.parents(".textarea_box").find(".error_tip");
		total = 1000;
		//初始化时置为空	
		$publishTextArea.val("");
		$publishTextArea.placeholder();

		$publishTextArea.focus(function() {
			$errorTip.hide();
		});

		var $wordLength = $publishTextArea.next(".ctd_comments_tip").find("em.word_length");
		$publishTextArea.gsInputLen(function(len) { //复制状态态的倒计时会不准
			var lastLen = total - len;
			if (lastLen <= -1) {
				var text = $publishTextArea.val();
				var newText = $.gsSubstring(text, total, 1);
				$publishTextArea.val(newText);
				$wordLength.text(total);
			} else {
				$wordLength.text(len);
			};
			$('.reportmain').find('.gsn-tiptext').show();
			$('.reportmain').find('.journal-comment-tip').hide();
		});

		$(".float_div .btn_comment")
			.add(".ctd_controls .link_comment").click(function() {
				var top = $(".ctd_comments").offset().top - 55;
				$('body,html').animate({
					scrollTop: top
				}, 500, function() {
					con_focus($publishTextArea[0]);
				});
			});

		$(".ctd_comments_box .btn_publish").click(function() {
			if (!$(this).hasClass("a_popup_login")) {
				var val = $publishTextArea.val();
				val = $.trim(val);
				val = val.replace("Hi，楼主等你的回复呢~", "");
				if (val) {
					var type = $publishTextArea.attr("data-referencecategory") || "",
						referenceid = $publishTextArea.attr("data-referenceids") || "";
					$(this).gsdisable({
						disable: "gs_btn_v2_gray",
						text: '<img class="btn_ajax" src="http://youresource.c-ctrip.com/img/load.gif" />提交中...',
						callback: function() {
							INTERFACE.add_comment({
								TravelId: INTERFACE.TravelId,
								ReferenceIds: referenceid,
								ReferenceCategory: type,
								RemarkContent: encodeURIComponent(val)
							}, function() {
								addCommentNum();
								$publishTextArea.val("");
								$wordLength.text("0");
							});
						}
					});
				} else {
					$errorTip.show();
				}
			}
		});
	})();

	//图片上的引用到评论
	(function() {
		var $picComment = $('#picComment'),
			$pic_content = $('#pic_content'),
			type = "",
			referenceid = "",
			$total = $picComment.find(".count"),
			total = parseInt($total.text(), 10);

		$(".img_controls .link_comment").click(function() {
			$picComment.find('.gsn-tiptext').show();
			$picComment.find('.journal-comment-tip').hide();
			$pic_content.click();
			if (!$(this).hasClass('a_popup_login')) {
				$.popupbox.show({
					id: 'picComment'
				});
				type = $(this).attr('data-referenceCategory') || "";
				referenceid = $(this).attr("data-referenceids") || "";
				var replyName = $('#authorDisplayName').html();
				replyName = $.trim(replyName);
				var strFormat = "引用 @" + replyName + " 的照片" + "\n";
				$pic_content.val(strFormat);
			}
			con_focus($pic_content[0]);
		});

		$pic_content.gsInputLen(function(len) { //复制状态态的倒计时会不准
			var lastLen = total - len;
			if (lastLen <= -1) {
				var text = $pic_content.val();
				var newText = $.gsSubstring(text, total, 1);
				$pic_content.val(newText);
			} else {
				$total.html(lastLen);
			};
			$picComment.find('.gsn-tiptext').show();
			$picComment.find('.journal-comment-tip').hide();
		});

		$picComment.on('click', '.close, .gsn-btn-6', function() {
			$total.text(total);
			$pic_content.val('');
			$.popupbox.close();
		});

		$picComment.on('click', '.gsn-btn-2', function() {
			var areaVal = $pic_content.val();
			areaVal = $.trim(areaVal);
			if (areaVal) {
				$picComment.find('.gsn-tiptext').show();
				$picComment.find('.journal-comment-tip').hide();
				$(this).gsdisable({
					callback: function() {
						INTERFACE.add_comment({
							TravelId: INTERFACE.TravelId,
							ReferenceIds: referenceid,
							ReferenceCategory: type,
							RemarkContent: encodeURIComponent(areaVal)
						}, function() {
							addCommentNum();
							$total.text(total);
							$pic_content.val("");
							$.popupbox.close();
						});
					}
				});
			} else {
				$picComment.find('.gsn-tiptext').hide();
				$picComment.find('.journal-comment-tip').show();
			};
		});
	})();
});

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
		};
	} else if (typeof areaObj.selectionStart == 'number' && typeof areaObj.selectionEnd == 'number') {
		areaObj.selectionStart = areaObj.selectionEnd = len;
	};
};