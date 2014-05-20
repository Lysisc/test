/**
 * 发表完成
 * 需要引用 jqyer , gs_popupbox
 * @author  yusj@ctrip.com
 */

var selectdes_frame_close = null;
$(function() {

    //编辑时设置用户选择的目的地
    window.setUserDesValue = function() {
        //$("#gsn_frame_selectdes .first-tip").html('请选择游记所属目的地:');
        $("#gsn_frame_selectdes .second-tip").hide();
        $(".deslist").css({
            "margin-top": "4.5em"
        });
        $("#searchTip").show();
        if (!had_bindSuggest) {
            bindSuggest();
        }

        // Yusj,jcy 要求  右上角会出现+添加更多目的地样式不应该存在      
        //        var userDes = $("#selected-des").val();
        //        if (userDes != "") {
        //            $("#gsn_frame_selectdes .first-tip").html('请选择游记所属目的地:');
        //            $("#gsn_frame_selectdes .second-tip").show();
        //            $(".showinputbox").css({ "cursor": "pointer" });
        //            $(".deslist").css({ "margin-top": "0.5em" });
        //            $("#searchTip").hide();
        //        }
        //        else {
        //            if ($('.deslist span').length == 0) {
        //                $("#gsn_frame_selectdes .first-tip").html('请选择游记所属目的地:');
        //                $("#gsn_frame_selectdes .second-tip").hide();
        //                $(".deslist").css({ "margin-top": "4.5em" });
        //                $("#searchTip").show();
        //                if (!had_bindSuggest) { bindSuggest(); }
        //            }
        //        }

    };

    selectdes_frame_close = function() {
        $.popupbox.close();
        $(".deslist a").removeClass("tag-btn-selected").addClass("tag-btn-normal");
    };

    /*
    //由开发实现以下代码
    //弹出层事件去掉
    $('.gsn-btn-2').click(function(){
    var callback = function(){
    window.setUserDesValue();
    var userDes = $("#selected-des").val();
    if(userDes!=""){
    var des = userDes.split('|');
    if(des.length>0){
    for(var i=0;i<des.length;i++){
    var exist = false;
    var deslist = $(".deslist span");
    for(var j=0;j< deslist.length;j++){
    if(deslist[j].innerHTML == des[i]){ //存在则标识为已选
    $(deslist[j]).removeClass().addClass("tag-btn-selected");
    exist = true;
    }
    }
    if(exist) continue;
               
    //不存在
    var newdes =  $('<span class="tag-btn-selected">'+ des[i] +'</span>');
    $(".deslist").append(newdes);
    }
    }
    }
    };
    $.popupbox.show({id:'gsn_frame_selectdes',zIndex:'500',callback:callback});
    });
    */

    //点击添加更多目的地
    $(".showinputbox").live("click", function() {
        if ($("#searchTip").css("display") == 'block') return false;

        $(this).css({
            "cursor": "default"
        });
        $(".deslist").css({
            "margin-top": "4.5em"
        });
        $("#searchTip").show();
        if (!had_bindSuggest) {
            bindSuggest();
        }
    });


    //选择目的地
    $(".deslist span").live('click', function(e) {
        if ($(this).hasClass("tag-btn-normal")) {
            $(this).removeClass("tag-btn-normal").addClass("tag-btn-selected");
        } else {
            $(this).removeClass("tag-btn-selected").addClass("tag-btn-normal");
        }
        setDesValue();
    }); //end gsn_frame_selectdes function  

    //设置目的地到隐藏域便于程序读取
    function setDesValue() {
        var selectVal = [];
        $(".deslist .tag-btn-selected").each(function() {
            selectVal.push($(this).html());
        });

        $("#selected-des").val(selectVal.join('|'));
    };

    //$('#gsn_frame_selectdes #btn_submit').live('click', function (e) {
    //    var content = []
    //    $(".deslist .tag-btn-selected").each(function (a) {
    //        content.push($(this).html());
    //    });

    //    var ajaxData = {
    //        content: escape(content.join(","))
    //    };
    //    jQuery.ajax({
    //        type: "get",
    //        url: "/AjaxNew/GetGuideBookFeelBack.ashx",
    //        dateType: "plain",
    //        data: ajaxData,
    //        success: function (data) {
    //            alert("提交成功！");

    //        },
    //        error: function () {
    //            alert("对不起，提交失败！");
    //        }
    //    });

    //}); //end gsn_frame_selectdes function    

    $('#gsn_frame_selectdes #btn_cancle').live('click', function(e) {
        selectdes_frame_close();
    });

    //绑定 suggest

    var had_bindSuggest = false;

    function bindSuggest() {
        had_bindSuggest = true;
        //重定位 suggestlist 的位置 
        function resetSuggestDivPosition() {
            if ($("#deshKword")) {
                var inputKeyword = $("#deshKword").offset();
                if (inputKeyword) {
                    var h = $("#deshKword").outerHeight();
                    $("#deshKwordCon").css({
                        top: inputKeyword.top + h,
                        left: inputKeyword.left
                    });
                }
            }
        }


        var quickSearch = new lvping.ui.Suggest('#deshKword', {
            dataUrl: '/ajaxnew/SearchTipJson.ashx?rank=1',
            queryName: 'para'
        });

        quickSearch.sugContainer = function(obj) {
            var d = '';
            if (obj.destinations) {
                var a = [];
                var n = obj.destinations.length;
                for (var i = 0; i < n; i++) {
                    a.push('<a fhref="' + obj.destinations[i].id + '">' + obj.destinations[i].name + '</a>');
                }
                d = '<div class="sgt-kq"><em class="fast-sgt-des">目的地</em>' + a.join('') + '</div>';
            }

            resetSuggestDivPosition();
            return d;


        };
        quickSearch.setValues = function(obj) {
            $("#deshKword").val("");
            if (obj.text().indexOf('搜索') > -1) return false;
            if (obj.text() == "") return false;
            var selectValue;
            if (obj.text().indexOf('，') > -1) {
                selectValue = obj.text().split('，')[0];
            } else {
                selectValue = obj.text().split(',')[0];
            }

            var data = sid = obj.attr("fhref");
            //var data = (/d\d{0,}/.exec(fhref)[0]).replace(/d/, '');
            //var sid = (/s\d{0,}/.exec(fhref)[0]).replace(/s/, '');

            //var data = fhref.match(/\d+/ig);
            //var sid = data;

            var des = $('<span class="tag-btn-selected" data="' + data + '" sid="' + sid + '">' + selectValue + '</span>');

            var isAdded = false;
            $(".deslist span").each(function() {
                if ($(this).html() == selectValue) {
                    isAdded = true;
                }
            });
            if (isAdded) {
                //alert("你已经添加此目的地!");
                return false;
            }

            //     if($(".deslist span").length == 8 ){
            //        alert("最多选8个目的地!");
            //        return false;
            //     }
            //     else{
            //        $(".deslist").append(des);
            //        setDesValue();
            //        quickSearch.hide();
            //     }
            $(".deslist").append(des);
            setDesValue();

            quickSearch.hide();
        };

        $(window).scroll(function() {
            resetSuggestDivPosition();
        });
    }
});