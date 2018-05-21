(
	function(move) {
		var InteractiveActivity = function(_api) {
			api = _api;
			init();
		}
	var api;
	var p = InteractiveActivity.prototype;
	var navi = navigator.userAgent.toLowerCase();
	var touchDevice = /ipad|iphone|android|windows phone|blackberry/i.test(navi);
	var eventType0 = touchDevice ? 'touchstart' : 'mousedown';
	var eventType1 = touchDevice ? 'touchend' : 'mouseup';
	var stage;
	var play = false;
	var txt1,txt2,txt3,txt4,txt5,txt6,slider1,slider2,slider3,slider4;
	init();
	function init()
	{
		
		Snap.load("images/uc_p5_l089_06_01s.svg",function(f)
		{	
			document.getElementById("container").appendChild(f.node);	
			f.node.id = "svg";
			stage = Snap("#svg");
				
			start();
			slider1.value=0;
			slider2.value=0;
			slider3.value=0;
			slider4.value=-14;
			b=0;
	           
		});

	}
	function start()
	{			
		base = Snap("#base");	

		$('#resetBtn').on(eventType0, function(e) {
				e.preventDefault(); //防止默认事件触发
				Snap('#resetBtn2').visible = true;
			});
			$('#resetBtn').on(eventType1, function(e) {
				Snap('#resetBtn2').visible = false;
				_reset();
			});
		createTxt1();//创建文本
		createTxt2();
		createTxt3();
		createTxt4();
		createTxt5();
		createTxt6();
		createSlider1();//创建滑块
		createSlider2();
		createSlider3();
		createSlider4();	
		Snap("#resetBtn2").visible = false;
		Snap("#resetBtn").visible = true;
		Snap("#f11").visible = true;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
//		Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.9, 250.2,105.3) "});
		txtN0();
        _reset();//初始化
    }
	function txtT5(){
		Snap("#t5").visible = false;
		setTimeout(function(){Snap("#t5").visible = true;},300);
	}
	function txtN0(){
		Snap("#f11n1s").visible = false;
		Snap("#f11n2s").visible = false;
		Snap("#f11n3s").visible = false;
		Snap("#f11n1x").visible = false;
		Snap("#f11n2x").visible = false;
		Snap("#f11n3x").visible = false;
		Snap("#f21n1s").visible = false;
		Snap("#f21n2s").visible = false;
		Snap("#f21n3s").visible = false;
		Snap("#f21n4s").visible = false;
		Snap("#f21n5s").visible = false;
		Snap("#f21n1x").visible = false;
		Snap("#f21n2x").visible = false;
		Snap("#f21n3x").visible = false;
		Snap("#f21n4x").visible = false;
		Snap("#f21n5x").visible = false;
		Snap("#f31n1s").visible = false;
		Snap("#f31n2s").visible = false;
		Snap("#f31n3s").visible = false;
		Snap("#f31n4s").visible = false;
		Snap("#f31n5s").visible = false;
		Snap("#f31n6s").visible = false;
		Snap("#f31n7s").visible = false;
		Snap("#f31n1x").visible = false;
		Snap("#f31n2x").visible = false;
		Snap("#f31n3x").visible = false;
		Snap("#f31n4x").visible = false;
		Snap("#f31n5x").visible = false;
		Snap("#f31n6x").visible = false;
		Snap("#f31n7x").visible = false;
		Snap("#f12n1s").visible = false;
		Snap("#f12n1x").visible = false;
		Snap("#f22n1s").visible = false;
		Snap("#f22n2s").visible = false;
		Snap("#f22n1x").visible = false;
		Snap("#f22n2x").visible = false;
		Snap("#f32n1s").visible = false;
		Snap("#f32n2s").visible = false;
		Snap("#f32n3s").visible = false;
		Snap("#f32n1x").visible = false;
		Snap("#f32n2x").visible = false;
		Snap("#f32n3x").visible = false;
		Snap("#l11n1s").visible = false;
		Snap("#l11n2s").visible = false;
		Snap("#l11n1x").visible = false;
		Snap("#l11n2x").visible = false;
		Snap("#l11n3x").visible = false;
		Snap("#l21n1s").visible = false;
		Snap("#l21n2s").visible = false;
		Snap("#l21n3s").visible = false;
		Snap("#l21n4s").visible = false;
		Snap("#l21n1x").visible = false;
		Snap("#l21n2x").visible = false;
		Snap("#l21n3x").visible = false;
		Snap("#l21n4x").visible = false;
		Snap("#l31n1s").visible = false;
		Snap("#l31n2s").visible = false;
		Snap("#l31n3s").visible = false;
		Snap("#l31n4s").visible = false;
		Snap("#l31n5s").visible = false;
		Snap("#l31n1x").visible = false;
		Snap("#l31n2x").visible = false;
		Snap("#l31n3x").visible = false;
		Snap("#l31n4x").visible = false;
		Snap("#l31n5x").visible = false;
		Snap("#l12n1s").visible = false;
		Snap("#l12n1x").visible = false;
		Snap("#l22n1s").visible = false;
		Snap("#l22n2s").visible = false;
		Snap("#l22n1x").visible = false;
		Snap("#l22n2x").visible = false;
		Snap("#l32n1s").visible = false;
		Snap("#l32n2s").visible = false;
		Snap("#l32n1x").visible = false;
		Snap("#l32n2x").visible = false;
		Snap("#l32n3x").visible = false;
		Snap("#c11n1x").visible = false;
		Snap("#c11n2x").visible = false;
		Snap("#c11n1s").visible = false;
		Snap("#c11n2s").visible = false;
		Snap("#c21n1s").visible = false;
		Snap("#c21n2s").visible = false;
		Snap("#c21n3s").visible = false;
		Snap("#c21n1x").visible = false;
		Snap("#c21n2x").visible = false;
		Snap("#c21n3x").visible = false;
		Snap("#c31n1s").visible = false;
		Snap("#c31n2s").visible = false;
		Snap("#c31n3s").visible = false;
		Snap("#c31n4s").visible = false;
		Snap("#c31n1x").visible = false;
		Snap("#c31n2x").visible = false;
		Snap("#c31n3x").visible = false;
		Snap("#c31n4x").visible = false;
		Snap("#c12n1s").visible = false;
		Snap("#c12n1x").visible = false;
		Snap("#c22n1s").visible = false;
		Snap("#c22n1x").visible = false;
		Snap("#c32n1s").visible = false;
		Snap("#c32n2s").visible = false;
		Snap("#c32n1x").visible = false;
		Snap("#c32n2x").visible = false;
		Snap("#h11n1s").visible = false;
		Snap("#h11n2s").visible = false;
		Snap("#h11n1x").visible = false;
		Snap("#h11n2x").visible = false;
		Snap("#h21n1s").visible = false;
		Snap("#h21n2s").visible = false;
		Snap("#h21n3s").visible = false;
		Snap("#h21n1x").visible = false;
		Snap("#h21n2x").visible = false;
		Snap("#h21n3x").visible = false;
		Snap("#h31n1s").visible = false;
		Snap("#h31n2s").visible = false;
		Snap("#h31n3s").visible = false;
		Snap("#h31n4s").visible = false;
		Snap("#h31n1x").visible = false;
		Snap("#h31n2x").visible = false;
		Snap("#h31n3x").visible = false;
		Snap("#h31n4x").visible = false;
		Snap("#h12n1s").visible = false;
		Snap("#h12n1x").visible = false;
		Snap("#h22n1s").visible = false;
		Snap("#h22n1x").visible = false;
		Snap("#h32n1s").visible = false;
		Snap("#h32n2s").visible = false;
		Snap("#h32n1x").visible = false;
		Snap("#h32n2x").visible = false;
	}
	function createTxt1()
	{
		txt1 = stage.text(82,26,"3500");
		txt1.attr({"font-size":"18px",});		
	}
    function createTxt2()
	{
		txt2 = stage.text(280,26,"3500");
		txt2.attr({"font-size":"18px",});		
	}
	function createTxt3()
	{
		txt3 = stage.text(475,26,"3500");
		txt3.attr({"font-size":"18px",});		
	}
	function createTxt4()//jiaodu
	{
		txt4 = stage.text(114,135);
		txt4.attr({"font-size":"18px",});		
	}
    function createTxt5()//L
	{
		txt5 = stage.text(93,398);
		txt5.attr({"font-size":"18px",});		
	}
	function createTxt6()//pai
	{
		txt6 = stage.text(340,398);
		txt6.attr({"font-size":"18px",});		
	}
	function createSlider1()
	{
		slider1 = stage.slider("#014689",70,3);
		slider1.attr({transform:"matrix(1,0,0,1,85,48)"})
		slider1.onchange = function()
		{	
			refreshFire();
		}	
	}
	function createSlider2()
	{
		slider2 = stage.slider("#014689",70,2);
		slider2.attr({transform:"matrix(1,0,0,1,275,48)"})
		slider2.onchange = function()
		{	
			refreshFire();
		}	
	}
	function createSlider3()
	{
		slider3 = stage.slider("#014689",70,1);
		slider3.attr({transform:"matrix(1,0,0,1,467,48)"})
		slider3.onchange = function()
		{	
			refreshFire();
		}	
	}
	
	function createSlider4()
	{
		slider4 = stage.slider0("#014689",245,28);
		slider4.attr({transform:"matrix(1,0,0,1,523,340)"})
		slider4.onchange = function()
		{	
			huduD1();
			huduD2();
			if(slider1.value==0&&slider2.value==0&&slider3.value==0){f11();}
			if(slider1.value==0&&slider2.value==0&&slider3.value==1){f12();}
			if(slider1.value==0&&slider2.value==1&&slider3.value==0){f21();}
			if(slider1.value==0&&slider2.value==1&&slider3.value==1){f22();}
			if(slider1.value==0&&slider2.value==2&&slider3.value==0){f31();}
			if(slider1.value==0&&slider2.value==2&&slider3.value==1){f32();}
			
			if(slider1.value==1&&slider2.value==0&&slider3.value==0){l11();}
			if(slider1.value==1&&slider2.value==0&&slider3.value==1){l12();}
			if(slider1.value==1&&slider2.value==1&&slider3.value==0){l21();}
			if(slider1.value==1&&slider2.value==1&&slider3.value==1){l22();}
			if(slider1.value==1&&slider2.value==2&&slider3.value==0){l31();}
			if(slider1.value==1&&slider2.value==2&&slider3.value==1){l32();}
			
			if(slider1.value==2&&slider2.value==0&&slider3.value==0){c11();}
			if(slider1.value==2&&slider2.value==0&&slider3.value==1){c12();}
			if(slider1.value==2&&slider2.value==1&&slider3.value==0){c21();}
			if(slider1.value==2&&slider2.value==1&&slider3.value==1){c22();}
			if(slider1.value==2&&slider2.value==2&&slider3.value==0){c31();}
			if(slider1.value==2&&slider2.value==2&&slider3.value==1){c32();}
			
			if(slider1.value==3&&slider2.value==0&&slider3.value==0){h11();}
			if(slider1.value==3&&slider2.value==0&&slider3.value==1){h12();}
			if(slider1.value==3&&slider2.value==1&&slider3.value==0){h21();}
			if(slider1.value==3&&slider2.value==1&&slider3.value==1){h22();}
			if(slider1.value==3&&slider2.value==2&&slider3.value==0){h31();}
			if(slider1.value==3&&slider2.value==2&&slider3.value==1){h32();}
		}	
	}
function f11(){
	if(slider4.value==-28){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, -0.49, 0, 1, 248.4,88.8)"});txt4.attr({text:44});txt5.attr({text:3.9});txt6.attr({text:8});txtT5();}
	if(slider4.value==-27){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, -0.455, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, -0.42, 0, 1, 248.4,88.8)"});txt4.attr({text:37});txt5.attr({text:3.2});txt6.attr({text:6});Snap("#f11n3s").visible = true;txtT5();}
    if(slider4.value==-25){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, -0.385, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, -0.35, 0, 1, 248.4,88.8)"});txt4.attr({text:30});txt5.attr({text:2.6});txt6.attr({text:5});txtT5();}
    if(slider4.value==-23){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, -0.315, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-22){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, -0.28, 0, 1, 248.4,88.8)"});txt4.attr({text:24});txt5.attr({text:2.1});txt6.attr({text:4});Snap("#f11n2s").visible = true;txtT5();}
	if(slider4.value==-21){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, -0.245, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-20){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, -0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:17});txt5.attr({text:1.5});txt6.attr({text:3});txtT5();}
    if(slider4.value==-19){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, -0.175, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-18){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, -0.14, 0, 1, 248.4,88.8)"});txt4.attr({text:12});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#f11n1s").visible = true;txtT5();}
    if(slider4.value==-17){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, -0.105, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-16){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, -0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:6});txt5.attr({text:0.5});txt6.attr({text:1});txtT5();}
    if(slider4.value==-15){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, -0.035, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    
    if(slider4.value==-14){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, 0.035, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-12){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, 0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:6});txt5.attr({text:0.5});txt6.attr({text:1});txtT5();}
    if(slider4.value==-11){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, 0.105, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-10){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, 0.14, 0, 1, 248.4,88.8)"});txt4.attr({text:12});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#f11n1x").visible = true;txtT5();}
    if(slider4.value==-9){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, 0.175, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-8){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, 0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:17});txt5.attr({text:1.5});txt6.attr({text:3});txtT5();}
    if(slider4.value==-7){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, 0.245, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-6){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, 0.28, 0, 1, 248.4,88.8)"});txt4.attr({text:24});txt5.attr({text:2.1});txt6.attr({text:4});Snap("#f11n2x").visible = true;txtT5();}
    if(slider4.value==-5){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, 0.315, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-4){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, 0.35, 0, 1, 248.4,88.8)"});txt4.attr({text:30});txt5.attr({text:2.6});txt6.attr({text:5});txtT5();}
    if(slider4.value==-3){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, 0.385, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, 0.42, 0, 1, 248.4,88.8)"});txt4.attr({text:37});txt5.attr({text:3.2});txt6.attr({text:6});Snap("#f11n3x").visible = true;txtT5();}
    if(slider4.value==-1){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, 0.455, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#f11_0').attr({transform:"matrix(0.886199951171875, 0.49, 0, 1, 248.4,88.8)"});txt4.attr({text:44});txt5.attr({text:3.9});txt6.attr({text:8});txtT5();}
//	Snap('#f11_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"})
//a=new Snap.Matrix( 0.886199951171875, b, 0, 1, 248.4,88.8)
//	Snap("#f11_0").transform(a.toTransformString());
//	if(slider4.value==-28){b=-0.49;}
//	if(slider4.value==-27){b=-0.455;}
//  if(slider4.value==-26){b=-0.42;}
//  if(slider4.value==-25){b=-0.385;}
//  if(slider4.value==-24){b=-0.35;}
//  if(slider4.value==-23){b=-0.315;}
//  if(slider4.value==-22){b=-0.28;}
//	if(slider4.value==-21){b=-0.245;}
//  if(slider4.value==-20){b=-0.21;}
//  if(slider4.value==-19){b=-0.175;}
//	if(slider4.value==-18){b=-0.14;}
//  if(slider4.value==-17){b=-0.105;}
//  if(slider4.value==-16){b=-0.07;}
//  if(slider4.value==-15){b=-0.035;}
//  
//  if(slider4.value==-14){b=0;}
//  
//  if(slider4.value==-13){b=0.035;}
//  if(slider4.value==-12){b=0.07;}
//  if(slider4.value==-11){b=0.105;}
//  if(slider4.value==-10){b=0.14;}
//  if(slider4.value==-9){b=0.175;}
//  if(slider4.value==-8){b=0.21;}
//  if(slider4.value==-7){b=0.245;}
//  if(slider4.value==-6){b=0.28;}
//  if(slider4.value==-5){b=0.315;}
//  if(slider4.value==-4){b=0.35;}
//  if(slider4.value==-3){b=0.385;}
//  if(slider4.value==-2){b=0.42;}
//  if(slider4.value==-1){b=0.455;}
//  if(slider4.value==0){b=0.49;}
    }
