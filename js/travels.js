(function($) {
	var _alert = {
		a: '是否删除这一天？',
		at: '删除行程的同时，这一天内的照片也会被删除。',
		b: '是否删除该地点？',
		bt: '删除后，该地点内的照片也会被删除。',
		c: '是否删除该照片？',
		d: '对不起，无法删除',
		dt: '游记至少需要保留一天行程哦。',
		phot_01: '<i></i><span>请拖动照片进行关联，或</span><a href="#">添加照片</a>',
		phot_02: '<i></i><span>这一天没有照片，请</span><a href="#">添加照片</a>',
		phot_03: '<b>太棒了，照片已全部关联，请点击拍摄地点查看照片</b>',
		data_change_01: '<i class="t_prompt_arrow"></i><a class="close" href="javascript:void(0);">×</a>这个日期已经存在啦！',
		data_change_02: '<i class="t_prompt_arrow"></i><a class="close" href="javascript:void(0);">×</a>如日期排序被打乱，可<a class="refresh" href="#">刷新</a>页面，系统<br />将自动排序。（内容不会遗失）',
		data_change_03: '<i class="t_prompt_arrow"></i><a class="close" href="javascript:void(0);">×</a>日期穿越啦！'
	};

	var el = $('.t_step_3');
	var parentObj = function(obj) {
		return obj.parents('.edit_trip')
	}

	//POI点样式切换arrPoi.hover
	el.on('mouseover', '.poi_dot', function() {
		$(this).removeClass('new').addClass('over');
		$(this).find('.t_edit, .t_delete').show().siblings('b').hide();
	}).on('mouseout', '.poi_dot', function() {
		$(this).removeClass('over');
		$(this).find('.t_edit, .t_delete').hide().siblings('b').show();
	}).on('click', '.poi_dot:not(.add_poi)', function() {
		if (!$(this).hasClass('on')) {
			parentObj($(this)).find('.poi_dot').removeClass('on').find('.arr_t').remove();
			$(this).addClass('on').append('<div class="arr_t"></div>');
			var objAtt = $(this).attr('id');
			var imgObj = parentObj($(this)).find('.t_photos[data-poi=' + objAtt + ']');
			parentObj($(this)).find('.t_photos').hide().end().find(imgObj).fadeIn(300);
			$('.ui-draggable').not('.ui-draggable[data-poi=' + objAtt + ']').removeClass('on');
			$.poi_state(objAtt)
		};
		$.unknown_photo_num(el);
		return false
	})

	//图片样式切换
	el.on('mouseover', '.t_photos', function() {
		$(this).find('.t_p_show').show();
	}).on('mouseout', '.t_photos', function() {
		$(this).find('.t_p_show').hide();
	}).on('click', '.t_photos', function() {
		$(this).toggleClass('ui-selected');
	})

	//修改日期
	el.on('click', '.t_day .t_edit', function() {
		$('body').selectable('destroy');
		var thatParent = parentObj($(this)),
			that = thatParent.find('.day_date input'),
			thatIndex = that.index('.day_date input'),
			oldVal = that.val();
		that.calendar({
			foretime: 'no',
			callback: function() {
				var thatVal = that.val(),
					inputObj = $('.day_date input'),
					offset = that.parent().siblings('.day_num').offset(),
					_thatVal = new Date(thatVal.replace(/-/g, "/")),
					isReplayDate = 0;
				for (var i = 0; i < inputObj.length; i++) {
					var aDate = new Date($(inputObj[i]).val().replace(/-/g, "/"));
					if (thatIndex != i && _thatVal.toString() === aDate.toString()) {
						isReplayDate = 1;
						continue
					}
				};
				if (isReplayDate) {
					that.val(oldVal);
					$('#d_prompt').css({
						width: 120,
						top: offset.top - 43,
						left: offset.left - 14
					}).html(_alert.data_change_01).fadeIn(300);
					setTimeout(function() {
						$('#d_prompt').fadeOut(300)
					}, 3000)
				} else if (_thatVal > new Date()) {
					$('#d_prompt').css({
						width: 75,
						top: offset.top - 43,
						left: offset.left - 14
					}).html(_alert.data_change_03).fadeIn(300);
					that.val(oldVal);
					setTimeout(function() {
						$('#d_prompt').fadeOut(300)
					}, 3000)
				} else { //修改日期接口
					INTERFACE.edit_day($.toJSON({
						'ArgType': '1',
						'ScheduleId': that.parents('.edit_trip').attr('id').replace('day', ''),
						'TravelId': INTERFACE.TravelId,
						'ScheduleDate': that.val()
					}));

					//更改‘添加图片’url的地址和星期title
					var _poiid = thatParent.find('.poi_dot.on').attr('id'),
						poiid = _poiid == undefined ? '' : '&poiid=' + _poiid,
						poicontentid = $('#' + _poiid).attr('data-travelcontentid'),
						inputVal = that.val(),
						strs = inputVal.match(/-[\d]{1}\b/g);
					if (strs != null) {
						for (var i = 0; i < strs.length; i++) {
							var str = strs[i].replace('-', '-0');
							inputVal = inputVal.replace(/-[\d]{1}\b/, str)
						}
					};
					that.val(inputVal);
					thatParent.find('.photo_null a').attr('href', writetravelajax.AddPotoUrl + inputVal + '&poicontentid=' + poicontentid + poiid + '&dayid=' + thatParent.attr('id'));
					var day = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
						newDate = new Date(inputVal.replace(/-/g, "/"));
					that.attr('title', day[newDate.getDay()]);
					if (INTERFACE.IsCloseDateUpdateTips == '0') {
						$('#d_prompt').css({
							width: 210,
							top: offset.top - 60,
							left: offset.left - 14
						}).html(_alert.data_change_02).fadeIn(300).find('.refresh').attr('href', writetravelajax.LocUrl)
					}
				}
			}
		}).focus();
		that.off('focus');
		return false
	})

	//当日期input失去焦点后重新绑定selectable事件
	el.on('blur', '.day_date input', function() {
		$('body').selectable(window.selectable_opt);
	})

	//提示层
	$('#d_prompt').on('click', '.close', function() {
		$(this).parent().fadeOut(300);
	})

	//删日期弹层
	el.on('click', '.t_day .t_delete', function() {
		btnReset();
		$('#d_prompt').hide();
		var delObj = parentObj($(this));
		if ($('.edit_trip').length > 1) {
			$('#alert_popup').find('h3').html(_alert.a).end().find('p').html(_alert.at);
			$('#alert_popup').find('.gsn-btn-2').on('click', function() {

				//删除日期接口
				INTERFACE.edit_day($.toJSON({
					ArgType: '2',
					ScheduleId: delObj.attr('id').replace('day', ''),
					TravelId: INTERFACE.TravelId
				}));

				delObj.fadeOut(600, function() {
					delObj.remove();
					var _length = el.find('.t_photos').length;
					$('#imagesCount').text(_length);
					$.unknown_photo_num(el)
				});
				$.popupbox.close();
			})
		} else {
			$('#alert_popup').find('h3').html(_alert.d).end().find('p').html(_alert.dt);
			$('#alert_popup').find('.gsn-btn-2').val('确定').on('click', function() {
				$.popupbox.close();
			});
			$('#alert_popup').find('.gsn-btn-6').hide()
		};
		$.popupbox.show({
			id: 'alert_popup'
		})
	})

	//删图片弹层
	el.find('.t_photos .t_delete').on('click', function() {
		btnReset();
		var argObj = $(this).parents('.t_photos');
		$('#alert_popup').find('h3').html(_alert.c).end().find('p').hide();
		$('#alert_popup').find('.gsn-btn-2').on('click', function() {
			deleteObj(argObj, poiChange);
			$.popupbox.close();
		});
		$.popupbox.show({
			id: 'alert_popup'
		});
		return false;
	})

	//删POI点弹层
	el.on('click', '.poi_dot .t_delete', function() {
		btnReset();
		var argObj = $(this).parent('.poi_dot');
		$('#alert_popup').find('h3').html(_alert.b).end().find('p').html(_alert.bt);
		$('#alert_popup').find('.gsn-btn-2').on('click', function() {
			deleteObj(argObj, imgChange);
			$.popupbox.close();
		});
		$.popupbox.show({
			id: 'alert_popup'
		});
		return false;
	})

	//修改POI点弹层
	el.on('click', '.poi_dot .t_edit', function() {
		$('#poi_popup').data('edit_day_id', parentObj($(this)).attr('id'));
		$('#poi_popup').data('poi_id', $(this).parent('.poi_dot').attr('id')).find('h3').html('修改拍摄地点');
		$.reset_poi_popup();
		$.popupbox.show({
			id: 'poi_popup'
		});
		$('#btnAddPoi').width(450).focus().siblings('span').text($(this).siblings('p').text()).show();
		$('.guess_address').find('h4').hide();
		return false
	})

	//增加新的POI点
	el.on('click', '.add_poi', function() {
		var dayId = parentObj($(this)).attr('id');
		INTERFACE.guess_new_poi({ //拿到预测poi的json表
			TravelId: INTERFACE.TravelId,
			ScheduleId: dayId.replace('day', '')
		}, function(data) {
			var dom = [],
				data = eval(data.Html);
			if (data) {
				for (var i = 0; i < data.length; i++) {
					var title = data[i].name + (data[i].districtname == null ? '' : ' ,' + data[i].districtname),
						typeName = "";
					switch (data[i].type) {
						case 3:
							typeName = "jingdian";
							break;
						case 5:
							typeName = "gouwu";
							break;
						case 1:
							typeName = "zhusu";
							break;
						case 2:
							typeName = "canyin";
							break;
						default:
							continue;
					};
					dom.push('<a href="javascript:;" class="' + typeName + '" title="' + title + '" data-id="' + data[i].id + '" data-name="' + data[i].name + '" data-districtid="' + data[i].districtid + '" data-districtname="' + data[i].districtname + '">' + data[i].shortname + '</a>')
				};
				$('#poi_popup').find('.guess_address_inner').css('overflow', 'hidden').append($(dom.join('')))
			};
			if ($('.guess_address').find('.jingdian').length == 0) $('.guess_address').find('h4').hide();
			$('.guess_address_inner').height() > 120 ? $('#poi_popup').find('.guess_address').css({
				'overflow-y': 'scroll',
				'overflow-x': 'hidden'
			}) : $('#poi_popup').find('.guess_address').css({
				'overflow-y': 'hidden',
				'overflow-x': 'hidden'
			})
		});
		$('#poi_popup').data('edit_day_id', dayId); //需要把 edit_day_id 传给弹出层
		$('#poi_popup').data('poi_id', false).find('h3').html('添加拍摄地点');
		$.reset_poi_popup();
		$.popupbox.show({
			id: 'poi_popup'
		});
		$('#btnAddPoi').width(130).focus()
	})

	//增加后一天
	$('#add_day').on('click', function() {
		var offset = $('#add_day').offset(),
			inputObj = el.find('.day_date input'),
			isFutureDate = 0;
		for (var i = 0; i < inputObj.length; i++) {
			var cDate = new Date($(inputObj[i]).val().replace(/-/g, "/"));
			if (cDate.getFullYear() == new Date().getFullYear() && cDate.getMonth() == new Date().getMonth() && cDate.getDate() == new Date().getDate()) {
				isFutureDate = 1;
				continue
			}
		};
		if (isFutureDate) {
			$('#d_prompt').css({
				width: 75,
				top: offset.top - 48,
				left: offset.left - 10
			}).html(_alert.data_change_03).fadeIn(300);
			setTimeout(function() {
				$('#d_prompt').fadeOut(300)
			}, 3000);
			return false
		};
		if ($(this).attr('data-submit') == '0') return false;
		$(this).attr('data-submit', '0');
		INTERFACE.date_api($.toJSON({
			ArgType: '0',
			TravelId: INTERFACE.TravelId
		}), function(data) {
			if (data != null) {
				var newDay = $('.edit_trip').last().clone();
				$('.btn_center').before(newDay.fadeIn(600));
				newDay.attr('id', 'day' + data.ScheduleId);
				newDay.find('.day_num span').html(data.Day);
				newDay.find('.day_date input').val(data.DateString).attr('title', data.Week);
				newDay.find('.t_photos,.sort_ui').remove();
				newDay.find('.photo_null').html(_alert.phot_02).show();
				newDay.find('.photo_null a').attr('href', writetravelajax.AddPotoUrl + newDay.find('.day_date input').val() + '&dayid=day' + data.ScheduleId);
				$('#add_day').attr('data-submit', '1')
			}
		})
	})

	//img或者poi删除效果
	function deleteObj(obj, callback) {
		obj.animate({
			opacity: 0,
			width: 0
		}, 600, function() {
			INTERFACE.del_img_poi_api($.toJSON({
				TravelContentId: obj.attr('data-travelcontentid')
			}));
			callback(obj);
			$.unknown_photo_num(el)
		})
	}

	//删除img时的操作
	function poiChange(obj) {
		var objAtt = obj.attr('data-poi');
		var val = $('#imagesCount').text();
		$('#imagesCount').text(val - 1);
		obj.remove();
		$.poi_state(objAtt)
	}

	//删除poi时的操作
	function imgChange(obj) {
		var objAtt = obj.attr('id'),
			dayObj = parentObj(obj),
			imgObj = dayObj.find('.t_photos[data-poi=' + objAtt + ']'),
			val = $('#imagesCount').text(),
			inputVal = dayObj.find('.day_date input').val();
		$('#imagesCount').text(val - imgObj.length);
		obj.add(imgObj).remove();
		dayObj.find('.sort_ui:first').trigger('click');
		if (dayObj.find('.t_photos').length == 0) dayObj.find('.photo_null').html(_alert.phot_02).show();
		if (dayObj.find('.photo_null').children().is('a')) {
			if (dayObj.find('.sort_ui').length == 0) {
				dayObj.find('.photo_null a').attr('href', writetravelajax.AddPotoUrl + inputVal + '&dayid=' + dayObj.attr('id'))
			} else {
				var poiid = dayObj.find('.sort_ui:first').attr('id'),
					poicontentid = dayObj.find('.sort_ui:first').attr('data-travelcontentid');
				dayObj.find('.photo_null a').attr('href', writetravelajax.AddPotoUrl + inputVal + '&poicontentid=' + poicontentid + '&poiid=' + poiid + '&dayid=' + dayObj.attr('id'))
			}
		}
	}

	//重置按钮
	function btnReset() {
		$('#alert_popup').find('.gsn-btn-2').unbind('click').val('删除');
		$('#alert_popup').find('p').show().end().find('.gsn-btn-6').show().add('#alert_popup .close').on('click', function() {
			$.popupbox.close()
		});
	}

	//判断POI状态
	$.poi_state = function(poiid) {
		var changPoiObj = $('#' + poiid),
			poicontentid = changPoiObj.attr('data-travelcontentid'),
			dayObj = parentObj(changPoiObj),
			phoNon = dayObj.find('.photo_null'),
			imgObj = dayObj.find('.t_photos[data-poi=' + poiid + ']'),
			inputVal = dayObj.find('.day_date input').val();
		changPoiObj.find('b').text(imgObj.length);
		if (changPoiObj.attr('data-unknown') == '1' && imgObj.length == 0) {
			deleteObj(changPoiObj, imgChange);
		};
		if (dayObj.find('.t_photos').length == 0) {
			phoNon.html(_alert.phot_02).show()
		} else {
			imgObj.length == 0 ? phoNon.html(changPoiObj.attr('data-unknown') == '1' ? _alert.phot_03 : _alert.phot_01).show() : phoNon.hide();
		};
		if (phoNon.children().is('a')) phoNon.find('a').attr('href', writetravelajax.AddPotoUrl + inputVal + '&poicontentid=' + poicontentid + '&poiid=' + poiid + '&dayid=' + dayObj.attr('id'))
	}

	//未关联照片统计
	$.unknown_photo_num = function(el) {
		var unknownPhoto = el.find('.t_photos[data-unknown="1"]').length;
		$('#unknown_photo').text(unknownPhoto);
		unknownPhoto == 0 ? $('.det_alert').hide() : $('.det_alert').show()
	}

	//拿到回传poiid（如果存在）
	var _poiid = window.location.href.match(/(poiid=){1}\w+/g),
		poiid = _poiid == null ? '' : _poiid[0].replace('poiid=', '');
	if (poiid) $('#' + poiid).trigger('click')

})(jQuery);