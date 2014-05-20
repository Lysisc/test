<?php include('../../config.php');  ?>
<!DOCTYPE html>
<html lang="en">
<head>

    <meta http-equiv="X-UA-Compatible" content="IE=10" charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>编辑游记</title>

    <?php $fed->css('common/css/global'); ?>
    <?php $fed->css('common/css/head'); ?>
    <?php $fed->css('fed/css/gs_bottom_pop'); ?>
    <?php $fed->css('fed/css/suggest'); ?>
    <?php $fed->css('fed/css/icon'); ?>
    <?php $fed->css('fed/css/button'); ?>
    <?php $fed->css('travels/css/write_journals'); ?>
    
    <link charset="utf-8" type="text/css" rel="stylesheet" href="http://youresource.c-ctrip.com//css/common/uispecform.css?t=20140327163705" />
    <link charset="utf-8" type="text/css" rel="stylesheet" href="http://youresource.c-ctrip.com//css/common/tag-nav.css?t=20140327163705" />
    <link charset="utf-8" type="text/css" rel="stylesheet" href="http://youresource.c-ctrip.com//css/member/write-journals.css?t=20140327163705" />

</head>
<body>

    <?php $fed->model('common/html/model_head');//头部 ?>

    <div class="content cf">
        <a href="/">旅游攻略社区</a><i>&nbsp;&gt;&nbsp;</i><a href="/travels/">游记</a><i>&nbsp;&gt;&nbsp;</i>编辑游记
    </div>

    <div class="travelCon cf">
        <h1 id="pageTitle" cdata="" title="编辑游记">编辑游记</h1>
        <div class="mainCon">
            <div class="journals-content" name="#wtitle" id="wtitle">
                <label><i>*</i>标题：<span class="memo">(最多输入50个汉字)</span><span id="titlewarn" class="warn"></span></label>
                <input type="text" class="txt-input" id="title" value="厦门" name="title" maxlength="50"/>
            </div>
            <div class="journals-content" name="#wcontent" id="wcontent">
                <label id="lcontent1"><span class="tips"><a href="http://you.ctrip.com/showtopic-i1200013-r640128-YYGS.html" target="_blank">写优质游记，上首页，送积分</a></span> <i>*</i>正文：<span id="contentwarn" class="warn"></span></label>
                <script id="editor-wrap" type="text/plain"></script>
            </div>
            <div id="editTag" class="edit_tag cf">
                <h3>
                    游记标签 <span>让更多人能搜索到你的游记</span>
                </h3>
                <ul>
                    <li><a href="javascript:;" data-tagid="0" data-tagquoteid="0">摄影</a></li>
                    <li><a href="javascript:;" data-tagid="0" data-tagquoteid="0">行程</a></li>
                    <li><a href="javascript:;" data-tagid="0" data-tagquoteid="0">美食</a></li>
                    <li><a href="javascript:;" data-tagid="0" data-tagquoteid="0">家庭游</a></li>
                    <li><a href="javascript:;" data-tagid="0" data-tagquoteid="0">一日游</a></li>
                    <li><a href="javascript:;" data-tagid="0" data-tagquoteid="0">人文</a></li>
                    <li><a href="javascript:;" data-tagid="0" data-tagquoteid="0">自驾</a></li>
                    <li><a href="javascript:;" data-tagid="0" data-tagquoteid="0">购物</a></li>
                    <li><a href="javascript:;" data-tagid="0" data-tagquoteid="0">登山</a></li>
                    <li><a href="javascript:;" data-tagid="0" data-tagquoteid="0">三日游</a></li>
                    <li><a href="javascript:;" data-tagid="0" data-tagquoteid="0">海岛</a></li>
                    <li><a href="javascript:;" data-tagid="0" data-tagquoteid="0">赏花</a></li>
                    <li><a href="javascript:;" data-tagid="0" data-tagquoteid="0">夜生活</a></li>
                </ul>
                <div class="addtagbox" data-id="addTagBox">
                    <div class="textundis" data-text="1">
                    </div>
                    <a class="addtaglink" href="javascript:void(0)" data-edit="1">+ 添加标签</a>
                </div>
                <span class="tag-tip">标签请控制在10个字以内</span>
            </div>
            <div class="gsn-inputbox gsn-formerr" style="display: none;">
                <span class="gsn-tiptext">标签请控制在10个字内</span>
            </div>
            <div id="submitsec" class="journals-content">
                <span class="gsn-btn-2" id="btn_submit" style="cursor: pointer;">发表</span>
                <span class="gsn-btn-21 submit_pop" data-release="1">修改分类信息并发表</span>
                <span class="gsn-btn-21" id="draft" style="cursor: pointer;">保存草稿</span>
                <span class="savedCon"></span>
            </div>
        </div>
        <div class="sideCon">
            <div class="sidebox">
                <div class="mod photolistCon mt40">
                    <p class="btn-upload">
                        <span id="swfUploadcon"><i id="spanButtonPlaceholder"></i></span>
                        <span>(可上传多图，单击图片即可插入正文)</span>
                    </p>
                    <div id="photolist" class="gs_uload_container">
                        <div class="gsn-layer infobox" style="display: none;">
                            <a class="close" href="#"></a>
                            <p><span>单击</span>图片可插入到文章中</p>
                            <p class="textc"><a href="javascript:void 0;" class="gsn-btn-20">我知道了</a></p>
                        </div>
                        <div id="tipOverMaxcount" class="gsn-layer infobox" style="display: none;">
                            <a class="close" href="#"></a>
                            <p>一次最多添加50张照片，</p>
                            <p>超出的照片请在下次上传</p>
                            <p class="textc"><a href="javascript:void 0;" class="gsn-btn-20">我知道了</a></p>
                        </div>
                        <div class="bgbox" style="display: none;"></div>
                        <ul>
                            <li class="uplpad_info_pic_1">
                                <img src="http://dev.c-ctrip.com/travels/img/bg-album-default.png" alt="">
                                <p>单张不大于10M一次最多50张</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <?php $fed->model('common/html/model_foot');//尾部 ?>


    <div id="gsn_frame_selectdes" class="gsn-layer" style="display: none">
        <a href="javascript:selectdes_frame_close();" class="close" data-close="gsn_frame_selectdes"></a>
        <div class="gsn-form">
            <span class="first-tip">请添加游记所属目的地：</span>
            <span class="addtextclass">如果添加所属目的地，您的大作将被更多人看到哦！大大增加获得精华游记的几率！</span>
            <span class="second-tip"><em><span class="showinputbox"><i class="add-more"></i>添加更多目的地</span></em></span>
            <div id="searchTip" class="gsn-inputbox gsn-formerr" style="display: none">
                <input type="text" id="deshKword" class="gsn-terminisuggestbtn" placeholder="" />
                <input type="hidden" hiddenforid="deshKword" />
            </div>
            <div class="deslist">
                <span data="21" class="tag-btn-selected" style="cursor:pointer" onclick="javascript:void(0); return false;">厦门</span>
            </div>
            <div class="gsn-inputbox btnlist gsn-formerr">
                <span class="gsn-tiptext" id="report_err_tips">&nbsp;</span>
                <input type="button" id="btnSubmit" value="提交" class="gsn-btn-2" />
                <input type="button" id="btnSkip" value="跳过" class="gsn-btn-6" />
                <span class="photo-save-warn" style="margin-left: 20px; display: none; color: Red;">照片转存中，请稍候......</span>
            </div>
        </div>
    </div>

    <div id="gsn_frame_submiting" class="gsn-layer" style="z-index: 9999999; display: none">
        <div class="gsn-form">
            <span class="summit-tip" style="width: 100px; height: 50px;">正在提交中...请稍后</span>
        </div>
    </div>

    <div id="gsn_frame_nocontent" style="display: none"></div>

    <div id="gsn_frame_draft" class="gsn-layer" style="display: none">
        <a href="javascript:$.popupbox.close();" class="close" data-close="gsn_frame_draft"></a>
        <div class="gsn-form">
            <div>草稿保存成功，可到<a href="/members/7E983B00D43E4B599F4577E640C16F9D/journals">个人主页</a>中查看。</div>
            <div class="gsn-inputbox gsn-buttonbox" style="text-align: right; display: none;">
                <a class="gsn-btn-2" href="javascript:$.popupbox.close()">确定</a>
            </div>
        </div>
    </div>

    <div class="gsn-layer savejournal" id="gsn_frame_uploadimg" style="display: none;">
        <p class="loading"></p>
        <p>由于游记照片来自于第三方网站，系统正在进行转存，发表过程可能需要几分钟。</p>
        <p>您可以先去 <a target="_blank" href="http://you.ctrip.com/travels/">逛逛</a> 网站，给您带来了不便，万分抱歉。</p>
    </div>

    <!--弹出层容器-->
    <div id="gs_pop_01"></div>

    <!--游记内容hidden-->
    <textarea id="addText" name="content" style="display: none;">&lt;p&gt;&lt;img src="http://dimg02.c-ctrip.com/images/tg/129/706/530/6f14488ca1104730b0d904652bb6e871_R_100_100.jpg" data-id="1386817071035" phsid="11355405" /&gt;&lt;br&gt;&lt;/p&gt;</textarea>

    <!-- 传入静态资源地址 -->
    <input type="hidden" id="gs_static_resource" value="http://youresource.c-ctrip.com//">
    <input type="hidden" id="gs_uploadurl" value="http://youimgupload.ctrip.com/uploadphotosvc/photoupload.ashx">
    <input type="hidden" id="gs_edit_istest" value="1">

    <?php $fed->js('common/js/jquery-1.7.min'); ?>
    <?php $fed->js('common/js/gs_base'); ?>
    <?php $fed->js('common/js/head'); ?>
    <?php $fed->js('common/js/gs_popupbox'); ?>
    <?php $fed->js('common/js/gs_gotop'); ?>
    <?php $fed->js('common/js/lp_pupop_box20110527'); ?>
    <?php $fed->js('common/js/other'); ?>
    <?php $fed->js('fed/js/swfupload/swfupload'); ?>
    <?php $fed->js('fed/js/swfupload/swfupload.queue'); ?>
    <?php $fed->js('fed/js/lvping'); ?>
    <?php $fed->js('fed/js/control'); ?>
    <?php $fed->js('fed/js/gs_bottom_pop'); ?>
    <?php $fed->js('fed/js/gs_button'); ?>
    <?php $fed->js('fed/js/gs_calendar'); ?>
    <?php $fed->js('fed/js/gs_input'); ?>
    <?php $fed->js('fed/js/gs_messages'); ?>
    <?php $fed->js('fed/js/gs_placeholder_1'); ?>
    <?php $fed->js('fed/js/gs_report'); ?>
    <?php $fed->js('fed/js/gs_setfixed'); ?>
    <?php $fed->js('fed/js/gs_socialize'); ?>
    <?php $fed->js('fed/js/gs_tab'); ?>
    <?php $fed->js('fed/js/jquery.cookie'); ?>
    <?php $fed->js('fed/js/jquery.json-2.3.min'); ?>
    <?php $fed->js('fed/js/jquery.lazyload.min'); ?>
    <?php $fed->js('fed/js/suggest'); ?>
    <?php $fed->js('travels/js/gs_zh_en_string'); ?>
    <?php $fed->js('travels/js/write_jouranl'); ?>
    <?php $fed->js('travels/js/select-des-frame'); ?>
    <script charset='utf-8' type="text/javascript" src="http://youresource.c-ctrip.com/js/app/member/ueditor/editor_all_min.js"></script>

    <script type="text/javascript">
        $(function() {
            //关闭, 我知道了功能, 需要后台做个判断，只显示第一次
            $('#photolist .gsn-btn-20, #photolist .close').click(function() {
                $('#photolist .infobox, #photolist .bgbox').hide();
            });
        });
    </script>

</body>
</html>
<?php $fed->get_ver(); //生成的版本号默认(v2.0) ?>