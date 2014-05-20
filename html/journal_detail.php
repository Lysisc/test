<?php include('../../config.php');  ?>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>游记详情页_主人态</title>
<?php $fed->css('common/css/head'); ?>
<?php $fed->css('common/css/global'); ?>
<?php $fed->css('fed/css/suggest'); ?>
<?php $fed->css('fed/css/icon'); ?>
<?php $fed->css('fed/css/pager'); ?>
<?php $fed->css('fed/css/button'); ?>
<?php $fed->css('fed/css/uispecform'); ?>
<?php $fed->css('fed/css/calendar'); ?>
<?php $fed->css('fed/css/poi_pop'); ?>
<?php $fed->css('travels/css/journal_detbox'); ?> 
<?php $fed->css('travels/css/_det_daybox'); ?>
<?php $fed->css('travels/css/_edit_daybox'); ?>
<?php $fed->css('travels/css/_det_reply'); ?>
<?php $fed->css('travels/css/_det_report'); ?>
<?php $fed->css('travels/css/_daypage'); ?>
<?php $fed->css('travels/css/_top_article'); ?>
<?php $fed->css('travels/css/_edit_botfixed'); ?>
<?php $fed->css('travels/css/_publish_popup'); ?>
</head>
<body>
<?php $fed->model('common/html/model_head');//头部 ?>
<div class="content cf journal_detbox">
    <?php $fed->model('common/html/model_bread');//面包屑 ?>
    <div class="titlebox cf">
        <a href="#" class="userheadimg"><img src="http://dev.c-ctrip.com/getimg.php?90x90" /></a>
        <div class="titleright">
            <div class="titler_div">
                <!-- <a id="master_link" class="titler_a" href="javascript:;"><i class="edit"></i>编辑游记</a> -->
                <div>
                    <h3><span class="audit">【待审核】</span>我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题我是标题<a href="#"><i class="ico_phone"></i></a><span class="tit_tagico_1">实用</span><span class="tit_tagico_2">精华</span><span class="tit_tagico_3">美图</span></h3>
                    <p><a id="authorDisplayName" href="#">美华mini</a><span class="linecolor">|</span>发布于&nbsp;2013-07-16<span class="linecolor">|</span>更新于&nbsp;2013-07-16<span class="linecolor">|</span>浏览&nbsp;<span class="link_browse">15233</span><span class="linecolor">|</span>评论&nbsp;<a href="#" class="graylink">129</a><span class="linecolor">|</span>收藏&nbsp;2013-07-16</p>
                </div>
            </div>
            <ul>
                <li><span class="linecolor">|</span><a href="javascript:;" class="link_step3"><i></i>行程整理</a></li>
            	<li><span class="linecolor">|</span><a href="javascript:;" class="link_comment"><i></i>评论</a></li>
            	<li><span class="linecolor">|</span><a href="javascript:;" class="link_share" data-shareId="01" data-shareCategory="0" data-share-url="" data-share-pic="" data-share-title="主页分享"><i></i>分享 <span></span>
                </a></li>
            	<li><span class="linecolor">|</span><a href="javascript:;" class="link_like" data-likeId="01" data-likeCategory="0" title="一键喜欢"><i></i>喜欢 <span></span></a></li>
            	<li><span class="linecolor">|</span><a href="javascript:;" class="link_collect" data-favouriteId="01" data-favouriteCategory="0" title="一键收藏"><i></i>收藏&nbsp;<span></span></a></li>
                <li><a href="javascript:;" class="link_pdf" title="下载PDF"><i></i>下载PDF&nbsp;<span></span></a></li>
            </ul>
        </div>
    </div>

    <!-- 游记2.4 新增模块 -->
    <div class="ctd_content_controls cf">
        <div>
            <span><i class="days"></i>行程天数：365天<a class="submit_pop" data-release='0' href="javascript:;">马上添加</a></span>
            <span><i class="times"></i>出发时间：12月</span>
            <span><i class="costs"></i>人均费用：400000元</span>
            <span><i class="whos"></i>和谁出行：一个人</span>
            <br>
            <span><i class="plays"></i>玩法：自由行，邮轮，火车，摄影，美食</span>
            <br>
            <span><i class="pois"></i>作者去了这些地方：
                <a href="#">鼓浪屿</a>，
                <a href="#">厦门大学</a>，
                <a href="#">胡里山炮台</a>，
                <a href="#">日光岩</a>，
                <a href="#">中山路步行街</a>，
                <a href="#">鼓浪屿</a>，
                <a href="#">厦门大学</a>，
                <a href="#">胡里山炮台</a>，
                <a href="#">日光岩</a>，
                <a href="#">中山路步行街</a>，
                <a href="#">鼓浪屿</a>，
                <a href="#">厦门大学</a>，
                <a href="#">胡里山炮台</a>，
                <a href="#">日光岩</a>，
                <a href="#">中山路步行街</a>
            </span>
        </div>
        <a class="submit_pop" data-release='0' href="javascript:;">编辑</a>
    </div>
    <!-- 游记2.4 新增模块 end -->

    <div class="linedetbox">
        <span class="lineend"></span>


        <!-- 拼图样式 -->
        <div class="daybox">

            <div class="titleline">
              <p>
                第<strong>1</strong>天 <span class="time">2013-07-02</span>
              </p>
            </div>

            <!--样式1-->        
            <div class="img_box grid-1 cf">
                <div class="img_block l" id="singleimg_id_1">
                    <a href="#" target="_blank">
                        <img id="101010" src="http://dev.c-ctrip.com/getimg.php?410x590" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like a_popup_login" title="一键喜欢"> <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share a_popup_login" data-share-url="" data-share-pic="" data-share-title="单个图片分享"> <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                    <div class="coverpic"></div>
                </div>
                <div class="img_block r">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?480x290" />        
                    </a>
                    <div class="describe" style="width: 480px; margin-left: -240px; left: 50%;">
                        <a href="javascript:;" class="link_like a_popup_login" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text" style="width: 480px; margin-left: -240px; left: 50%;">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
                <div class="img_block r">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?480x290" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
            </div>

            <div class="titleline">
              <p>
                第<strong>8659</strong>天 <span class="time">2013-07-02</span>
              </p>
            </div>

            <!--样式2-->        
            <div class="img_box grid-2 cf" id="singleimg_id_2">
                <div class="img_block l">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?480x290" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
                <div class="img_block l">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?480x290" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
                <div class="img_block r">
                    <a href="#" target="_blank">
                        <img id="101010" src="/getimg.php?410x590" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
            </div>

            <div class="singledes cf" data-id="chanGuanAssess" data-contentid="0002" data-commentid="0002"> <i class="ico_viewspot_41"></i>
                <div class="righttext">
                    <h3>森の時計<a href="javascript:;" style="display: none;" class="add_comment">添加点评</a></h3> 
                    <ul>
                        <li>我的点评&nbsp;<span class="commentbox"><span data-name="gs_zongtiPoint" style="width:28px;"><!--这个span设置宽度，14px为一个星星,默认宽度为一个星星--></span></span><span class="linecolor">|</span></li>
                        <li>人均&nbsp;¥<span data-name="gs_xiaofei">50</span><span class="linecolor">|</span></li>
                        <li>口味&nbsp;<span data-name="gs_kouweiPoint">4</span><span class="linecolor">|</span></li>
                        <li>氛围&nbsp;<span data-name="gs_fengweiPoint">2</span><span class="linecolor">|</span></li>
                        <li>服务&nbsp;<span data-name="gs_fuwuPoint">3</span></li>
                    </ul>
                    <p data-name="gs_pinglun">工厂出来由于要赶到富良野的大巴，就没来得及吃午饭。不过这之后在富良野得到了很好的补偿！就算你不是朵拉瑪和二宮和也的飯也會賴在森の時計不想走。咖喱1000日元，蛋糕+咖啡1000日元，2000塊解決午餐+下午茶~美味又便宜。</p>
                </div>
            </div>

            <!--样式11-->        
            <div class="img_box grid-11 cf" id="singleimg_id_3">
                <div class="img_block l">
                    <a href="#" target="_blank">
                        <img src="/getimg.php?330x210" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
                <div class="img_block l">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?330x210" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
                <div class="img_block r">
                    <a href="#" target="_blank">
                        <img id="101010" src="http://dev.c-ctrip.com/getimg.php?560x430" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
            </div>

            <!--样式3-->        
            <div class="img_box grid-3 cf" id="singleimg_id_3">
                <div class="img_block l">
                    <a href="#" target="_blank">
                        <img id="101010" src="http://dev.c-ctrip.com/getimg.php?560x430" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
                <div class="img_block r">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?330x210" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
                <div class="img_block r">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?330x210" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
            </div>

            <div style="height:30px;"></div>

            <!--样式4-->        
            <div class="img_box grid-4 cf" id="singleimg_id_4">
                <div class="img_block l">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?330x210" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
                <div class="img_block l">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?330x210" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
                <div class="img_block r">
                    <a href="#" target="_blank">
                        <img id="101010" src="http://dev.c-ctrip.com/getimg.php?560x430" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
            </div>

            <!--样式5-->        
            <div class="img_box grid-5 cf" id="singleimg_id_5">
                <div class="img_block l">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?290x420" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
                <div class="img_block c">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?300x420" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>444</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
                <div class="img_block r">
                    <a href="#" target="_blank">
                        <img id="101010" src="http://dev.c-ctrip.com/getimg.php?290x420" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
            </div>

            <!--样式6-->        
            <div class="img_box grid-6 cf" id="singleimg_id_6">
                <div class="img_block l">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?445x290" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
                <div class="img_block r">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?445x290" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
            </div>

            <!--样式7-->        
            <div class="img_box grid-7 cf" id="singleimg_id_7">
                <div class="img_block l">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?590x450" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
                <div class="img_block r">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?300x450" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>44</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
            </div>

            <!--样式8-->        
            <div class="img_box grid-8 cf" id="singleimg_id_8">
                <div class="img_block l">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?300x450" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>444444</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
                <div class="img_block r">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?590x450" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
            </div>

            <!--样式9-->        
            <div class="img_box grid-9 cf" id="singleimg_id_9">
                <div class="img_block l">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?445x600" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
                <div class="img_block r">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?445x600" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
            </div>

            <!--样式10-->        
            <div class="img_box grid-10 cf" id="singleimg_id_10">
                <div class="img_block">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?900x500" />        
                    </a>
                    <div class="describe">
                        <a href="javascript:;" class="link_like" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text">
                        <span>
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
            </div>
            <div class="img_box grid-10 cf" id="singleimg_id_8">
                <div class="img_block">
                    <a href="#" target="_blank">
                        <img src="http://dev.c-ctrip.com/getimg.php?599x500" />        
                    </a>
                    <div class="describe" style="width: 599px; margin-left: -299.5px; left: 50%;">
                        <a href="javascript:;" class="link_like a_popup_login" title="一键喜欢">
                            <i></i>
                            喜欢
                            <span>4</span>
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_share a_popup_login" data-share-url="" data-share-pic="" data-share-title="单个图片分享">
                            <i></i>
                            分享
                        </a>
                        <span class="linecolor">|</span>
                        <a href="javascript:;" class="link_comment a_popup_login">
                            <i></i>
                            引用到评论
                        </a>
                        <div></div>
                    </div>
                    <div class="img_text" style="width: 599px; margin-left: -299.5px; left: 50%;">
                        <span style="width: 569px;">
                            酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解酒店放完行李已经是午后，便利店草草解
                        </span>
                        <div></div>
                        <i></i>
                    </div>
                </div>
            </div>
        </div>
    <?php $fed->model('travels/html/_daypage');//天数link ?>
    <?php $fed->model('travels/html/_det_daybox');//游记内容 ?>
    </div>
    <?php $fed->model('travels/html/_det_reply');//回复 ?>
    <?php $fed->model('travels/html/_det_report');//发表 ?>
