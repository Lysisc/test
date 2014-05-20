<?php include('../../config.php');  ?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>游记详情页_主人态</title>
<?php $fed->css('common/css/head'); ?>
<?php $fed->css('common/css/global'); ?>
<?php $fed->css('fed/css/suggest'); ?>
<?php $fed->css('fed/css/button'); ?>
<?php $fed->css('fed/css/calendar'); ?>
<?php $fed->css('fed/css/poi_pop'); ?>
<?php $fed->css('components/css/pager_v1'); ?>
<?php $fed->css('travels/css/classic_travels_detail'); ?>
<?php $fed->css('travels/css/_publish_popup'); ?>
<?php $fed->css_media('travels/css/media_classic_travels_detail'); ?>
</head>
<body>

    <?php $fed->model('common/html/model_head');//头部 ?>

    <div class="content ctd_bread"><a href="#">攻略社区</a> &gt; <a href="#">游记</a> &gt; 伊斯坦布尔游记
        <a class="ctd_head_a" href="javascript:;"><i class="comp"></i>完成编辑</a>
    </div>
    <div class="ctd_head_box">
        <img class="ctd_cover" data-CoverLocationY="-5555" src="http://dev.c-ctrip.com/travels/img/default_cover.png" />
        <p class="ctd_cover_host"></p>
        <a id="set_cover_popup" class="ctd_cover_btn" href="javascript:;">设置封面</a>
        <div class="ctd_head">
            <div class="content cf">
                <div class="ctd_head_mask"></div>
                <div class="ctd_head_left">
                    <p><i class="ico_jh"></i>恭喜你！你的游记已被标记为“<a href="#">伊斯坦布尔游记</a>”的精华游记。更新时间：2012.11.27</p>
                    <h2><span class="audit">【待审核】</span>一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五</h2>
                </div>
                <div class="ctd_head_right">
                    <a class="user_img" href="#"><img src="http://dev.c-ctrip.com/getimg.php?40x40" /></a>
                    <p><a href="#" id="authorDisplayName">抬头看风景</a></p>
                    <p>LV 34&nbsp;&nbsp;<a href="#">34篇游记</a></p>

                    <!-- 徽章控件 -->
                    <div class="info_badge">
                        <a class="badge_dp" href="javascript:;"></a>
                        <a class="badge_cs" href="javascript:;"></a>
                        <a class="badge_lx" href="javascript:;"></a>
                        <a class="badge_wd" href="javascript:;"></a>
                        <a class="badge_yl" href="javascript:;"></a>
                    </div>
                    <div class="badge_dp badge_box">
                        <div class="badge_box_arr">
                            <div></div>
                        </div>
                        <div class="badge_cont"> <i></i>
                            <a class="badge_htget" href="http://you.ctrip.com/group/topic/f1200013-655478.html" target="_blank">如何获得？</a>
                            <h3>点评帝</h3>
                            <p>对某一领域/目的地特别熟悉，且乐于帮助他人在问答版块回答问题</p>
                        </div>
                    </div>
                    <div class="badge_cs badge_box">
                        <div class="badge_box_arr">
                            <div></div>
                        </div>
                        <div class="badge_cont"> <i></i>
                            <h3>城市达人</h3>
                            <p>对某一领域/目的地特别熟悉，且乐于帮助他人在问答版块回答问题</p>
                            <div class="badge_tip">
                                <h4>我已点评的目的地有90个，以下是其中5个：</h4>
                                <div>
                                    <a href="#">上海</a>
                                    <a href="#">北京</a>
                                    <a href="#">成都</a>
                                    <a href="#">乌鲁木齐</a>
                                    <a href="#">深圳</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="badge_lx badge_box">
                        <div class="badge_box_arr">
                            <div></div>
                        </div>
                        <div class="badge_cont">
                            <i></i>
                            <a class="badge_htget" href="http://you.ctrip.com/group/topic/f1200013-641736.html" target="_blank">如何获得？</a>
                            <h3>旅行家</h3>
                            <p>对某一领域/目的地特别熟悉，且乐于帮助他人在问答版块回答问题</p>
                        </div>
                    </div>
                    <div class="badge_wd badge_box">
                        <div class="badge_box_arr">
                            <div></div>
                        </div>
                        <div class="badge_cont">
                            <i></i>
                            <a class="badge_htget" href="http://you.ctrip.com/group/topic/f1200013-641733.html" target="_blank">如何获得？</a>
                            <h3>问答专家</h3>
                            <p>对某一领域/目的地特别熟悉，且乐于帮助他人在问答版块回答问题</p>
                            <div class="badge_tip">
                                <h4>我擅长回答的问题：</h4>
                                <div>
                                    <a href="#">上海</a>
                                    <a href="#">北京</a>
                                    <a href="#">成都</a>
                                    <a href="#">乌鲁木齐</a>
                                    <a href="#">深圳</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="badge_yl badge_box">
                        <div class="badge_box_arr">
                            <div></div>
                        </div>
                        <div class="badge_cont">
                            <i></i>
                            <a class="badge_htget" href="http://you.ctrip.com/group/topic/f1200019-640060.html" target="_blank">如何获得？</a>
                            <h3>元老</h3>
                            <p>对某一领域/目的地特别熟悉，且乐于帮助他人在问答版块回答问题</p>
                        </div>
                    </div>
                    <!-- 徽章控件 end -->

                </div>
            </div>
        </div>
    </div>
    
    <div class="bgf2f2f2">
        <div class="content cf">

            <!-- 左半部分 -->
            <div class="ctd_main">
                
                <!-- 游记正文 -->
                <div class="ctd_main_body">

                    <!-- 主人态数据 -->
                    <div class="ctd_data cf">
                        <ul>
                            <li><span class="ctd_georgia color_01">121<em>万+</em></span><span>被浏览</span></li>
                            <li><span class="ctd_georgia color_02">0</span><span>被收藏</span></li>
                            <li><span class="ctd_georgia color_03">2604</span><span>被喜欢</span></li>
                            <li><span class="ctd_georgia color_04">18</span><span>被分享</span></li>
                            <li><span class="ctd_georgia color_05">251</span><span>被评论</span></li>
                        </ul>
                    </div>
                    <!-- 主人态数据 end -->

                    <div class="ctd_controls cf">
                        <a class="fl" href="javascript:;"><i></i>只看文字</a>
                        <span class="fr">
                            <a class="link_pdf" href="javascript:;"><i></i>下载PDF</a>
                            <a class="link_like" href="javascript:;"><i></i>喜欢</a>
                            <a class="link_share" href="javascript:;"><i></i>分享</a>
                            <a class="link_comment" href="javascript:;"><i></i>评论</a>
                            <a class="link_written" href="#"><i></i>续写</a>
                            <a class="link_browse" href="javascript:;"><i></i>浏览23万+</a>
                        </span>
                    </div>
                    <div class="ctd_content">

                    	<!-- 游记2.4 新增模块 -->
                        <div class="ctd_content_controls cf">
                            <a class="fr submit_pop" data-release='0' href="javascript:;">编辑</a>
                            <div>
                                <span><i class="days"></i>行程天数：365天</span>
                                <span><i class="times"></i>出发时间：12月</span>
                                <span><i class="costs"></i>人均费用：400000元</span>
                                <span><i class="whos"></i>和谁出行：一个人</span>
                                <br>
                                <span><i class="plays"></i>玩法：自由行，邮轮，火车，摄影，美食</span>
                            </div>
                        </div>
						<!-- 游记2.4 新增模块 end -->

                        <h3><a href="#">编辑</a>发表于 2013-08-06 22:36</h3>
                        <p></p>
                        <p></p>
                        <img src="http://dev.c-ctrip.com/getimg.php?1790x420" width="1790" />
                        在土耳其，做一只“土猫”很幸福。大街小巷，无处不在。在土耳其，做一只“土猫”很幸福。大街小巷，无处不在。
                        <p>在土耳其，做一只“土猫”很幸福。大街小巷，无处不在。<a href="#">上海市</a>喵星人们怡然自得的以城市主人的姿态迎接着全世界的游人。可以慵懒在公园的长椅上，酣睡在熙攘的街道上，或者干脆蹲守在餐桌下，饱餐后惬意的去清真寺里做一个“小信徒”。土耳其的猫咪受到人们的尊敬，没有人会去伤害这些可爱的精灵。喂食它们似乎也成为土耳其人生活的一部分。由于人们的友善，土耳其的猫咪大都很亲人，无论是面对当地居民还是外国游人，不管是晃荡在马路中央还是人们急促的步伐中，眼神里都不曾闪过一丝的恐惧。这里的猫咪不是在流浪，而是以最自在的方式生活着。</p>
                        <p></p>
                        <p>那天，在伊斯坦布尔，晚餐后走过蓝色清真寺旁的公园，接近午夜时分，公园内游人很少。一位流浪的老人正在翻着垃圾桶，身旁却围坐着数只猫咪，老人一边捡拾着可以回收的物品，一边从垃圾内找出可以吃的食物来喂食猫咪们。并不明亮的橙黄色灯光下，这一幕尤为温情。我走近把手里的饮料瓶递给了老人，他接过放到身旁的袋子里，回我一个灿烂的笑容。这是一张让人轻松的笑脸，尽管生活在最底层，却并未看到些许的对生活的抱怨。当时有些被触动，居然忘记了按下手中的快门。第二晚，不知是不是刻意，我仍旧经过了那里。而老人真的也在，有几只猫咪正在陆续的赶来，显然它们已习惯了每天的宵夜生活。我想，在伊斯坦布尔充满故事的午夜，没有哪一种约会会如此默契，也并不是每一种默契都会如此暖心。而这一次，我依旧没有拍照，不是忘记，而是不忍去打扰。。。</p>
                        <p></p>
                        <div class="img">
                            <a href="#"><img src="http://dev.c-ctrip.com/getimg.php?220x420" /></a>
                            <div class="img_controls">
                                <a class="link_like" href="javascript:;" data-likeid="11092865|1715738" data-likecategory="1"><i></i>喜欢<span>0</span></a>
                                <a class="link_share" href="javascript:;"><i></i>分享</a>
                                <a class="link_comment" data-referencecategory="2" data-referenceids="917519|6892784" href="javascript:;"><i></i>引用到评论</a>
                            </div>
                        </div>
                        <div class="img">
                            <a href="#"><img src="http://dev.c-ctrip.com/getimg.php?790x420" width="790" /></a>
                            <div class="img_controls">
                                <a class="link_like" href="javascript:;"><i></i>喜欢<span>0</span></a>
                                <a class="link_share" href="javascript:;"><i></i>分享</a>
                                <a class="link_comment a_popup_login" data-referencecategory="2" data-referenceids="917519|6892784" href="javascript:;"><i></i>引用到评论</a>
                            </div>
                        </div>
                    </div>
                    <div class="ctd_content">
                        <h3><a href="#">编辑</a>续写——发表于 2013-08-12 22:36</h3>
                        <p>在土耳其，做一只“土猫”很幸福。大街小巷，无处不在。喵星人们怡然自得的以城市主人的姿态迎接着全世界的游人。可以慵懒在公园的长椅上，酣睡在熙攘的街道上，或者干脆蹲守在餐桌下，饱餐后惬意的去清真寺里做一个“小信徒”。土耳其的猫咪受到人们的尊敬，没有人会去伤害这些可爱的精灵。喂食它们似乎也成为土耳其人生活的一部分。由于人们的友善，土耳其的猫咪大都很亲人，无论是面对当地居民还是外国游人，不管是晃荡在马路中央还是人们急促的步伐中，眼神里都不曾闪过一丝的恐惧。这里的猫咪不是在流浪，而是以最自在的方式生活着。</p>
                        <img src="http://dev.c-ctrip.com/getimg.php?1790x420" width="1790" />
                        <p>那天，在伊斯坦布尔，晚餐后走过蓝色清真寺旁的公园，接近午夜时分，公园内游人很少。一位流浪的老人正在翻着垃圾桶，身旁却围坐着数只猫咪，老人一边捡拾着可以回收的物品，一边从垃圾内找出可以吃的食物来喂食猫咪们。并不明亮的橙黄色灯光下，这一幕尤为温情。我走近把手里的饮料瓶递给了老人，他接过放到身旁的袋子里，回我一个灿烂的笑容。这是一张让人轻松的笑脸，尽管生活在最底层，却并未看到些许的对生活的抱怨。当时有些被触动，居然忘记了按下手中的快门。第二晚，不知是不是刻意，我仍旧经过了那里。而老人真的也在，有几只猫咪正在陆续的赶来，显然它们已习惯了每天的宵夜生活。我想，在伊斯坦布尔充满故事的午夜，没有哪一种约会会如此默契，也并不是每一种默契都会如此暖心。而这一次，我依旧没有拍照，不是忘记，而是不忍去打扰。。。</p>
                        <div class="img">
                            <a href="#"><img src="http://dev.c-ctrip.com/getimg.php?560x420" /></a>
                            <div class="img_controls">
                                <a class="link_like" href="javascript:;"><i></i>喜欢<span>0</span></a>
                                <a class="link_share" href="javascript:;"><i></i>分享</a>
                                <a class="link_comment" data-referencecategory="2" data-referenceids="917519|6892784" href="javascript:;"><i></i>引用到评论</a>
                            </div>
                        </div>
                        <div class="img">
                            <a href="#"><img src="http://dev.c-ctrip.com/common/img/1x1.gif" width="300" /></a>
                            <div class="img_controls">
                                <a class="link_like" href="javascript:;"><i></i>喜欢<span>0</span></a>
                                <a class="link_share" href="javascript:;"><i></i>分享</a>
                                <a class="link_comment" data-referencecategory="2" data-referenceids="917519|6892784" href="javascript:;"><i></i>引用到评论</a>
                            </div>
                        </div>
                        <p>在土耳其，做一只“土猫”很幸福。大街小巷，无处不在。喵星人们怡然自得的以城市主人的姿态迎接着全世界的游人。可以慵懒在公园的长椅上，酣睡在熙攘的街道上，或者干脆蹲守在餐桌下，饱餐后惬意的去清真寺里做一个“小信徒”。土耳其的猫咪受到人们的尊敬，没有人会去伤害这些可爱的精灵。喂食它们似乎也成为土耳其人生活的一部分。由于人们的友善，土耳其的猫咪大都很亲人，无论是面对当地居民还是外国游人，不管是晃荡在马路中央还是人们急促的步伐中，眼神里都不曾闪过一丝的恐惧。这里的猫咪不是在流浪，而是以最自在的方式生活着。</p>
                        <p>那天，在伊斯坦布尔，晚餐后走过蓝色清真寺旁的公园，接近午夜时分，公园内游人很少。一位流浪的老人正在翻着垃圾桶，身旁却围坐着数只猫咪，老人一边捡拾着可以回收的物品，一边从垃圾内找出可以吃的食物来喂食猫咪们。并不明亮的橙黄色灯光下，这一幕尤为温情。我走近把手里的饮料瓶递给了老人，他接过放到身旁的袋子里，回我一个灿烂的笑容。这是一张让人轻松的笑脸，尽管生活在最底层，却并未看到些许的对生活的抱怨。当时有些被触动，居然忘记了按下手中的快门。第二晚，不知是不是刻意，我仍旧经过了那里。而老人真的也在，有几只猫咪正在陆续的赶来，显然它们已习惯了每天的宵夜生活。我想，在伊斯坦布尔充满故事的午夜，没有哪一种约会会如此默契，也并不是每一种默契都会如此暖心。而这一次，我依旧没有拍照，不是忘记，而是不忍去打扰。。。</p>
                    </div>
                    <div class="ctd_theend"></div>
                </div>
                <!-- 游记正文 end -->

                <!-- 用户评论 -->
                <div class="ctd_comments">
                    <h2 class="ctd_comments_title">评论<span>(23)</span></h2>
                    <div class="ctd_comments_box cf">
                        <div class="textarea_box fr">
                            <div class="textarea">
                                <textarea placeholder="Hi，楼主等你的回复呢~" id="report_area" data-referenceids="917519|6892784" data-referencecategory="2"></textarea>
                                <span class="ctd_comments_tip"><em class="word_length">0</em>/<em class="word_total">1000</em></span>
                            </div>
                            <a class="gs_btn_v2 btn_publish fl a_popup_login" href="javascript:;" data-onsubmit="1">发表评论</a>
							<span class="error_tip fr">请输入评论内容！</span>
                        </div>
                        <a class="img" href="#"><img src="http://dev.c-ctrip.com/getimg.php?60x60" /></a>
                    </div>
                    <div class="ctd_comments_box cf">
                        <div class="textarea_box fr">
                            <a class="ctd_comments_username" href="#">username</a>
                            <p class="ctd_comments_text"><a href="#">巴黎</a>如果小姑娘一个人去,那边又没有朋友,就担心东西丢光回不了哦！巴黎如果小姑娘一个人去,那边又没有朋友,就担心东西丢光回不了哦！</p>
                            <div class="ctd_comments_contrl">
                                <span class="fl">发表于 2013-12-19 22:36</span>
                                <a class="contrl_01" href="javascript:;">举报</a>
                                <a class="contrl_02 link_reply" class="" href="javascript:;">回复</a>
                            </div>
							<div class="ctd_comments_reply">
                                <div class="textarea">
                                    <textarea>121212</textarea>
                                    <span><em class="word_length">0</em>/<em class="word_total">1000</em></span>
                                </div>
								<span class="error_tip fl">请输入回复内容！</span>
                                <a class="contrl_01" href="#">取消</a><a class="gs_btn_v2" data-onsubmit="1" href="javascript:;">提交</a>
                            </div>
                        </div>
                        <a class="img host" href="#"><img src="http://dev.c-ctrip.com/getimg.php?60x60" /></a>
                    </div>
                    <div class="ctd_comments_box cf">
                        <div class="textarea_box fr">
                            <a class="ctd_comments_username" href="#">username</a>
                            <div class="quote_name">@夏天1204<div>美的难以言表，赞<a href="#">楼主</a>的好贴</div></div>
                            <p class="ctd_comments_text">巴黎如果小姑娘一个人去,那边又没有朋友,就担心东西丢光回不了哦！巴黎如果小姑娘一个人去,那边又没有朋友,就担心东西丢光回不了哦！</p>
                            <div class="ctd_comments_contrl">
                                <span class="fl">发表于 2013-12-19 22:36</span>
                                <a class="contrl_01" href="javascript:;">举报</a>
                                <a class="contrl_02 link_reply" class="" href="javascript:;">回复</a>
                            </div>
                            <div class="ctd_comments_reply">
                                <div class="textarea">
                                    <textarea>121212</textarea>
                                    <span><em class="word_length">0</em>/<em class="word_total">1000</em></span>
                                </div>
								<span class="error_tip fl">请输入回复内容！</span>
                                <a class="contrl_01" href="#">取消</a><a class="gs_btn_v2" data-onsubmit="1" href="javascript:;">提交</a>
                            </div>
                        </div>
                        <a class="img" href="#"><img src="http://dev.c-ctrip.com/getimg.php?60x60" /></a>
                    </div>
                    <div class="ctd_comments_box cf">
                        <div class="textarea_box fr">
                            <a class="ctd_comments_username" href="#">username</a>
                            <div class="quote_name">@夏天1204<div><a href="#"><img src="http://dev.c-ctrip.com/getimg.php?300x200" /></a></div></div>
                            <p class="ctd_comments_text">巴黎如果小姑娘一个人去,那边又没有朋友,就担心东西丢光回不了哦！巴黎如果小姑娘一个人去,那边又没有朋友,就担心东西丢光回不了哦！</p>
                            <div class="ctd_comments_contrl">
                                <span class="fl">发表于 2013-12-19 22:36</span>
                                <a class="contrl_02 link_delete" data-replyId="12121" href="javascript:;">删除</a>
                            </div>
							<div class="ctd_comments_reply">
                                <div class="textarea">
                                    <textarea>121212</textarea>
                                    <span><em class="word_length">0</em>/<em class="word_total">1000</em></span>
                                </div>
								<span class="error_tip fl">请输入回复内容！</span>
                                <a class="contrl_01" href="#">取消</a><a class="gs_btn_v2" data-onsubmit="1" href="javascript:;">提交</a>
                            </div>
                        </div>
                        <a class="img" href="#"><img src="http://dev.c-ctrip.com/getimg.php?60x60" /></a>
                    </div>

                    <?php $fed->model('components/html/pager_v1'); ?>

                </div>
                <!-- 用户评论 end -->

            </div>
            <!-- 左半部分 end -->

            <!-- 右半部分 -->
            <div class="ctd_side">
                <div id="ctd_ttd_tab">
                    <h3 class="ctd_ttd_titile"><span>游记提到的目的地</span><em></em></h3>
                    <div class="ctd_ttd_ctrl">
                    	<span>1/4</span>
                    	<a class="prev disable" href="javascript:;"></a>
                    	<a class="next" href="javascript:;"></a>
                    </div>
                    <ul class="ctd_ttd">
                        <li style="display:block">
                            <h4>上海</h4>
                            <div class="ctd_ttd_box">
                                <div class="ctd_ttd_stat cf">
                                    <a href="#" target="_blank"><span>46700</span><br />游记 &gt;</a>
                                    <a href="#" target="_blank"><span>3158</span><br />景点 &gt;</a>
                                    <a href="#" target="_blank"><span>目的地指南</span><br />更多 &gt;</a>
                                </div>
                            	<h5><a href="#">更多 &gt;</a>热门酒店</h5>
                                <div class="ctd_items cf">
                                    <div class="fl">
                                        <a class="img" href="#" target="_blank"><img src="http://dev.c-ctrip.com/getimg.php?130x90" /></a>
                                        <div class="text">最受好评</div>
                                        <div class="mask"></div>
                                        <p><a href="#" target="_blank">酒店标题名称酒店标 题名称酒店标题名</a></p>
                                        <span class="fr">4.2分</span>
                                        <a class="orange" href="#" target="_blank">¥600起</a>
                                    </div>
                                    <div class="fl">
                                        <a class="img" href="#"><img src="http://dev.c-ctrip.com/getimg.php?130x90" /></a>
                                        <div class="text">性价比最高</div>
                                        <div class="mask"></div>
                                        <p><a href="#">酒店标题名称酒店标 题名称酒店标题名</a></p>
                                        <span class="fr">4.2分</span>
                                        <a class="orange" href="#" target="_blank">¥60000起</a>
                                    </div>
                                </div>
                                <h5><a href="#">更多 &gt;</a>推荐度假线路</h5>
                                <div class="ctd_items cf">
                                    <div class="fl">
                                        <a class="img" href="#" target="_blank"><img src="http://dev.c-ctrip.com/getimg.php?130x90" /></a>
                                        <p><a href="#" target="_blank">酒店标题名称酒店标 题名称酒店标题名</a></p>
                                        <span class="fr">4.2分</span>
                                        <a class="orange" href="#" target="_blank">¥600起</a>
                                    </div>
                                    <div class="fl">
                                        <a class="img" href="#"><img src="http://dev.c-ctrip.com/getimg.php?130x90" /></a>
                                        <p><a href="#">酒店标题名称酒店标 题名称酒店标题名</a></p>
                                        <span class="fr">4.2分</span>
                                        <a class="orange" href="#" target="_blank">¥60000起</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <h4>布宜诺斯艾利斯</h4>
                            <div class="ctd_ttd_box">
                                <div class="ctd_ttd_stat">
                                    <a href="#" target="_blank"><span>233</span><br />游记 &gt;</a>
                                    <a href="#" target="_blank"><span>123</span><br />景点 &gt;</a>
                                    <a href="#" target="_blank"><span>目的地指南</span><br />更多 &gt;</a>
                                </div>
                                <h5><a href="#">更多 &gt;</a>热门酒店</h5>
                                <div class="ctd_items cf">
                                    <div class="fl">
                                        <a class="img" href="#" target="_blank"><img src="http://dev.c-ctrip.com/getimg.php?130x90" /></a>
                                        <div class="text">最受好评</div>
                                        <div class="mask"></div>
                                        <p><a href="#" target="_blank">酒店标题名称酒店标 题名称酒店标题名</a></p>
                                        <span class="fr">4.2分</span>
                                        <a class="orange" href="#" target="_blank">¥600起</a>
                                    </div>
                                    <div class="fl">
                                        <a class="img" href="#"><img src="http://dev.c-ctrip.com/getimg.php?130x90" /></a>
                                        <div class="text">性价比最高</div>
                                        <div class="mask"></div>
                                        <p><a href="#">酒店标题名称酒店标 题名称酒店标题名</a></p>
                                        <span class="fr">4.2分</span>
                                        <a class="orange" href="#" target="_blank">¥60000起</a>
                                    </div>
                                </div>
                                2
                            </div>
                        </li>
                        <li>
                            <h4>杭州</h4>
                            <div class="ctd_ttd_box">
                                <div class="ctd_ttd_stat">
                                    <a href="#" target="_blank"><span>344</span><br />游记 &gt;</a>
                                    <a href="#" target="_blank"><span>112</span><br />景点 &gt;</a>
                                    <a href="#" target="_blank"><span>目的地指南</span><br />更多 &gt;</a>
                                </div>
                                3
                            </div>
                        </li>
                        <li>
                            <h4>苏州</h4>
                            <div class="ctd_ttd_box">
                                <div class="ctd_ttd_stat">
                                    <a href="#" target="_blank"><span>5542</span><br />游记 &gt;</a>
                                    <a href="#" target="_blank"><span>5355</span><br />景点 &gt;</a>
                                    <a href="#" target="_blank"><span>目的地指南</span><br />更多 &gt;</a>
                                </div>
                                4
                            </div>
                        </li>
                    </ul>
                </div>
                <h3 class="ctd_side_titile">相关游记<a class="fr" href="#" target="_blank">更多</a></h3>
                <div class="ctd_travels">
                    <div class="ctd_items cf">
                        <div class="fl">
                            <a class="img" href="#" target="_blank"><img src="http://dev.c-ctrip.com/getimg.php?130x90" /><span class="text"><i class="icon_ll"></i>12453<br /><i class="icon_xh"></i>213332<br /><i class="icon_pl"></i>31231</span></a>
                            <p><a href="#">17天意法－艺术之旅</a></p>
                            <span class="gray"><a href="#">username</a>2014-01-06</span>
                            <i class="icon_j"></i>
                        </div>
                        <div class="fl">
                            <a class="img" href="#" target="_blank"><img src="http://dev.c-ctrip.com/getimg.php?130x90" /><span class="text"><i class="icon_ll"></i>12453<br /><i class="icon_xh"></i>213332<br /><i class="icon_pl"></i>31231</span></a>
                            <p><a href="#">欧洲三国法意瑞12日经典游（超级详细 ...</a></p>
                            <span class="gray"><a href="#">username</a>2014-01-06</span>
                            <i class="icon_s"></i>
                        </div>
                        <div class="fl">
                            <a class="img" href="#" target="_blank"><img src="http://dev.c-ctrip.com/getimg.php?130x90" /><span class="text"><i class="icon_ll"></i>12453<br /><i class="icon_xh"></i>213332<br /><i class="icon_pl"></i>31231</span></a>
                            <p><a href="#">Dolce Vita 意大利全境掠影（实用购物...</a></p>
                            <span class="gray"><a href="#">username</a>2014-01-06</span>
                            <i class="icon_m"></i>
                        </div>
                        <div class="fl">
                            <a class="img" href="#" target="_blank"><img src="http://dev.c-ctrip.com/getimg.php?130x90" /><span class="text"><i class="icon_ll"></i>12453<br /><i class="icon_xh"></i>213332<br /><i class="icon_pl"></i>31231</span></a>
                            <p><a href="#">酒店标题名称酒店标 题名称酒店标题名</a></p>
                            <span class="gray"><a href="#">username</a>2014-01-06</span>
                            <i class="icon_d"></i>
                        </div>
                    </div>
                </div>
                <h3 class="ctd_side_titile"><a class="fr" href="#" target="_blank">更多</a>相关问答</h3>
                <ul class="ctd_qa">
                    <li>
                        <p><a href="#">亲们。请问下到欧洲每人可以带多少现金不申报谢谢！</a></p>
                        <span>2013-02-01&nbsp;&nbsp;&nbsp;&nbsp;2回答</span>
                    </li>
                    <li>
                        <p><a href="#">亲们。请问下到欧洲每人可以带多少现金不申报谢谢！</a></p>
                        <span>2013-02-01&nbsp;&nbsp;&nbsp;&nbsp;2回答</span>
                    </li>
                    <li>
                        <p><a href="#">亲们。请问下到欧洲每人可以带多少现金不申报谢谢！</a></p>
                        <span>2013-02-01&nbsp;&nbsp;&nbsp;&nbsp;2回答</span>
                    </li>
                </ul>
                <div class="ctd_qrcode">
                    <a href="#"></a>
                    <span>1705350</span>
                </div>
                <div class="ctd_sideseo">
                    <h3>巴黎旅游导航</h3>
                    <ul>
                        <li><a href="#">巴黎概述</a></li>
                        <li><a href="#">巴黎景点</a></li>
                        <li><a href="#">巴黎住宿</a></li>
                        <li><a href="#">巴黎餐馆</a></li>
                        <li><a href="#">巴黎地图</a></li>
                        <li><a href="#">巴黎旅游</a></li>
                        <li><a href="#">巴黎团队旅游</a></li>
                        <li><a href="#">巴黎购物</a></li>
                    </ul>
                </div>
            </div>
            <!-- 右半部分 end -->

        </div>

    </div>

    <div id="ctd_ttd_stop"></div>

    <?php $fed->model('common/html/model_foot_seo');//尾部 ?>

    <!-- 删除评论弹层 -->
    <div id="del_comment" class="del_comment">
        <p>确定要删除评论吗？</p>
        <a class="gs_btn_v1 confirm" href="javascript:;">确定</a><a class="gs_btn_v1 color_white" href="javascript:;">取消</a>
    </div>

    <!-- DIV浮动层 -->
    <div class="float_div">
        <a class="btn_index" href="#"></a>
        <div class="ttd_title">
            <a class="ttd_title_text" href="#">布宜诺斯艾利斯</a>
            <span>398</span>
        </div>
        <a class="item_div btn_written" href="#"></a>
        <a class="item_div btn_comment" href="javascript:;"></a>
        <a class="item_div btn_share" href="javascript:;"></a>
        <a class="item_div btn_like" href="javascript:;"></a>
        <a class="item_div btn_pdf" href="javascript:;"></a>
        <div class="progress_bar cf">
            <span class="ctd_title"><a class="text_pic" href="javascript:;"></a>三个小妮子的哈尔滨/雪乡六日之旅</span>
            <div class="progress_line">
                <div class="point"></div>
                <div class="line"></div>
            </div>
        </div>
    </div>

    <!-- 评论弹出层 -->
    <div class="gsn-layer piccomment" id="picComment">
        <a href="javascript:$.popupbox.close();" class="close" rel="nofollow"></a>
        <h3>发表评论</h3>
        <div class="areabox">
            <span class="quotetext">引用 @作者名 的照片</span>
            <textarea id="pic_content" class="gsn-textarea" placeholder="Hi，楼主等你的回复呢~"></textarea>
        </div>
        <p>
            <span class="gsn-tiptext" id="pictextCount">
                你还可以输入 <strong class="count">1000</strong>
                个字符
            </span>
            <span class="journal-comment-tip" style="display: none;">请输入评论内容！</span>
        </p>
        <p>
            <a href="javascript:;" class="gsn-btn-6" rel="nofollow">取消</a>
            <a href="javascript:;" class="gsn-btn-2" data-onsubmit="1" rel="nofollow">提交</a>
        </p>
    </div>

    <!-- 图片上传弹出层 -->
    <div class="gsn-layer set_cover" id="set_cover">
        <a href="javascript:;" class="close"></a>
        <h3 class="set_cover_title">封面设置</h3>
        <div class="set_cover_upload cf">
            <p class="upLoad_data">
                <img src="/common/img/load.gif" />        
                <span>该游记中没有大图可设置成封面。</span>
                <a id="upLoadBtn" class="gs_btn_v3" href="javascript:;">立即上传</a>
            </p>
            <div class="upLoad_box">
                建议封面上传1000px宽度以上的图片。
            </div>
        </div>
        <div class="set_cover_box">
            <div class="cover_pic">
                <a class="cover_pic_l disable" href="javascript:;"></a>
                <a class="cover_pic_r disable" href="javascript:;"></a>
                <div class="cover_pic_cont">
                    <ul>
                        <li>
                            <img data-id="1222131" data-src="http://dev.c-ctrip.com/getimg.php?500x700" src="http://dev.c-ctrip.com/getimg.php?60x60" />
                            <div class="select"></div>
                        </li>
                        <li>
                            <img data-id="223983" data-src="http://dev.c-ctrip.com/getimg.php?500x700" src="http://dev.c-ctrip.com/getimg.php?60x60" />
                            <div></div>
                        </li>
                        <li>
                            <img data-id="223983" data-src="http://dev.c-ctrip.com/getimg.php?500x700" src="http://dev.c-ctrip.com/getimg.php?60x60" />
                            <div></div>
                        </li>
                        <li>
                            <img data-id="223983" data-src="http://dev.c-ctrip.com/getimg.php?500x700" src="http://dev.c-ctrip.com/getimg.php?60x60" />
                            <div></div>
                        </li>
                        <li>
                            <img data-id="223983" data-src="http://dev.c-ctrip.com/getimg.php?500x700" src="http://dev.c-ctrip.com/getimg.php?60x60" />
                            <div></div>
                        </li>
                        <li>
                            <img data-id="223983" data-src="http://dev.c-ctrip.com/getimg.php?500x700" src="http://dev.c-ctrip.com/getimg.php?60x60" />
                            <div></div>
                        </li>
                        <li>
                            <img data-id="223983" data-src="http://dev.c-ctrip.com/getimg.php?500x700" src="http://dev.c-ctrip.com/getimg.php?60x60" />
                            <div></div>
                        </li>
                        <li>
                            <img data-id="223983" data-src="http://dev.c-ctrip.com/getimg.php?500x700" src="http://dev.c-ctrip.com/getimg.php?60x60" />
                            <div></div>
                        </li>
                        <li>
                            <img data-id="223983" data-src="http://dev.c-ctrip.com/getimg.php?500x700" src="http://dev.c-ctrip.com/getimg.php?60x60" />
                            <div></div>
                        </li>
                        <li>
                            <img data-id="223983" data-src="http://dev.c-ctrip.com/getimg.php?500x700" src="http://dev.c-ctrip.com/getimg.php?60x60" />
                            <div></div>
                        </li>
                        <li>
                            <img data-id="223983" data-src="http://dev.c-ctrip.com/getimg.php?500x700" src="http://dev.c-ctrip.com/getimg.php?60x60" />
                            <div></div>
                        </li>
                        <li>
                            <img data-id="223983" data-src="http://dev.c-ctrip.com/getimg.php?500x700" src="http://dev.c-ctrip.com/getimg.php?60x60" />
                            <div></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cover_show">
                <img src="http://dev.c-ctrip.com/getimg.php?1000x900" />
                <div class="cover_show_mask">
                    <p>请选择一张封面图片</p>
                    <div></div>
                </div>
            </div>
            <a class="gs_btn_v3 confirm" href="javascript:;">确定</a><a class="gs_btn_v3 color_white" href="javascript:;">取消</a>
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

    <!--生成PDF弹出层-->
    <div class="gsn-layer generatPDF" id="generatPDF" style="display:none;">
        <a href="javascript:;" class="close"></a>
        <div class="generat_loading">
            <img src="http://dev.c-ctrip.com/travels/img/pdf_loading.gif" />
            <p>我们正在为你喜爱的游记制作PDF中，<br />请耐心等待……</p>
        </div>
    </div>

    <!-- 图片上传接口 -->
    <input type="hidden" id="domainUrl" value="ctrip.com">
    <!-- <input type="hidden" id="upLoadUrl" value="http://youimgupload.youtest.dev.sh.ctriptravel.com/photoupload.ashx" /> -->
    <input type="hidden" id="upLoadUrl" value="http://youimgupload.ctrip.com/uploadphotosvc/photoupload.ashx" />
	<input type="hidden" id="page_id" value="290001" />
    <script type="text/javascript">
        var privateObject = {
        	ReplyListPageNo: 0,
        	CurrentUserId: '0'
        };

        var INTERFACE = {
        	TravelId: "1705350",
            ReleaseTravel: 'mock.php?act=date_api',
        	poi_server_url: '/components/html/mock.php?act=poipop', //POI卡片服务接口
        	isHost: true, //是否是主人态
        	/*LikeUrl: 'mock.php?act=date_api', //点击喜欢请求连接
                CollectUrl: 'mock.php?act=date_api', //点击收藏请求连接*/
        	ShareUrl: 'mock.php?act=date_api', //点击分享请求的连接
        	/**
        	 *  收藏调用的后台方法
        	 *  @param 收藏节点的jQuery对象
        	 */
        	collectRequestFn: function($that) {
        		console.info("collectRequestFn", $that);
        	},
        	/**
        	 *  喜欢调用的后台方法
        	 *  @param 喜欢节点的jQuery对象
        	 */
        	likeRequestFn: function($that) {
        		console.info("likeRequestFn", $that);
        	},
        	classified_info: function(callback) { //增加评论
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
        	add_comment: function(json, callback) { //增加评论
        		console.log("-----------add_comment");
        		console.log(json);
        		callback();
        		var url = "/TravelSite/Home/CreateTravelRemark";
        		$.post(url, json, function(data) {
        			if (data.RetCode == 1) {
        				callback();
        			} else {
        				alert(data.ErrorMessage);
        			};
        		});
        	},
        	img_list: function(callback) {
        		var data = {};
        		data.HasImage = true;
        		data.SelectId = 12;
        		data.List = [{
        			'Id': '48',
        			'DataSrc': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg',
        			'Src': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg'
        		}, {
        			'Id': '56',
        			'DataSrc': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg',
        			'Src': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg'
        		}, {
        			'Id': '12',
        			'DataSrc': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg',
        			'Src': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg'
        		}, {
        			'Id': '222',
        			'DataSrc': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg',
        			'Src': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg'
        		}, {
        			'Id': '333',
        			'DataSrc': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg',
        			'Src': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg'
        		}, {
        			'Id': '186',
        			'DataSrc': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg',
        			'Src': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg'
        		}, {
        			'Id': '494',
        			'DataSrc': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg',
        			'Src': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg'
        		}, {
        			'Id': '507',
        			'DataSrc': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg',
        			'Src': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg'
        		}, {
        			'Id': '123213',
        			'DataSrc': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg',
        			'Src': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg'
        		}, {
        			'Id': '332',
        			'DataSrc': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg',
        			'Src': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg'
        		}, {
        			'Id': '998',
        			'DataSrc': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg',
        			'Src': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg'
        		}, {
        			'Id': '778',
        			'DataSrc': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg',
        			'Src': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg'
        		}, {
        			'Id': '886',
        			'DataSrc': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg',
        			'Src': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg'
        		}, {
        			'Id': '885',
        			'DataSrc': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg',
        			'Src': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg'
        		}, {
        			'Id': '887',
        			'DataSrc': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg',
        			'Src': 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg'
        		}];
        		callback(data);
        	},
        	set_cover: function(json, callback) {
        		var data = {};
        		data.imageId = 12123;
        		data.coverLocationY = '-99';
        		callback(data);
        		// var url = "/TravelSite/Home/CreateTravelRemark";
        		// $.post(url, json, function(data) {
        		//     if (data.RetCode == 1) {
        		//         callback();
        		//     } else {
        		//         alert(data.ErrorMessage);
        		//     };
        		// });
        	},
        	custom_img: function(json, callback) {
        		var data = {};
        		data.Id = 12123;
        		data.DataSrc = 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg';
        		data.Src = 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg';
        		callback(data);
        		// var url = "/TravelSite/Home/CreateTravelRemark";
        		// $.post(url, json, function(data) {
        		//     if (data.RetCode == 1) {
        		//         callback();
        		//     } else {
        		//         alert(data.ErrorMessage);
        		//     };
        		// });
        	},
        	del_reply: function(json, callback) {
        		var url = "/TravelSite/Home/CreateTravelRemark";
        		$.post(url, json, function(data) {
        			if (data.RetCode == 1) {
        				callback();
        			} else {
        				alert(data.ErrorMessage);
        			};
        		});
        	},
        	page_link: function(json, callback) {
        		// var data = {};
        		// data.Id = 12123;
        		// data.DataSrc = 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg';
        		// data.Src = 'http://youimg1.c-ctrip.com/target/tg/696/182/501/c14ddeaf3994412cb1ff4dc6f5ec36cf.jpg';
        		// callback(data);
        		// var url = "/TravelSite/Home/CreateTravelRemark";
        		// $.post(url, json, function(data) {
        		//     if (data.RetCode == 1) {
        		//         callback();
        		//     } else {
        		//         alert(data.ErrorMessage);
        		//     };
        		// });
        	}
        };
    </script>

    <?php $fed->js('common/js/jquery-1.7.min'); ?>
    <?php $fed->js('common/js/gs_popupbox'); ?>
    <?php $fed->js('common/js/head'); ?>
    <?php $fed->js('fed/js/gs_placeholder_1'); ?>
    <?php $fed->js('fed/js/gs_socialize'); ?>
    <?php $fed->js('fed/js/gs_button'); ?>
    <?php $fed->js('fed/js/gs_input'); ?>
    <?php $fed->js('fed/js/gs_calendar'); ?>
    <?php $fed->js('fed/js/jquery.cookie'); ?>
    <?php $fed->js('fed/js/jquery.lazyload.min'); ?>
    <?php $fed->js('fed/js/jquery.json-2.3.min'); ?>
    <?php $fed->js('components/js/gs_util'); ?>
    <?php $fed->js('components/js/pager_v1'); ?>
    <?php $fed->js('components/js/ajaxupload'); //ajax上传组件 ?>
	<?php $fed->js('components/js/gs_cookiedb'); //cookie临时存储 ?>
	<?php $fed->js('components/js/gs_poi_pop'); //关健字营销POI卡片 ?>
    <?php $fed->js('components/js/_poi_card'); //关健字营销POI卡片应用层代码 ?>
    <?php $fed->js('travels/js/_model'); ?>
    <?php $fed->js('travels/js/pdf_controls'); //pdf控件 ?>
    <?php $fed->js('travels/js/classic_travels_detail'); ?>
    <?php $fed->js('travels/js/upload_popup'); ?>	
    <?php $fed->js('travels/js/_publish_popup'); ?>

</body>
</html>
<?php $fed->get_ver(); //生成的版本号默认(v2.0) ?>
