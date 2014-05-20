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
        <?php $fed->css('travels/css/travel_writing'); ?>
    </head>
    <body>
        <?php $fed->model('common/html/model_head');//头部 ?>

        <div class="content cf">

            <?php $fed-> model('common/html/model_bread');//面包屑 ?>

            <div class="travel_writing">
                <h2><span>给游记起个名字</span><em></em></h2>
                <div class="travel_name">
                    <input id="travel_name" type="text" placeholder="好名字会让你的游记脱颖而出引人注目">
                    <div id="len_span"><span>0</span>/50</div>
                </div>
                <div class="travel_template disable cf">
                    <h2><span>选择一个模板</span><em></em></h2>
                    <div class="travel_wei">
                        <a class="btn" data-href="http://www.baidu.com"></a>
                        <p>上传旅途照片，自动生成行程。<br><a data-href="http://you.ctrip.com/group/topic/f1200013-653393.html" target="_blank">微游记加精秘籍</a></p>
                    </div>
                    <div class="travel_cla">
                        <a class="btn" data-href="http://www.baidu.com"></a>
                        <p>记录旅行点滴，支持博客搬家。<br><a data-href="http://you.ctrip.com/group/topic/f1200013-653392.html" target="_blank">经典游记加精秘籍</a></p>
                    </div>
                </div>
            </div>

        </div>

        <?php $fed->model('common/html/model_foot_seo');//尾部 ?>

        <?php $fed->js('common/js/jquery-1.7.min'); ?>
        <?php $fed->js('common/js/head'); ?>
        <?php $fed->js('common/js/gs_base'); ?>
        <?php $fed->js('fed/js/gs_placeholder_1'); ?>
        <?php $fed->js('fed/js/gs_input'); ?>
        <?php $fed->js('travels/js/travel_writing'); ?>
    </body>
</html>
<?php $fed->get_ver(); //生成的版本号默认(v2.0) ?>
