/*! test 2014-05-20 17:53:46 */
$(function(){function a(){var d=$("#generatPDF"),e=setInterval(function(){$.get(INTERFACE.pdfCheckUrl+"?travelId="+INTERFACE.TravelId+"&rnd="+new Date,function(f){switch(f.Status){case 2:clearInterval(e);var g=f.Title,h=parseInt(10*f.FileSize/1024)/10,i="<h2>让你久等了，游记已制作成PDF</h2><div><i></i><h4>"+g+"</h4><p>PDF大小："+h+'MB</p><p>下载你喜爱的游记一起去旅行吧！</p><a class="generat_btn" href="javascript:;">点击下载PDF</a></div>';b.attr("class","generat_success").html(i),d.find(".generat_btn").add(".btn_pdf, .link_pdf").attr({href:INTERFACE.pdfDownUrl+"?travelId="+INTERFACE.TravelId,target:"_blank"});break;case 4:clearInterval(e);var i='<div></div><p>服务器好像出了点问题，PDF生成失败…</p><a class="generat_btn" href="javascript:;">重新制作PDF</a>';b.attr("class","generat_failure").html(i),d.find(".generat_btn").click(function(){return d.find(".generat_failure").attr("class","generat_loading").html(c),a(),!1});break;default:return}})},5e3);d.find(".close").click(function(){$.popupbox.close(),clearInterval(e)})}$(window).resize(function(){$.ifPdfVisible()});var b=$("#generatPDF").find(".generat_loading"),c=b.html();$(".btn_pdf, .link_pdf").click(function(){$(this).hasClass("a_popup_login")||"javascript:;"!=$(this).attr("href")||$.get(INTERFACE.pdfCheckUrl+"?travelId="+INTERFACE.TravelId+"&rnd="+new Date,function(d){if(5==d.Status){var e="<div></div><p>游记PDF下载异常火爆，请耐心等待一下，稍后再试！</p>";b.attr("class","generat_failure").html(e),$.popupbox.show({id:"generatPDF"}),$("#generatPDF").find(".close").click(function(){$.popupbox.close()})}else 2!=d.Status&&($("#generatPDF > div").attr("class","generat_loading").html(c),$.popupbox.show({id:"generatPDF",callback:a}))})})});