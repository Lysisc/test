<?php
header('Content-Type: application/json'); 
$act = $_GET['act'];

//日期接口
if ($act == 'edit_day') {
	$v = array('0', '1');
	sleep(rand(0, 1)); //延迟0，2秒
	exit($v[rand(0, 1)]);
}

//删除图片
if ($act == 'del_img_poi_api') {
	$v = array('0', '1');
	sleep(rand(0, 1)); //延迟0，2秒
	exit($v[rand(0, 1)]);
}

//POI排序
if ($act == 'poi_sort_api') {
	$v = array('0', '1');
	sleep(rand(0, 1)); //延迟0，2秒
	exit($v[rand(0, 1)]);
}

//图片拖动
if ($act == 'img_addto_poi') {
	$v = array('0', '1');
	sleep(rand(0, 1)); //延迟0，2秒
	exit($v[rand(0, 1)]);
}

//图片排序
if ($act == 'img_sort_poi') {
	$v = array('0', '1');
	sleep(rand(0, 1)); //延迟0，2秒
	exit($v[rand(0, 1)]);
}

//增加POI
if ($act == 'add_new_poi') {
	$string[0] = "3";
	$string[1] = "5";
	$string[2] = "1";
	$string[3] = "2";
	$numPoi = rand(0, 3);
	$num = rand(1, 10);
	for($i=0; $i<$num; $i++){
		$data[$i] = array(
			'PoiInfo'=>array(
				'POIType'=>$string[$numPoi],
				'TravelPOIId' => rand(100, 100000),
				'POIName'=> 'abc',
				'DistrictName'=> 'aaa'
			),
			'TravelContentId'=>rand(100, 100000)
		);
	}
	echo json_encode($data);
}

//增加POI
if ($act == 'editor_poi') {
	$v = array('0', '1');
	sleep(rand(0, 1)); //延迟0，2秒
	exit($v[rand(0, 1)]);
}

//增加天数
if ($act == 'date_api') {
	$data = array(
		'Day' => rand(10, 50),
		'DateString' => rand(100, 100000),
		'ScheduleId' => rand(1000, 80000),
		'Week' => rand(1, 100)
	);
	echo json_encode($data);
}

//自定义POI
if ($act == 'custom_tags') {
	$data = array(
		'Data' => rand(100, 100000)
	);
	echo json_encode($data);
}

//可能poi猜测
if ($act == 'GetScheduleDayUnknowImagePoiList') {
	$string[0] = 3;
	$string[1] = 5;
	$string[2] = 1;
	$string[3] = 2;
	$num = rand(1, 5);
	for ($i = 0; $i < $num; $i++) {
		$Html[$i] = array(
			'id' => rand(100, 10000),
			'type' => $string[rand(0, 3)],
			'name' => rand(100, 10000),
			'districtid' => rand(100, 10000),
			'districtname' => rand(100, 10000),
			'shortname' => rand(100, 10000)		
		);
	}
	$data = array(
		'Html' => $Html
	);
	echo json_encode($data);
}

//删除游记
if ($act == 'del_journal') {
	$v = array('0', '1');
	sleep(rand(0, 1)); //延迟0，2秒
	exit($v[rand(0, 1)]);
}

//第二步上传成功
if ($act == 'upload_success') {
	$v = array('0', '1');
	sleep(rand(1, 1)); //延迟0，2秒
	exit($v[rand(1, 1)]);
}

//第二步上传图片删除
if ($act == 'del_img') {
	$v = array('0', '1');
	sleep(rand(1, 1)); //延迟0，2秒
	exit($v[rand(1, 1)]);
}

//添加评论
if ($act == 'add_comment') {
	$v = array('0', '1');
	sleep(rand(1, 1)); //延迟0，2秒
	exit($v[rand(1, 1)]);
}

//行为编辑器更新
if($act=='textedit'){
	$data = array(
		'RetCode'=>'1',
		'Html'=>'90016845',
		'ErrorMessage'=>'null'
	);
	exit(json_encode($data));
}

//PDF请求是否存在
if ($act == 'pdfCheckUrl') {
	$data = array(
		'Status' => rand(0, 6),
		'FileSize' => '16845'
	);
	echo json_encode($data);
}

?>