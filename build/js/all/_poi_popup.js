/*! test 2014-05-20 15:46:54 */
!function($){function getjson(a){var a=GS.xssFilter(a);$.getJSON(searchAPI,{para:escape($.trim(a))},function(b){if(0==b.success){var c=b.list,d=[];for(i in c){var e=null==c[i].districtname?"":" ,"+c[i].districtname,f=null==c[i].Address?"":c[i].Address;d.push('<a href="javascript:;" data-id="'+c[i].id+'" poi-type="'+c[i].type+'" data-name="'+c[i].name+'" data-districtid="'+c[i].districtid+'" data-districtname="'+c[i].districtname+'">'+c[i].name.replace(a,"<b>"+a+"</b>")+e+'<span class="addr">'+f+"</span></a>")}$(".select_address_inner").html("").append($(d.join(""))),$(".select_address_inner").find("a:first").addClass("on"),$(".select_address_inner").on("mouseover","a",function(){return $(this).addClass("on").siblings("a").removeClass("on"),!1}),selectPOI(),selectPOI_nodata(a)}poi_popup.find(".select_address").css($(".select_address_inner").height()>120?{"overflow-y":"scroll","overflow-x":"hidden"}:{"overflow-y":"hidden","overflow-x":"hidden"})})}function selectPOI_nodata(a){poi_popup.find(".c_address").show();var b='<a class="c_address" href="javascript:;">+ 没有可选的地点，点击创建“<span>'+a+"</span>”</a>",c=poi_popup.find(".select_address");"one"!=c.data("one")?c.append($(b)).data("one","one"):c.find(".c_address").show().find("span").html(a)}function selectPOI(){poi_popup.find(".select_address_inner a[data-id]").on("click",function(){var a=$.trim($(this).attr("data-name")),b=$(this).attr("data-districtid"),c="null"==$(this).attr("data-districtname")?null:$(this).attr("data-districtname"),d=$(this).attr("poi-type");if("1"!=d&&"2"!=d&&"3"!=d&&"5"!=d&&"4"!=d)$.ajax({url:INTERFACE.custom_tags_url,type:"POST",async:!1,dataType:"json",data:$.toJSON({TravelId:INTERFACE.TravelId,POIName:encodeURIComponent(a),POIType:poiType(),POITypeId:99}),success:function(d){var e=d.Data;setPOI(e,poiType(),a,!0,b,c)}});else{var e=$(this).attr("data-id"),f="4"==d?"destination":poiType();setPOI(e,f,a,!1,b,c)}$(this).remove(),poi_popup.find(".select_address").hide().siblings(".guess_address").show()})}function poiType(a){var b=a?a.attr("class"):poi_popup.find(".over i").attr("class");return poi_popup.data("type",searchType[b]),poi_popup.data("type")}function setPOI(a,b,c,d,e,f){if(poi_popup.find(".fr span").hide(),$("#poi_popup").data("poi_id"))$("#btnAddPoi").val(c).data("data",{dataId:a,dataType:b,dataName:c,customDefinition:d,districtid:e,districtname:f});else{var g=$('<div class="poi" poi-id="'+a+'" poi-type="'+b+'" poi-name="'+c+'" poi-custom="'+d+'" data-districtid="'+e+'" data-districtname="'+f+'"><a href="javascript:void(0);"></a>'+c+"</div>\r\n");$(".btnAddPoi").before(g.fadeIn(600)),$("#btnAddPoi").val("").focus().siblings("span").show()}}var poi_popup=$("#poi_popup"),searchAPI=$("#gs_search").val(),searchType={jingdian:"sight",gouwu:"shopping",zhusu:"hotel",canyin:"restuarant"};poi_popup.on("click","a.close",function(){$.popupbox.close(),searchAPI=searchAPI.replace(/sight|shopping|hotel|restuarant$/,"sight"),poi_popup.find(".poi").remove(),poi_popup.find(".select_address_inner").html(""),poi_popup.find(".fr span").hide(),$("#btnAddPoi").val("")}),poi_popup.on("click",".tab a",function(){searchAPI=searchAPI.replace(/sight|shopping|hotel|restuarant$/,poiType($(this).find("i"))),$(this).addClass("over").siblings().removeClass("over"),poi_popup.find(".guess_address_inner a").hide();var a=poi_popup.find(".guess_address_inner a."+$(this).find("i").attr("class"));0==a.length?poi_popup.find("h4").hide():(poi_popup.find("h4").show(),a.show()),poi_popup.find(".tab_arr").animate({left:125*$(this).index()},600),poi_popup.find(".select_address").hide().siblings(".guess_address").show(),poi_popup.find(".c_address").hide(),poi_popup.find(".btnAddPoi span").show(),$("#btnAddPoi").removeData("data").val("").focus()}),poi_popup.on("click",".guess_address a",function(){for(var a=poi_popup.find(".poi_address .poi"),b=0;b<a.length;b++)if(a.eq(b).attr("poi-id")==$(this).attr("data-id"))return $("#btnAddPoi").focus(),!1;var c=$(this).attr("data-id"),d=poiType($(this)),e=$.trim($(this).attr("data-name")),f=$(this).attr("data-districtid"),g="null"==$(this).attr("data-districtname")?null:$(this).attr("data-districtname");setPOI(c,d,e,!1,f,g),$(this).addClass("on")}),poi_popup.on("keyup paste","#btnAddPoi",function(a){var b=function(){var a=$("#btnAddPoi").removeData("data").val();""!=a?(getjson(a),$("#btnAddPoi").siblings("span").hide(),poi_popup.find(".select_address").show().siblings(".guess_address").hide()):($("#btnAddPoi").siblings("span").show(),poi_popup.find(".select_address").hide().siblings(".guess_address").show())};"keyup"==a.type?b():setTimeout(b,100)}),poi_popup.on("click",".c_address",function(){var a=$(this).hide().find("span").text();INTERFACE.custom_tags($.toJSON({TravelId:INTERFACE.TravelId,POIName:encodeURIComponent(a),POIType:poiType()}),function(a){var b=$(".c_address").find("span").text().replace(/"/g,"&quot;");setPOI(a.Data,poiType(),b,!0,null,null)}),poi_popup.find(".select_address").hide().siblings(".guess_address").show()}),poi_popup.on("click",".poi a",function(){for(var a=$(this).parent().attr("poi-id"),b=poi_popup.find(".guess_address_inner a"),c=0;c<b.length;c++)b.eq(c).attr("data-id")==a&&b.eq(c).removeClass("on");$(this).parent().remove(),$("#btnAddPoi").focus()}),poi_popup.on("click",".gsn-btn-2",function(){var edit_day_id=$("#poi_popup").data("edit_day_id"),poi_id=$("#poi_popup").data("poi_id");if(poi_id){if(""!=$("#btnAddPoi").val()){var poiData=$("#btnAddPoi").data("data");if(void 0==poiData)return poi_popup.find(".fr span").html("请从下拉提示中选中拍摄地点").show(),$("#btnAddPoi").focus(),!1;$.popupbox.close();var POIInfo={POIId:poiData.dataId,POIType:poiData.dataType,POIName:encodeURIComponent(poiData.dataName),IsCustomDefinition:poiData.customDefinition,DistrictId:poiData.districtid,DistrictName:encodeURIComponent(poiData.districtname)};INTERFACE.editor_poi($.toJSON({POIInfo:POIInfo,ContentId:$("#"+poi_id).attr("data-travelcontentid"),TravelId:INTERFACE.TravelId}));var title=poiData.dataName+(null==poiData.districtname?"":" ,"+poiData.districtname),type="";switch(poiData.dataType){case"sight":type="jingdian";break;case"destination":type="jingdian";break;case"shopping":type="gouwu";break;case"hotel":type="zhusu";break;case"restuarant":type="canyin"}poi_popup.find(".fr span").hide(),$("#"+poi_id).removeAttr("data-unknown").attr("title",title).find("p").text(poiData.dataName).siblings("i").attr("class",type);var poi_img=$("#"+edit_day_id).find('.t_photos[data-poi="'+poi_id+'"][data-unknown="1"]'),inputVal=$("#"+edit_day_id).find(".day_date input").val(),poicontentid=$("#"+poi_id).attr("data-travelcontentid");0!=poi_img.length?(poi_img.removeAttr("data-unknown"),$.unknown_photo_num($(".t_step_3"))):($("#"+edit_day_id).find(".photo_null").html(0!=$("#"+edit_day_id).find(".t_photos").length?'<i></i><span>请拖动照片进行关联，或</span><a href="#">添加照片</a>':'<i></i><span>这一天没有照片，请</span><a href="#">添加照片</a>'),$("#"+edit_day_id).find(".photo_null a").attr("href",writetravelajax.AddPotoUrl+inputVal+"&poicontentid="+poicontentid+"&poiid="+poi_id+"&dayid="+edit_day_id))}else poi_popup.find(".fr span").html("拍摄地点不能为空").show(),$("#btnAddPoi").focus();return $("#btnAddPoi").removeData("data")}var PoiList=[];poi_popup.find(".poi").each(function(){var a={POIId:$(this).attr("poi-id"),POIType:$(this).attr("poi-type"),POIName:encodeURIComponent($(this).attr("poi-name")),IsCustomDefinition:$(this).attr("poi-custom"),DistrictId:$(this).attr("data-districtid"),DistrictName:encodeURIComponent($(this).attr("data-districtname"))};PoiList.push(a)}),PoiList[0]?($.popupbox.close(),searchAPI=searchAPI.replace(/sight|shopping|hotel|restuarant$/,"sight"),INTERFACE.add_new_poi($.toJSON({PoiList:PoiList,ScheduleId:edit_day_id.replace("day",""),TravelId:INTERFACE.TravelId}),function(data){var data=eval(data),dom=[];if(data){for(var i=0;i<data.length;i++){var typeName="";switch(data[i].PoiInfo.POIType){case 3:typeName="jingdian";break;case 4:typeName="jingdian";break;case 5:typeName="gouwu";break;case 1:typeName="zhusu";break;case 2:typeName="canyin"}dom.push('<div id="'+data[i].PoiInfo.TravelPOIId+'" class="poi_dot sort_ui" data-text="+1" data-travelcontentid="'+data[i].TravelContentId+'" title="'+data[i].PoiInfo.POIName+(null==data[i].PoiInfo.DistrictName?"":" ,"+data[i].PoiInfo.DistrictName)+'">'),dom.push('<i class="'+typeName+'"></i>'),dom.push("<p>"+data[i].PoiInfo.POIName+"</p>"),dom.push("<b>0</b>"),dom.push('<a class="t_edit" title="修改拍摄地点" href="javascript:void(0);"></a>'),dom.push('<a class="t_delete" title="删除" href="javascript:void(0);"></a>'),dom.push('<div class="arr_r"></div>'),dom.push("</div>")}var edit_day_id=$("#poi_popup").data("edit_day_id"),dayFrame=$("#"+edit_day_id);dayFrame.find(".add_poi").before($(dom.join("")).fadeIn(600)),dayFrame.find(".sort_ui").droppable(window.droppable_opt),dayFrame.find(".poi_box").sortable(window.sortable_opt).disableSelection()}else alert("错误异常")})):poi_popup.find(".fr span").html(""!=$("#btnAddPoi").focus().val()?"请从下拉提示中选中拍摄地点":"请先添加拍摄地点").show()}),$.reset_poi_popup=function(){poi_popup.find(".select_address").hide().siblings(".guess_address").show().find("h4").show(),poi_popup.find(".tab a").eq(0).addClass("over").siblings().removeClass("over"),poi_popup.find(".select_address_inner,.guess_address_inner").html(""),poi_popup.find(".tab_arr").css("left",0),poi_popup.find(".c_address").hide(),poi_popup.find(".poi").remove(),$("#btnAddPoi").removeData("data").val("").siblings("span").text("可添加多个拍摄地点").show()}}(jQuery);