</div>

<!-- 新增版块 -->
<div class="content cf">

  <!-- 相关游记 -->
  <div class="journal_info">
    <h2 class="hd">
      <a href="#" target="_blank">
        更多<span class="right-arrow"></span>
      </a>
      相关游记
    </h2>
    <div class="journal_piclist cf">
      <ul>
        <li>
          <a class="img" href="/travels/newzealand100078/1575633.html" class="item-photo" target="_blank">
            <span class="pic-tagico-1"></span>
            <img src="http://dimg01.c-ctrip.com/images/tg/755/739/310/5a8534e43ba94fe1b9f9036705786a16_R_360_240.jpg" width="100" height="66" />      
          </a>
          <h3>
            <a href="/travels/newzealand100078/1575633.html" target="_blank">三个人的浪漫——菲律宾宿务休闲自助游</a>
          </h3>
          <p>茶叶香 2013-09-22</p>
        </li>
        <li>
          <a class="img" href="/travels/newzealand100078/1575633.html" class="item-photo" target="_blank">
            <span class="pic-tagico-1"></span>
            <img src="http://dimg01.c-ctrip.com/images/tg/755/739/310/5a8534e43ba94fe1b9f9036705786a16_R_360_240.jpg" width="100" height="66" />      
          </a>
          <h3>
            <a href="/travels/newzealand100078/1575633.html" target="_blank">三个人的浪漫——菲律宾</a>
          </h3>
          <p>茶叶香 2013-09-22</p>
        </li>
        <li>
          <a class="img" href="/travels/newzealand100078/1575633.html" class="item-photo" target="_blank">
            <span class="pic-tagico-1"></span>
            <img src="http://dimg01.c-ctrip.com/images/tg/755/739/310/5a8534e43ba94fe1b9f9036705786a16_R_360_240.jpg" width="100" height="66" />      
          </a>
          <h3>
            <a href="/travels/newzealand100078/1575633.html" target="_blank">三个人的浪漫——菲律</a>
          </h3>
          <p>茶叶香 2013-09-22</p>
        </li>
        <li>
          <a class="img" href="/travels/newzealand100078/1575633.html" class="item-photo" target="_blank">
            <span class="pic-tagico-1"></span>
            <img src="http://dimg01.c-ctrip.com/images/tg/755/739/310/5a8534e43ba94fe1b9f9036705786a16_R_360_240.jpg" width="100" height="66" />      
          </a>
          <h3>
            <a href="/travels/newzealand100078/1575633.html" target="_blank">三个人的浪漫——菲</a>
          </h3>
          <p>茶叶香 2013-09-22</p>
        </li>
        <li>
          <a class="img" href="/travels/newzealand100078/1575633.html" class="item-photo" target="_blank">
            <span class="pic-tagico-1"></span>
            <img src="http://dimg01.c-ctrip.com/images/tg/755/739/310/5a8534e43ba94fe1b9f9036705786a16_R_360_240.jpg" width="100" height="66" />      
          </a>
          <h3>
            <a href="/travels/newzealand100078/1575633.html" target="_blank">三个人的浪漫——菲律宾宿务休闲自助游</a>
          </h3>
          <p>茶叶香 2013-09-22</p>
        </li>
        <li>
          <a class="img" href="/travels/newzealand100078/1575633.html" class="item-photo" target="_blank">
            <span class="pic-tagico-1"></span>
            <img src="http://dimg01.c-ctrip.com/images/tg/755/739/310/5a8534e43ba94fe1b9f9036705786a16_R_360_240.jpg" width="100" height="66" />      
          </a>
          <h3>
            <a href="/travels/newzealand100078/1575633.html" target="_blank">三个人的浪漫——菲律宾宿务休闲自助游</a>
          </h3>
          <p>茶叶香 2013-09-22</p>
        </li>
      </ul>
    </div>
  </div>
  <!-- 相关游记 end -->

  <!-- 相关问答 -->
  <div class="journal_info answer_info">
    <h2 class="hd">
      <a href="#" target="_blank">
        更多<span class="right-arrow"></span>
      </a>
      相关问答
    </h2>
    <div class="answerlist">
      <ul>
        <li>
          <em>2012-08-25</em>
          <a href="#" title="老K你好，我们十月四日上午到厦门，七号早晨返回，共三天三夜共三天三夜共三天三夜">老K你好，我们十月四日上午到厦门，七号早晨返回，共三天三夜共三天三夜共三天三夜</a>
          <span>999回答</span>
        </li>
        <li>
          <em>2012-08-25</em>
          <a href="#" title="老K你好，我们十月四日上午到厦门，七号早晨返回，共三天三夜">老K你好，我们十月四日上午到厦门，七号早晨返回，共三天三夜</a>
          <span>9回答</span>
        </li>
        <li>
          <em>2012-08-25</em>
          <a href="#" title="老K你好，我们十月四日上午到厦门，七号早晨返回，共三天三夜">老K你好，我们十月四日上午到厦门，七号早晨返回，共三天三夜</a>
          <span>9回答</span>
        </li>
        <li>
          <em>2012-08-25</em>
          <a href="#" title="老K你好，我们十月四日上午到厦门，七号早晨返回，共三天三夜">老K你好，我们十月四日上午到厦门，七号早晨返回，共三天三夜</a>
          <span>9回答</span>
        </li>
      </ul>
    </div>
  </div>
  <!-- 相关问答 end -->

  <!-- 相关攻略 -->
  <div id="strategy_info" class="journal_info strategy_info">
    <h2 class="hd">
      <a class="noderoll-control" data-slide="next" href="javascript:;">&rsaquo;</a>
      <a class="cannot-click noderoll-control" data-slide="prev" href="javascript:;">&lsaquo;</a>
      相关攻略
    </h2>
    <div class="noderoll-inner">
      <div class="strategy item active" style="display: block;">
        <div class="img fl">
          <a href="#">
            <img src="http://gonglue.c-ctrip.com/district/Hongkong/77/cover210300.jpg" width="69" height="104" />
          </a>
        </div>
        <h3 class="hd"><a href="#" title="马达加斯加攻略攻略攻马达加斯加攻略攻略攻">马达加斯加攻略攻略攻马达加斯加攻略攻略攻</a></h3>
        <p>更新：2013-06-24</p>
        <p>下载：254110</p>
        <a class="gsn-btn-20" href="#">免费下载</a>
      </div>
      <div class="strategy item">
        <div class="img fl">
          <a href="#">
            <img src="http://gonglue.c-ctrip.com/district/Hongkong/77/cover210300.jpg" width="69" height="104" />
          </a>
        </div>
        <h3 class="hd"><a href="#" title="马达加斯加攻略攻略攻马达加斯加攻略攻略攻">马达加斯加攻略攻略攻</a></h3>
        <p>更新：2013-06-24</p>
        <p>下载：254110</p>
        <a class="gsn-btn-20" href="#">免费下载</a>
      </div>
      <div class="strategy item">
        <div class="img fl">
          <a href="#">
            <img src="http://gonglue.c-ctrip.com/district/Hongkong/77/cover210300.jpg" width="69" height="104" />
          </a>
        </div>
        <h3 class="hd"><a href="#" title="马达加斯加攻略攻略攻马达加斯加攻略攻略攻">马达加斯加攻略</a></h3>
        <p>更新：2013-06-24</p>
        <p>下载：254110</p>
        <a class="gsn-btn-20" href="#">免费下载</a>
      </div>
    </div>
  </div>
  <!-- 相关攻略 end -->