function f21(){
	if(slider4.value==-28){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, -0.49, 0, 1, 248.4,88.8)"});txt4.attr({text:47});txt5.attr({text:6.2});txt6.attr({text:12});txtT5();}
	if(slider4.value==-27){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, -0.455, 0, 1, 248.4,88.8)"});txt4.attr({text:42});txt5.attr({text:5.5});txt6.attr({text:11});Snap("#f21n5s").visible = true;txtT5();}
    if(slider4.value==-26){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, -0.42, 0, 1, 248.4,88.8)"});txt4.attr({text:37});txt5.attr({text:4.8});txt6.attr({text:10});txtT5();}
    if(slider4.value==-25){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, -0.385, 0, 1, 248.4,88.8)"});txt4.attr({text:32});txt5.attr({text:4.2});txt6.attr({text:8});Snap("#f21n4s").visible = true;txtT5();}
    if(slider4.value==-24){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, -0.35, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-23){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, -0.315, 0, 1, 248.4,88.8)"});txt4.attr({text:28});txt5.attr({text:3.6});txt6.attr({text:7});txtT5();}
    if(slider4.value==-22){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, -0.28, 0, 1, 248.4,88.8)"});txt4.attr({text:24});txt5.attr({text:3.1});txt6.attr({text:6});Snap("#f21n3s").visible = true;txtT5();}
	if(slider4.value==-21){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, -0.245, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-20){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, -0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:19});txt5.attr({text:2.5});txt6.attr({text:5});txtT5();}
    if(slider4.value==-19){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, -0.175, 0, 1, 248.4,88.8)"});txt4.attr({text:15});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#f21n2s").visible = true;txtT5();}
	if(slider4.value==-18){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, -0.14, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-17){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, -0.105, 0, 1, 248.4,88.8)"});txt4.attr({text:12});txt5.attr({text:1.5});txt6.attr({text:3});txtT5();}
    if(slider4.value==-16){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, -0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:8});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#f21n1s").visible = true;txtT5();}
    if(slider4.value==-15){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, -0.035, 0, 1, 248.4,88.8)"});txt4.attr({text:4});txt5.attr({text:0.5});txt6.attr({text:1});txtT5();}
    
    if(slider4.value==-14){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, 0.035, 0, 1, 248.4,88.8)"});txt4.attr({text:4});txt5.attr({text:0.5});txt6.attr({text:1});txtT5();}
    if(slider4.value==-12){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, 0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:8});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#f21n1x").visible = true;txtT5();}
    if(slider4.value==-11){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, 0.105, 0, 1, 248.4,88.8)"});txt4.attr({text:12});txt5.attr({text:1.5});txt6.attr({text:3});txtT5();}
    if(slider4.value==-10){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, 0.14, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-9){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, 0.175, 0, 1, 248.4,88.8)"});txt4.attr({text:15});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#f21n2x").visible = true;txtT5();}
    if(slider4.value==-8){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, 0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:19});txt5.attr({text:2.5});txt6.attr({text:5});txtT5();}
    if(slider4.value==-7){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, 0.245, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-6){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, 0.28, 0, 1, 248.4,88.8)"});txt4.attr({text:24});txt5.attr({text:3.1});txt6.attr({text:6});Snap("#f21n3x").visible = true;txtT5();}
    if(slider4.value==-5){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, 0.315, 0, 1, 248.4,88.8)"});txt4.attr({text:28});txt5.attr({text:3.6});txt6.attr({text:7});txtT5();}
    if(slider4.value==-4){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, 0.35, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-3){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, 0.385, 0, 1, 248.4,88.8)"});txt4.attr({text:32});txt5.attr({text:4.2});txt6.attr({text:8});Snap("#f21n4x").visible = true;txtT5();}
    if(slider4.value==-2){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, 0.42, 0, 1, 248.4,88.8)"});txt4.attr({text:37});txt5.attr({text:4.8});txt6.attr({text:10});txtT5();}
    if(slider4.value==-1){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, 0.455, 0, 1, 248.4,88.8)"});txt4.attr({text:42});txt5.attr({text:5.5});txt6.attr({text:11});Snap("#f21n5x").visible = true;txtT5();}
    if(slider4.value==0){Snap('#f21_0').attr({transform:"matrix(0.886199951171875, 0.49, 0, 1, 248.4,88.8)"});txt4.attr({text:47});txt5.attr({text:6.2});txt6.attr({text:12});txtT5();}
}
function f31(){
	if(slider4.value==-28){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, -0.49, 0, 1, 248.4,88.8)"});txt4.attr({text:44});txt5.attr({text:"7.8"});txt6.attr({text:16});Snap("#f31n7s").visible = true;txtT5();}
	if(slider4.value==-27){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, -0.455, 0, 1, 248.4,88.8)"});txt4.attr({text:41});txt5.attr({text:"7.1"});txt6.attr({text:14});txtT5();}
    if(slider4.value==-26){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, -0.42, 0, 1, 248.4,88.8)"});txt4.attr({text:37});txt5.attr({text:"6.4"});txt6.attr({text:13});Snap("#f31n6s").visible = true;txtT5();}
    if(slider4.value==-25){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, -0.385, 0, 1, 248.4,88.8)"});txt4.attr({text:33});txt5.attr({text:"5.8"});txt6.attr({text:12});txtT5();}
    if(slider4.value==-24){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, -0.35, 0, 1, 248.4,88.8)"});txt4.attr({text:30});txt5.attr({text:"5.2"});txt6.attr({text:10});Snap("#f31n5s").visible = true;txtT5();}
    if(slider4.value==-23){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, -0.315, 0, 1, 248.4,88.8)"});txt4.attr({text:27});txt5.attr({text:"4.7"});txt6.attr({text:9});txtT5();}
    if(slider4.value==-22){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, -0.28, 0, 1, 248.4,88.8)"});txt4.attr({text:24});txt5.attr({text:"4.1"});txt6.attr({text:8});Snap("#f31n4s").visible = true;txtT5();}
	if(slider4.value==-21){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, -0.245, 0, 1, 248.4,88.8)"});txt4.attr({text:20});txt5.attr({text:"3.6"});txt6.attr({text:7});txtT5();}
    if(slider4.value==-20){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, -0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:17});txt5.attr({text:"3.0"});txt6.attr({text:6});Snap("#f31n3s").visible = true;txtT5();}
    if(slider4.value==-19){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, -0.175, 0, 1, 248.4,88.8)"});txt4.attr({text:14});txt5.attr({text:"2.5"});txt6.attr({text:5});txtT5();}
	if(slider4.value==-18){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, -0.14, 0, 1, 248.4,88.8)"});txt4.attr({text:12});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#f31n2s").visible = true;txtT5();}
    if(slider4.value==-17){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, -0.105, 0, 1, 248.4,88.8)"});txt4.attr({text:9});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-16){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, -0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:6});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#f31n1s").visible = true;txtT5();}
    if(slider4.value==-15){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, -0.035, 0, 1, 248.4,88.8)"});txt4.attr({text:3});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    
    if(slider4.value==-14){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, 0.035, 0, 1, 248.4,88.8)"});txt4.attr({text:3});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-12){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, 0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:6});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#f31n1x").visible = true;txtT5();}
    if(slider4.value==-11){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, 0.105, 0, 1, 248.4,88.8)"});txt4.attr({text:9});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-10){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, 0.14, 0, 1, 248.4,88.8)"});txt4.attr({text:12});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#f31n2x").visible = true;txtT5();}
    if(slider4.value==-9){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, 0.175, 0, 1, 248.4,88.8)"});txt4.attr({text:14});txt5.attr({text:"2.5"});txt6.attr({text:5});txtT5();}
    if(slider4.value==-8){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, 0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:17});txt5.attr({text:"3.0"});txt6.attr({text:6});Snap("#f31n3x").visible = true;txtT5();}
    if(slider4.value==-7){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, 0.245, 0, 1, 248.4,88.8)"});txt4.attr({text:20});txt5.attr({text:"3.6"});txt6.attr({text:7});txtT5();}
    if(slider4.value==-6){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, 0.28, 0, 1, 248.4,88.8)"});txt4.attr({text:24});txt5.attr({text:"4.1"});txt6.attr({text:8});Snap("#f31n4x").visible = true;txtT5();}
    if(slider4.value==-5){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, 0.315, 0, 1, 248.4,88.8)"});txt4.attr({text:27});txt5.attr({text:"4.7"});txt6.attr({text:9});txtT5();}
    if(slider4.value==-4){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, 0.35, 0, 1, 248.4,88.8)"});txt4.attr({text:30});txt5.attr({text:"5.2"});txt6.attr({text:10});Snap("#f31n5x").visible = true;txtT5();}
    if(slider4.value==-3){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, 0.385, 0, 1, 248.4,88.8)"});txt4.attr({text:33});txt5.attr({text:"5.8"});txt6.attr({text:12});txtT5();}
    if(slider4.value==-2){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, 0.42, 0, 1, 248.4,88.8)"});txt4.attr({text:37});txt5.attr({text:"6.4"});txt6.attr({text:13});Snap("#f31n6x").visible = true;txtT5();}
    if(slider4.value==-1){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, 0.455, 0, 1, 248.4,88.8)"});txt4.attr({text:41});txt5.attr({text:"7.1"});txt6.attr({text:14});txtT5();}
    if(slider4.value==0){Snap('#f31_0').attr({transform:"matrix(0.886199951171875, 0.49, 0, 1, 248.4,88.8)"});txt4.attr({text:44});txt5.attr({text:"7.8"});txt6.attr({text:16});Snap("#f31n7x").visible = true;txtT5();}
}
function f12(){
	if(slider4.value==-28){Snap('#f12_0').attr({transform:"matrix( 1.1505584716796875, -0.49, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-27){Snap('#f12_0').attr({transform:"matrix( 1.1505584716796875, -0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#f12_0').attr({transform:"matrix( 1.1505584716796875, -0.42, 0, 1, 181.4,88.8)"});txt4.attr({text:17});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-25){Snap('#f12_0').attr({transform:"matrix( 1.1505584716796875, -0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#f12_0').attr({transform:"matrix( 1.1505584716796875, -0.35, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-23){Snap('#f12_0').attr({transform:"matrix( 1.1505584716796875, -0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-22){Snap('#f12_0').attr({transform:"matrix( 1.1505584716796875, -0.28, 0, 1, 181.4,88.8)"});txt4.attr({text:12});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#f12n1s").visible = true;txtT5();}
	if(slider4.value==-21){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, -0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-20){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, -0.21, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-19){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, -0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-18){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, -0.14, 0, 1, 181.4,88.8)"});txt4.attr({text:6});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-17){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, -0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-16){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, -0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-15){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, -0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    
    if(slider4.value==-14){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, 0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-12){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, 0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-11){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, 0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-10){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, 0.14, 0, 1, 181.4,88.8)"});txt4.attr({text:6});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-9){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, 0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-8){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, 0.21, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-7){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, 0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-6){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, 0.28, 0, 1, 181.4,88.8)"});txt4.attr({text:12});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#f12n1x").visible = true;txtT5();}
    if(slider4.value==-5){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, 0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-4){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, 0.35, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-3){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, 0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, 0.42, 0, 1, 181.4,88.8)"});txt4.attr({text:17});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-1){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, 0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, 0.49, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
}
function f22(){
	if(slider4.value==-28){Snap('#f22_0').attr({transform:"matrix( 1.1505584716796875, -0.49, 0, 1, 181.4,88.8)"});txt4.attr({text:19});txt5.attr({text:"2.5"});txt6.attr({text:5});txtT5();}
	if(slider4.value==-27){Snap('#f22_0').attr({transform:"matrix( 1.1505584716796875, -0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#f22_0').attr({transform:"matrix( 1.1505584716796875, -0.42, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-25){Snap('#f22_0').attr({transform:"matrix( 1.1505584716796875, -0.385, 0, 1, 181.4,88.8)"});txt4.attr({text:15});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#f22n2s").visible = true;txtT5();}
    if(slider4.value==-24){Snap('#f22_0').attr({transform:"matrix( 1.1505584716796875, -0.35, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-23){Snap('#f22_0').attr({transform:"matrix( 1.1505584716796875, -0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-22){Snap('#f22_0').attr({transform:"matrix( 1.1505584716796875, -0.28, 0, 1, 181.4,88.8)"});txt4.attr({text:12});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
	if(slider4.value==-21){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, -0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-20){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, -0.21, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-19){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, -0.175, 0, 1, 181.4,88.8)"});txt4.attr({text:8});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#f22n1s").visible = true;txtT5();}
	if(slider4.value==-18){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, -0.14, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-17){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, -0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-16){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, -0.07, 0, 1, 181.4,88.8)"});txt4.attr({text:4});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-15){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, -0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    
    if(slider4.value==-14){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, 0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-12){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, 0.07, 0, 1, 181.4,88.8)"});txt4.attr({text:4});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-11){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, 0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-10){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, 0.14, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-9){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, 0.175, 0, 1, 181.4,88.8)"});txt4.attr({text:8});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#f22n1x").visible = true;txtT5();}
    if(slider4.value==-8){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, 0.21, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-7){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, 0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-6){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, 0.28, 0, 1, 181.4,88.8)"});txt4.attr({text:12});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-5){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, 0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-4){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, 0.35, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-3){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, 0.385, 0, 1, 181.4,88.8)"});txt4.attr({text:15});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#f22n2x").visible = true;txtT5();}
    if(slider4.value==-2){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, 0.42, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-1){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, 0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, 0.49, 0, 1, 181.4,88.8)"});txt4.attr({text:19});txt5.attr({text:"2.5"});txt6.attr({text:5});txtT5();}
}
function f32(){
	if(slider4.value==-28){Snap('#f32_0').attr({transform:"matrix( 1.1505584716796875, -0.49, 0, 1, 181.4,88.8)"});txt4.attr({text:20});txt5.attr({text:"3.6"});txt6.attr({text:7});txtT5();}
	if(slider4.value==-27){Snap('#f32_0').attr({transform:"matrix( 1.1505584716796875, -0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#f32_0').attr({transform:"matrix( 1.1505584716796875, -0.42, 0, 1, 181.4,88.8)"});txt4.attr({text:17});txt5.attr({text:"3.0"});txt6.attr({text:6});Snap("#f32n3s").visible = true;txtT5();}
    if(slider4.value==-25){Snap('#f32_0').attr({transform:"matrix( 1.1505584716796875, -0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#f32_0').attr({transform:"matrix( 1.1505584716796875, -0.35, 0, 1, 181.4,88.8)"});txt4.attr({text:14});txt5.attr({text:"2.5"});txt6.attr({text:5});txtT5();}
    if(slider4.value==-23){Snap('#f32_0').attr({transform:"matrix( 1.1505584716796875, -0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-22){Snap('#f32_0').attr({transform:"matrix( 1.1505584716796875, -0.28, 0, 1, 181.4,88.8)"});txt4.attr({text:12});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#f32n2s").visible = true;txtT5();}
	if(slider4.value==-21){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, -0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-20){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, -0.21, 0, 1, 181.4,88.8)"});txt4.attr({text:9});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-19){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, -0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-18){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, -0.14, 0, 1, 181.4,88.8)"});txt4.attr({text:6});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#f32n1s").visible = true;txtT5();}
    if(slider4.value==-17){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, -0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-16){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, -0.07, 0, 1, 181.4,88.8)"});txt4.attr({text:3});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-15){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, -0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    
    if(slider4.value==-14){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, 0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-12){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, 0.07, 0, 1, 181.4,88.8)"});txt4.attr({text:3});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-11){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, 0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-10){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, 0.14, 0, 1, 181.4,88.8)"});txt4.attr({text:6});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#f32n1x").visible = true;txtT5();}
    if(slider4.value==-9){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, 0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-8){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, 0.21, 0, 1, 181.4,88.8)"});txt4.attr({text:9});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-7){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, 0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-6){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, 0.28, 0, 1, 181.4,88.8)"});txt4.attr({text:12});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#f32n2x").visible = true;txtT5();}
    if(slider4.value==-5){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, 0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-4){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, 0.35, 0, 1, 181.4,88.8)"});txt4.attr({text:14});txt5.attr({text:"2.5"});txt6.attr({text:5});txtT5();}
    if(slider4.value==-3){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, 0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, 0.42, 0, 1, 181.4,88.8)"});txt4.attr({text:17});txt5.attr({text:"3.0"});txt6.attr({text:6});Snap("#f32n3x").visible = true;txtT5();}
    if(slider4.value==-1){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, 0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, 0.49, 0, 1, 181.4,88.8)"});txt4.attr({text:20});txt5.attr({text:"3.6"});txt6.attr({text:7});txtT5();}
}
function h11(){
	if(slider4.value==-28){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, -0.49, 0, 1, 248.4,88.8)"});txt4.attr({text:44});txt5.attr({text:"2.2"});txt6.attr({text:4});Snap("#h11n2s").visible = true;txtT5();}
	if(slider4.value==-27){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, -0.455, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, -0.42, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-25){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, -0.385, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, -0.35, 0, 1, 248.4,88.8)"});txt4.attr({text:32});txt5.attr({text:"1.6"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-23){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, -0.315, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-22){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, -0.28, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-21){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, -0.245, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-20){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, -0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:20});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#h11n1s").visible = true;txtT5();}
    if(slider4.value==-19){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, -0.175, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-18){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, -0.14, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-17){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, -0.105, 0, 1, 248.4,88.8)"});txt4.attr({text:10});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-16){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, -0.07, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-15){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, -0.035, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    
    if(slider4.value==-14){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, 0.035, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-12){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, 0.07, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-11){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, 0.105, 0, 1, 248.4,88.8)"});txt4.attr({text:10});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-10){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, 0.14, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-9){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, 0.175, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-8){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, 0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:20});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#h11n1x").visible = true;txtT5();}
    if(slider4.value==-7){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, 0.245, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-6){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, 0.28, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-5){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, 0.315, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-4){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, 0.35, 0, 1, 248.4,88.8)"});txt4.attr({text:32});txt5.attr({text:"1.6"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-3){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, 0.385, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, 0.42, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-1){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, 0.455, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#h11_0').attr({transform:"matrix(0.886199951171875, 0.49, 0, 1, 248.4,88.8)"});txt4.attr({text:44});txt5.attr({text:"2.2"});txt6.attr({text:4});Snap("#h11n2x").visible = true;txtT5();}

    }
function h21(){
	if(slider4.value==-28){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, -0.49, 0, 1, 248.4,88.8)"});txt4.attr({text:44});txt5.attr({text:"3.3"});txt6.attr({text:7});Snap("#h21n3s").visible = true;txtT5();}
	if(slider4.value==-27){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, -0.455, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, -0.42, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-25){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, -0.385, 0, 1, 248.4,88.8)"});txt4.attr({text:36});txt5.attr({text:"2.7"});txt6.attr({text:5});txtT5();}
    if(slider4.value==-24){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, -0.35, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-23){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, -0.315, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-22){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, -0.28, 0, 1, 248.4,88.8)"});txt4.attr({text:28});txt5.attr({text:"2.1"});txt6.attr({text:4});Snap("#h21n2s").visible = true;txtT5();}
	if(slider4.value==-21){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, -0.245, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-20){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, -0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:20});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-19){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, -0.175, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-18){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, -0.14, 0, 1, 248.4,88.8)"});txt4.attr({text:13});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#h21n1s").visible = true;txtT5();txtT5();}
    if(slider4.value==-17){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, -0.105, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-16){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, -0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:7});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-15){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, -0.035, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    
    if(slider4.value==-14){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"1.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, 0.035, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-12){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, 0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:7});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-11){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, 0.105, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-10){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, 0.14, 0, 1, 248.4,88.8)"});txt4.attr({text:13});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#h21n1x").visible = true;txtT5();}
    if(slider4.value==-9){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, 0.175, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-8){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, 0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:20});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-7){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, 0.245, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-6){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, 0.28, 0, 1, 248.4,88.8)"});txt4.attr({text:28});txt5.attr({text:"2.1"});txt6.attr({text:4});Snap("#h21n2x").visible = true;txtT5();}
    if(slider4.value==-5){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, 0.315, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-4){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, 0.35, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-3){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, 0.385, 0, 1, 248.4,88.8)"});txt4.attr({text:36});txt5.attr({text:"2.7"});txt6.attr({text:5});txtT5();}
    if(slider4.value==-2){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, 0.42, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-1){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, 0.455, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#h21_0').attr({transform:"matrix(0.886199951171875, 0.49, 0, 1, 248.4,88.8)"});txt4.attr({text:44});txt5.attr({text:"3.3"});txt6.attr({text:7});Snap("#h21n3x").visible = true;txtT5();}
}
function h31(){
	if(slider4.value==-28){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, -0.49, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-27){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, -0.455, 0, 1, 248.4,88.8)"});txt4.attr({text:44});txt5.attr({text:"4.4"});txt6.attr({text:9});Snap("#h31n4s").visible = true;txtT5();}
    if(slider4.value==-26){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, -0.42, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-25){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, -0.385, 0, 1, 248.4,88.8)"});txt4.attr({text:38});txt5.attr({text:"3.8"});txt6.attr({text:8});txtT5();}
    if(slider4.value==-24){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, -0.35, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-23){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, -0.315, 0, 1, 248.4,88.8)"});txt4.attr({text:32});txt5.attr({text:"3.2"});txt6.attr({text:6});Snap("#h31n3s").visible = true;txtT5();}
    if(slider4.value==-22){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, -0.28, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-21){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, -0.245, 0, 1, 248.4,88.8)"});txt4.attr({text:26});txt5.attr({text:"2.6"});txt6.attr({text:5});txtT5();}
    if(slider4.value==-20){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, -0.21, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-19){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, -0.175, 0, 1, 248.4,88.8)"});txt4.attr({text:20});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#h31n2s").visible = true;txtT5();}
	if(slider4.value==-18){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, -0.14, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-17){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, -0.105, 0, 1, 248.4,88.8)"});txt4.attr({text:15});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-16){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, -0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:10});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#h31n1s").visible = true;txtT5();}
    if(slider4.value==-15){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, -0.035, 0, 1, 248.4,88.8)"});txt4.attr({text:5});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    
    if(slider4.value==-14){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, 0.035, 0, 1, 248.4,88.8)"});txt4.attr({text:5});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-12){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, 0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:10});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#h31n1x").visible = true;txtT5();}
    if(slider4.value==-11){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, 0.105, 0, 1, 248.4,88.8)"});txt4.attr({text:15});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-10){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, 0.14, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-9){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, 0.175, 0, 1, 248.4,88.8)"});txt4.attr({text:20});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#h31n2x").visible = true;txtT5();}
    if(slider4.value==-8){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, 0.21, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-7){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, 0.245, 0, 1, 248.4,88.8)"});txt4.attr({text:26});txt5.attr({text:"2.6"});txt6.attr({text:5});txtT5();}
    if(slider4.value==-6){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, 0.28, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-5){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, 0.315, 0, 1, 248.4,88.8)"});txt4.attr({text:32});txt5.attr({text:"3.2"});txt6.attr({text:6});Snap("#h31n3x").visible = true;txtT5();}
    if(slider4.value==-4){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, 0.35, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-3){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, 0.385, 0, 1, 248.4,88.8)"});txt4.attr({text:38});txt5.attr({text:"3.8"});txt6.attr({text:8});txtT5();}
    if(slider4.value==-2){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, 0.42, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-1){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, 0.455, 0, 1, 248.4,88.8)"});txt4.attr({text:44});txt5.attr({text:"4.4"});txt6.attr({text:9});Snap("#h31n4x").visible = true;txtT5();}
    if(slider4.value==0){Snap('#h31_0').attr({transform:"matrix(0.886199951171875, 0.49, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
}
function h12(){
	if(slider4.value==-28){Snap('#h12_0').attr({transform:"matrix( 1.1505584716796875, -0.49, 0, 1, 181.4,88.8)"});txt4.attr({text:20});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#h12n1s").visible = true;txtT5();}
	if(slider4.value==-27){Snap('#h12_0').attr({transform:"matrix( 1.1505584716796875, -0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#h12_0').attr({transform:"matrix( 1.1505584716796875, -0.42, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-25){Snap('#h12_0').attr({transform:"matrix( 1.1505584716796875, -0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#h12_0').attr({transform:"matrix( 1.1505584716796875, -0.35, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-23){Snap('#h12_0').attr({transform:"matrix( 1.1505584716796875, -0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-22){Snap('#h12_0').attr({transform:"matrix( 1.1505584716796875, -0.28, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-21){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, -0.245, 0, 1, 181.4,88.8)"});txt4.attr({text:10});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-20){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, -0.21, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-19){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, -0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-18){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, -0.14, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-17){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, -0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-16){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, -0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-15){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, -0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    
    if(slider4.value==-14){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, 0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-12){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, 0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-11){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, 0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-10){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, 0.14, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-9){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, 0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-8){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, 0.21, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-7){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, 0.245, 0, 1, 181.4,88.8)"});txt4.attr({text:10});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-6){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, 0.28, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-5){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, 0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-4){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, 0.35, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-3){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, 0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, 0.42, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-1){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, 0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, 0.49, 0, 1, 181.4,88.8)"});txt4.attr({text:20});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#h12n1x").visible = true;txtT5();}
}
function h22(){
	if(slider4.value==-28){Snap('#h22_0').attr({transform:"matrix( 1.1505584716796875, -0.49, 0, 1, 181.4,88.8)"});txt4.attr({text:20});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
	if(slider4.value==-27){Snap('#h22_0').attr({transform:"matrix( 1.1505584716796875, -0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#h22_0').attr({transform:"matrix( 1.1505584716796875, -0.42, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-25){Snap('#h22_0').attr({transform:"matrix( 1.1505584716796875, -0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#h22_0').attr({transform:"matrix( 1.1505584716796875, -0.35, 0, 1, 181.4,88.8)"});txt4.attr({text:13});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#h22n1s").visible = true;txtT5();}
    if(slider4.value==-23){Snap('#h22_0').attr({transform:"matrix( 1.1505584716796875, -0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-22){Snap('#h22_0').attr({transform:"matrix( 1.1505584716796875, -0.28, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-21){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, -0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-20){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, -0.21, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-19){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, -0.175, 0, 1, 181.4,88.8)"});txt4.attr({text:7});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
	if(slider4.value==-18){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, -0.14, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-17){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, -0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-16){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, -0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-15){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, -0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    
    if(slider4.value==-14){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, 0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-12){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, 0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-11){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, 0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-10){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, 0.14, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-9){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, 0.175, 0, 1, 181.4,88.8)"});txt4.attr({text:7});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-8){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, 0.21, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-7){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, 0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-6){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, 0.28, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-5){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, 0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-4){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, 0.35, 0, 1, 181.4,88.8)"});txt4.attr({text:13});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#h22n1x").visible = true;txtT5();}
    if(slider4.value==-3){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, 0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, 0.42, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-1){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, 0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, 0.49, 0, 1, 181.4,88.8)"});txt4.attr({text:20});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
}
function h32(){
	if(slider4.value==-28){Snap('#h32_0').attr({transform:"matrix( 1.1505584716796875, -0.49, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-27){Snap('#h32_0').attr({transform:"matrix( 1.1505584716796875, -0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#h32_0').attr({transform:"matrix( 1.1505584716796875, -0.42, 0, 1, 181.4,88.8)"});txt4.attr({text:20});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#h32n2s").visible = true;txtT5();}
    if(slider4.value==-25){Snap('#h32_0').attr({transform:"matrix( 1.1505584716796875, -0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#h32_0').attr({transform:"matrix( 1.1505584716796875, -0.35, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-23){Snap('#h32_0').attr({transform:"matrix( 1.1505584716796875, -0.315, 0, 1, 181.4,88.8)"});txt4.attr({text:15});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-22){Snap('#h32_0').attr({transform:"matrix( 1.1505584716796875, -0.28, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-21){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, -0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-20){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, -0.21, 0, 1, 181.4,88.8)"});txt4.attr({text:10});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#h32n1s").visible = true;txtT5();}
    if(slider4.value==-19){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, -0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-18){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, -0.14, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-17){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, -0.105, 0, 1, 181.4,88.8)"});txt4.attr({text:5});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-16){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, -0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-15){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, -0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    
    if(slider4.value==-14){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, 0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-12){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, 0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-11){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, 0.105, 0, 1, 181.4,88.8)"});txt4.attr({text:5});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-10){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, 0.14, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-9){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, 0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-8){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, 0.21, 0, 1, 181.4,88.8)"});txt4.attr({text:10});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#h32n1x").visible = true;txtT5();}
    if(slider4.value==-7){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, 0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-6){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, 0.28, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-5){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, 0.315, 0, 1, 181.4,88.8)"});txt4.attr({text:15});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-4){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, 0.35, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-3){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, 0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, 0.42, 0, 1, 181.4,88.8)"});txt4.attr({text:20});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#h32n2x").visible = true;txtT5();}
    if(slider4.value==-1){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, 0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, 0.49, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
}
function c11(){
	if(slider4.value==-28){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, -0.49, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-27){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, -0.455, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, -0.42, 0, 1, 248.4,88.8)"});txt4.attr({text:37});txt5.attr({text:"2.1"});txt6.attr({text:4});Snap("#c11n2s").visible = true;txtT5();}
    if(slider4.value==-25){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, -0.385, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, -0.35, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-23){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, -0.315, 0, 1, 248.4,88.8)"});txt4.attr({text:27});txt5.attr({text:"1.6"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-22){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, -0.28, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-21){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, -0.245, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-20){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, -0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:17});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#c11n1s").visible = true;txtT5();}
    if(slider4.value==-19){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, -0.175, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-18){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, -0.14, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-17){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, -0.105, 0, 1, 248.4,88.8)"});txt4.attr({text:9});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-16){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, -0.07, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-15){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, -0.035, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    
    if(slider4.value==-14){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, 0.035, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-12){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, 0.07, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-11){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, 0.105, 0, 1, 248.4,88.8)"});txt4.attr({text:9});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-10){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, 0.14, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-9){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, 0.175, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-8){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, 0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:17});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#c11n1x").visible = true;txtT5();}
    if(slider4.value==-7){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, 0.245, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-6){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, 0.28, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-5){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, 0.315, 0, 1, 248.4,88.8)"});txt4.attr({text:27});txt5.attr({text:"1.6"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-4){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, 0.35, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-3){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, 0.385, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, 0.42, 0, 1, 248.4,88.8)"});txt4.attr({text:37});txt5.attr({text:"2.1"});txt6.attr({text:4});Snap("#c11n2x").visible = true;txtT5();}
    if(slider4.value==-1){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, 0.455, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#c11_0').attr({transform:"matrix(0.886199951171875, 0.49, 0, 1, 248.4,88.8)"});txt4.attr({text:49});txt5.attr({text:"2.8"});txt6.attr({text:6});txtT5();}

    }
function c21(){
	if(slider4.value==-28){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, -0.49, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-27){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, -0.455, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, -0.42, 0, 1, 248.4,88.8)"});txt4.attr({text:44});txt5.attr({text:"3.9"});txt6.attr({text:8});txtT5();}
    if(slider4.value==-25){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, -0.385, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, -0.35, 0, 1, 248.4,88.8)"});txt4.attr({text:37});txt5.attr({text:"3.2"});txt6.attr({text:6});Snap("#c21n3s").visible = true;txtT5();}
    if(slider4.value==-23){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, -0.315, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-22){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, -0.28, 0, 1, 248.4,88.8)"});txt4.attr({text:30});txt5.attr({text:"2.6"});txt6.attr({text:5});txtT5();}
	if(slider4.value==-21){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, -0.245, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-20){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, -0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:24});txt5.attr({text:"2.1"});txt6.attr({text:4});Snap("#c21n2s").visible = true;txtT5();}
    if(slider4.value==-19){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, -0.175, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-18){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, -0.14, 0, 1, 248.4,88.8)"});txt4.attr({text:17});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-17){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, -0.105, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-16){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, -0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:12});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#c21n1s").visible = true;txtT5();}
    if(slider4.value==-15){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, -0.035, 0, 1, 248.4,88.8)"});txt4.attr({text:6});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    
    if(slider4.value==-14){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, 0.035, 0, 1, 248.4,88.8)"});txt4.attr({text:6});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-12){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, 0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:12});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#c21n1x").visible = true;txtT5();}
    if(slider4.value==-11){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, 0.105, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-10){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, 0.14, 0, 1, 248.4,88.8)"});txt4.attr({text:17});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-9){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, 0.175, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-8){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, 0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:24});txt5.attr({text:"2.1"});txt6.attr({text:4});Snap("#c21n2x").visible = true;txtT5();}
    if(slider4.value==-7){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, 0.245, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-6){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, 0.28, 0, 1, 248.4,88.8)"});txt4.attr({text:30});txt5.attr({text:"2.6"});txt6.attr({text:5});txtT5();}
    if(slider4.value==-5){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, 0.315, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-4){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, 0.35, 0, 1, 248.4,88.8)"});txt4.attr({text:37});txt5.attr({text:"3.2"});txt6.attr({text:6});Snap("#c21n3x").visible = true;txtT5();}
    if(slider4.value==-3){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, 0.385, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, 0.42, 0, 1, 248.4,88.8)"});txt4.attr({text:44});txt5.attr({text:"3.9"});txt6.attr({text:8});txtT5();}
    if(slider4.value==-1){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, 0.455, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#c21_0').attr({transform:"matrix(0.886199951171875, 0.49, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
}
function c31(){
	if(slider4.value==-28){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, -0.49, 0, 1, 248.4,88.8)"});txt4.attr({text:42});txt5.attr({text:"4.9"});txt6.attr({text:10});txtT5();}
	if(slider4.value==-27){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, -0.455, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, -0.42, 0, 1, 248.4,88.8)"});txt4.attr({text:37});txt5.attr({text:"4.3"});txt6.attr({text:9});Snap("#c31n4s").visible = true;txtT5();}
    if(slider4.value==-25){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, -0.385, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, -0.35, 0, 1, 248.4,88.8)"});txt4.attr({text:32});txt5.attr({text:"3.7"});txt6.attr({text:7});txtT5();}
    if(slider4.value==-23){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, -0.315, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-22){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, -0.28, 0, 1, 248.4,88.8)"});txt4.attr({text:27});txt5.attr({text:"3.1"});txt6.attr({text:6});Snap("#c31n3s").visible = true;txtT5();}
	if(slider4.value==-21){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, -0.245, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-20){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, -0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:22});txt5.attr({text:"2.6"});txt6.attr({text:5});txtT5();}
    if(slider4.value==-19){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, -0.175, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-18){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, -0.14, 0, 1, 248.4,88.8)"});txt4.attr({text:17});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#c31n2s").visible = true;txtT5();}
    if(slider4.value==-17){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, -0.105, 0, 1, 248.4,88.8)"});txt4.attr({text:13});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-16){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, -0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:9});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#c31n1s").visible = true;txtT5();}
    if(slider4.value==-15){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, -0.035, 0, 1, 248.4,88.8)"});txt4.attr({text:4});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    
    if(slider4.value==-14){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, 0.035, 0, 1, 248.4,88.8)"});txt4.attr({text:4});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-12){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, 0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:9});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#c31n1x").visible = true;txtT5();}
    if(slider4.value==-11){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, 0.105, 0, 1, 248.4,88.8)"});txt4.attr({text:13});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-10){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, 0.14, 0, 1, 248.4,88.8)"});txt4.attr({text:17});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#c31n2x").visible = true;txtT5();}
    if(slider4.value==-9){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, 0.175, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-8){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, 0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:22});txt5.attr({text:"2.6"});txt6.attr({text:5});txtT5();}
    if(slider4.value==-7){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, 0.245, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-6){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, 0.28, 0, 1, 248.4,88.8)"});txt4.attr({text:27});txt5.attr({text:"3.1"});txt6.attr({text:6});Snap("#c31n3x").visible = true;txtT5();}
    if(slider4.value==-5){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, 0.315, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-4){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, 0.35, 0, 1, 248.4,88.8)"});txt4.attr({text:32});txt5.attr({text:"3.7"});txt6.attr({text:7});txtT5();}
    if(slider4.value==-3){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, 0.385, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, 0.42, 0, 1, 248.4,88.8)"});txt4.attr({text:37});txt5.attr({text:"4.3"});txt6.attr({text:9});Snap("#c31n4x").visible = true;txtT5();}
    if(slider4.value==-1){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, 0.455, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#c31_0').attr({transform:"matrix(0.886199951171875, 0.49, 0, 1, 248.4,88.8)"});txt4.attr({text:42});txt5.attr({text:"4.9"});txt6.attr({text:10});txtT5();}
}
function c12(){
	if(slider4.value==-28){Snap('#c12_0').attr({transform:"matrix( 1.1505584716796875, -0.49, 0, 1, 181.4,88.8)"});txt4.attr({text:17});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#c12n1s").visible = true;txtT5();}
	if(slider4.value==-27){Snap('#c12_0').attr({transform:"matrix( 1.1505584716796875, -0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#c12_0').attr({transform:"matrix( 1.1505584716796875, -0.42, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-25){Snap('#c12_0').attr({transform:"matrix( 1.1505584716796875, -0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#c12_0').attr({transform:"matrix( 1.1505584716796875, -0.35, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-23){Snap('#c12_0').attr({transform:"matrix( 1.1505584716796875, -0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-22){Snap('#c12_0').attr({transform:"matrix( 1.1505584716796875, -0.28, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-21){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, -0.245, 0, 1, 181.4,88.8)"});txt4.attr({text:9});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-20){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, -0.21, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-19){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, -0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-18){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, -0.14, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-17){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, -0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-16){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, -0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-15){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, -0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    
    if(slider4.value==-14){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, 0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-12){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, 0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-11){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, 0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-10){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, 0.14, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-9){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, 0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-8){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, 0.21, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-7){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, 0.245, 0, 1, 181.4,88.8)"});txt4.attr({text:9});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-6){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, 0.28, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-5){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, 0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-4){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, 0.35, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-3){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, 0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, 0.42, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-1){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, 0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, 0.49, 0, 1, 181.4,88.8)"});txt4.attr({text:17});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#c12n1x").visible = true;txtT5();}
}
function c22(){
	if(slider4.value==-28){Snap('#c22_0').attr({transform:"matrix( 1.1505584716796875, -0.49, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-27){Snap('#c22_0').attr({transform:"matrix( 1.1505584716796875, -0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#c22_0').attr({transform:"matrix( 1.1505584716796875, -0.42, 0, 1, 181.4,88.8)"});txt4.attr({text:17});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-25){Snap('#c22_0').attr({transform:"matrix( 1.1505584716796875, -0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#c22_0').attr({transform:"matrix( 1.1505584716796875, -0.35, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-23){Snap('#c22_0').attr({transform:"matrix( 1.1505584716796875, -0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-22){Snap('#c22_0').attr({transform:"matrix( 1.1505584716796875, -0.28, 0, 1, 181.4,88.8)"});txt4.attr({text:12});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#c22n1s").visible = true;txtT5();}
	if(slider4.value==-21){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, -0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-20){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, -0.21, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-19){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, -0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-18){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, -0.14, 0, 1, 181.4,88.8)"});txt4.attr({text:6});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-17){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, -0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-16){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, -0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-15){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, -0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    
    if(slider4.value==-14){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, 0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-12){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, 0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-11){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, 0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-10){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, 0.14, 0, 1, 181.4,88.8)"});txt4.attr({text:6});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-9){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, 0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-8){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, 0.21, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-7){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, 0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-6){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, 0.28, 0, 1, 181.4,88.8)"});txt4.attr({text:12});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#c22n1x").visible = true;txtT5();}
    if(slider4.value==-5){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, 0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-4){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, 0.35, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-3){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, 0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, 0.42, 0, 1, 181.4,88.8)"});txt4.attr({text:17});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-1){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, 0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, 0.49, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
}
function c32(){
	if(slider4.value==-28){Snap('#c32_0').attr({transform:"matrix( 1.1505584716796875, -0.49, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-27){Snap('#c32_0').attr({transform:"matrix( 1.1505584716796875, -0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#c32_0').attr({transform:"matrix( 1.1505584716796875, -0.42, 0, 1, 181.4,88.8)"});txt4.attr({text:17});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#c32n2s").visible = true;txtT5();}
    if(slider4.value==-25){Snap('#c32_0').attr({transform:"matrix( 1.1505584716796875, -0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#c32_0').attr({transform:"matrix( 1.1505584716796875, -0.35, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-23){Snap('#c32_0').attr({transform:"matrix( 1.1505584716796875, -0.315, 0, 1, 181.4,88.8)"});txt4.attr({text:13});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-22){Snap('#c32_0').attr({transform:"matrix( 1.1505584716796875, -0.28, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-21){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, -0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-20){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, -0.21, 0, 1, 181.4,88.8)"});txt4.attr({text:9});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#c32n1s").visible = true;txtT5();}
    if(slider4.value==-19){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, -0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-18){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, -0.14, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-17){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, -0.105, 0, 1, 181.4,88.8)"});txt4.attr({text:4});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-16){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, -0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-15){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, -0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    
    if(slider4.value==-14){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, 0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-12){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, 0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-11){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, 0.105, 0, 1, 181.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-10){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, 0.14, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-9){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, 0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-8){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, 0.21, 0, 1, 181.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#c32n1x").visible = true;txtT5();}
    if(slider4.value==-7){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, 0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-6){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, 0.28, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-5){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, 0.315, 0, 1, 181.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-4){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, 0.35, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-3){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, 0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, 0.42, 0, 1, 181.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#c32n2x").visible = true;txtT5();}
    if(slider4.value==-1){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, 0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, 0.49, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
}	
function l11(){
	if(slider4.value==-28){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, -0.49, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-27){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, -0.455, 0, 1, 248.4,88.8)"});txt4.attr({text:39});txt5.attr({text:"2.7"});txt6.attr({text:5});txtT5();}
    if(slider4.value==-26){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, -0.42, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-25){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, -0.385, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, -0.35, 0, 1, 248.4,88.8)"});txt4.attr({text:30});txt5.attr({text:"2.1"});txt6.attr({text:4});Snap("#l11n2s").visible = true;txtT5();}
    if(slider4.value==-23){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, -0.315, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-22){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, -0.28, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-21){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, -0.245, 0, 1, 248.4,88.8)"});txt4.attr({text:22});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-20){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, -0.21, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-19){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, -0.175, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-18){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, -0.14, 0, 1, 248.4,88.8)"});txt4.attr({text:14});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#l11n1s").visible = true;txtT5();}
    if(slider4.value==-17){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, -0.105, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-16){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, -0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:7});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-15){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, -0.035, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    
    if(slider4.value==-14){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, 0.035, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-12){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, 0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:7});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-11){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, 0.105, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-10){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, 0.14, 0, 1, 248.4,88.8)"});txt4.attr({text:14});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#l11n1x").visible = true;txtT5();}
    if(slider4.value==-9){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, 0.175, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-8){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, 0.21, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-7){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, 0.245, 0, 1, 248.4,88.8)"});txt4.attr({text:22});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-6){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, 0.28, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-5){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, 0.315, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-4){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, 0.35, 0, 1, 248.4,88.8)"});txt4.attr({text:30});txt5.attr({text:"2.1"});txt6.attr({text:4});Snap("#l11n2x").visible = true;txtT5();}
    if(slider4.value==-3){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, 0.385, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, 0.42, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-1){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, 0.455, 0, 1, 248.4,88.8)"});txt4.attr({text:39});txt5.attr({text:"2.7"});txt6.attr({text:5});txtT5();}
    if(slider4.value==0){Snap('#l11_0').attr({transform:"matrix(0.886199951171875, 0.49, 0, 1, 248.4,88.8)"});txt4.attr({text:49});txt5.attr({text:"3.4"});txt6.attr({text:7});Snap("#l11n3x").visible = true;txtT5();}

    }
function l21(){
	if(slider4.value==-28){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, -0.49, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-27){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, -0.455, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, -0.42, 0, 1, 248.4,88.8)"});txt4.attr({text:42});txt5.attr({text:"4.4"});txt6.attr({text:9});Snap("#l21n4s").visible = true;txtT5();}
    if(slider4.value==-25){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, -0.385, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, -0.35, 0, 1, 248.4,88.8)"});txt4.attr({text:36});txt5.attr({text:"3.7"});txt6.attr({text:7});txtT5();}
    if(slider4.value==-23){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, -0.315, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-22){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, -0.28, 0, 1, 248.4,88.8)"});txt4.attr({text:30});txt5.attr({text:"3.1"});txt6.attr({text:6});Snap("#l21n3s").visible = true;txtT5();}
	if(slider4.value==-21){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, -0.245, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-20){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, -0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:25});txt5.attr({text:"2.6"});txt6.attr({text:5});txtT5();}
    if(slider4.value==-19){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, -0.175, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-18){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, -0.14, 0, 1, 248.4,88.8)"});txt4.attr({text:19});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#l21n2s").visible = true;txtT5();}
    if(slider4.value==-17){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, -0.105, 0, 1, 248.4,88.8)"});txt4.attr({text:14});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-16){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, -0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:10});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#l21n1s").visible = true;txtT5();}
    if(slider4.value==-15){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, -0.035, 0, 1, 248.4,88.8)"});txt4.attr({text:5});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    
    if(slider4.value==-14){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, 0.035, 0, 1, 248.4,88.8)"});txt4.attr({text:5});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-12){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, 0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:10});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#l21n1x").visible = true;txtT5();}
    if(slider4.value==-11){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, 0.105, 0, 1, 248.4,88.8)"});txt4.attr({text:14});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-10){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, 0.14, 0, 1, 248.4,88.8)"});txt4.attr({text:19});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#l21n2x").visible = true;txtT5();}
    if(slider4.value==-9){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, 0.175, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-8){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, 0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:25});txt5.attr({text:"2.6"});txt6.attr({text:5});txtT5();}
    if(slider4.value==-7){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, 0.245, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-6){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, 0.28, 0, 1, 248.4,88.8)"});txt4.attr({text:30});txt5.attr({text:"3.1"});txt6.attr({text:6});Snap("#l21n3x").visible = true;txtT5();}
    if(slider4.value==-5){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, 0.315, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-4){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, 0.35, 0, 1, 248.4,88.8)"});txt4.attr({text:36});txt5.attr({text:"3.7"});txt6.attr({text:7});txtT5();}
    if(slider4.value==-3){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, 0.385, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, 0.42, 0, 1, 248.4,88.8)"});txt4.attr({text:42});txt5.attr({text:"4.4"});txt6.attr({text:9});Snap("#l21n4x").visible = true;txtT5();}
    if(slider4.value==-1){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, 0.455, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#l21_0').attr({transform:"matrix(0.886199951171875, 0.49, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
}
function l31(){
	if(slider4.value==-28){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, -0.49, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-27){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, -0.455, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, -0.42, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-25){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, -0.385, 0, 1, 248.4,88.8)"});txt4.attr({text:43});txt5.attr({text:"6.1"});txt6.attr({text:12});txtT5();}
    if(slider4.value==-24){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, -0.35, 0, 1, 248.4,88.8)"});txt4.attr({text:39});txt5.attr({text:"5.4"});txt6.attr({text:11});Snap("#l31n5s").visible = true;txtT5();}
    if(slider4.value==-23){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, -0.315, 0, 1, 248.4,88.8)"});txt4.attr({text:34});txt5.attr({text:"4.8"});txt6.attr({text:10});txtT5();}
    if(slider4.value==-22){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, -0.28, 0, 1, 248.4,88.8)"});txt4.attr({text:30});txt5.attr({text:"4.2"});txt6.attr({text:8});Snap("#l31n4s").visible = true;txtT5();}
	if(slider4.value==-21){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, -0.245, 0, 1, 248.4,88.8)"});txt4.attr({text:26});txt5.attr({text:"3.6"});txt6.attr({text:7});txtT5();}
    if(slider4.value==-20){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, -0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:22});txt5.attr({text:"3.1"});txt6.attr({text:6});Snap("#l31n3s").visible = true;txtT5();}
    if(slider4.value==-19){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, -0.175, 0, 1, 248.4,88.8)"});txt4.attr({text:18});txt5.attr({text:"2.5"});txt6.attr({text:5});txtT5();}
	if(slider4.value==-18){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, -0.14, 0, 1, 248.4,88.8)"});txt4.attr({text:14});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#l31n2s").visible = true;txtT5();}
    if(slider4.value==-17){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, -0.105, 0, 1, 248.4,88.8)"});txt4.attr({text:11});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-16){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, -0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:7});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#l31n1s").visible = true;txtT5();}
    if(slider4.value==-15){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, -0.035, 0, 1, 248.4,88.8)"});txt4.attr({text:4});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    
    if(slider4.value==-14){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, 0.035, 0, 1, 248.4,88.8)"});txt4.attr({text:4});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-12){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, 0.07, 0, 1, 248.4,88.8)"});txt4.attr({text:7});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#l31n1x").visible = true;txtT5();}
    if(slider4.value==-11){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, 0.105, 0, 1, 248.4,88.8)"});txt4.attr({text:11});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-10){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, 0.14, 0, 1, 248.4,88.8)"});txt4.attr({text:14});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#l31n2x").visible = true;txtT5();}
    if(slider4.value==-9){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, 0.175, 0, 1, 248.4,88.8)"});txt4.attr({text:18});txt5.attr({text:"2.5"});txt6.attr({text:5});txtT5();}
    if(slider4.value==-8){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, 0.21, 0, 1, 248.4,88.8)"});txt4.attr({text:22});txt5.attr({text:"3.1"});txt6.attr({text:6});Snap("#l31n3x").visible = true;txtT5();}
    if(slider4.value==-7){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, 0.245, 0, 1, 248.4,88.8)"});txt4.attr({text:26});txt5.attr({text:"3.6"});txt6.attr({text:7});txtT5();}
    if(slider4.value==-6){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, 0.28, 0, 1, 248.4,88.8)"});txt4.attr({text:30});txt5.attr({text:"4.2"});txt6.attr({text:8});Snap("#l31n4x").visible = true;txtT5();}
    if(slider4.value==-5){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, 0.315, 0, 1, 248.4,88.8)"});txt4.attr({text:34});txt5.attr({text:"4.8"});txt6.attr({text:10});txtT5();}
    if(slider4.value==-4){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, 0.35, 0, 1, 248.4,88.8)"});txt4.attr({text:39});txt5.attr({text:"5.4"});txt6.attr({text:11});Snap("#l31n5x").visible = true;txtT5();}
    if(slider4.value==-3){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, 0.385, 0, 1, 248.4,88.8)"});txt4.attr({text:43});txt5.attr({text:"6.1"});txt6.attr({text:12});txtT5();}
    if(slider4.value==-2){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, 0.42, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-1){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, 0.455, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#l31_0').attr({transform:"matrix(0.886199951171875, 0.49, 0, 1, 248.4,88.8)"});Snap("#t5").visible = false;}
}
function l12(){
	if(slider4.value==-28){Snap('#l12_0').attr({transform:"matrix( 1.1505584716796875, -0.49, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-27){Snap('#l12_0').attr({transform:"matrix( 1.1505584716796875, -0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#l12_0').attr({transform:"matrix( 1.1505584716796875, -0.42, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-25){Snap('#l12_0').attr({transform:"matrix( 1.1505584716796875, -0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#l12_0').attr({transform:"matrix( 1.1505584716796875, -0.35, 0, 1, 181.4,88.8)"});txt4.attr({text:14});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#l12n1s").visible = true;txtT5();}
    if(slider4.value==-23){Snap('#l12_0').attr({transform:"matrix( 1.1505584716796875, -0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-22){Snap('#l12_0').attr({transform:"matrix( 1.1505584716796875, -0.28, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-21){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, -0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-20){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, -0.21, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-19){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, -0.175, 0, 1, 181.4,88.8)"});txt4.attr({text:7});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
	if(slider4.value==-18){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, -0.14, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-17){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, -0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-16){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, -0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-15){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, -0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    
    if(slider4.value==-14){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, 0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-12){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, 0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-11){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, 0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-10){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, 0.14, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-9){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, 0.175, 0, 1, 181.4,88.8)"});txt4.attr({text:7});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-8){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, 0.21, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-7){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, 0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-6){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, 0.28, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-5){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, 0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-4){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, 0.35, 0, 1, 181.4,88.8)"});txt4.attr({text:14});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#l12n1x").visible = true;txtT5();}
    if(slider4.value==-3){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, 0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, 0.42, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-1){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, 0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, 0.49, 0, 1, 181.4,88.8)"});txt4.attr({text:22});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
}
function l22(){
	if(slider4.value==-28){Snap('#l22_0').attr({transform:"matrix( 1.1505584716796875, -0.49, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-27){Snap('#l22_0').attr({transform:"matrix( 1.1505584716796875, -0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#l22_0').attr({transform:"matrix( 1.1505584716796875, -0.42, 0, 1, 181.4,88.8)"});txt4.attr({text:19});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#l22n2s").visible = true;txtT5();}
    if(slider4.value==-25){Snap('#l22_0').attr({transform:"matrix( 1.1505584716796875, -0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#l22_0').attr({transform:"matrix( 1.1505584716796875, -0.35, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-23){Snap('#l22_0').attr({transform:"matrix( 1.1505584716796875, -0.315, 0, 1, 181.4,88.8)"});txt4.attr({text:14});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-22){Snap('#l22_0').attr({transform:"matrix( 1.1505584716796875, -0.28, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-21){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, -0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-20){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, -0.21, 0, 1, 181.4,88.8)"});txt4.attr({text:10});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#l22n1s").visible = true;txtT5();}
    if(slider4.value==-19){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, -0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-18){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, -0.14, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-17){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, -0.105, 0, 1, 181.4,88.8)"});txt4.attr({text:5});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-16){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, -0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-15){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, -0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    
    if(slider4.value==-14){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, 0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-12){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, 0.07, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-11){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, 0.105, 0, 1, 181.4,88.8)"});txt4.attr({text:5});txt5.attr({text:"0.5"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-10){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, 0.14, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-9){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, 0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-8){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, 0.21, 0, 1, 181.4,88.8)"});txt4.attr({text:10});txt5.attr({text:"1.0"});txt6.attr({text:2});Snap("#l22n1x").visible = true;txtT5();}
    if(slider4.value==-7){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, 0.245, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-6){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, 0.28, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-5){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, 0.315, 0, 1, 181.4,88.8)"});txt4.attr({text:14});txt5.attr({text:"1.5"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-4){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, 0.35, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-3){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, 0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, 0.42, 0, 1, 181.4,88.8)"});txt4.attr({text:19});txt5.attr({text:"2.0"});txt6.attr({text:4});Snap("#l22n2x").visible = true;txtT5();}
    if(slider4.value==-1){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, 0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, 0.49, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
}
function l32(){
	if(slider4.value==-28){Snap('#l32_0').attr({transform:"matrix( 1.1505584716796875, -0.49, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-27){Snap('#l32_0').attr({transform:"matrix( 1.1505584716796875, -0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-26){Snap('#l32_0').attr({transform:"matrix( 1.1505584716796875, -0.42, 0, 1, 181.4,88.8)"});txt4.attr({text:18});txt5.attr({text:"0.0"});txt6.attr({text:5});txtT5();}
    if(slider4.value==-25){Snap('#l32_0').attr({transform:"matrix( 1.1505584716796875, -0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-24){Snap('#l32_0').attr({transform:"matrix( 1.1505584716796875, -0.35, 0, 1, 181.4,88.8)"});txt4.attr({text:14});txt5.attr({text:"0.0"});txt6.attr({text:4});Snap("#l32n2s").visible = true;txtT5();}
    if(slider4.value==-23){Snap('#l32_0').attr({transform:"matrix( 1.1505584716796875, -0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-22){Snap('#l32_0').attr({transform:"matrix( 1.1505584716796875, -0.28, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-21){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, -0.245, 0, 1, 181.4,88.8)"});txt4.attr({text:11});txt5.attr({text:"0.0"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-20){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, -0.21, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-19){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, -0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
	if(slider4.value==-18){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, -0.14, 0, 1, 181.4,88.8)"});txt4.attr({text:7});txt5.attr({text:"0.0"});txt6.attr({text:2});Snap("#l32n1s").visible = true;txtT5();}
    if(slider4.value==-17){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, -0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-16){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, -0.07, 0, 1, 181.4,88.8)"});txt4.attr({text:4});txt5.attr({text:"0.0"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-15){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, -0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    
    if(slider4.value==-14){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"});txt4.attr({text:0});txt5.attr({text:"0.0"});txt6.attr({text:0});txtT5();}
    
    if(slider4.value==-13){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, 0.035, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-12){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, 0.07, 0, 1, 181.4,88.8)"});txt4.attr({text:4});txt5.attr({text:"0.0"});txt6.attr({text:1});txtT5();}
    if(slider4.value==-11){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, 0.105, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-10){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, 0.14, 0, 1, 181.4,88.8)"});txt4.attr({text:7});txt5.attr({text:"0.0"});txt6.attr({text:2});Snap("#l32n1x").visible = true;txtT5();}
    if(slider4.value==-9){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, 0.175, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-8){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, 0.21, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-7){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, 0.245, 0, 1, 181.4,88.8)"});txt4.attr({text:11});txt5.attr({text:"0.0"});txt6.attr({text:3});txtT5();}
    if(slider4.value==-6){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, 0.28, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-5){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, 0.315, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-4){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, 0.35, 0, 1, 181.4,88.8)"});txt4.attr({text:14});txt5.attr({text:"0.0"});txt6.attr({text:4});Snap("#l32n2x").visible = true;txtT5();}
    if(slider4.value==-3){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, 0.385, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==-2){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, 0.42, 0, 1, 181.4,88.8)"});txt4.attr({text:18});txt5.attr({text:"0.0"});txt6.attr({text:5});txtT5();}
    if(slider4.value==-1){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, 0.455, 0, 1, 181.4,88.8)"});Snap("#t5").visible = false;}
    if(slider4.value==0){Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, 0.49, 0, 1, 181.4,88.8)"});txt4.attr({text:22});txt5.attr({text:"3.1"});txt6.attr({text:6});Snap("#l32n3x").visible = true;txtT5();}
}
function huduD1(){
	if(slider4.value==-28){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.9, 305.2,103.3) "});}
	if(slider4.value==-27){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.85, 305.2,105.3) "});}
	if(slider4.value==-26){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.8, 305.2,106.3) "});}
	if(slider4.value==-25){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.73, 305.2,108.3) "});}
	if(slider4.value==-24){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.65, 305.2,110.3) "});}
	if(slider4.value==-23){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.6, 305.2,112.3) "});}
	if(slider4.value==-22){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.55, 305.2,114.3) "});}
	if(slider4.value==-21){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.5, 305.2,117.3) "});}
	if(slider4.value==-20){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.45, 305.2,118.3) "});}
	if(slider4.value==-19){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.4, 305.2,119.3) "});}
	if(slider4.value==-18){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.3, 305.2,121.3) "});}
	if(slider4.value==-17){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.2, 305.2,123.3) "});}
	if(slider4.value==-16){Snap('#huduD1').attr({transform:"matrix( 0.12000732421875, 0, 0, 0.1, 305.2,125.3) "});}
	if(slider4.value==-15){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, 0, 305.2,103.3) "});}
	
	if(slider4.value==-14){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, 0, 305.2,103.3) "});}
	
	if(slider4.value==-13){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, 0, 305.2,103.3) "});}
	if(slider4.value==-12){Snap('#huduD1').attr({transform:"matrix( 0.12000732421875, 0, 0, -0.1, 305.2,132.3) "});}
	if(slider4.value==-11){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.2, 305.2,134.3) "});}
	if(slider4.value==-10){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.3, 305.2,135.3) "});}
	if(slider4.value==-9){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.4, 305.2,137.3) "});}
	if(slider4.value==-8){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.45, 305.2,139.3) "});}
	if(slider4.value==-7){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.5, 305.2,141.3) "});}
	if(slider4.value==-6){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.55, 305.2,142.3) "});}
	if(slider4.value==-5){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.6, 305.2,144.3) "});}
	if(slider4.value==-4){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.65, 305.2,145.3) "});}
	if(slider4.value==-3){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.73, 305.2,147.3) "});}
	if(slider4.value==-2){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.8, 305.2,149.3) "});}
	if(slider4.value==-1){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.85, 305.2,151.3) "});}
	if(slider4.value==0){Snap('#huduD1').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.9, 305.2,153.3) "});}
}
function huduD2(){
//	"matrix( 0.32000732421875, 0, 0, 0.93951416015625, 250.95,101.8) "
	if(slider4.value==-28){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.9, 250.95,103.3) "});}
	if(slider4.value==-27){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.85, 250.95,105.3) "});}
	if(slider4.value==-26){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.8, 250.95,106.3) "});}
	if(slider4.value==-25){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.73, 250.95,108.3) "});}
	if(slider4.value==-24){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.65, 250.95,110.3) "});}
	if(slider4.value==-23){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.6, 250.95,112.3) "});}
	if(slider4.value==-22){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.55, 250.95,114.3) "});}
	if(slider4.value==-21){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.5, 250.95,117.3) "});}
	if(slider4.value==-20){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.45, 250.95,118.3) "});}
	if(slider4.value==-19){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.4, 250.95,119.3) "});}
	if(slider4.value==-18){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.3, 250.95,121.3) "});}
	if(slider4.value==-17){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, 0.2, 250.95,123.3) "});}
	if(slider4.value==-16){Snap('#huduD2').attr({transform:"matrix( 0.12000732421875, 0, 0, 0.1, 250.95,125.3) "});}
	if(slider4.value==-15){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, 0, 250.95,103.3) "});}
	
	if(slider4.value==-14){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, 0, 250.95,103.3) "});}
	
	if(slider4.value==-13){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, 0, 250.95,103.3) "});}
	if(slider4.value==-12){Snap('#huduD2').attr({transform:"matrix( 0.12000732421875, 0, 0, -0.1, 250.95,132.3) "});}
	if(slider4.value==-11){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.2, 250.95,134.3) "});}
	if(slider4.value==-10){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.3, 250.95,135.3) "});}
	if(slider4.value==-9){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.4, 250.95,137.3) "});}
	if(slider4.value==-8){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.45, 250.95,139.3) "});}
	if(slider4.value==-7){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.5, 250.95,141.3) "});}
	if(slider4.value==-6){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.55, 250.95,142.3) "});}
	if(slider4.value==-5){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.6, 250.95,144.3) "});}
	if(slider4.value==-4){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.65, 250.95,145.3) "});}
	if(slider4.value==-3){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.73, 250.95,147.3) "});}
	if(slider4.value==-2){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.8, 250.95,149.3) "});}
	if(slider4.value==-1){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.85, 250.95,151.3) "});}
	if(slider4.value==0){Snap('#huduD2').attr({transform:"matrix( 0.32000732421875, 0, 0, -0.9, 250.95,153.3) "});}
}
function refreshFire()
	{   
		txtN0();
		txt4.attr({text:0});
		txt5.attr({text:0.0});
		txt6.attr({text:0});
		slider4.value=-14;
		Snap('#f11_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"})
		Snap('#l11_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"})
		Snap('#c11_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"})
		Snap('#h11_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"})
		Snap('#f21_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"})
		Snap('#l21_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"})
		Snap('#c21_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"})
		Snap('#h21_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"})
		Snap('#f31_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"})
		Snap('#l31_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"})
		Snap('#c31_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"})
		Snap('#h31_0').attr({transform:"matrix(0.886199951171875, 0, 0, 1, 248.4,88.8)"})
		Snap('#f12_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"})
		Snap('#l12_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"})
		Snap('#c12_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"})
		Snap('#h12_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"})
		Snap('#f22_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"})
		Snap('#l22_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"})
		Snap('#c22_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"})
		Snap('#h22_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"})
		Snap('#f32_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"})
		Snap('#l32_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"})
		Snap('#c32_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"})
		Snap('#h32_0').attr({transform:"matrix(1.1505584716796875, 0, 0, 1, 181.4,88.8)"})
		if(slider1.value==0&&slider2.value==0&&slider3.value==0){
			txt1.attr({text:400});
			txt2.attr({text:2});
			txt3.attr({text:1});
		Snap("#light_1").visible = true;
		Snap("#light_2").visible = false;
		Snap("#f11").visible = true;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==0&&slider2.value==0&&slider3.value==1){
			txt1.attr({text:400});
			txt2.attr({text:2});
			txt3.attr({text:2});
			Snap("#light_2").visible = true;
		Snap("#light_1").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = true;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==0&&slider2.value==1&&slider3.value==0){
			txt1.attr({text:400});
			txt2.attr({text:3});
			txt3.attr({text:1});
			Snap("#light_1").visible = true;
		Snap("#light_2").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = true;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==0&&slider2.value==1&&slider3.value==1){
			txt1.attr({text:400});
			txt2.attr({text:3});
			txt3.attr({text:2});
			Snap("#light_2").visible = true;
		Snap("#light_1").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = true;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==0&&slider2.value==2&&slider3.value==0){
			txt1.attr({text:400});
			txt2.attr({text:4});
			txt3.attr({text:1});
			Snap("#light_1").visible = true;
		Snap("#light_2").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = true;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==0&&slider2.value==2&&slider3.value==1){
			txt1.attr({text:400});
			txt2.attr({text:4});
			txt3.attr({text:2});
			Snap("#light_2").visible = true;
		Snap("#light_1").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = true;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==1&&slider2.value==0&&slider3.value==0){
			txt1.attr({text:500});
			txt2.attr({text:2});
			txt3.attr({text:1});
			Snap("#light_1").visible = true;
		Snap("#light_2").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = true;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==1&&slider2.value==0&&slider3.value==1){
			txt1.attr({text:500});
			txt2.attr({text:2});
			txt3.attr({text:2});
			Snap("#light_2").visible = true;
		Snap("#light_1").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = true;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==1&&slider2.value==1&&slider3.value==0){
			txt1.attr({text:500});
			txt2.attr({text:3});
			txt3.attr({text:1});
			Snap("#light_1").visible = true;
		Snap("#light_2").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = true;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==1&&slider2.value==1&&slider3.value==1){
			txt1.attr({text:500});
			txt2.attr({text:3});
			txt3.attr({text:2});
			Snap("#light_2").visible = true;
		Snap("#light_1").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = true;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==1&&slider2.value==2&&slider3.value==0){
			txt1.attr({text:500});
			txt2.attr({text:4});
			txt3.attr({text:1});
			Snap("#light_1").visible = true;
		Snap("#light_2").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = true;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==1&&slider2.value==2&&slider3.value==1){
			txt1.attr({text:500});
			txt2.attr({text:4});
			txt3.attr({text:2});
			Snap("#light_2").visible = true;
		Snap("#light_1").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = true;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==2&&slider2.value==0&&slider3.value==0){
			txt1.attr({text:600});
			txt2.attr({text:2});
			txt3.attr({text:1});
			Snap("#light_1").visible = true;
		Snap("#light_2").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = true;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==2&&slider2.value==0&&slider3.value==1){
			txt1.attr({text:600});
			txt2.attr({text:2});
			txt3.attr({text:2});
			Snap("#light_2").visible = true;
		Snap("#light_1").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = true;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==2&&slider2.value==1&&slider3.value==0){
			txt1.attr({text:600});
			txt2.attr({text:3});
			txt3.attr({text:1});
			Snap("#light_1").visible = true;
		Snap("#light_2").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = true;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==2&&slider2.value==1&&slider3.value==1){
			txt1.attr({text:600});
			txt2.attr({text:3});
			txt3.attr({text:2});
			Snap("#light_2").visible = true;
		Snap("#light_1").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = true;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==2&&slider2.value==2&&slider3.value==0){
			txt1.attr({text:600});
			txt2.attr({text:4});
			txt3.attr({text:1});
			Snap("#light_1").visible = true;
		Snap("#light_2").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = true;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==2&&slider2.value==2&&slider3.value==1){
			txt1.attr({text:600});
			txt2.attr({text:4});
			txt3.attr({text:2});
			Snap("#light_2").visible = true;
		Snap("#light_1").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = true;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==3&&slider2.value==0&&slider3.value==0){
			txt1.attr({text:700});
			txt2.attr({text:2});
			txt3.attr({text:1});
			Snap("#light_1").visible = true;
		Snap("#light_2").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = true;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==3&&slider2.value==0&&slider3.value==1){
			txt1.attr({text:700});
			txt2.attr({text:2});
			txt3.attr({text:2});
			Snap("#light_2").visible = true;
		Snap("#light_1").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = true;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==3&&slider2.value==1&&slider3.value==0){
			txt1.attr({text:700});
			txt2.attr({text:3});
			txt3.attr({text:1});
			Snap("#light_1").visible = true;
		Snap("#light_2").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = true;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==3&&slider2.value==1&&slider3.value==1){
			txt1.attr({text:700});
			txt2.attr({text:3});
			txt3.attr({text:2});
			Snap("#light_2").visible = true;
		Snap("#light_1").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = true;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==3&&slider2.value==2&&slider3.value==0){
			txt1.attr({text:700});
			txt2.attr({text:4});
			txt3.attr({text:1});
			Snap("#light_1").visible = true;
		Snap("#light_2").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = true;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
		} 
		if(slider1.value==3&&slider2.value==2&&slider3.value==1){
			txt1.attr({text:700});
			txt2.attr({text:4});
			txt3.attr({text:2});
			Snap("#light_2").visible = true;
		Snap("#light_1").visible = false;
		Snap("#f11").visible = false;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = true;
		} 
		
		
	   }
	
	
function _reset()//重置
	{
		play = false;
		slider1.value = 0 ;
		slider2.value = 0 ;
		slider3.value = 0 ;
		txtN0();
		refreshFire();
		Snap("#resetBtn2").visible = false;
		Snap("#resetBtn").visible = true;
		Snap("#f11").visible = true;
		Snap("#f21").visible = false;
		Snap("#f31").visible = false;
		Snap("#f12").visible = false;
		Snap("#f22").visible = false;
		Snap("#f32").visible = false;
		Snap("#l11").visible = false;
		Snap("#l21").visible = false;
		Snap("#l31").visible = false;
		Snap("#l12").visible = false;
		Snap("#l22").visible = false;
		Snap("#l32").visible = false;
		Snap("#c11").visible = false;
		Snap("#c21").visible = false;
		Snap("#c31").visible = false;
		Snap("#c12").visible = false;
		Snap("#c22").visible = false;
		Snap("#c32").visible = false;
		Snap("#h11").visible = false;
		Snap("#h21").visible = false;
		Snap("#h31").visible = false;
		Snap("#h12").visible = false;
		Snap("#h22").visible = false;
		Snap("#h32").visible = false;
	}
    
	   

	
		p.reset = function() {}

		p.lock = function(_lock) {

		}
		p.loadState = function(obj) {

		}
		p.saveState = function() {
			var stateObject = {};
			return stateObject;
		}
		move.InteractiveActivity = InteractiveActivity;
	}
)(window)