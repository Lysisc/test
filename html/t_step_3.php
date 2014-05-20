<?php include('../../config.php');  ?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
      <title>发表游记</title>
      <?php $fed->css('common/css/head'); ?>
      <?php $fed->css('common/css/global'); ?>
      <?php $fed->css('common/css/animate-custom'); ?>
      <?php $fed->css('fed/css/icon'); ?>
      <?php $fed->css('fed/css/calendar'); ?>
      <?php $fed->css('fed/css/button'); ?>
      <?php $fed->css('fed/css/suggest'); ?>
      <?php $fed->css('travels/css/travels'); ?>
    </head>
  <body>
    <?php $fed->model('common/html/model_head');//头部 ?>
    <div id="d_prompt" class="t_prompt" style="display: none;"></div>
    <div class="content cf">
      <?php $fed->model('common/html/model_bread');//面包屑 ?>
      <div class="t_box t_step_3">
        <a class="step_tips" href="javascript:;">使用帮助</a>
        <h3 class="tit_h3">游记标题</h3>

        <!-- tips -->
        <div id="t_prompt" class="step_tips_box">
          <div class="arrow"></div>
          <a class="close" href="javascript:void(0);">×</a>
          <div class="step_tips_cont" style="display: block;">
            <h3>关联拍摄地点：</h3>
            <p>1. 拖动照片到拍摄地点，进行关联。<br />2. 每一步操作都会实时保存。</p>
            <img src="../img/step_01.gif" />
            <input class="fr gsn-btn-21" type="button" value="下一条" />
          </div>
          <div class="step_tips_cont">
            <h3>调整照片顺序：</h3>
            <p>1. 选中或多选照片，拖动到目标位置。<br />2. 看到红框后松手，照片即插入到该位置。</p>
            <img src="../img/step_02.gif" />
            <input class="fr gsn-btn-21" type="button" value="下一条" />
          </div>
          <div class="step_tips_cont">
            <h3>选中多张照片或取消选中：</h3>
            <p>1. 拖动鼠标左键框选多张照片。<br />2. 点击页面空白处，可取消选择。</p>
            <img src="../img/step_03.gif" />
            <input class="fr gsn-btn-21" type="button" value="下一条" />
          </div>
        </div>
        <!-- tips -->

        <!--流程条-->    
        <div class="t_process">
          <ul>
            <li class="alr">
              <i></i>
              <a href="t_step_1.php">上传照片</a>
            </li>
            <li class="cur">
              · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
              <i></i>
              <a href="#">整理行程</a>
            </li>
            <li>
              · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
              <i></i>
              <span>添加文字</span>
            </li>
            <li>
              · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
              <i></i>
              <span>发布游记</span>
            </li>
          </ul>
        </div>
        <!--流程条 end -->    

        <div class="cf">
          <span class="add_photo fr">
            共
            <span id="imagesCount">27</span>
            张照片，你可以继续
            <a href="#">添加照片</a>
          </span>
        </div>

        <!--整理行程-->    
        <div id="edit_day_01" class="edit_trip cf">
          <div class="t_day">
            <div class="day_num">
              第
              <span>9999</span>
              天
            </div>
            <div class="day_date">
              <input type="text" value="2013-7-14" readonly="true" title="星期六">
            </div>
            <div>
              <a class="t_edit" title="修改日期" href="javascript:void(0);"></a>
              <a class="t_delete" title="删除" href="javascript:void(0);"></a>
            </div>
          </div>
          <div class="t_day_box">

            <!--图片列表-->    
            <div id="select_01" class="photo_content cf">
              <div class="t_photos" data-poi="day_1_1" data-unknown="1" data-travelcontentid="1213122" style="display: block;">
                <img src="http://p3.lvpingphoto.com/Bkh0pEkw_metal" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_1_1" data-unknown="1" data-travelcontentid="23213123" style="display: block;">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_1_1" data-unknown="1" data-travelcontentid="34324344" style="display: block;">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_1_1" data-unknown="1" data-travelcontentid="23312213" style="display: block;">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_1_1" data-unknown="1" data-travelcontentid="12223323" style="display: block;">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_1_1" data-unknown="1" data-travelcontentid="42412312" style="display: block;">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_1_2" data-travelcontentid="22444231">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_1_2" data-travelcontentid="33212212">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_1_2" data-travelcontentid="56564565">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_1_2" data-travelcontentid="45467676">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_1_2" data-travelcontentid="67575661">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_1_3" data-travelcontentid="51234543" data-unknown="1">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_1_3" data-travelcontentid="91235665" data-unknown="1">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_1_4" data-travelcontentid="81233657">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="photo_null"></div>
            </div>
            <!--图片列表 end-->    

            <h4 class="photo_tit">
              · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
              <i></i>
              拖动照片至拍摄地点进行关联
              · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
            </h4>

            <!--POI列表-->    
            <div class="poi_box">
              <div id="day_1_1" class="poi_dot sort_ui on" data-text="+1" data-unknown="1" data-travelcontentid="1_11"> <i class="jingdian"></i>
                <p>这是哪里？</p> <b>6</b>
                <a class="t_edit" title="修改拍摄地点" href="javascript:void(0);"></a>
                <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                <div class="arr_r"></div>
                <div class="arr_t"></div>
              </div>
              <div id="day_1_2" class="poi_dot sort_ui" data-text="+1" data-travelcontentid="1_22"> <i class="weizhi"></i>
                <p>中山公园</p> <b>5</b>
                <a class="t_edit" title="修改拍摄地点" href="javascript:void(0);"></a>
                <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                <div class="arr_r"></div>
              </div>
              <div id="day_1_3" class="poi_dot sort_ui" data-text="+1" data-unknown="1" data-travelcontentid="1_33">
                <i class="weizhi"></i>
                <p>这是哪里？</p>
                <b>2</b>
                <a class="t_edit" title="修改拍摄地点" href="javascript:void(0);"></a>
                <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                <div class="arr_r"></div>
              </div>
              <div id="day_1_4" class="poi_dot sort_ui" data-text="+1" data-travelcontentid="1_44">
                <i class="weizhi"></i>
                <p>人民广场</p>
                <b>1</b>
                <a class="t_edit" title="修改拍摄地点" href="javascript:void(0);"></a>
                <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                <div class="arr_r"></div>
              </div>
              <div class="poi_dot add_poi">
                <i class="tianjia"></i>
                <p>
                  添加拍摄
                  <br />            
                  地点
                </p>
              </div>
            </div>
            <!--POI列表 end--> </div>
          <div class="shadow"></div>
        </div>
        <!--整理行程 end -->    

        <!--整理行程-->    
        <div id="edit_day_02" class="edit_trip cf">
          <div class="t_day">
            <div class="day_num">
              第
              <span>2</span>
              天
            </div>
            <div class="day_date"><input type="text" value="2013-7-15" readonly="true" title="星期日"></div>
            <div>
              <a class="t_edit" title="修改日期" href="javascript:void(0);"></a>
              <a class="t_delete" title="删除" href="javascript:void(0);"></a>
            </div>
          </div>
          <div class="t_day_box">

            <!--图片列表-->    
            <div class="photo_content cf">
              <div class="t_photos" data-poi="day_2_1" data-unknown="1" style="display: block;">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_2_1" data-unknown="1" style="display: block;">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_2_1" data-unknown="1" style="display: block;">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_2_1" data-unknown="1" style="display: block;">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_2_1" data-unknown="1" style="display: block;">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_2_2">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_2_2">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_2_2">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_2_2">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_2_2">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_2_3">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_2_3">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="t_photos" data-poi="day_2_4" data-unknown="1">
                <img src="http://dev.c-ctrip.com/travels/img/img_0723.png" />    
                <div class="t_p_show">
                  <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                  <div class="mask"></div>
                </div>
                <div class="t_p_border"></div>
              </div>
              <div class="photo_null"></div>
            </div>
            <!--图片列表 end-->    

            <h4 class="photo_tit">
              · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
              <i></i>
              拖动照片至拍摄地点进行关联
              · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
            </h4>

            <!--POI列表-->    
            <div class="poi_box cf">
              <div id="day_2_1" class="poi_dot sort_ui on" data-text="+1" data-unknown="1" data-travelcontentid="2_11"> <i class="jingdian"></i>
                <p>这是哪里？</p> <b>5</b>
                <a class="t_edit" title="修改拍摄地点" href="javascript:void(0);"></a>
                <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                <div class="arr_r"></div>
                <div class="arr_t"></div>
              </div>
              <div id="day_2_2" class="poi_dot sort_ui" data-text="+1" data-travelcontentid="2_22"> <i class="weizhi"></i>
                <p>老西门</p> <b>5</b>
                <a class="t_edit" title="修改拍摄地点" href="javascript:void(0);"></a>
                <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                <div class="arr_r"></div>
              </div>
              <div id="day_2_3" class="poi_dot sort_ui" data-text="+1" data-travelcontentid="2_33">
                <i class="weizhi"></i>
                <p>五角场</p>
                <b>2</b>
                <a class="t_edit" title="修改拍摄地点" href="javascript:void(0);"></a>
                <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                <div class="arr_r"></div>
              </div>
              <div id="day_2_4" class="poi_dot sort_ui" data-text="+1" data-unknown="1" data-travelcontentid="2_44">
                <i class="weizhi"></i>
                <p>这是哪里？</p>
                <b>1</b>
                <a class="t_edit" title="修改拍摄地点" href="javascript:void(0);"></a>
                <a class="t_delete" title="删除" href="javascript:void(0);"></a>
                <div class="arr_r"></div>
              </div>
              <div class="poi_dot add_poi ">
                <i class="tianjia"></i>
                <p>
                  添加拍摄
                  <br />            
                  地点
                </p>
              </div>
            </div>
            <!--POI列表 end--> </div>
          <div class="shadow"></div>
        </div>
        <!--整理行程 end -->
        
        <div class="btn_center">
          <div class="add_day">
            · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
            <a id="add_day" href="javascript:void(0);" data-submit="1"><i></i> 增加后一天</a>
            · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
          </div>
          <div class="det_alert">
            <div>
              尚有
              <span id="unknown_photo">14</span>
              张照片未关联拍摄地点，建议进行关联，或者继续下一步。
            </div>
          </div>
          <input id="step3_button" class="gsn-btn-1" type="button" name="" value="下一步" />
        </div>
      </div>
    </div>

    <div id="alert_popup" class="gsn-layer gs_hide">
      <a href="javascript:void(0)" class="close"></a>
      <h3></h3>
      <p></p>
      <div class="fr">
        <input type="button" value="取消" class="gsn-btn-6" />
        <input type="button" value="删除" class="gsn-btn-2" />
      </div>
    </div>

    <div id="poi_popup" class="gsn-layer gs_hide">
      <a href="javascript:void(0);" class="close"></a>
      <h3>添加拍摄地点</h3>
      <div class="tab">
        <a class="poi_dot over" href="javascript:;" style="border-left:none;">
          <i class="jingdian"></i>
          景点
        </a>
        <a class="poi_dot" href="javascript:;">
          <i class="zhusu"></i>
          酒店
        </a>
        <a class="poi_dot" href="javascript:;">
          <i class="canyin"></i>
          餐馆
        </a>
        <a class="poi_dot" href="javascript:;" style="border-right:none;">
          <i class="gouwu"></i>
          购物
        </a>
      </div>
      <div class="cf">
        <i class="tab_arr"></i>
        <div class="poi_address">
          <div class="btnAddPoi">
            <input id="btnAddPoi" type="text" name="btnAddPoi" />
            <span>可添加多个拍摄地点</span>
          </div>
        </div>
      </div>
      <div class="select_address">
          <div class="select_address_inner"></div>
      </div>
      <div class="guess_address">
        <h4>你可能去过：</h4>
        <div class="guess_address_inner">
          <!-- <a class="zhusu" href="javascript:;" data-id="11" data-name="中山公园" data-districtid="1495" data-districtname="1邯郸">中山公园</a>
          <a class="canyin" href="javascript:;" data-id="22" data-name="龙之梦购物中心" data-districtid="2495" data-districtname="2邯郸">龙之梦购物中心</a>
          <a class="gouwu" href="javascript:;" data-id="33" data-name="玫瑰坊" data-districtid="3495" data-districtname="3邯郸">玫瑰坊</a>
          <a class="gouwu" href="javascript:;" data-id="44" data-name="巴黎春天中山公园店" data-districtid="4495" data-districtname="4邯郸">巴黎春天中山公园店</a>
          <a class="jingdian" href="javascript:;" data-id="55" data-name="玫瑰坊" data-districtid="5495" data-districtname="5邯郸">玫瑰坊</a>
          <a class="canyin" href="javascript:;" data-id="66" data-name="巴黎春天中山公园店" data-districtid="6495" data-districtname="6邯郸">巴黎春天中山公园店</a>
          <a class="zhusu" href="javascript:;" data-id="77" data-name="中山公园" data-districtid="7495" data-districtname="7邯郸">中山公园</a>
          <a class="gouwu" href="javascript:;" data-id="88" data-name="龙之梦购物中心" data-districtid="8495" data-districtname="8邯郸">龙之梦购物中心</a>
          <a class="jingdian" href="javascript:;" data-id="99" data-name="玫瑰坊小吃街" data-districtid="9495" data-districtname="9邯郸">玫瑰坊小吃街</a>
          <a class="jingdian" href="javascript:;" data-id="00" data-name="中山公园龙之梦购物中心玫瑰坊中山公园龙之梦购物中心玫瑰坊中山公园龙之梦购物中心" data-districtid="0495" data-districtname="0邯郸">中山公园龙之梦购物中心玫瑰坊中山公园龙之梦购物中心玫瑰坊中山公园龙之梦购物中心</a> -->
        </div>
      </div>
      <div class="fr">
        <span>请先添加拍摄地点</span>
        <input type="button" value="完成" class="gsn-btn-2" />
      </div>
    </div>

    <!-- 新手教程 -->
    <div class="full_mask"></div>
    <div id="tutorial"></div>

    <!-- 搜索接口 -->
    <input type="hidden" id="gs_search" value="http://you.ctrip.com/SearchSite/Service/SearchPOI?Jsoncallback=?&type=sight" />

    <?php $fed->model('common/html/model_foot_seo');//尾部 ?>

    <?php $fed->js('common/js/jquery-1.7.min'); ?>
    <?php $fed->js('common/js/head'); ?>
    <?php $fed->js('common/js/gs_popupbox'); ?>
    <?php $fed->js('common/js/gs_base'); //一些功能函数 ?>
    <?php $fed->js('fed/js/jquery.cookie'); ?>
    <?php $fed->js('fed/js/gs_button'); ?>
    <?php $fed->js('fed/js/gs_calendar'); ?>
    <?php $fed->js('fed/js/gs_input'); ?>
    <?php $fed->js('fed/js/gs_placeholder_1'); ?>
    <?php $fed->js('fed/js/gs_messages'); ?>
    <?php $fed->js('fed/js/jquery.lazyload.min'); ?>
    <?php $fed->js('fed/js/jquery.json-2.3.min'); ?>
    <?php $fed->js('components/js/jquery-ui-1.9.2.custom.min'); ?>
    <?php $fed->js('travels/js/travels'); ?>
    <?php $fed->js('travels/js/_drag'); //拖动行为 ?>
    <?php $fed->js('travels/js/_poi_popup'); //增加poi弹出层相关js ?>
    
    <script>
      var INTERFACE = {
        TravelId: '1485711', //游记id
        edit_day: function(json) { //变更日期接口
          var url = 'mock.php?act=edit_day';
          $.post(url, json, function(data) {})
        },
        del_img_poi_api: function(json) { //删除照片与删除POI
          var url = 'mock.php?act=del_img_poi_api';
          $.post(url, json, function(data) {})
        },
        poi_sort_api: function(json) { //POI排序
          var url = 'mock.php?act=poi_sort_api';
          $.post(url, json, function(data) {})
        },
        img_addto_poi: function(json) { //图片拖动
          var url = 'mock.php?act=img_addto_poi';
          $.post(url, json, function(data) {})
        },
        editor_poi: function(json) { //修改POI节点
          var url = 'mock.php?act=editor_poi';
          $.post(url, json, function(data) {})
        },
        custom_tags: function(json, callback) { //自定义POI回传
          $.ajax({
            url: 'mock.php?act=custom_tags',
            type: "POST",
            async: false,
            dataType: 'json',
            data: json,
            success: function(responseText) {
              callback(responseText)
            }
          })
        },
        add_new_poi: function(json, callback) { //新增POI节点
          var url = 'mock.php?act=add_new_poi';
          $.post(url, json, function(data) {
            callback(data)
          })
        },
        guess_new_poi: function(json, callback) { //预测poi节点
          var url = 'mock.php?act=GetScheduleDayUnknowImagePoiList';
          $.post(url, json, function(data) {
            callback(data)
          }, 'json')
        },
        date_api: function(json, callback) { //增加天数
          var url = 'mock.php?act=date_api';
          $.post(url, json, function(data) {
            callback(data)
          }, 'json')
        }
      }

      //解决cookie在网页上导异常（不能放入 reay());
      $.cookie.raw = true;

      var writetravelajax = {
        'AddPotoUrl': 'http://dev.c-ctrip.com/travels/html/t_step_2.php?'
      }

      $(function() {
        //提示层
        $('#t_prompt').on('click', '.close', function() {
          $('.step_tips_box').toggle().find('.step_tips_cont:first').show().siblings('.step_tips_cont').hide();
          $.post(INTERFACE.CloseTravelTips, {}, function(data) {});
        });

        if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
          $('#tutorial,.full_mask').hide();
        } else {
          if ($.cookie('is_open_guide') == null) {
            $('.full_mask, #tutorial').height($(document.body).outerHeight()).show().click(function() {
              $('#tutorial,.full_mask').hide();
              $.cookie('is_open_guide', 1, {
                expires: 36500,
                path: '/'
              });
            });
          }
        };

      });

    </script>
    
  </body>
</html>
<?php $fed->get_ver(); //生成的版本号默认(v2.0) ?>