</div>
<!-- 新增版块 end -->

<!--更改简介弹出层-->
<div class="gsn-layer piccomment" id="picComment" style="display:none;">
    <a href="javascript:$.popupbox.close();" class="close"></a>
    <h3>发表评论</h3>
    <div class="areabox"><textarea id="pic_content" class="gsn-textarea"></textarea></div>
    <p>
        <span class="gsn-tiptext" id="pictextCount">你还可以输入<strong class="count">1000</strong>个字符</span>
        <span class="journal-comment-tip">请输入评论内容！</span>
    </p>
    <p><a href="javascript:void 0" class="gsn-btn-6">取消</a><a href="javascript:void 0" class="gsn-btn-2" data-onsubmit="1">提交</a></p>
</div>

<!--删除游记弹出层-->
<div class="gsn-layer deljournal" id="delJournal" style="display:none;">
    <a href="javascript:$.popupbox.close();" class="close"></a>
    <h3>是否删除该游记？</h3>
    <p class="deltext">删除游记会影响您的经验值，是否真的删除？</p>
    <p class="btnbox"><a href="javascript:void 0" class="gsn-btn-6">取消</a><a href="javascript:void 0" class="gsn-btn-2" data-onsubmit="1">删除</a></p>
</div>

<!--删除游记弹出层-->
<div class="gsn-layer after_delJournal" id="after_delJournal" style="display:none;">
    <p>游记已删除，<span>3</span>秒后跳转到个人主页</p>
