/**
 * 增加POI弹出层相关js
 * @type {Object}
 */

(function($) {

	var poi_popup = $('#poi_popup'),
		searchAPI = $('#gs_search').val();

	var searchType = { //搜索接口类型
		'jingdian': 'sight', //景点
		'gouwu': 'shopping', //购物
		'zhusu': 'hotel', //酒店
		'canyin': 'restuarant' //餐馆
	}

	poi_popup.on('click', 'a.close', function() { //关闭弹出层
		$.popupbox.close();
		searchAPI = searchAPI.replace(/sight|shopping|hotel|restuarant$/, 'sight');
		poi_popup.find('.poi').remove();
		poi_popup.find('.select_address_inner').html('');
		poi_popup.find('.fr span').hide();
		$('#btnAddPoi').val('');
	})

	poi_popup.on('click', '.tab a', function() { //tab切换
		searchAPI = searchAPI.replace(/sight|shopping|hotel|restuarant$/, poiType($(this).find('i')));
		$(this).addClass('over').siblings().removeClass('over');
		poi_popup.find('.guess_address_inner a').hide();
		var guess_poi = poi_popup.find('.guess_address_inner a.' + $(this).find('i').attr('class'));
		if (guess_poi.length == 0) {
			poi_popup.find('h4').hide();
		} else {
			poi_popup.find('h4').show();
			guess_poi.show()
		};
		poi_popup.find('.tab_arr').animate({
			'left': $(this).index() * 125
		}, 600);
		poi_popup.find('.select_address').hide().siblings('.guess_address').show();
		poi_popup.find('.c_address').hide();
		poi_popup.find('.btnAddPoi span').show();
		$('#btnAddPoi').removeData('data').val('').focus()
	})

	poi_popup.on('click', '.guess_address a', function() { //预测poi点事件绑定
		var oldPoi = poi_popup.find('.poi_address .poi');
		for (var i = 0; i < oldPoi.length; i++) {
			if (oldPoi.eq(i).attr('poi-id') == $(this).attr('data-id')) {
				$('#btnAddPoi').focus();
				return false
			}
		};
		var dataId = $(this).attr('data-id'),
			dataType = poiType($(this)),
			dataName = $.trim($(this).attr('data-name')),
			districtid = $(this).attr('data-districtid'),
			districtname = $(this).attr('data-districtname') == 'null' ? null : $(this).attr('data-districtname');
		setPOI(dataId, dataType, dataName, false, districtid, districtname);
		$(this).addClass('on')
	})

	poi_popup.on('keyup paste', '#btnAddPoi', function(e) { //快搜
		var eventObj = function() {
			var key = $('#btnAddPoi').removeData('data').val();
			if (key != '') {
				getjson(key);
				$('#btnAddPoi').siblings('span').hide();
				poi_popup.find('.select_address').show().siblings('.guess_address').hide()
			} else {
				$('#btnAddPoi').siblings('span').show();
				poi_popup.find('.select_address').hide().siblings('.guess_address').show()
			}
		}
		e.type == 'keyup' ? eventObj() : setTimeout(eventObj, 100)
	})

	poi_popup.on('click', '.c_address', function() { //建立自定义POI点
		var v = $(this).hide().find('span').text();
		INTERFACE.custom_tags($.toJSON({
			TravelId: INTERFACE.TravelId,
			POIName: encodeURIComponent(v),
			POIType: poiType()
		}), function(data) {
			var dataName = $('.c_address').find('span').text().replace(/"/g, '&quot;');
			setPOI(data.Data, poiType(), dataName, true, null, null)
		});
		poi_popup.find('.select_address').hide().siblings('.guess_address').show()
	})

	poi_popup.on('click', '.poi a', function() { //删除poi节点
		var poi_id = $(this).parent().attr('poi-id');
		var guess_poi = poi_popup.find('.guess_address_inner a');
		for (var i = 0; i < guess_poi.length; i++) {
			if (guess_poi.eq(i).attr('data-id') == poi_id) guess_poi.eq(i).removeClass('on')
		};
		$(this).parent().remove();
		$('#btnAddPoi').focus()
	})

	poi_popup.on('click', '.gsn-btn-2', function() { //完成按钮
		var edit_day_id = $('#poi_popup').data('edit_day_id');
		var poi_id = $('#poi_popup').data('poi_id');

		//修改poi
		if (poi_id) {
			if ($('#btnAddPoi').val() != '') {
				var poiData = $('#btnAddPoi').data('data');
				if (poiData == undefined) {
					poi_popup.find('.fr span').html('请从下拉提示中选中拍摄地点').show();
					$('#btnAddPoi').focus();
					return false
				};
				$.popupbox.close();
				var POIInfo = {
					POIId: poiData.dataId,
					POIType: poiData.dataType,
					POIName: encodeURIComponent(poiData.dataName),
					IsCustomDefinition: poiData.customDefinition,
					DistrictId: poiData.districtid,
					DistrictName: encodeURIComponent(poiData.districtname)
				};
				INTERFACE.editor_poi($.toJSON({
					POIInfo: POIInfo,
					ContentId: $('#' + poi_id).attr('data-travelcontentid'),
					TravelId: INTERFACE.TravelId
				}));
				var title = poiData.dataName + (poiData.districtname == null ? '' : ' ,' + poiData.districtname),
					type = '';
				switch (poiData.dataType) {
					case 'sight':
						type = "jingdian";
						break;
					case 'destination':
						type = "jingdian";
						break;
					case 'shopping':
						type = "gouwu";
						break;
					case 'hotel':
						type = "zhusu";
						break;
					case 'restuarant':
						type = "canyin";
						break;
				};
				poi_popup.find('.fr span').hide();
				$('#' + poi_id).removeAttr('data-unknown').attr('title', title).find('p').text(poiData.dataName).siblings('i').attr('class', type);
				var poi_img = $('#' + edit_day_id).find('.t_photos[data-poi="' + poi_id + '"][data-unknown="1"]'),
					inputVal = $('#' + edit_day_id).find('.day_date input').val(),
					poicontentid = $('#' + poi_id).attr('data-travelcontentid');
				if (poi_img.length != 0) {
					poi_img.removeAttr('data-unknown');
					$.unknown_photo_num($('.t_step_3'))
				} else {
					$('#' + edit_day_id).find('.photo_null').html($('#' + edit_day_id).find('.t_photos').length != 0 ? '<i></i><span>请拖动照片进行关联，或</span><a href="#">添加照片</a>' : '<i></i><span>这一天没有照片，请</span><a href="#">添加照片</a>');
					$('#' + edit_day_id).find('.photo_null a').attr('href', writetravelajax.AddPotoUrl + inputVal + '&poicontentid=' + poicontentid + '&poiid=' + poi_id + '&dayid=' + edit_day_id)
				}
			} else {
				poi_popup.find('.fr span').html('拍摄地点不能为空').show();
				$('#btnAddPoi').focus()
			};
			return $('#btnAddPoi').removeData('data')
		}

		//添加poi
		var PoiList = [];
		poi_popup.find('.poi').each(function() {
			var poiArg = {
				POIId: $(this).attr('poi-id'),
				POIType: $(this).attr('poi-type'),
				POIName: encodeURIComponent($(this).attr('poi-name')),
				IsCustomDefinition: $(this).attr('poi-custom'),
				DistrictId: $(this).attr('data-districtid'),
				DistrictName: encodeURIComponent($(this).attr('data-districtname'))
			};
			PoiList.push(poiArg)
		});
		if (PoiList[0]) {
			$.popupbox.close();
			searchAPI = searchAPI.replace(/sight|shopping|hotel|restuarant$/, 'sight');
			INTERFACE.add_new_poi($.toJSON({
				PoiList: PoiList,
				ScheduleId: edit_day_id.replace('day', ''),
				TravelId: INTERFACE.TravelId
			}), function(data) {
				var data = eval(data);
				var dom = [];
				if (data) {
					for (var i = 0; i < data.length; i++) {
						var typeName = "";
						switch (data[i].PoiInfo.POIType) {
							case 3:
								typeName = "jingdian";
								break;
							case 4:
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
						};
						dom.push('<div id="' + data[i].PoiInfo.TravelPOIId + '" class="poi_dot sort_ui" data-text="+1" data-travelcontentid="' + data[i].TravelContentId + '" title="' + data[i].PoiInfo.POIName + (data[i].PoiInfo.DistrictName == null ? '' : ' ,' + data[i].PoiInfo.DistrictName) + '">');
						dom.push('<i class="' + typeName + '"></i>');
						dom.push('<p>' + data[i].PoiInfo.POIName + '</p>');
						dom.push('<b>0</b>');
						dom.push('<a class="t_edit" title="修改拍摄地点" href="javascript:void(0);"></a>');
						dom.push('<a class="t_delete" title="删除" href="javascript:void(0);"></a>');
						dom.push('<div class="arr_r"></div>');
						dom.push('</div>');
					};
					var edit_day_id = $('#poi_popup').data('edit_day_id');
					var dayFrame = $("#" + edit_day_id);
					dayFrame.find('.add_poi').before($(dom.join('')).fadeIn(600));
					dayFrame.find('.sort_ui').droppable(window.droppable_opt);
					dayFrame.find('.poi_box').sortable(window.sortable_opt).disableSelection();
				} else {
					alert('错误异常')
				}
			})
		} else {
			poi_popup.find('.fr span').html($('#btnAddPoi').focus().val() != '' ? '请从下拉提示中选中拍摄地点' : '请先添加拍摄地点').show()
		}
	})

	function getjson(key) { //拿搜索数据
		var key = GS.xssFilter(key);
		$.getJSON(searchAPI, {
			para: escape($.trim(key))
		}, function(d) {
			if (d.success == 0) {
				var data = d.list,
					html = [];
				for (i in data) {
					var _data = data[i].districtname == null ? '' : ' ,' + data[i].districtname;
					var _addr = data[i].Address == null ? '' : data[i].Address;
					html.push('<a href="javascript:;" data-id="' + data[i].id + '" poi-type="' + data[i].type + '" data-name="' + data[i].name + '" data-districtid="' + data[i].districtid + '" data-districtname="' + data[i].districtname + '">' + data[i].name.replace(key, '<b>' + key + '</b>') + _data + '<span class="addr">' + _addr + '</span>' + '</a>');
				}
				$('.select_address_inner').html('').append($(html.join('')));
				$('.select_address_inner').find('a:first').addClass('on');
				$('.select_address_inner').on('mouseover', 'a', function() {
					$(this).addClass('on').siblings('a').removeClass('on');
					return false;
				});
				selectPOI();
				selectPOI_nodata(key)
			};
			$('.select_address_inner').height() > 120 ? poi_popup.find('.select_address').css({ //滚动条判断
				'overflow-y': 'scroll',
				'overflow-x': 'hidden'
			}) : poi_popup.find('.select_address').css({
				'overflow-y': 'hidden',
				'overflow-x': 'hidden'
			})
		})
	}

	function selectPOI_nodata(text) { //无数据时显示创建新地址
		poi_popup.find('.c_address').show();
		var html = '<a class="c_address" href="javascript:;">+ 没有可选的地点，点击创建“<span>' + text + '</span>”</a>';
		var me = poi_popup.find('.select_address');
		me.data('one') != 'one' ? me.append($(html)).data('one', 'one') : me.find('.c_address').show().find('span').html(text)
	}

	function selectPOI() { //建立搜索的POI点
		poi_popup.find('.select_address_inner a[data-id]').on('click', function() {
			var dataName = $.trim($(this).attr('data-name')),
				districtid = $(this).attr('data-districtid'),
				districtname = $(this).attr('data-districtname') == 'null' ? null : $(this).attr('data-districtname'),
				caseNum = $(this).attr('poi-type');
			if (caseNum != '1' && caseNum != '2' && caseNum != '3' && caseNum != '5' && caseNum != '4') {
				$.ajax({
					url: INTERFACE.custom_tags_url,
					type: "POST",
					async: false,
					dataType: 'json',
					data: $.toJSON({
						TravelId: INTERFACE.TravelId,
						POIName: encodeURIComponent(dataName),
						POIType: poiType(),
						POITypeId: 99
					}),
					success: function(responseText) {
						var dataId = responseText.Data;
						setPOI(dataId, poiType(), dataName, true, districtid, districtname);
					}
				})
			} else {
				var dataId = $(this).attr('data-id');
				var _poiType = caseNum == '4' ? 'destination' : poiType();
				setPOI(dataId, _poiType, dataName, false, districtid, districtname)
			};
			$(this).remove();
			poi_popup.find('.select_address').hide().siblings('.guess_address').show()
		})
	}

	function poiType(obj) { //获取当前拍摄地type
		var type = obj ? obj.attr('class') : poi_popup.find('.over i').attr('class');
		poi_popup.data('type', searchType[type]);
		return poi_popup.data('type');
	}

	function setPOI(dataId, dataType, dataName, customDefinition, districtid, districtname) { //生成poi标签
		poi_popup.find('.fr span').hide();
		if ($('#poi_popup').data('poi_id')) { //修改poi
			$('#btnAddPoi').val(dataName).data('data', {
				dataId: dataId,
				dataType: dataType,
				dataName: dataName,
				customDefinition: customDefinition,
				districtid: districtid,
				districtname: districtname
			})
		} else {
			var html = $('<div class="poi" poi-id="' + dataId + '" poi-type="' + dataType + '" poi-name="' + dataName + '" poi-custom="' + customDefinition + '" data-districtid="' + districtid + '" data-districtname="' + districtname + '"><a href="javascript:void(0);"></a>' + dataName + '</div>' + "\r\n");
			$('.btnAddPoi').before(html.fadeIn(600));
			$('#btnAddPoi').val('').focus().siblings('span').show()
		}
	}

	$.reset_poi_popup = function() { //重置弹出层
		poi_popup.find('.select_address').hide().siblings('.guess_address').show().find('h4').show();
		poi_popup.find('.tab a').eq(0).addClass('over').siblings().removeClass('over');
		poi_popup.find('.select_address_inner,.guess_address_inner').html('');
		poi_popup.find('.tab_arr').css('left', 0);
		poi_popup.find('.c_address').hide();
		poi_popup.find('.poi').remove();
		$('#btnAddPoi').removeData('data').val('').siblings('span').text('可添加多个拍摄地点').show()
	}

})(jQuery);