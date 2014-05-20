/**
 * 图片与poi拖动行为
 */
$(function() {

	//取 day容器id
	var get_day_id = function(obj) {
		return obj.parents('.edit_trip').attr('id');
	};

	var curImgid, preImgId, curDayid, curPoiId, prePoiId;

	//poi排序
	var curPoiIndex;
	window.sortable_opt = {
		tolerance: 'pointer',
		items: "> .sort_ui",
		cursor: 'move',
		delay: 100,
		opacity: 0.7,
		placeholder: "poi_highlight",
		helper: function(event, ui) {
			var on = $(ui).hasClass('on') ? 'on' : '',
				i_class = $(ui).find('i').attr('class'),
				p_text = $(ui).find('p').text(),
				b_text = $(ui).find('b').text();
			return $('<div id="drag-poi" class="' + on + '"><i class="' + i_class + '"></i><p>' + p_text + '</p><b>' + b_text + '</b><div class="arr_r"></div><div class="arr_t"></div></div>')
		},
		start: function(event, ui) {
			curPoiId = $(ui.item).attr('id');
			curPoiIndex = $(ui.item).index();
		},
		stop: function(event, ui) {
			if (curPoiIndex != $('#' + curPoiId).index()) { //poi排序变动后与后台交互
				prePoiId = $(ui.item).next('.sort_ui').attr('id') == undefined ? 0 : $(ui.item).next('.sort_ui').attr('id');
				INTERFACE.poi_sort_api($.toJSON({
					CurrentPoiContentId: $('#' + curPoiId).attr('data-travelcontentid'),
					PrePoiContentId: $('#' + prePoiId).attr('data-travelcontentid'),
					TravelId: INTERFACE.TravelId
				}));
			};
		}
	};
	$('.poi_box').sortable(window.sortable_opt).disableSelection();

	//img排序
	window.sortable_p_opt = {
		tolerance: 'pointer',
		items: '> .t_photos',
		cursor: 'move',
		placeholder: 'img_highlight',
		helper: function(event, ui) {
			var num = $(ui).siblings('.t_photos:hidden').removeClass('ui-selected').end().siblings('.ui-selected').add($(ui));
			return $('<div id="drag-img"><div class="num">' + num.length + ' 张</div><div class="mask"></div><img src="' + $(ui).find('img').attr('src') + '" /></div>')
		},
		start: function(event, ui) {
			curDayid = get_day_id($(ui.item).addClass('ui-selected').data('one', 'one')); //拖动时记录下父级 dayid
			var imgAtt = $('#' + curDayid).find('.ui-selected').attr('data-poi'),
				imgObj = $('#' + curDayid).find('.t_photos[data-poi=' + imgAtt + ']'),
				temp = [];
			for (var i = 0; i < imgObj.length; i++) {
				temp.push(imgObj.eq(i).attr('data-travelcontentid'));
			};
			$('#' + curDayid).data('imgAtt', imgAtt);
			$('#' + curDayid).data('temp', temp);
			$('#' + curDayid).find('.ui-selected').each(function() {
				$(ui.item).index() < $(this).index() ? $(this).data('index', $(this).index() - 1) : $(this).data('index', $(this).index());
			}).find('.t_p_border').addClass('border_ccc');
		},
		sort: function(event, ui) {
			if ($(ui.item).data('one') == 'one') {
				$(ui.item).removeData('one').siblings('.ui-selected').each(function() {
					var el = $(this).find('img').hide().clone().addClass('clone_img').show().appendTo('#drag-img');
					el.css({
						top: $(this).offset().top - ui.offset.top,
						left: $(this).offset().left - ui.offset.left
					})
				})
			};
			$('#drag-img').find('.clone_img').each(function() {
				$(this).animate({
					top: 0,
					left: 0
				}, 300)
			})
		},
		stop: function(event, ui) {
			var curPoiObj = $('#' + curDayid);
			curPoiObj.find('.t_photos img').show().end().find('.t_p_border').removeClass('border_ccc');
			if (fromPoiid) {
				$(ui.item).hide();
				$.poi_state(fromPoiid);
				fromPoiid = false;
			} else {
				var after_item = $(ui.item);
				$(ui.item).siblings('.ui-selected').each(function() {
					var index_item = $(ui.item).data('index'),
						index_el = $(this).data('index'),
						clone_el = $(this).clone(true).fadeIn(300);
					if (index_el < index_item) {
						$(ui.item).before(clone_el)
					} else {
						after_item.after(clone_el);
						after_item = after_item.next();
					};
					$(this).remove();
				});
				curPoiObj.find('.ui-selected').removeClass('ui-selected');
				
				//遍历图片data-travelcontentid属性
				var imgContentIdArr = [],
					canInteract = 0,
					imgAtt = curPoiObj.data('imgAtt'),
					imgObj = curPoiObj.find('.t_photos[data-poi=' + imgAtt + ']'),
					temp = curPoiObj.data('temp');
				for (var i = 0; i < imgObj.length; i++) {
					var imgObjAttr = imgObj.eq(i).attr('data-travelcontentid');
					imgContentIdArr.push(imgObjAttr);
					if (imgObjAttr != temp[i]) canInteract = 1;
				};
				if (canInteract) {
					INTERFACE.img_addto_poi($.toJSON({//和后台交互
						ImageContentId: imgContentIdArr,
						POIContentId: $('#' + imgAtt).attr('data-travelcontentid'),
						TravelId: INTERFACE.TravelId
					}));
				};
			}
		}
	};
	$('.photo_content').sortable(window.sortable_p_opt).disableSelection();

	//图片拖动
	// $('.t_photos').draggable({
	// 	appendTo: "body",
	// 	cursor: 'move',
	// 	zIndex: 1000,
	// 	helper: function(event, ui) {
	// 		var num = $(this).siblings('.t_photos:hidden').removeClass('ui-selected').end().siblings('.ui-selected').add($(this));
	// 		return $('<div id="drag-img"><div class="num">' + num.length + ' 张</div><div class="mask"></div><img src="' + $(this).find('img').attr('src') + '" /></div>')
	// 	},
	// 	start: function(event, ui) {
	// 		var that = $(this);
	// 		that.css('cursor', 'move');
	// 		curDayid = that.parents('.edit_trip').attr('id'); //拖动时记录下父级 dayid
	// 		that.addClass('ui-selected').siblings('.ui-selected').each(function() {
	// 			var el = $(this).find('img').clone().addClass('clone_img').appendTo('#drag-img');
	// 			el.css({
	// 				top: $(this).offset().top - that.offset().top,
	// 				left: $(this).offset().left - that.offset().left
	// 			})
	// 		});
	// 	},
	// 	drag: function(event, ui) {
	// 		$('#drag-img').find('.clone_img').each(function() {
	// 			$(this).animate({
	// 				top: 0,
	// 				left: 0
	// 			}, 300)
	// 		});
	// 	},
	// 	stop: function(event, ui) {
	// 		$('.t_photos').css('cursor', 'pointer');
	// 		if (fromPoiid) {
	// 			$.poi_state(fromPoiid);
	// 			fromPoiid = false;
	// 		}
	// 	}
	// })

	//图片选择
	window.selectable_opt = {
		filter: '.t_photos',
		cancel: '.breadbar, .gs-header, .cui_nav_single, .cui_hd, .footblue, .t_edit, .t_delete, .poi_dot, .photo_null, .add_photo, .t_process, .side_fixed, #add_day, #step3_button, #base_ft, #d_prompt, #poi_popup, .step_tips, .step_tips_box, #gs_operate_right_fix'
	}
	$('body').selectable(window.selectable_opt);

	//需要处理两种情况，一种是拖到POI点，一种拖到page
	var fromPoiid;
	window.imgDrop = function(event, ui) {
		var imgArr = [];
		var imgObj = $(ui.draggable),
			imgSib = $(ui.draggable).siblings('.ui-selected'),
			toPoiid = $(this).attr('id'), //到哪个poi的id
			dayid = get_day_id($(this)), //到哪一天
			onDayID = $('#' + dayid).find('.poi_dot.on').attr('id'); //当前天数下选中的poi点

		fromPoiid = imgObj.attr('data-poi'); //来源poi的id

		//如果 新旧poi 没有变化，不作动作
		if (fromPoiid == toPoiid) {
			fromPoiid = false;
			return false;
		};

		//批量拖动的数组对象
		var img_index = imgObj.index();
		if (imgSib.length == 0) {
			imgArr.push(imgObj)
		} else {
			for (var i = 0; i < imgSib.length; i++) {
				var sib_index = imgSib.eq(i).index();
				if (sib_index > img_index && img_index >= 0) {
					imgArr.push(imgObj);
					img_index = -1;
				};
				imgArr.push(imgSib.eq(i));
				if (i == imgSib.length - 1 && imgObj.index() > imgSib.eq(imgSib.length - 1).index()) imgArr.push(imgObj);
			}
		};

		//改变图片属性并与后台交互
		var imgIdAtt = [];
		for (var i = 0; i < imgArr.length; i++) {
			$(this).attr('data-unknown') == 1 ? imgArr[i].attr('data-unknown', 1) : imgArr[i].removeAttr('data-unknown');
			imgArr[i].attr('data-poi', toPoiid).removeClass('ui-selected').hide().find('.t_p_show').hide();
			var att = imgArr[i].attr('data-travelcontentid');
			imgIdAtt.push(att)
		};
		INTERFACE.img_addto_poi($.toJSON({
			ImageContentId: imgIdAtt,
			POIContentId: $('#' + toPoiid).attr('data-travelcontentid'),
			TravelId: INTERFACE.TravelId
		}));

		//显示数字+N
		$('#' + toPoiid).attr('data-text', '+' + imgIdAtt.length).gspoptext({
			top: 20,
			time: 1500,
			css: {
				'font': 'bold 16px Arial',
				'color': 'red'
			}
		});

		//加减数据_需批定天数
		var numO = $('#' + fromPoiid).find('b');
		numO.text(parseInt(numO.text()) - imgArr.length);
		var numN = $('#' + toPoiid).find('b');
		numN.text(parseInt(numN.text()) + imgArr.length);
		if (numN.text() == 0) $.poi_state(toPoiid);

		//跨天POI拖动，需要把图片移到对应的dom节点下
		if (curDayid != dayid) {
			for (var i = 0; i < imgArr.length; i++) {
				// $('#' + dayid).find('.photo_null').before(imgArr[i].fadeIn(300))
				$('#' + curDayid).find('.t_photos img').show().end().find('.t_p_border').removeClass('border_ccc');
				$('#' + dayid).find('.photo_null').before(imgArr[i].clone(true).fadeIn(300))
			};
			!$('#' + toPoiid).hasClass('on') ? $('#' + toPoiid).trigger('click') : $('#' + dayid).find('.photo_null').hide();
		};

		$.unknown_photo_num($('.t_step_3'));
	}

	//移动配置
	window.droppable_opt = {
		accept: ".t_photos",
		hoverClass: "over",
		drop: window.imgDrop //注册全局的拖动
	}

	//接收图片的poi点
	$(".sort_ui").droppable(droppable_opt);

	//图片异步加载处理
	$("img").lazyload({
		threshold: 300
	});

	$('.step_tips').click(function() {
		$('.step_tips_box').toggle().find('.step_tips_cont:first').show().siblings('.step_tips_cont').hide();
		$.post(INTERFACE.CloseTravelTips, {}, function(data) {});
	});

	$('.step_tips_cont').find('input').click(function() {
		var parObj = $(this).parent();
		if (parObj.nextUntil().length == 0) {
			parObj.hide().siblings('.step_tips_cont:first').show();
		} else {
			parObj.hide().next('.step_tips_cont').show();
		};
	});

});