</div>

<!--生成PDF弹出层-->
<div class="gsn-layer generatPDF" id="generatPDF" style="display:none;">
    <a href="javascript:;" class="close"></a>
    <div class="generat_loading">
        <img src="/common/img/loading.gif" />
        <p>我们正在为你喜爱的游记制作PDF中，<br />请耐心等待……</p>
    </div>
</div>

<!-- 发表游记弹出层 -->
<div id="publish_popup" class="gsn-layer gs_hide">
    <a href="javascript:;" class="close"></a>
    <div>
        <h2>添加游记分类信息，帮助更多游友<span>（可多获1000经验值）</span></h2>
        <h3><i class="i_play"></i>玩法</h3>
        <div class="ttd cf">
            <span class="error_tip">请至少选择1个目的地</span>
        </div>
        <h3><i class="i_tpi"></i>实用信息</h3>
        <div class="tpi">
            <span>行程天数：<input id="tpi_day" maxlength="3" type="text"> 天</span>
            <span class="tpi_who">和谁出行：<input id="tpi_who" readonly="true" placeholder="请选择" type="text"><i class="tpi_who"></i>
                <div id="tpi_who_select">
                    <a data-id="1" href="javascript:;">亲子</a>
                    <a data-id="2" href="javascript:;">和父母</a>
                    <a data-id="3" href="javascript:;">和朋友</a>
                    <a data-id="4" href="javascript:;">一个人</a>
                    <a data-id="5" href="javascript:;">蜜月</a>
                    <a data-id="6" href="javascript:;">情侣</a>
                    <a data-id="7" href="javascript:;">其他</a>
                </div>
            </span>
            <span>人均花费：<input id="tpi_cost" maxlength="7" type="text"> 人民币</span>
            <span class="tpi_time">出发时间：<input id="tpi_time" readonly="true" placeholder="请选择" type="text"><i class="tpi_time"></i><span class="error_tip">不能选择当天之后日期</span></span>
        </div>
    </div>
    <a id="publish_submit" class="gs_btn_v4" href="javascript:;">提交</a>
    <a class="cancel" href="javascript:;">取消</a>
