<?php include('../../config.php');  ?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
      <title>发表游记</title>
      <?php $fed->css('common/css/head'); ?>
      <?php $fed->css('common/css/global'); ?>
      <?php $fed->css('fed/css/icon'); ?>
      <?php $fed->css('fed/css/pager'); ?>
      <?php $fed->css('fed/css/button'); ?>
      <?php $fed->css('fed/css/suggest'); ?>
      <?php $fed->css('travels/css/travels'); ?>
    </head> 
  <body>
    <?php $fed->model('common/html/model_head');//头部 ?>

    <div class="content cf">
      <?php $fed->model('common/html/model_bread');//面包屑 ?>
      <div class="t_box t_step_2">
        <h3 class="tit_h3">游记标题</h3>

        <!--提示层-->
        <div id="t_prompt" class="t_prompt">
          <a class="close" href="javascript:void(0);">×</a>
          你的每一步操作，我们都会替你
          <br />
          实时保存，不用担心丢失内容。
        </div>
        <!--提示层end-->

        <!--流程条-->    
        <div class="t_process">
          <ul>
            <li class="cur">
              <i></i>
              <a href="#">上传照片</a>
            </li>
            <li>
              · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
              <i></i>
              <span>整理行程</span>
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

        <!--上传按钮-->
        <div class="upload_btn abs_btn">
          <span id="flashLink"></span>
        </div>
        <!--上传按钮 end -->

        <!--上传进度-->
        <div class="photo_progress">
          <div class="upload_det">
            <img src="http://dev.c-ctrip.com/travels/img/setp_02_bg.png" />
            <div class="limit">一次性传完照片，你的丰富行程将立即展现！</div>
          </div>
          <ul id="file_list"></ul>
        </div>
        <!--上传进度 end -->

        <div class="btn_center">
          <div class="state_proccessing"></div>
          <input id="step2_button" disabled="disabled" class="gsn-btn-1 disable" type="button" name="" value="下一步" />
        </div>
      </div>
    </div>

    <!-- 图片上传接口 -->
    <input type="hidden" id="gs_uploadurl" value="http://youimgupload.youtest.dev.sh.ctriptravel.com/photoupload.ashx" />
    <input type="hidden" id="imgRootPath" value="http://images4.c-ctrip.com/target" />

    <?php $fed->model('common/html/model_foot');//尾部 ?>
    <?php $fed->js('common/js/jquery-1.7.min'); ?>
    <?php $fed->js('common/js/head'); ?>
    <?php $fed->js('fed/js/gs_button'); ?>
    <?php $fed->js('fed/js/gs_calendar'); ?>
    <?php $fed->js('fed/js/gs_input'); ?>
    <?php $fed->js('fed/js/gs_placeholder_1'); ?>
    <?php $fed->js('fed/js/swfupload/swfupload'); ?>
  	<?php $fed->js('fed/js/jquery.cookie'); ?>
  	<?php $fed->js('fed/js/jquery.json-2.3.min'); ?>
  	<?php $fed->js('travels/js/travels_api'); ?>
    <?php $fed->js('travels/js/photoUpload'); ?>

    <script>

      var INTERFACE = {
        'TravelId': '1485711', //游记id
        'upload_success': 'mock.php?act=upload_success', //添加图片
        'del_img': 'mock.php?act=del_img', //删除图片
        'CloseSaveTravelTips': 'mock.php?act=CloseSaveTravelTips',
        "typeid": 1,
        'title': 2,
        'userid': 3,
        'button_image': '/travels/img/button_img.png'
      }

      $(function() {
        //提示层
        $('#t_prompt').on('click', '.close', function() {
          $(this).parent().fadeOut(300);
          $.post(INTERFACE.CloseSaveTravelTips, {}, function(data) {});
        });

      });

    </script>

  </body>
</html>
<?php $fed->get_ver(); //生成的版本号默认(v2.0) ?>