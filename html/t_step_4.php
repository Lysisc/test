<?php include('../../config.php');  ?>
<!doctype html>
<html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <title>发表游记</title>
    <?php $fed->css('common/css/head'); ?>
    <?php $fed->css('common/css/global'); ?>
    <?php $fed->css('fed/css/icon'); ?>
    <?php $fed->css('fed/css/pager'); ?>
    <?php $fed->css('fed/css/button'); ?>
    <?php $fed->css('fed/css/suggest'); ?>
    <?php $fed->css('fed/css/calendar'); ?>
    <?php $fed->css('travels/css/_det_daybox'); ?>
    <?php $fed->css('travels/css/_edit_daybox'); ?>
    <?php $fed->css('travels/css/_edit_botfixed'); ?>
    <?php $fed->css('travels/css/travels'); ?>
    <?php $fed->css('travels/css/_publish_popup'); ?>
  </head>
  <body>
    <?php $fed->model('common/html/model_head');//头部 ?>

    <div class="content cf">
      <?php $fed->model('common/html/model_bread');//面包屑 ?>
      <div class="t_box t_step_4">

        <div id="t_prompt" class="t_prompt">
          <a class="close" href="javascript:void(0);">×</a>
          你的每一步操作，我们都会替你
          <br>
          实时保存，不用担心丢失内容。
        </div>

        <!--流程条-->    
        <div class="t_process">
          <ul>
            <li class="alr">
              <i></i>
              <a href="#">上传照片</a>
            </li>
            <li class="alr">
              · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · · ·
              <i></i>
              <a href="#">整理行程</a>
            </li>
            <li class="cur">
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
            <span class="add_photo fr">共 <span id="daysCount">3</span>
                天行程，你可以继续 <a href="#">整理行程</a> </span>
        </div>

        <div class="edit_box">
          <?php $fed->model('travels/html/_edit_daybox');//游记编辑状态 ?>
        </div>

      </div>
    </div>

    <?php $fed->model('travels/html/_edit_botfixed');//发布游记浮动层 ?>

    <div id="poi_pingjia" class="gsn-layer gs_LAYER_PARENT_V1">
      <a href="javascript:$.popupbox.close();" class="close"></a>
      <h3>景点评价</h3>
      <div class="for-star">
        <label>总体评价：</label>
        <input type="hidden" class="cls-set" id="zongtiPoint" value="0">    
        <span class="fraction-star"> 
          <i class="">★</i> 
          <i class="">★</i>
          <i class="">★</i>
          <i class="">★</i>
          <i class="">★</i>
        </span>
        <em id="zongtiPointVerify">点击星星打分</em>
        <span class="star-hover-tip">差</span>
      </div>

      <div class="restaurant">
        <div class="for-piont">
          <label>口味：</label>
          <input type="hidden" class="cls-set" id="kouweiPoint" value="0">    
          <span class="fraction-num">
            <i style="border: none;">1</i>
            <i>2</i>
            <i>3</i>
            <i>4</i>
            <i>5</i>
          </span> <em id="kouweiPointVerify">给口味打分</em>
        </div>
        <div class="for-piont">
          <label>氛围：</label>
          <input type="hidden" class="cls-set" id="fengweiPoint" value="0">    
          <span class="fraction-num">
            <i style="border: none;">1</i>
            <i>2</i>
            <i>3</i>
            <i>4</i>
            <i>5</i>
          </span>
          <em id="fengweiPointVerify">给氛围打分</em>
        </div>
        <div class="for-piont">
          <label>服务：</label>
          <input type="hidden" class="cls-set" id="fuwuPoint" value="0">    
          <span class="fraction-num">
            <i style="border: none;">1</i>
            <i>2</i>
            <i>3</i>
            <i>4</i>
            <i>5</i>
          </span>
          <em id="fuwuPointVerify">给服务打分</em>
        </div>
        <div class="for-piont">
          <label class="cost-tit">人均消费：</label>
          <input id="xiaofei" class="cost-average" onkeyup="value=value.replace(/^0+|[^\d]/g,'') "  type="input"  maxlength="5"/>&nbsp;元
          <em id="fraction-avgVerify">请输入人均消费</em>
        </div>
      </div>

      <div class="your-comment">
        <label>你的评论：</label>
        <textarea id="reviewContent" name="reviewContent" class="reply-textarea" placeholder="你的点评会帮助到千万网友哦～"></textarea>
      </div>
      <div class="input_tips">
        <div class="tips">
          你还可以输入
          <span class="bit">1000</span>
          字
        </div>
        <div class="warning">请填写评论内容,最少10个字</div>
      </div>
      <div class="fr">
        <span>保存失败，请重试！</span>
        <input type="button" value="取消" class="gsn-btn-6" />    
        <input type="button" value="保存" class="gsn-btn-2" />    
      </div>
    </div>

    <?php $fed->model('common/html/model_foot_seo');//尾部 ?>

    <!-- 发表游记弹出层 -->
    <div id="publish_popup" class="gsn-layer gs_hide">
      <a href="javascript:;" class="close"></a>
      <div>
        <h2>添加游记分类信息，帮助更多游友<span>（可多获1000经验值）</span></h2>
        <h3><i class="i_ttd"></i>旅行目的地</h3>
        <div class="ttd cf">

          <a href="javascript:;" data-id="9080" class="dest selected"><i></i>上海，中国</a>
          <a href="javascript:;" data-id="32323" class="dest selected"><i></i>北京，中国</a>
          <a href="javascript:;" data-id="8900" class="dest">杭州，中国</a>

          <a class="add_dest" href="javascript:;">+添加目的地</a>
          <span class="search_dest">
            <input type="text" placeholder="请输入城市">
            <a class="cancel_dest" href="javascript:;">取消</a>
            <div id="search_select"></div>
          </span>
          <span class="error_tip">请至少选择1个目的地</span>
        </div>
        <h3><i class="i_tpi"></i>实用信息</h3>
        <div class="tpi">
          <span>行程天数：<input id="tpi_day" maxlength="3" type="text"> 天</span>
          <span class="tpi_who">和谁出行：<input id="tpi_who" readonly="true" placeholder="请选择" type="text"><i class="tpi_who"></i>
            <div id="tpi_who_select">
              <a href="javascript:;">亲子</a>
              <a href="javascript:;">和父母</a>
              <a href="javascript:;">和朋友</a>
              <a href="javascript:;">一个人</a>
              <a href="javascript:;">蜜月</a>
              <a href="javascript:;">情侣</a>
              <a href="javascript:;">其他</a>
            </div>
          </span>
          <span>人均花费：<input id="tpi_cost" maxlength="7" type="text"> 人民币</span>
          <span class="tpi_time">出发时间：<input id="tpi_time" readonly="true" placeholder="请选择" type="text"><i class="tpi_time"></i><span class="error_tip">不能选择当天之后日期</span></span>
        </div>
      </div>
      <a id="publish_submit" class="gs_btn_v4" href="javascript:;" data-onsubmit="1">提交</a>
      <a class="cancel" href="javascript:;">取消</a>
    </div>
    <!-- 发表游记弹出层 end -->

    <!-- 搜索接口 -->
    <input type="hidden" id="gs_search" value="http://you.ctrip.com/ajaxnew/SearchTipJson.ashx?rank=1&Jsoncallback=?" />

    <?php $fed->js('common/js/jquery-1.7.min'); ?>
    <?php $fed->js('common/js/head'); ?>
    <?php $fed->js('common/js/gs_popupbox'); ?>
    <?php $fed->js('common/js/gs_base'); //一些功能函数 ?>
    <?php $fed->js('fed/js/jquery.cookie'); ?>
    <?php $fed->js('fed/js/gs_button'); ?>
    <?php $fed->js('fed/js/gs_calendar'); ?>
    <?php $fed->js('fed/js/gs_input'); ?>
    <?php $fed->js('fed/js/gs_placeholder_1'); ?>
    <?php $fed->js('fed/js/jquery.lazyload.min'); ?>
    <?php $fed->js('components/js/gs_inlineedit'); ?>
    <?php $fed->js('travels/js/t_step_4'); ?>
    <?php $fed->js('travels/js/_publish_popup'); ?>
    <script>
        var INTERFACE = {
          TravelId: '148571132', //游记id
          UpdateTravelTitleAPI: '/components/html/mock.php?act=yj_tag', //修改游记标题, 1成功，0 失败
          TextAddOrEdit: 'mock.php?act=textedit', //在目标节点之前插入文本或者更新文本信息, 1成功，0 失败
          EditImageDesc: '/components/html/mock.php?act=yj_tag', //修改图片描述 1成功，0 失败
          SetTravelCoverImageId: '/components/html/mock.php?act=yj_tag', //设置游记封面照片 1成功，0 失败"/components/html/mock.php?act=like"
          POICommentAddOrEdit: '/components/html/mock.php?act=yj_tag', //添加POI评论信息 1成功，0 失败
          AddTravelTag: '/components/html/mock.php?act=yj_tag', //添加游记标签Tag 1成功，0 失败
          RemoveTravelTag: '/components/html/mock.php?act=yj_tag', //取消游记标签Tag
          ReleaseTravel: '/components/html/mock.php?act=yj_tag', //发表游记 1成功，0 失败
          SaveTravel: '/components/html/mock.php?act=yj_tag', //保存草稿 1成功，0失败
          GoToNextStep: '/components/html/mock.php?act=yj_tag',
          CloseTravelTips: '/components/html/mock.php?act=yj_tag',
          classified_info: function(callback) { //增加评论
            var data = {};
            data.DistrictList = [{
              DistrictId: '12312',
              DistrictName: '上海，中国',
              IsSelected: true
            }, {
              DistrictId: '32323',
              DistrictName: '北京，中国',
              IsSelected: false
            }, {
              DistrictId: '43455',
              DistrictName: '广州，中国',
              IsSelected: false
            }, {
              DistrictId: '78782',
              DistrictName: '深圳，中国',
              IsSelected: true
            }];
            data.PracticalInfo = {
              TravelDays: '0',
              CompanionType: '三人行',
              Consume: '5000',
              DepartureDate: '2013-02-09'
            }
            callback(data);
          },
          UpdateTravelExtraInfo: function(json, callback) {
            callback();
          }
        };

    </script> 
  </body>
</html>
<?php $fed->get_ver(); //生成的版本号默认(v2.0) ?>