</div>

<input type="hidden" id="page_id" value="290001" />

<?php $fed->model('travels/html/_top_article');//置顶条 ?>
<?php $fed->model('common/html/model_foot_seo');//尾部 ?>

<script type="text/javascript">
    var INTERFACE = {
        TravelId: '148571132', //游记id
        isHost: true, //是否是主人态
        ReleaseTravel: 'mock.php?act=date_api',
        poi_server_url: '/components/html/mock.php?act=poipop', //POI卡片服务接口
        likeUrl: "/components/html/mock.php?act=like", //点击喜欢请求连接
        collectUrl: "", //点击收藏请求连接
        shareUrl: "", //点击分享请求的连接
        pdfCheckUrl: "mock.php?act=pdfCheckUrl",
        pdfDownUrl: "mock.php?act=pdfDownUrl",
        classified_info: function(callback) { //游记编辑
            var data = {};
            data.TagList = [{
                TagName: '自由行',
                IsSelected: false
            }, {
                TagName: '摄影',
                IsSelected: true
            }, {
                TagName: '徒步',
                IsSelected: true
            }, {
                TagName: '购物',
                IsSelected: false
            }];
            data.PracticalInfo = {
                TravelDays: '12',
                CompanionType: '2',
                Consume: '5000',
                DepartureDate: '2013-02-09'
            }
            callback(data);
        },
        UpdateTravelExtraInfo: function(json, callback) {
            callback();
        },
        del_journal: function(json) { //删除游记接口
            var url = "mock.php?act=del_journal";
            $.post(url, json, function(data) {
                if (data.RetCode == 1) {
                    $.popupbox.show({
                        id: 'after_delJournal'
                    });
                    var timer = $('#after_delJournal').find('span').text();
                    var time_link = self.setInterval(function() {
                        timer = timer - 1;
                        $('#after_delJournal').find('span').text(timer);
                        if (timer == 0) {
                            clearInterval(time_link);
                            INTERFACE.del_journal_callback();
                        };
                    }, 1000);
                } else {
                    alert(data.ErrorMessage)
                }
            })
        },
        add_comment: function(json) { //增加评论
            var url = "mock.php?act=add_comment";
            $.post(url, json, function(data) {
                if (data.RetCode == 1) {
                    if (data.Html != '') {
                        $.gsmessages.notice({
                            text: data.Html,
                            color: 'b',
                            timeout: 3000
                        });
                    };
                    INTERFACE.add_comment_callback(json);
                    $('#picComment').fadeOut(600, function() {
                        $.popupbox.close();
                        //重置状态
                        $('#pic_content').val('');
                        $('#picComment').removeData('quote');
                    });
                } else {
                    alert(data.ErrorMessage)
                }
            })
        },
        accessState: function(callback) {
            var dataOne = {
                RetCode: 0,
                UserInfo: {
                    DisplayName: 'absabs',
                    HeadPhotoUrl: 'http://dev.c-ctrip.com/getimg.php?60x60',
                    HomePageUrl: 'http://you.ctrip.com/members/7E983B00D43E4B599F4577E640C16F9D'
                },
                TravelMasterUrl: 'http://you.ctrip.com/travels/xiamen21/1728238.html',
            };
            var dataTwo = {
                VisitCount: '23万+', // 游记访问数量
                FavouriteCount: '100', // 游记收藏数量
                LikeCount: '150', // 游记喜欢数量
                CommentCount: '250', // 游记评论数量
                ShareCount: 0, // 游记分享数量
                CanDownLoadPDF: true, // 这个游记是否有PDF可以下载
                DownLoadPDFUrl: 'http://you.ctrip.com/travels/xiamen21/1728238.html' // 下载PDF路径
            }
            callback(dataOne, dataTwo);
        }
    };

    var privateObject = {
        ReplyListPageNo: 0,
        CurrentUserId: '0'
    };
