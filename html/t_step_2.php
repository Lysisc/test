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

        <!--图片上传-->
        <div id="photo_upload"></div>
        <!--图片上传 end -->

        <div class="btn_center">
          <input id="step2_button" disabled="disabled" class="gsn-btn-1 disable" type="button" name="" value="下一步" style="margin:10px 0;" onclick="location.href='http://dev.c-ctrip.com/travels/html/t_step_3.php'" />
        </div>
      </div>
    </div>

    <!-- 图片上传接口 -->
    <input type="hidden" id="gs_uploadurl" value="http://youimgupload.youtest.dev.sh.ctriptravel.com/photoupload.ashx" />
    <input type="hidden" id="flashUrl" value="http://dev.c-ctrip.com/components/swf/uploader.swf" />
    <!-- <input type="hidden" id="flashUrl" value="http://youimgupload.ctrip.com/flash/uploader.swf" /> -->

    <?php $fed->model('common/html/model_foot_seo');//尾部 ?>
    <?php $fed->js('common/js/jquery-1.7.min'); ?>
    <?php $fed->js('common/js/head'); ?>
    <?php $fed->js('common/js/gs_base'); ?>
    <?php $fed->js('components/js/swfobject'); ?>
    <?php $fed->js('fed/js/gs_button'); ?>
    <?php $fed->js('fed/js/gs_calendar'); ?>
    <?php $fed->js('fed/js/gs_input'); ?>
  	<?php $fed->js('fed/js/jquery.cookie'); ?>
  	<?php $fed->js('fed/js/jquery.json-2.3.min'); ?>
  	<?php $fed->js('fed/js/gs_placeholder_1'); ?>
    <?php $fed->js('travels/js/photoUpload_2'); ?>
	
    <script>
        var _poiid = window.location.href.match(/(poiid=){1}\w+/g),
            _dayid = window.location.href.match(/(dayid=){1}\w+/g),
            poiid = _poiid == null ? '' : '?' + _poiid[0],
            dayid = _dayid == null ? '' : '#' + _dayid[0].replace('dayid=', ''),
            imgCount = "496";

        var INTERFACE = {
            CloseSaveTravelTips: 'mock.php?act=CloseSaveTravelTips',
            TravelId: '1485711', //游记id
            typeid: 1,
            title: 2,
            userid: 3,
            JsonTravelImageList: '[{"ImageId":7007012,"ImageName":"chrysanthemum.jpg","ImgUrl":"http://images.ws.the9.com/flash/new/res/image/bible/33.jpg"},{"ImageId":7007013,"ImageName":"penguins.jpg","ImgUrl":"http://images.ws.the9.com/flash/new/res/image/skillName/Image6.png"}]',
            upload_success: function(json) { //图片上传成功
                var url = 'mock.php?act=upload_success';
                $.post(url, json, function(data) {})
            },
            del_img: function(json) {//删除上传的图片
                var url = 'mock.php?act=del_img';
                $.post(url, json, function(data) {})
            }
        }

        $(function() {
            $('#step2_button').attr('onclick', 'location.href="http://dev.c-ctrip.com/travels/html/t_step_3.php' + poiid + dayid + '"');
            console.log($('#step2_button').attr('onclick'));

            $('#t_prompt').on('click', '.close', function() {
                $(this).parent().fadeOut(300);
                $.post(INTERFACE.CloseSaveTravelTips, {}, function(data) {});
            });
        });
    </script>

  </body>
</html>
<?php $fed->get_ver(); //生成的版本号默认(v2.0) ?>