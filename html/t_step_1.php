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
    </head>
  <body>
    <?php $fed->model('common/html/model_head');//头部 ?>

    <div class="content cf">
      <?php $fed->model('common/html/model_bread');//面包屑 ?>
      <div class="t_box t_step_1">
        <h2>给游记起个名字</h2>
        <input id="t_name" type="text" name="" placeholder="请输入标题，最多50个字" value="" />
        <div id="len_span">还可以输入<span>50</span>字</div>
        <div class="btn_center">
          <input id="next_btn" disabled="disabled" class="gsn-btn-1 disable" type="button" onclick="location.href='t_step_2.php'" name="" value="下一步" />
        </div>
        <div class="setp_01_bg"></div>
      </div>
    </div>

    <?php $fed->model('common/html/model_foot_seo');//尾部 ?>
    <?php $fed->js('common/js/jquery-1.7.min'); ?>
    <?php $fed->js('common/js/head'); ?>
    <?php $fed->js('common/js/gs_base'); ?>
    <?php $fed->js('fed/js/gs_placeholder_1'); ?>
    <?php $fed->js('fed/js/gs_button'); ?>
    <?php $fed->js('fed/js/gs_input'); ?>
    <script type="text/javascript">
      /**
       * 前后台数据交互接口(开发配置页面时更新)
       */
      var INTERFACE = {
        'TravelId': '1485711' //游记id
      }

      $(function() {
        var objInput = $('#t_name');
        var oldValue = $('#len_span span').html();
        objInput.gsInputLen(function(len) {
          var lastLen = oldValue - len;
          if (lastLen <= -1) {
            var newText = $.gsSubstring(objInput.val(), 50, 1);
            objInput.val(newText);
          } else {
            $('#len_span span').html(lastLen);
          }
          if (objInput.val() == '请输入标题，最多50个字') {
            $('#next_btn').disableButton(false);
          } else {
            var booleanArg = /\S/g.test(objInput.val());
            $('#next_btn').disableButton(booleanArg);
          };
        });
        objInput.placeholder();
      });

       //判断按钮disabled
      $.fn.disableButton = function(arg) {
        var el = $(this);
        var elDisabled = el.attr('disabled');
        if (arg) {
          el.removeAttr('disabled');
          el.removeClass('disable');
        } else {
          el.attr('disabled', 'true');
          el.addClass('disable');
        };
      };
    </script>
  </body>
</html>
<?php $fed->get_ver(); //生成的版本号默认(v2.0) ?>