</script>

<?php $fed->js('common/js/jquery-1.7.min'); ?>
<?php $fed->js('common/js/gs_popupbox'); ?>
<?php $fed->js('common/js/head'); ?>
<?php $fed->js('common/js/gs_base'); ?>
<?php $fed->js('fed/js/gs_placeholder_1'); ?>
<?php $fed->js('fed/js/gs_socialize'); ?>
<?php $fed->js('fed/js/gs_input'); ?>
<?php $fed->js('fed/js/gs_button'); ?>
<?php $fed->js('fed/js/gs_messages'); ?>
<?php $fed->js('fed/js/gs_report'); ?>
<?php $fed->js('fed/js/gs_calendar'); ?>
<?php $fed->js('fed/js/jquery.cookie'); ?>
<?php $fed->js('fed/js/jquery.json-2.3.min'); ?>
<?php $fed->js('fed/js/jquery.lazyload.min'); ?>
<?php $fed->js('components/js/gs_inlineedit'); ?>
<?php $fed->js('components/js/gs_cookiedb'); //cookie临时存储 ?>
<?php $fed->js('components/js/gs_poi_pop'); //关健字营销POI卡片 ?>
<?php $fed->js('components/js/_poi_card'); //关健字营销POI卡片应用层代码 ?>
<?php $fed->js('travels/js/pdf_controls'); //pdf控件 ?>
<?php $fed->js('travels/js/detail_private'); //私用方法 ?>
<?php $fed->js('travels/js/detail'); ?>
<?php $fed->js('travels/js/_publish_popup'); ?>
<script>
    $(function() {
        $('#strategy_info').gsnoderoll();
        $('#dd1').inlineEdit({
            maxlen: 50,
            type: 'input',
            btnYes: {
                text: '保存',
                classname: 'gsn-btn-2'
            },
            btnNo: {
                text: '取消',
                classname: 'editcancel'
            }
        });
        $('#d2').inlineEdit({
            maxlen: 1000,
            api: 'mock.php?act=inlineEdit', //数据保存接口
            beginFN: function() {
                $('#d2').addClass('addtext').removeClass('addtxtline').removeClass('daytext');
            },
            endFN: function() {
                $('#d2').removeClass('addtext').removeClass('addtxtline').addClass('daytext');
            },
            btnYes: {
                text: '保存',
                classname: 'gsn-btn-2'
            },
            btnNo: {
                text: '取消',
                classname: 'editcancel'
            },
            callback: function() {
                $('#d2 .normaltext').addClass('edit_title').text('');
            }
        });
    });
</script>
</body>
</html>
<?php $fed->get_ver(); //生成的版本号默认(v2.0) ?>
