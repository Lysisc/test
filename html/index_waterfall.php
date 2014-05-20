<?php include('../../config.php');  ?>
<!DOCTYPE html>
<html lang="en">
<head>

    <meta http-equiv="X-UA-Compatible" content="IE=10" charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>游记攻略,旅游体验,自助游游记 -携程社区</title>

    <?php $fed->css('common/css/head'); ?>
    <?php $fed->css('common/css/global'); ?>
    <?php $fed->css('fed/css/gs_bottom_pop'); ?>
    <?php $fed->css('fed/css/suggest'); ?>
    <?php $fed->css('fed/css/icon'); ?>
    <?php $fed->css('fed/css/button'); ?>
    <?php $fed->css('travels/css/waterfall'); ?>
    <?php $fed->css('travels/css/listview'); ?>

</head>
<body>
    
    <?php $fed->model('common/html/model_head');//头部 ?>

    <div class="desContainer content" id="desContainer">
        <div class="content">
            <div class="despop_nav">
                <ul>
                    <li class="first f_current">
                        <a href="/travels/fall/t1.html">全部</a>
                    </li>
                    <li class="">
                        <a>
                            国内
                            <span></span>
                        </a>
                    </li>
                    <li class="">
                        <a>
                            亚洲
                            <span></span>
                        </a>
                    </li>
                    <li class="">
                        <a>
                            欧洲
                            <span></span>
                        </a>
                    </li>
                    <li class="">
                        <a>
                            北美洲
                            <span></span>
                        </a>
                    </li>
                    <li class="">
                        <a>
                            大洋洲
                            <span></span>
                        </a>
                    </li>
                    <li class="">
                        <a>
                            其它洲
                            <span></span>
                        </a>
                    </li>
                </ul>
            </div>
            <!--pop层-->    
            <div class="despop_box">
                <div style="display: none;">
                    <dl>
                        <dt>华东</dt>
                        <dd class="hotdes">
                            <a href="/travels/shanghai2.html" class="hotdes" title="上海">上海</a>
                            <span>6393</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/hangzhou14.html" class="hotdes" title="杭州">杭州</a>
                            <span>7715</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/shaoxing18.html" class="" title="绍兴">绍兴</a>
                            <span>1256</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/wuzhen508.html" class="" title="乌镇">乌镇</a>
                            <span>982</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/xitang15.html" class="" title="西塘">西塘</a>
                            <span>1622</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/putuoshan16.html" class="" title="普陀山">普陀山</a>
                            <span>1219</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/ningbo83.html" class="" title="宁波">宁波</a>
                            <span>1384</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/suzhou11.html" class="hotdes" title="苏州">苏州</a>
                            <span>4856</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/nanjing9.html" class="" title="南京">南京</a>
                            <span>2666</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/wuxi10.html" class="" title="无锡">无锡</a>
                            <span>1046</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/yangzhou12.html" class="" title="扬州">扬州</a>
                            <span>1336</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/wuyuan446.html" class="" title="婺源">婺源</a>
                            <span>1563</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/lushan20.html" class="" title="庐山">庐山</a>
                            <span>1119</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/huangshan19.html" class="hotdes" title="黄山">黄山</a>
                            <span>3820</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/jiuhuashan182.html" class="" title="九华山">九华山</a>
                            <span>373</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/qingdao5.html" class="hotdes" title="青岛">青岛</a>
                            <span>3077</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/taishan6.html" class="" title="泰山">泰山</a>
                            <span>938</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/weihai169.html" class="" title="威海">威海</a>
                            <span>738</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>华南</dt>
                        <dd class="hotdes">
                            <a href="/travels/xiamen21.html" class="hotdes" title="厦门">厦门</a>
                            <span>6049</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/wuyishan22.html" class="" title="武夷山">武夷山</a>
                            <span>1014</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/guangzhou152.html" class="" title="广州">广州</a>
                            <span>2198</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/shenzhen26.html" class="" title="深圳">深圳</a>
                            <span>1040</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/zhuhai27.html" class="" title="珠海">珠海</a>
                            <span>466</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/guilin28.html" class="hotdes" title="桂林">桂林</a>
                            <span>6063</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/yangshuo702.html" class="" title="阳朔">阳朔</a>
                            <span>2985</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/beihai140.html" class="" title="北海">北海</a>
                            <span>739</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/nanning166.html" class="" title="南宁">南宁</a>
                            <span>480</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/haikou37.html" class="" title="海口">海口</a>
                            <span>423</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/sanya61.html" class="hotdes" title="三亚">三亚</a>
                            <span>9076</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>华北</dt>
                        <dd class="hotdes">
                            <a href="/travels/beijing1.html" class="hotdes" title="北京">北京</a>
                            <span>7636</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/tianjin154.html" class="" title="天津">天津</a>
                            <span>936</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/qinhuangdao132.html" class="" title="秦皇岛">秦皇岛</a>
                            <span>588</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/pingyao365.html" class="" title="平遥">平遥</a>
                            <span>955</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/datong275.html" class="" title="大同">大同</a>
                            <span>856</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/wutaishan184.html" class="" title="五台山">五台山</a>
                            <span>624</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>华中</dt>
                        <dd class="">
                            <a href="/travels/zhangjiajie23.html" class="" title="张家界">张家界</a>
                            <span>2375</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/fenghuang988.html" class="" title="凤凰">凤凰</a>
                            <span>1436</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/changsha148.html" class="" title="长沙">长沙</a>
                            <span>803</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/wuhan145.html" class="" title="武汉">武汉</a>
                            <span>1135</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/wudangshan146.html" class="" title="武当山">武当山</a>
                            <span>209</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/luoyang198.html" class="" title="洛阳">洛阳</a>
                            <span>969</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>东北</dt>
                        <dd class="">
                            <a href="/travels/haerbin151.html" class="" title="哈尔滨">哈尔滨</a>
                            <span>1835</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/changchun216.html" class="" title="长春">长春</a>
                            <span>304</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/changbaishan268.html" class="" title="长白山">长白山</a>
                            <span>762</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/dalian4.html" class="" title="大连">大连</a>
                            <span>1505</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/shenyang155.html" class="" title="沈阳">沈阳</a>
                            <span>516</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/hulunbeier458.html" class="" title="呼伦贝尔">呼伦贝尔</a>
                            <span>1244</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>西北</dt>
                        <dd class="hotdes">
                            <a href="/travels/xian7.html" class="hotdes" title="西安">西安</a>
                            <span>4209</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/xining237.html" class="" title="西宁">西宁</a>
                            <span>2154</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/qinghaihu281.html" class="" title="青海湖">青海湖</a>
                            <span>1621</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/lanzhou231.html" class="" title="兰州">兰州</a>
                            <span>903</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/dunhuang8.html" class="" title="敦煌">敦煌</a>
                            <span>1605</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/jiayuguan284.html" class="" title="嘉峪关">嘉峪关</a>
                            <span>685</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/wulumuqi117.html" class="" title="乌鲁木齐">乌鲁木齐</a>
                            <span>1183</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/yinchuan239.html" class="" title="银川">银川</a>
                            <span>603</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>西南</dt>
                        <dd class="hotdes">
                            <a href="/travels/chengdu104.html" class="hotdes" title="成都">成都</a>
                            <span>4007</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/chongqing158.html" class="" title="重庆">重庆</a>
                            <span>1738</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/leshan103.html" class="" title="乐山">乐山</a>
                            <span>1228</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/daocheng342.html" class="" title="稻城－亚丁">稻城－亚丁</a>
                            <span>1195</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/jiuzhaigou25.html" class="hotdes" title="九寨沟">九寨沟</a>
                            <span>4065</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/lijiang32.html" class="hotdes" title="丽江">丽江</a>
                            <span>1.0万</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/dali31.html" class="" title="大理">大理</a>
                            <span>2791</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/kunming29.html" class="" title="昆明">昆明</a>
                            <span>2918</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/luguhu105.html" class="" title="泸沽湖">泸沽湖</a>
                            <span>1895</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/xianggelila106.html" class="hotdes" title="香格里拉">香格里拉</a>
                            <span>3134</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/xishuangbanna30.html" class="" title="西双版纳">西双版纳</a>
                            <span>930</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/lhasa36.html" class="hotdes" title="拉萨">拉萨</a>
                            <span>3817</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/linzhi126.html" class="" title="林芝">林芝</a>
                            <span>1260</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/guiyang33.html" class="" title="贵阳">贵阳</a>
                            <span>911</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>港澳台</dt>
                        <dd class="hotdes">
                            <a href="/travels/hongkong38.html" class="hotdes" title="香港">香港</a>
                            <span>8310</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/macau39.html" class="" title="澳门">澳门</a>
                            <span>1898</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/taipeicity360.html" class="" title="台北">台北</a>
                            <span>2270</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/jiufen120424.html" class="" title="九份">九份</a>
                            <span>553</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/yilan1383.html" class="" title="宜兰">宜兰</a>
                            <span>94</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/hualien1366.html" class="" title="花莲">花莲</a>
                            <span>701</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/nantou759.html" class="" title="南投">南投</a>
                            <span>640</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/tainan757.html" class="" title="台南">台南</a>
                            <span>261</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/gaoxiong756.html" class="" title="高雄">高雄</a>
                            <span>888</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/kenting1380.html" class="" title="垦丁">垦丁</a>
                            <span>724</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/taitung760.html" class="" title="台东">台东</a>
                            <span>229</span>
                        </dd>
                    </dl>
                    <p>
                        找不到？去这里
                        <a href="http://you.ctrip.com/SearchSite/empty">搜索试试 &gt;&gt;</a>
                    </p>
                </div>
                <div style="display: none;">
                    <dl>
                        <dt>东亚</dt>
                        <dd class="hotdes">
                            <a href="/travels/japan100041.html" class="hotdes" title="日本">日本</a>
                            <span>4418</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/tokyo294.html" class="hotdes" title="东京">东京</a>
                            <span>1894</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/osaka293.html" class="" title="大阪">大阪</a>
                            <span>994</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/kyoto430.html" class="hotdes" title="京都">京都</a>
                            <span>1023</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/hokkaido296.html" class="" title="北海道">北海道</a>
                            <span>615</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/okinawa292.html" class="" title="冲绳">冲绳</a>
                            <span>321</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/kyushu291.html" class="" title="九州">九州</a>
                            <span>147</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/nagoya2127.html" class="" title="名古屋">名古屋</a>
                            <span>65</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/republicofkorea100042.html" class="hotdes" title="韩国">韩国</a>
                            <span>2987</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/seoul234.html" class="hotdes" title="首尔">首尔</a>
                            <span>1674</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/chejudoisland297.html" class="hotdes" title="济州岛">济州岛</a>
                            <span>1213</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/gangwon1185.html" class="" title="江原道">江原道</a>
                            <span>149</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/busan432.html" class="" title="釜山">釜山</a>
                            <span>192</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/incheon1385.html" class="" title="仁川">仁川</a>
                            <span>246</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>东南亚</dt>
                        <dd class="hotdes">
                            <a href="/travels/thailand100021.html" class="hotdes" title="泰国">泰国</a>
                            <span>8678</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/bangkok191.html" class="hotdes" title="曼谷">曼谷</a>
                            <span>3265</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/phuket364.html" class="hotdes" title="普吉岛">普吉岛</a>
                            <span>3738</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/chiangmai209.html" class="hotdes" title="清迈">清迈</a>
                            <span>1220</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/pattaya208.html" class="" title="芭堤雅">芭堤雅</a>
                            <span>880</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/kohsamui566.html" class="" title="苏梅岛">苏梅岛</a>
                            <span>727</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/kualalumpur45.html" class="hotdes" title="吉隆坡">吉隆坡</a>
                            <span>1496</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/sabah538.html" class="hotdes" title="沙巴">沙巴</a>
                            <span>1442</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/singapore53.html" class="hotdes" title="新加坡">新加坡</a>
                            <span>1833</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/cambodia100081.html" class="hotdes" title="柬埔寨">柬埔寨</a>
                            <span>3139</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/siemreap599.html" class="hotdes" title="暹粒-吴哥窟">暹粒-吴哥窟</a>
                            <span>2771</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/philippines100044.html" class="hotdes" title="菲律宾">菲律宾</a>
                            <span>1362</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/boracay610.html" class="" title="长滩岛">长滩岛</a>
                            <span>666</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/boholisland1166.html" class="" title="薄荷岛">薄荷岛</a>
                            <span>132</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/indonesia100045.html" class="hotdes" title="印度尼西亚">印度尼西亚</a>
                            <span>3222</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/bali438.html" class="hotdes" title="巴厘岛">巴厘岛</a>
                            <span>2896</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>南亚</dt>
                        <dd class="">
                            <a href="/travels/maldives330.html" class="" title="马尔代夫">马尔代夫</a>
                            <span>993</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/nepal100079.html" class="hotdes" title="尼泊尔">尼泊尔</a>
                            <span>1408</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/india100080.html" class="" title="印度">印度</a>
                            <span>936</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/delhi24685.html" class="" title="德里">德里</a>
                            <span>330</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/agra1026.html" class="" title="阿格拉">阿格拉</a>
                            <span>206</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/srilanka100084.html" class="" title="斯里兰卡">斯里兰卡</a>
                            <span>263</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>中西亚</dt>
                        <dd class="">
                            <a href="/travels/unitedarademirates100099.html" class="" title="阿联酋">阿联酋</a>
                            <span>401</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/dubai1062.html" class="" title="迪拜">迪拜</a>
                            <span>364</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/abudhabi1353.html" class="" title="阿布扎比">阿布扎比</a>
                            <span>115</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/isreal100074.html" class="" title="以色列">以色列</a>
                            <span>150</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/jerusalem552.html" class="" title="耶路撒冷">耶路撒冷</a>
                            <span>88</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/iran100123.html" class="" title="伊朗">伊朗</a>
                            <span>100</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/teheran949.html" class="" title="德黑兰">德黑兰</a>
                            <span>73</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/shiraz24875.html" class="" title="设拉子">设拉子</a>
                            <span>15</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/jordan100085.html" class="" title="约旦">约旦</a>
                            <span>35</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/saudiarabia100121.html" class="" title="沙特阿拉伯">沙特阿拉伯</a>
                            <span>16</span>
                        </dd>
                    </dl>
                    <p>
                        找不到？去这里
                        <a href="http://you.ctrip.com/SearchSite/empty">搜索试试 &gt;&gt;</a>
                    </p>
                </div>
                <div style="display: none;">
                    <dl>
                        <dt>东欧</dt>
                        <dd class="">
                            <a href="/travels/russia100083.html" class="" title="俄罗斯">俄罗斯</a>
                            <span>576</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/stpetersburg359.html" class="" title="圣彼得堡">圣彼得堡</a>
                            <span>235</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/moscow358.html" class="" title="莫斯科">莫斯科</a>
                            <span>344</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/turkey100073.html" class="" title="土耳其">土耳其</a>
                            <span>526</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/istanbul258.html" class="" title="伊斯坦布尔">伊斯坦布尔</a>
                            <span>337</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>西欧</dt>
                        <dd class="hotdes">
                            <a href="/travels/unitedkingdom20354.html" class="hotdes" title="英国">英国</a>
                            <span>1346</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/london309.html" class="" title="伦敦">伦敦</a>
                            <span>760</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/cambridge721.html" class="" title="剑桥">剑桥</a>
                            <span>158</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/edinburgh389.html" class="" title="爱丁堡">爱丁堡</a>
                            <span>246</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/bath718.html" class="" title="巴斯">巴斯</a>
                            <span>86</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/france100024.html" class="hotdes" title="法国">法国</a>
                            <span>1941</span>
                        </dd>
                        <dd class="hotdes">
                            <a href="/travels/paris308.html" class="hotdes" title="巴黎">巴黎</a>
                            <span>1411</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/lyon391.html" class="" title="里昂">里昂</a>
                            <span>48</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/provence750.html" class="" title="普罗旺斯">普罗旺斯</a>
                            <span>376</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/cannes715.html" class="" title="戛纳">戛纳</a>
                            <span>80</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/bordeaux716.html" class="" title="波尔多">波尔多</a>
                            <span>26</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/ireland100090.html" class="" title="爱尔兰">爱尔兰</a>
                            <span>56</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/dublin819.html" class="" title="都柏林">都柏林</a>
                            <span>31</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/holland100028.html" class="" title="荷兰">荷兰</a>
                            <span>391</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/amsterdam299.html" class="" title="阿姆斯特丹">阿姆斯特丹</a>
                            <span>277</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/belgium100023.html" class="" title="比利时">比利时</a>
                            <span>247</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/brussels298.html" class="" title="布鲁塞尔">布鲁塞尔</a>
                            <span>154</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/luxemburg300.html" class="" title="卢森堡">卢森堡</a>
                            <span>68</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>南欧</dt>
                        <dd class="hotdes">
                            <a href="/travels/italy100026.html" class="hotdes" title="意大利">意大利</a>
                            <span>1800</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/rome303.html" class="" title="罗马">罗马</a>
                            <span>867</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/venice340.html" class="" title="威尼斯">威尼斯</a>
                            <span>655</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/florence341.html" class="" title="佛罗伦萨">佛罗伦萨</a>
                            <span>558</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/milan304.html" class="" title="米兰">米兰</a>
                            <span>355</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/spain100035.html" class="" title="西班牙">西班牙</a>
                            <span>778</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/madrid378.html" class="" title="马德里">马德里</a>
                            <span>234</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/greece100036.html" class="" title="希腊">希腊</a>
                            <span>632</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/santorini1998.html" class="" title="圣托里尼岛">圣托里尼岛</a>
                            <span>162</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/athens382.html" class="" title="雅典">雅典</a>
                            <span>316</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/portugal100106.html" class="" title="葡萄牙">葡萄牙</a>
                            <span>146</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/lisbon574.html" class="" title="里斯本">里斯本</a>
                            <span>107</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>北欧</dt>
                        <dd class="">
                            <a href="/travels/denmark100069.html" class="" title="丹麦">丹麦</a>
                            <span>219</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/copenhagen449.html" class="" title="哥本哈根">哥本哈根</a>
                            <span>205</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/norway100098.html" class="" title="挪威">挪威</a>
                            <span>170</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/oslo450.html" class="" title="奥斯陆">奥斯陆</a>
                            <span>119</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/sweden100097.html" class="" title="瑞典">瑞典</a>
                            <span>180</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/stockholm451.html" class="" title="斯德哥尔摩">斯德哥尔摩</a>
                            <span>153</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/finland100092.html" class="" title="芬兰">芬兰</a>
                            <span>149</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/helsinki452.html" class="" title="赫尔辛基">赫尔辛基</a>
                            <span>114</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/iceland100096.html" class="" title="冰岛">冰岛</a>
                            <span>45</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/reykjavik1044.html" class="" title="雷克雅未克">雷克雅未克</a>
                            <span>40</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>中欧</dt>
                        <dd class="hotdes">
                            <a href="/travels/germany100025.html" class="hotdes" title="德国">德国</a>
                            <span>1307</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/berlin306.html" class="" title="柏林">柏林</a>
                            <span>216</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/munich572.html" class="" title="慕尼黑">慕尼黑</a>
                            <span>405</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/frankfurt305.html" class="" title="法兰克福">法兰克福</a>
                            <span>282</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/cologne388.html" class="" title="科隆">科隆</a>
                            <span>137</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/austria100027.html" class="" title="奥地利">奥地利</a>
                            <span>586</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/vienna439.html" class="" title="维也纳">维也纳</a>
                            <span>297</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/theczechrepublic100094.html" class="" title="捷克">捷克</a>
                            <span>356</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/prague822.html" class="" title="布拉格">布拉格</a>
                            <span>319</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/ceskykrumlov8532.html" class="" title="克鲁姆洛夫">克鲁姆洛夫</a>
                            <span>69</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/switzerland100050.html" class="" title="瑞士">瑞士</a>
                            <span>782</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/lucerne644.html" class="" title="琉森">琉森</a>
                            <span>332</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/zurich301.html" class="" title="苏黎世">苏黎世</a>
                            <span>215</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/hungary100101.html" class="" title="匈牙利">匈牙利</a>
                            <span>162</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/budapest1109.html" class="" title="布达佩斯">布达佩斯</a>
                            <span>145</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/poland100118.html" class="" title="波兰">波兰</a>
                            <span>31</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/warsaw1261.html" class="" title="华沙">华沙</a>
                            <span>24</span>
                        </dd>
                    </dl>
                    <p>
                        找不到？去这里
                        <a href="http://you.ctrip.com/SearchSite/empty">搜索试试 &gt;&gt;</a>
                    </p>
                </div>
                <div style="display: none;">
                    <dl>
                        <dt>美国</dt>
                        <dd class="">
                            <a href="/travels/newyork248.html" class="" title="纽约">纽约</a>
                            <span>637</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/losangeles250.html" class="" title="洛杉矶">洛杉矶</a>
                            <span>631</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/sanfrancisco249.html" class="" title="旧金山">旧金山</a>
                            <span>589</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/hawaii251.html" class="" title="夏威夷">夏威夷</a>
                            <span>498</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/lasvegas252.html" class="" title="拉斯维加斯">拉斯维加斯</a>
                            <span>506</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/washingtondc257.html" class="" title="华盛顿">华盛顿</a>
                            <span>208</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/seattle253.html" class="" title="西雅图">西雅图</a>
                            <span>108</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/boston442.html" class="" title="波士顿">波士顿</a>
                            <span>160</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/chicago254.html" class="" title="芝加哥">芝加哥</a>
                            <span>130</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/florida941.html" class="" title="佛罗里达">佛罗里达</a>
                            <span>167</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/miami1920.html" class="" title="迈阿密">迈阿密</a>
                            <span>68</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/yellowstonenationalpark120415.html" class="" title="黄石国家公园">黄石国家公园</a>
                            <span>106</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>加拿大</dt>
                        <dd class="">
                            <a href="/travels/vancouver354.html" class="" title="温哥华">温哥华</a>
                            <span>327</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/toronto355.html" class="" title="多伦多">多伦多</a>
                            <span>205</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/montreal661.html" class="" title="蒙特利尔">蒙特利尔</a>
                            <span>85</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/victoria357.html" class="" title="维多利亚">维多利亚</a>
                            <span>56</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/banffnationalpark2045.html" class="" title="班夫">班夫</a>
                            <span>47</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/quebeccity1405.html" class="" title="魁北克市">魁北克市</a>
                            <span>14</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>其他</dt>
                        <dd class="">
                            <a href="/travels/cuba100113.html" class="" title="古巴">古巴</a>
                            <span>40</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/mexico100108.html" class="" title="墨西哥">墨西哥</a>
                            <span>147</span>
                        </dd>
                    </dl>
                    <p>
                        找不到？去这里
                        <a href="http://you.ctrip.com/SearchSite/empty">搜索试试 &gt;&gt;</a>
                    </p>
                </div>
                <div style="display: none;">
                    <dl>
                        <dt>澳大利亚</dt>
                        <dd class="">
                            <a href="/travels/sydney236.html" class="" title="悉尼">悉尼</a>
                            <span>792</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/goldcoast456.html" class="" title="黄金海岸">黄金海岸</a>
                            <span>256</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/melbourne312.html" class="" title="墨尔本">墨尔本</a>
                            <span>632</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/adelaide626.html" class="" title="阿德莱德">阿德莱德</a>
                            <span>54</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/cairns453.html" class="" title="凯恩斯">凯恩斯</a>
                            <span>269</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>新西兰</dt>
                        <dd class="">
                            <a href="/travels/auckland320.html" class="" title="奥克兰">奥克兰</a>
                            <span>246</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/rotorua682.html" class="" title="罗托鲁瓦">罗托鲁瓦</a>
                            <span>77</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/christchurch695.html" class="" title="基督城">基督城</a>
                            <span>237</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/queenstown684.html" class="" title="皇后镇">皇后镇</a>
                            <span>234</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/dunedin1192.html" class="" title="但尼丁">但尼丁</a>
                            <span>42</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>其他</dt>
                        <dd class="">
                            <a href="/travels/fiji100102.html" class="" title="斐济">斐济</a>
                            <span>60</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/tahiti1354.html" class="" title="大溪地">大溪地</a>
                            <span>27</span>
                        </dd>
                    </dl>
                    <p>
                        找不到？去这里
                        <a href="http://you.ctrip.com/SearchSite/empty">搜索试试 &gt;&gt;</a>
                    </p>
                </div>
                <div style="display: none;">
                    <dl>
                        <dt>南美洲</dt>
                        <dd class="">
                            <a href="/travels/brasil100109.html" class="" title="巴西">巴西</a>
                            <span>86</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/argentina100111.html" class="" title="阿根廷">阿根廷</a>
                            <span>85</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/peru100112.html" class="" title="秘鲁">秘鲁</a>
                            <span>40</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/chile100110.html" class="" title="智利">智利</a>
                            <span>19</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>非洲</dt>
                        <dd class="">
                            <a href="/travels/egypt100030.html" class="" title="埃及">埃及</a>
                            <span>894</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/morocco100132.html" class="" title="摩洛哥">摩洛哥</a>
                            <span>26</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/kenya100087.html" class="" title="肯尼亚">肯尼亚</a>
                            <span>287</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/southafrica100049.html" class="" title="南非">南非</a>
                            <span>286</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/seychelles100153.html" class="" title="塞舌尔">塞舌尔</a>
                            <span>41</span>
                        </dd>
                        <dd class="">
                            <a href="/travels/mauritius444.html" class="" title="毛里求斯">毛里求斯</a>
                            <span>215</span>
                        </dd>
                    </dl>
                    <dl>
                        <dt>南极洲</dt>
                        <dd class="">
                            <a href="/travels/southpole120487.html" class="" title="南极">南极</a>
                            <span>39</span>
                        </dd>
                    </dl>
                    <p>
                        找不到？去这里
                        <a href="http://you.ctrip.com/SearchSite/empty">搜索试试 &gt;&gt;</a>
                    </p>
                </div>
            </div>
        </div>
        <div style="" class="forbreak">
            <div class="bar-tab">
                <ul class="journaltab cf">
                    <li class="current">
                        <a href="/travels/fall/t1.html">推荐</a>
                        <span class="poptip-arrow poptip-arrow-bottom"> <em>◆</em>
                        </span>
                        |
                    </li>

                    <li class="">
                        <a href="/travels/fall/t3.html">热门</a>
                        <span class="poptip-arrow poptip-arrow-bottom"> <em>◆</em>
                        </span>
                        |
                    </li>

                    <li class="">
                        <a href="/travels/fall/t2.html">最新</a>
                        <span class="poptip-arrow poptip-arrow-bottom">
                            <em>◆</em>
                        </span>
                    </li>

                </ul>
                <div class="list-tab">
                    <a href="/add-travel/guide.html" class="btnw95 btnwritetraveldiary" target="_blank"> <i></i>
                        写游记
                    </a>
                </div>
            </div>
        </div>
        <div class="forfall">
            <div class="photo-fall" id="photo-fall">
                <!--游记第一页数据加载-->    

                <div class="city" data-TravelId="1732111">
                    <a target='_blank' class="city-image" href="/travels/youyouctripstar10000/1732111.html">
                        <img data-TravelCoverId="11447297" class="pic" width="228" height="95" src="http://dimg02.c-ctrip.com/images/tg/017/960/582/59810f47bbf645a2a6e1661215c233e0_R_228_95.jpg"></a>
                    <div class="city-sub">
                        <a target='_blank' class="city-name" href="/place/youyouctripstar10000.html">太空游游Ctrip星球</a>
                        ：
                        <a target='_blank'class="cpt" title="别掐了，是真的！【加游站】旅行圆梦计划（赢5.5万爱尔兰游、4999元等超多奖励）" href="/travels/youyouctripstar10000/1732111.html">别掐了，是真的！【加游站】旅行圆梦计划（赢5.5万爱尔兰游、4999元等超多奖励）</a>
                        <p class="opts"> <i class='numview' title='浏览'>97598</i>
                            <i class="want" title='喜欢'>177</i>
                            &nbsp;&nbsp;
                            <i class="numreply" title='回复'>74</i>
                        </p>
                    </div>
                    <div class='authorinfo'>
                        <p class="author" data-authorid="9727">
                            <a class='imgnav' target='_blank' href="/members/youyoujun/journals">
                                <img title="游游君" width='28' height='28' class='pic' src='http://images4.c-ctrip.com/target/headphoto/953/661/111/f2d6732fe4b144bd997c870ded1c3a15_100_100.jpg'></a>
                            <a target='_blank' href="/members/youyoujun/journals" title="游游君" >游游君</a>
                            &nbsp;&nbsp;
                            <i class="time">2014-03-24</i>
                        </p>
                    </div>
                </div>
                <div class="city" data-TravelId="1734196">
                    <span class='pic-tagico-1'></span>
                    <a target='_blank' class="city-image" href="/travels/seogwipo14755/1734196.html">
                        <img data-TravelCoverId="11425904" class="pic" width="228" height="151" src="http://dimg02.c-ctrip.com/images/tg/966/800/649/853029ea828744ecbf843fed8ba9f5d8_R_228_151.jpg"></a>
                    <div class="city-sub">
                        <a target='_blank' class="city-name" href="/place/seogwipo14755.html">西归浦市</a>
                        ：
                        <a target='_blank'class="cpt" title="【鱼眼看济州】春季悠游八天：赏樱&amp;amp;油菜花攻略" href="/travels/seogwipo14755/1734196.html">【鱼眼看济州】春季悠游八天：赏樱&amp;油菜花攻略</a>
                        <p class="opts">
                            <i class='numview' title='浏览'>1913</i>
                            <i class="want" title='喜欢'>15</i>
                            &nbsp;&nbsp;
                            <i class="numreply" title='回复'>11</i>
                        </p>
                    </div>
                    <div class='authorinfo'>
                        <p class="author" data-authorid="203607">
                            <a class='imgnav' target='_blank' href="/members/KristenLiang/journals">
                                <img title="KristenLiang" width='28' height='28' class='pic' src='http://images4.c-ctrip.com/target/headphoto/626/041/041/f95298f1feb54e138eb46cdf33a60da2_100_100.jpg'></a>
                            <a target='_blank' href="/members/KristenLiang/journals" title="KristenLiang" >KristenLiang</a>
                            &nbsp;&nbsp;
                            <i class="time">2014-03-26</i>
                        </p>
                    </div>
                </div>
                <div class="city" data-TravelId="1685682">
                    <span class='pic-tagico-1'></span>
                    <a target='_blank' class="city-image" href="/travels/kunming29/1685682.html">
                        <img data-TravelCoverId="9400289" class="pic" width="228" height="151" src="http://dimg02.c-ctrip.com/images/tg/869/945/655/a170083d64d843959961daaaead3e36b_R_228_151.jpg"></a>
                    <div class="city-sub">
                        <a target='_blank' class="city-name" href="/place/kunming29.html">昆明</a>
                        ：
                        <a target='_blank'class="cpt" title="【i旅行】【遇见另一种生活】昆明－大理－双廊－丽江－泸沽湖 （圣诞穷游7日）" href="/travels/kunming29/1685682.html">【i旅行】【遇见另一种生活】昆明－大理－双廊－丽江－泸沽湖 （圣诞穷游7日）</a>
                        <p class="opts">
                            <i class='numview' title='浏览'>37165</i>
                            <i class="want" title='喜欢'>57</i>
                            &nbsp;&nbsp;
                            <i class="numreply" title='回复'>42</i>
                        </p>
                    </div>
                    <div class='authorinfo'>
                        <p class="author" data-authorid="8121350">
                            <a class='imgnav' target='_blank' href="/members/twinklelu/journals">
                                <img title="炒面姐姐" width='28' height='28' class='pic' src='http://images4.c-ctrip.com/target/headphoto/331/429/690/13618b5468da49fe9391bd44a8a62399_100_100.jpg'></a>
                            <a target='_blank' href="/members/twinklelu/journals" title="炒面姐姐" >炒面姐姐</a>
                            &nbsp;&nbsp;
                            <i class="time">2014-01-16</i>
                        </p>
                    </div>
                </div>
                <div class="city" data-TravelId="1666482">
                    <span class='pic-tagico-1'></span>
                    <a target='_blank' class="city-image" href="/travels/vienna439/1666482.html">
                        <span class="text-tagico-1">
                            <i></i>
                            <span>微游记</span>
                        </span>
                        <img data-TravelCoverId="9455081" class="pic" width="228" height="171" src="http://cyjctrip.qiniudn.com/29039/1364037522100p17mbfhkjkeoefttbtp991kqp2.jpg?imageView/1/w/228/h/171"></a>
                    <div class="city-sub">
                        <a target='_blank' class="city-name" href="/place/vienna439.html">维也纳</a>
                        ：
                        <a target='_blank'class="cpt" title="2012畅游维也纳" href="/travels/vienna439/1666482.html">2012畅游维也纳</a>
                        <p class="opts">
                            <i class='numview' title='浏览'>42444</i>
                            <i class="want" title='喜欢'>307</i>
                            &nbsp;&nbsp;
                            <i class="numreply" title='回复'>3</i>
                        </p>
                    </div>
                    <div class='authorinfo'>
                        <p class="author" data-authorid="12687126">
                            <a class='imgnav' target='_blank' href="/members/9A87534977C94659B805E0DBBB2C90BD/journals">
                                <img title="【蝉游记】饕餮89" width='28' height='28' class='pic' src='http://tp3.sinaimg.cn/1856838602/180/40005314526/0'></a>
                            <a target='_blank' href="/members/9A87534977C94659B805E0DBBB2C90BD/journals" title="【蝉游记】饕餮89" >【蝉游记】饕餮89</a>
                            &nbsp;&nbsp;
                            <i class="time">2013-10-14</i>
                        </p>
                    </div>
                </div>
                <div class="city" data-TravelId="1732946">
                    <span class='pic-tagico-2'></span>
                    <a target='_blank' class="city-image" href="/travels/jaipur1027/1732946.html">
                        <span class="text-tagico-1">
                            <i></i>
                            <span>微游记</span>
                        </span>
                        <img data-TravelCoverId="11651883" class="pic" width="228" height="128" src="http://dimg02.c-ctrip.com/images/tg/443/066/526/066737bf560d4b8cad3f0881c825efa5_R_228_128.jpg"></a>
                    <div class="city-sub">
                        <a target='_blank' class="city-name" href="/place/jaipur1027.html">斋普尔</a>
                        ：
                        <a target='_blank'class="cpt" title="【加游站】邂逅的北印度" href="/travels/jaipur1027/1732946.html">【加游站】邂逅的北印度</a>
                        <p class="opts">
                            <i class='numview' title='浏览'>945</i>
                            <i class="want" title='喜欢'>8</i>
                            &nbsp;&nbsp;
                            <i class="numreply" title='回复'>14</i>
                        </p>
                    </div>
                    <div class='authorinfo'>
                        <p class="author" data-authorid="15606355">
                            <a class='imgnav' target='_blank' href="/members/1FBA7CBAC8944A17B4CBDE50B77C3AEB/journals">
                                <img title="帷幕的堇色" width='28' height='28' class='pic' src='http://images4.c-ctrip.com/target/headphoto/098/963/652/76a0bcca1bac46c3afebffa7f621a15e_100_100.jpg'></a>
                            <a target='_blank' href="/members/1FBA7CBAC8944A17B4CBDE50B77C3AEB/journals" title="帷幕的堇色" >帷幕的堇色</a>
                            &nbsp;&nbsp;
                            <i class="time">2014-03-25</i>
                        </p>
                    </div>
                </div>
                <div class="city" data-TravelId="1733842">
                    <span class='pic-tagico-1'></span>
                    <a target='_blank' class="city-image" href="/travels/xitang15/1733842.html">
                        <img data-TravelCoverId="11533183" class="pic" width="228" height="152" src="http://dimg02.c-ctrip.com/images/tg/125/002/155/41ed3f47deef471f9a734645f3f96edd_R_228_152.jpg"></a>
                    <div class="city-sub">
                        <a target='_blank' class="city-name" href="/place/xitang15.html">西塘</a>
                        ：
                        <a target='_blank'class="cpt" title="【加游站】一次计划之外的西塘行（多图，可当攻略！）" href="/travels/xitang15/1733842.html">【加游站】一次计划之外的西塘行（多图，可当攻略！）</a>
                        <p class="opts">
                            <i class='numview' title='浏览'>594</i>
                            <i class="want" title='喜欢'>5</i>
                            &nbsp;&nbsp;
                            <i class="numreply" title='回复'>8</i>
                        </p>
                    </div>
                    <div class='authorinfo'>
                        <p class="author" data-authorid="5399147">
                            <a class='imgnav' target='_blank' href="/members/5DD32A8A2D9D43AD90838E1FE80CFE97/journals">
                                <img title="alecwu0403" width='28' height='28' class='pic' src='http://images4.c-ctrip.com/target/headphoto/596/676/571/4b1b6f2c53034daab3d40b9d41d33241_100_100.jpg'></a>
                            <a target='_blank' href="/members/5DD32A8A2D9D43AD90838E1FE80CFE97/journals" title="alecwu0403" >alecwu0403</a>
                            &nbsp;&nbsp;
                            <i class="time">2014-03-25</i>
                        </p>
                    </div>
                </div>
                <div class="city" data-TravelId="1662955">
                    <span class='pic-tagico-1'></span>
                    <a target='_blank' class="city-image" href="/travels/seoul234/1662955.html">
                        <span class="text-tagico-1">
                            <i></i>
                            <span>微游记</span>
                        </span>
                        <img data-TravelCoverId="9408812" class="pic" width="228" height="152" src="http://dimg02.c-ctrip.com/images/tg/170/913/613/6a29f51dfa5e47c1be1f27e3e3709ace_R_228_152.jpg"></a>
                    <div class="city-sub">
                        <a target='_blank' class="city-name" href="/place/seoul234.html">首尔</a>
                        ：
                        <a target='_blank'class="cpt" title="【i旅行】泡菜国7天6夜机票、签证、衣食住行全包4000元，思密达，流口水了么？内容很多的说" href="/travels/seoul234/1662955.html">【i旅行】泡菜国7天6夜机票、签证、衣食住行全包4000元，思密达，流口水了么？内容很多的说</a>
                        <p class="opts">
                            <i class='numview' title='浏览'>94299</i>
                            <i class="want" title='喜欢'>377</i>
                            &nbsp;&nbsp;
                            <i class="numreply" title='回复'>186</i>
                        </p>
                    </div>
                    <div class='authorinfo'>
                        <p class="author" data-authorid="3157663">
                            <a class='imgnav' target='_blank' href="/members/emilyljason/journals">
                                <img title="敏华爱美丽" width='28' height='28' class='pic' src='http://images4.c-ctrip.com/target/headphoto/372/371/058/bf4bb9a01ab44a90baa50d5bf8ec1018_100_100.jpg'></a>
                            <a target='_blank' href="/members/emilyljason/journals" title="敏华爱美丽" >敏华爱美丽</a>
                            &nbsp;&nbsp;
                            <i class="time">2014-01-08</i>
                        </p>
                    </div>
                </div>
                <div class="city" data-TravelId="1731509">
                    <span class='pic-tagico-3'></span>
                    <a target='_blank' class="city-image" href="/travels/yongjia785/1731509.html">
                        <img data-TravelCoverId="11426292" class="pic" width="228" height="170" src="http://dimg02.c-ctrip.com/images/tg/545/458/113/8bcdb324042e4cf6ac0e3c2d480f957a_R_228_170.jpg"></a>
                    <div class="city-sub">
                        <a target='_blank' class="city-name" href="/place/yongjia785.html">永嘉</a>
                        ：
                        <a target='_blank'class="cpt" title="2014.3.1爱让悬崖变平地。@永嘉" href="/travels/yongjia785/1731509.html">2014.3.1爱让悬崖变平地。@永嘉</a>
                        <p class="opts">
                            <i class='numview' title='浏览'>1587</i>
                            <i class="want" title='喜欢'>7</i>
                            &nbsp;&nbsp;
                            <i class="numreply" title='回复'>10</i>
                        </p>
                    </div>
                    <div class='authorinfo'>
                        <p class="author" data-authorid="5184191">
                            <a class='imgnav' target='_blank' href="/members/858CB377A0454B059111AE1537C0B9D2/journals">
                                <img title="苏_黎世" width='28' height='28' class='pic' src='http://images4.c-ctrip.com/target/headphoto/603/473/070/acdcb2d1ddc74dc2ace16d98d2741368_100_100.jpg'></a>
                            <a target='_blank' href="/members/858CB377A0454B059111AE1537C0B9D2/journals" title="苏_黎世" >苏_黎世</a>
                            &nbsp;&nbsp;
                            <i class="time">2014-03-23</i>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="fall-loading" id="fall-loading"></div>
    </div>

    <?php $fed->model('common/html/model_foot');//尾部 ?>

    <?php $fed->js('common/js/jquery-1.7.min'); ?>
    <?php $fed->js('common/js/gs_base'); ?>
    <?php $fed->js('common/js/head'); ?>
    <?php $fed->js('common/js/gs_gotop'); ?>
    <?php $fed->js('fed/js/jquery.cookie'); ?>
    <?php $fed->js('fed/js/gs_placeholder_1'); ?>
    <?php $fed->js('travels/js/imgload'); ?>
    <?php $fed->js('travels/js/lp_masonry'); ?>

    <script type="text/javascript">
        $(function() {
            $('#photo-fall').lpMasonry({
                url: '/TravelSite/Home/IndexTravelListHtml',
                data: {
                    "Idea": "0",
                    "Type": "1",
                    "Plate": "0"
                },
                cellele: 'div.city',
                ajaxpage: 2,
                cellwidth: 228,
                cellspace: 21
            });
        });
    </script>

    <div class="content">
        <div class="gs_operate_right_fix" id="gs_operate_right_fix">
            <div class="cf">
                <a href="javascript:;" class="close"></a>
            </div>
            <a href="http://you.ctrip.com/travels/youyouctripstar10000/1729882.html" target="_blank" class="one">经典游记，华丽变身只为你</a>
        </div>
    </div>
                            
</body>
</html>
<?php $fed->get_ver(); //生成的版本号默认(v2.0) ?>