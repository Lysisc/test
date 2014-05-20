//经典游记详情页改版
//@version 1.0
//@author lusc
//@date 20140213

(function($) {

	document.domain = $('#domainUrl').val(); //一定要设置作用域才能使用

	var upLoadApi = $('#upLoadUrl').val(), //上传图片
		upLoadData = $('.upLoad_data'),
		upLoadBtn = $('#upLoadBtn'),
		popupBtn = $('#set_cover_popup'),
		coverBtnL = $('.cover_pic_l'),
		coverBtnR = $('.cover_pic_r'),
		coverBoxUl = $('.cover_pic_cont ul').data('moveAble', 1),
		coverShow = $('.cover_show');

	new AjaxUpload(upLoadBtn[0], {
		action: upLoadApi,
		data: {
			'journalid': INTERFACE.TravelId,
			"typeid": INTERFACE.TypeId,
			"title": INTERFACE.Title,
			"userid": INTERFACE.UserId,
			"new": 1,
			"source": 1,
			"type": "journals",
			"token": "78A566F2-AA8A-4C4C-8EE8-F99FB3D4A1D8",
			"randomKey": +new Date()
		},
		onSubmit: function(file, ext) {
			if (ext && /^(jpg|jpeg|png)$/.test(ext)) { //ext是后缀名
				upLoadData.find('span').html('图片上传中，请耐心等待 ...').css('color', '#999').siblings('img').show();
				upLoadBtn.text('重新上传');
				upLoadBtn[0].disabled = "disabled";
			} else {
				upLoadData.find('span').html('不支持非图片格式！且图片格式必须为jpg，jpeg，png。').css('color', 'red').siblings('img').hide();
				return false;
			};
		},
		onComplete: function(file, response) {
			upLoadBtn[0].disabled = "";
			var data = (new Function("return " + response.replace(/(<script)+[^<>]*>[^\0]*(<\/script>)+/gm, "")))();
			if ("undefined" != typeof data.error && "" == data.error) {
				var dataVal = data.data[0];
				if (dataVal.data == '0') {
					upLoadData.find('span').html('Oops, 服务器好像出了点问题 ...').css('color', '#cc4200').siblings('img').hide();
					upLoadBtn.text('重新上传');
					window.console && console.log('图片服务端无数据返回！请确认服务器端口是否正确！');
					return false;
				};
				var imgId = dataVal.data;
				if (dataVal.width < 600) {
					upLoadData.find('span').html('请上传宽度1000px以上的图片来设置封面。').css('color', '#cc4200').siblings('img').hide();
					upLoadBtn.removeClass('gs_btn_v3').text('重新上传');
				} else if (dataVal.width >= 600 && dataVal.width < 1000) {
					upLoadData.find('span').html('上传宽度1000px以上的图片，封面效果为佳。').css('color', '#333').siblings('img').hide();
					addImgToDiv(imgId);
				} else {
					upLoadData.find('span').html('图片上传成功！您也可以重选一张图片。').css('color', '#333').siblings('img').hide();
					addImgToDiv(imgId);
				};
			} else {
				window.console && console.log('无效的数据');
			};
		}
	});

	function addImgToDiv(imgId) { //拿到返回的自定义图片src和imgId
		INTERFACE.custom_img({
			imgId: imgId
		}, function(data) {
			coverBoxUl.css('left', 0).find('.select').removeClass('select');
			coverBoxUl.prepend('<li><img data-id="' + data.Id + '" data-src="' + data.DataSrc + '" src="' + data.Src + '" /><div class="select"></div></li>');
			upLoadBtn.removeClass('gs_btn_v3').text('上传图片').parent(upLoadData).siblings('.upLoad_box').hide();
			coverShow.find('img').attr('src', data.DataSrc).end().find('p').addClass('move').html('上下拖动可调整封面图位置').siblings('div').show().parents('.set_cover_box').show();
			if (coverBoxUl.find('li').length > 7) coverBtnR.removeClass('disable');
			$('#set_cover').css('margin-top', '-258px');
		});
	};

	popupBtn.on('click', function() { //弹出层事件绑定
		if (popupBtn.data('hasClick') != 1) {
			popupBtn.data('hasClick', 1);
			INTERFACE.img_list(function(data) { //拿到图片json数组
				if (!data.HasImage) {
					$.popupbox.show({
						id: 'set_cover'
					});
					return false;
				};
				var dom = '',
					src = '';
				for (var i = 0; i < data.List.length; i++) {
					dom += '<li><img data-id="' + data.List[i].Id + '" data-src="' + data.List[i].DataSrc + '" src="' + data.List[i].Src + '" /><div></div></li>';
				};
				$('.set_cover_box').show().find(coverBoxUl).html('').append(dom);
				upLoadData.find('span').html('建议封面上传1000px宽度以上的图片。');
				upLoadBtn.removeClass('gs_btn_v3').text('上传图片').parent(upLoadData).siblings('.upLoad_box').hide();
				if (data.SelectId > 0) {
					var selectObj = coverBoxUl.find('img[data-id=' + data.SelectId + ']'),
						index = selectObj.parent('li').index(),
						mul = coverBoxUl.find('li').length % 7 != 0 ? parseInt(coverBoxUl.find('li').length / 7) + 1 : coverBoxUl.find('li').length / 7;
					_index = (index + 1) % 7 != 0 ? parseInt((index + 1) / 7) + 1 : (index + 1) / 7;
					selectObj.siblings('div').addClass('select');
					if (1 < _index && _index < mul) coverBtnL.add(coverBtnR).removeClass('disable');
					if (1 < _index && _index == mul) coverBtnL.removeClass('disable');
					if (_index == 1 && mul > 1) coverBtnR.removeClass('disable');
					coverBoxUl.css('left', (1 - _index) * 490);
					src = selectObj.attr('data-src');
				} else {
					if (coverBoxUl.find('li').length > 7) coverBtnR.removeClass('disable');
					coverBoxUl.find('li:first div').addClass('select');
					src = coverBoxUl.find('li:first img').attr('data-src');
				};
				coverShow.find('img').attr('src', src);
				coverShow.find('p').addClass('move').html('上下拖动可调整封面图位置').siblings('div').show();
				$.popupbox.show({
					id: 'set_cover',
					callback: function() {
						$('#set_cover').css('margin-top', '-258px');
					}
				});
			});
		} else {
			$.popupbox.show({
				id: 'set_cover'
			});
		};
	});

	//弹出层按钮事件绑定
	$('#set_cover').on('click', '.close, .confirm, .color_white', function() {
		if ($(this).hasClass('confirm')) {
			var imageId = coverBoxUl.find('.select').siblings('img').attr('data-id'),
				imgObj = $('.cover_show').find('img'),
				imgObjH = imgObj.height(),
				coverLocationY = parseInt(imgObj.css('top').replace('px', ''));
			INTERFACE.set_cover({ //刷新页面设置封面
				imageId: imageId,
				coverLocationY: parseInt(coverLocationY / imgObjH * 10000)
			}, function(data) {
				window.location.reload(true);
			});
		};
		$.popupbox.close();
		return false;
	});

	//图片拖动
	coverShow.on('mousedown', '.cover_show_mask', function(e) {
		var t = parseInt(coverShow.find('img').css('top')),
			h = coverShow.find('img').outerHeight(),
			m = e.pageY;
		$(document).bind('mousemove', function(e) {
			var top = parseInt(coverShow.find('img').css('top')),
				g = e.pageY,
				move = t - m + g;
			coverShow.children('.cover_show_mask').find('p, div').hide();
			if (h <= 200) return false;
			if (top >= 0) {
				var topVal = m - g < 0 ? 0 : move;
				coverShow.find('img').css('top', topVal);
			} else if (top <= 200 - h) {
				var topVal = m - g > 0 ? 200 - h : move;
				coverShow.find('img').css('top', topVal);
			} else coverShow.find('img').css('top', move);
			return false;
		});
		return false;
	});

	$(document).mouseup(function() { //拖动事件解绑
		coverShow.children('.cover_show_mask').find('p, div').show();
		$(document).unbind('mousemove');
	});

	//图片展示组件
	coverBoxUl.on('mouseover', 'li', function() { //图片hover和select效果
		var divObj = $(this).find('div');
		if (!divObj.hasClass('select')) divObj.addClass('hover');
	}).on('mouseout', 'li', function() {
		$(this).find('div').removeClass('hover');
	}).on('click', 'li', function() {
		$(this).siblings('li').find('div').removeClass('select');
		$(this).find('div').removeClass('hover').addClass('select');
		var imgSrc = $(this).find('img').attr('data-src');
		coverShow.find('img').attr('src', imgSrc).css('top', 0);
		return false;
	});

	coverBtnL.on('click', function() { //左边按钮绑定
		if (!$(this).hasClass('disable')) coverTurn(1);
		return false;
	});

	coverBtnR.on('click', function() { //右边按钮绑定
		if (!$(this).hasClass('disable')) coverTurn(0);
		return false;
	});

	function coverTurn(t) { //左右切换
		if (coverBoxUl.data('moveAble') == 1) {
			var offsetL = parseInt(coverBoxUl.css('left')),
				moveVal = t ? offsetL + 490 : offsetL - 490;
			coverBoxUl.data('moveAble', 0).animate({
				left: moveVal
			}, 300, judgeDisable);
		};
	};

	function judgeDisable() { //判断disable
		var coverBoxL = parseInt(coverBoxUl.css('left')) + 70;
		coverBoxL > 0 ? coverBtnL.addClass('disable') : coverBtnL.removeClass('disable');
		if (coverBoxUl.find('li').length > 7) {
			var coverBoxW = 0 - (coverBoxUl.find('li').length - 9) * 70;
			coverBoxL < coverBoxW ? coverBtnR.addClass('disable') : coverBtnR.removeClass('disable');
		};
		coverBoxUl.data('moveAble', 1);
	};

})(jQuery);