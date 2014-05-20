<?php include('../../config.php');  ?>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>游记详情页_主人态</title>
<?php $fed->css('common/css/head'); ?>
<?php $fed->css('common/css/global'); ?>
<?php $fed->css('fed/css/icon'); ?>
<?php $fed->css('fed/css/pager'); ?>
<?php $fed->css('fed/css/button'); ?>
<?php $fed->css('travels/css/t_step_0'); ?>
</head>
<body>
<?php $fed->model('common/html/model_head');//头部 ?>
<div class="content cf t_step0">
    <?php $fed->model('common/html/model_bread');//面包屑 ?>
    <h3>开始写游记，请选择</h3>
    <div class="journalinfo mr20">
    	<i class="classic"></i>
        <dl>
            <dt>经典游记</dt>
            <dd>图文并茂，<br>
攻略&amp;小贴士一应俱全，<br>
支持博客搬家。</dd>
	<dd><a href="#" class="gsn-btn-1">开始撰写</a></dd>
        </dl>
        <p><span>案例</span><a href="#">【i旅行】小聪明游首尔，实用小贴士 –重归首尔，时光依旧</a></p>
        </div>
    <div class="journalinfo">
    <span class="tipsnew"></span>
    	<i class="wei"></i>
        <dl>
            <dt>微游记<span>beta</span></dt>
            <dd>旅行画报，<br>
10分钟轻松将照片整理成游记，<br>
华丽呈现你的旅行。</dd>
	<dd><a href="#" class="gsn-btn-1">开始制作</a></dd>
        </dl>
        <p><span>案例</span><a href="#">【i旅行】牵着小手去旅行之新加坡家庭游"八大不可不体验有截字哦有截字哦有截字哦有截字哦</a></p>
        </div>
</div>
<?php $fed->model('common/html/model_foot_seo');//尾部 ?>

<?php $fed->js('common/js/jquery-1.7.min'); ?>
</body>
</html>
<?php $fed->get_ver(); //生成的版本号默认(v2.0) ?>
