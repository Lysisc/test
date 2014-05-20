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
      <?php $fed->css('travels/css/travels'); ?>
      <?php $fed->css('travels/css/_det_daybox'); ?>
      <?php $fed->css('travels/css/_edit_daybox'); ?>
      <?php $fed->css('travels/css/_edit_botfixed'); ?>
    </head>
  <body>
    <?php $fed->model('common/html/model_head');//头部 ?>

    <div class="content cf">
      <?php $fed->model('common/html/model_bread');//面包屑 ?>

      <!--发表成功-->
      <div class="t_box t_step_6 cf">
        <div class="step_6_bg">
          <i class="success"></i>
        </div>
        <div>
          <h2>恭喜你，游记发表成功。</h2>
          <p><span id="countdown">5</span>秒后将自动跳到你的游记。 <a href="#">手动跳转点这里</a></p>
        </div>
      </div>
      <!--发表成功 end -->

      <!--发表失败-->
      <div class="t_box t_step_6">
        <div class="step_6_bg">
          <i class="success"></i>
        </div>
        <div>
          <h2>恭喜你，游记发表成功。</h2>
          <p>
            成功上传 <b class="green">45</b> 张照片，可能由于网络缘故，有 <b class="orange">4</b> 张照片发表失败。
            <br />
            你可以重新编辑游记，在右侧“添加照片”重新上传。
          </p>
          <div class="step_6_btn">
            <input id="det_btn" class="gsn-btn-1" type="button" name="" value="编辑游记" />
            <a href="#">查看游记</a>
          </div>
        </div>
      </div>
      <!--发表失败 end -->

      <!--发表已提交-->
      <div class="t_box t_step_6 cf">
        <div class="step_6_bg">
          <i class="right"></i>
        </div>
        <div>
          <h2>游记发表成功，进入审核阶段。</h2>
          <p>小编会在24小时内审核你的大作。你可以去 <a href="#">个人主页</a> 看看审核状态，也可以 <a href="#">预览游记</a>
            <br />
            有任何疑问也可以写信给小编：<a href="mailto:vot@ctrip.com">vot@ctrip.com</a>
          </p>
        </div>
      </div>
      <!--发表已提交 end -->

      <!--转存失败-->
      <div class="t_box t_step_6 cf">
        <div class="step_6_bg">
          <i class="failure"></i>
        </div>
        <div>
          <h2>很抱歉，游记发表失败。</h2>
          <p>可能由于网络原因，游记未能提交，游记已存为草稿，可到 <a href="#">个人主页</a> 中重新发表。</p>
        </div>
      </div>
      <!--转存失败 end -->

      <!-- 客人态待审核提示页 -->
      <div class="t_box t_step_6 cf">
        <div class="step_6_bg">
          <i class="sorry"></i>
        </div>
        <div>
          <h2>非常遗憾，这篇游记正在审核中，精彩内容稍后呈现。</h2>
          <p>先去看看这个目的地的<a href="#">其他精彩游记</a>吧<br>有任何疑问也可以写信给小编：<a href="mailto:vot@ctrip.com">vot@ctrip.com</a></p>
        </div>
      </div>
      <!-- 客人态待审核提示页 end -->

    </div>

    <?php $fed->model('common/html/model_foot_seo');//尾部 ?>
    
    <?php $fed->js('common/js/jquery-1.7.min'); ?>
    <?php $fed->js('common/js/head'); ?>
    <?php $fed->js('common/js/gs_base'); //一些功能函数 ?>
    <?php $fed->js('fed/js/gs_button'); ?>
    <?php $fed->js('fed/js/gs_input'); ?>
  	<?php $fed->js('fed/js/gs_placeholder_1'); ?>
    <?php $fed->js('components/js/gs_inlineedit'); ?>

    <script type="text/javascript">
      // $(function() {
      //   var timer = $('#countdown').text();
      //   var time_link = self.setInterval(function() {
      //     timer = timer - 1;
      //     $('#countdown').text(timer);
      //     if (timer == 0) {
      //       clearInterval(time_link);
      //       window.location.href="你所要跳转的页面";
      //     };
      //   }, 1000);
      // });
    </script>
    
  </body>
</html>
<?php $fed->get_ver(); //生成的版本号默认(v2.0) ?>
