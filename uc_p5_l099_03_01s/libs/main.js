(
	function(move) {
		var InteractiveActivity = function(_api) {
			api = _api;
			init();
		}
	var i1=0,i2=0,i3=0,i4=0,j=0;	
	var api;
	var p = InteractiveActivity.prototype;
	var stage;
	var play = false;
	var txt1,txt2,slider1,slider2;
	init();
	function init()
	{
		
		Snap.load("images/img.svg",function(f)
		{	
			document.getElementById("container").appendChild(f.node);	
			f.node.id = "svg";
			stage = Snap("#svg");
				
			start();
			test();
			slider1.value=0;
			slider2.value=0;
	           
		});

	}
	function start()
	{			
		base = Snap("#base");	

		
		createTxt1();//创建文本
		createTxt2();
		createSlider1();//创建滑块
		createSlider2();
		Snap("#kabel").visible = false;
		Snap("#plytki").visible = false;
		Snap("#B1").visible = false;
		Snap("#B2").visible = false;
		Snap("#B3").visible = false;
		Snap("#B4").visible = false;
		Snap("#ll5").visible = false;
		Snap("#ll1").visible = false;
		Snap("#ll2").visible = false;
		Snap("#ll3").visible = false;
		Snap("#ll4").visible = false;
		Snap("#hl1").visible = false;
		Snap("#hl2").visible = false;
		Snap("#hl3").visible = false;
		Snap("#hl4").visible = false;
		Snap("#hl5").visible = false;
		Snap("#zz5").visible = false;	
		Snap("#zz4").visible = false;
		Snap("#zz3").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz1").visible = true;
        Snap("#mask_mc5").visible = false;
        _reset();//初始化
    }
	function createTxt1()
	{
		txt1 = stage.text(63,23,"3500");
		txt1.attr({"font-size":"18px",});		
	}
    function createTxt2()
	{
		txt2 = stage.text(63,102,"3500");
		txt2.attr({"font-size":"18px",});		
	}
	function createSlider1()
	{
		slider1 = stage.slider("#014689",70,1);
		slider1.attr({transform:"matrix(1,0,0,1,59,48)"})
		slider1.onchange = function()
		{	
			refreshFire();
		}	
	}
	function createSlider2()
	{
		slider2 = stage.slider("#014689",70,4);
		slider2.attr({transform:"matrix(1,0,0,1,59,125)"})
		slider2.onchange = function()
		{	
			refreshFire();
		}	
	}

	function refreshFire()
	{
		if(slider1.value==0&&slider2.value==0){
			txt1.attr({text:"I low"});
			txt2.attr({text:250});
		Snap("#ll1").visible = true;	
		Snap("#ll2").visible = false;
		Snap("#ll3").visible = false;
		Snap("#ll4").visible = false;
		Snap("#ll5").visible = false;
		Snap("#hl1").visible = false;
		Snap("#hl2").visible = false;
		Snap("#hl3").visible = false;
		Snap("#hl4").visible = false;
		Snap("#hl5").visible = false;
		} 
		if(slider1.value==0&&slider2.value==1){
			txt1.attr({text:"I low"});
			txt2.attr({text:300});
		Snap("#ll1").visible = false;	
		Snap("#ll2").visible = true;
		Snap("#ll3").visible = false;
		Snap("#ll4").visible = false;
		Snap("#ll5").visible = false;
		Snap("#hl1").visible = false;
		Snap("#hl2").visible = false;
		Snap("#hl3").visible = false;
		Snap("#hl4").visible = false;
		Snap("#hl5").visible = false;
		} 
		if(slider1.value==0&&slider2.value==2){
			txt1.attr({text:"I low"});
			txt2.attr({text:480});
		Snap("#ll1").visible = false;	
		Snap("#ll2").visible = false;
		Snap("#ll3").visible = true;
		Snap("#ll4").visible = false;
		Snap("#ll5").visible = false;
		Snap("#hl1").visible = false;
		Snap("#hl2").visible = false;
		Snap("#hl3").visible = false;
		Snap("#hl4").visible = false;
		Snap("#hl5").visible = false;
		} 
        if(slider1.value==0&&slider2.value==3){
			txt1.attr({text:"I low"});
			txt2.attr({text:570});
		Snap("#ll1").visible = false;	
		Snap("#ll2").visible = false;
		Snap("#ll3").visible = false;
		Snap("#ll4").visible = true;
		Snap("#ll5").visible = false;
		Snap("#hl1").visible = false;
		Snap("#hl2").visible = false;
		Snap("#hl3").visible = false;
		Snap("#hl4").visible = false;
		Snap("#hl5").visible = false;
		} 
		if(slider1.value==0&&slider2.value==4){
			txt1.attr({text:"I low"});
			txt2.attr({text:650});
		Snap("#ll1").visible = false;	
		Snap("#ll2").visible = false;
		Snap("#ll3").visible = false;
		Snap("#ll4").visible = false;
		Snap("#ll5").visible = true;
		Snap("#hl1").visible = false;
		Snap("#hl2").visible = false;
		Snap("#hl3").visible = false;
		Snap("#hl4").visible = false;
		Snap("#hl5").visible = false;
		} 
		if(slider1.value==1&&slider2.value==0){
			txt1.attr({text:"I high"});
			txt2.attr({text:250});
		Snap("#ll1").visible = false;	
		Snap("#ll2").visible = false;
		Snap("#ll3").visible = false;
		Snap("#ll4").visible = false;
		Snap("#ll5").visible = false;
		Snap("#hl1").visible = true;
		Snap("#hl2").visible = false;
		Snap("#hl3").visible = false;
		Snap("#hl4").visible = false;
		Snap("#hl5").visible = false;
		} 
		if(slider1.value==1&&slider2.value==1){
			txt1.attr({text:"I high"});
			txt2.attr({text:300});
		Snap("#ll1").visible = false;	
		Snap("#ll2").visible = false;
		Snap("#ll3").visible = false;
		Snap("#ll4").visible = false;
		Snap("#ll5").visible = false;
		Snap("#hl1").visible = false;
		Snap("#hl2").visible = true;
		Snap("#hl3").visible = false;
		Snap("#hl4").visible = false;
		Snap("#hl5").visible = false;
		} 
		if(slider1.value==1&&slider2.value==2){
			txt1.attr({text:"I high"});
			txt2.attr({text:480});
		Snap("#ll1").visible = false;	
		Snap("#ll2").visible = false;
		Snap("#ll3").visible = false;
		Snap("#ll4").visible = false;
		Snap("#ll5").visible = false;
		Snap("#hl1").visible = false;
		Snap("#hl2").visible = false;
		Snap("#hl3").visible = true;
		Snap("#hl4").visible = false;
		Snap("#hl5").visible = false;
		} 
		if(slider1.value==1&&slider2.value==3){
			txt1.attr({text:"I high"});
			txt2.attr({text:570});
		Snap("#ll1").visible = false;	
		Snap("#ll2").visible = false;
		Snap("#ll3").visible = false;
		Snap("#ll4").visible = false;
		Snap("#ll5").visible = false;
		Snap("#hl1").visible = false;
		Snap("#hl2").visible = false;
		Snap("#hl3").visible = false;
		Snap("#hl4").visible = true;
		Snap("#hl5").visible = false;
		} 
		if(slider1.value==1&&slider2.value==4){
			txt1.attr({text:"I high"});
			txt2.attr({text:650});
		Snap("#ll1").visible = false;	
		Snap("#ll2").visible = false;
		Snap("#ll3").visible = false;
		Snap("#ll4").visible = false;
		Snap("#ll5").visible = false;
		Snap("#hl1").visible = false;
		Snap("#hl2").visible = false;
		Snap("#hl3").visible = false;
		Snap("#hl4").visible = false;
		Snap("#hl5").visible = true;
		Snap("#zz3").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz1").visible = true;
		} 
       Snap("#kabel").visible = false;
       Snap("#zz3").visible = false;	
	   Snap("#zz2").visible = false;
	   Snap("#zz1").visible = true;
	   j=1;
	   }
	function _b1()
    {
    	Snap("#B4").visible = false;
		Snap("#B2").visible = false;	
		Snap("#B3").visible = false;
		Snap("#B1").visible = true;
		Snap("#plytki").visible = true;
		Snap("#kabel").visible = false;
		Snap("#zz3").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz1").visible = true;
		i1=1;
		j=1;
    }
    function _b2()
    {
    	Snap("#B4").visible = false;
		Snap("#B1").visible = false;	
		Snap("#B3").visible = false;
		Snap("#B2").visible = true;
		Snap("#plytki").visible = true;
		Snap("#kabel").visible = false;
		Snap("#zz3").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz1").visible = true;
		i2=1;
		j=1;
    }
    function _b3()
    {
    	Snap("#B4").visible = false;
		Snap("#B2").visible = false;	
		Snap("#B1").visible = false;
		Snap("#B3").visible = true;
		Snap("#plytki").visible = true;
		Snap("#kabel").visible = false;
		Snap("#zz3").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz1").visible = true;
		i3=1;
		j=1;
    }
    function _b4()
    {
    	Snap("#B1").visible = false;
		Snap("#B2").visible = false;	
		Snap("#B3").visible = false;
		Snap("#B4").visible = true;
		Snap("#plytki").visible = true;
		Snap("#kabel").visible = false;
		Snap("#zz3").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz1").visible = true;
		i4=1;
		j=1;
    }
    
	function _run ()//点按播放键使指针旋转
	{
		if(i1&j)//b1金属250,300nm偏转
		{
			Snap("#kabel").visible = true;
			if(slider1.value==0&&slider2.value==0)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = true;
		Snap("#zz3").visible = false;
		}
			if(slider1.value==1&&slider2.value==0)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz3").visible = true;
		}
		if(slider1.value==0&&slider2.value==1)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = true;
		Snap("#zz3").visible = false;
		}
			if(slider1.value==1&&slider2.value==1)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz3").visible = true;
		}
		}
		if(i2&j)//b2金属250nm
		{
			Snap("#kabel").visible = true;
			if(slider1.value==0&&slider2.value==0)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = true;
		Snap("#zz3").visible = false;
		}
			if(slider1.value==1&&slider2.value==0)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz3").visible = true;
		}
		}
		if(i3&j)//b3金属250,300,480nm偏转
		{
			Snap("#kabel").visible = true;
			if(slider1.value==0&&slider2.value==0)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = true;
		Snap("#zz3").visible = false;
		}
			if(slider1.value==1&&slider2.value==0)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz3").visible = true;
		}
		    if(slider1.value==0&&slider2.value==1)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = true;
		Snap("#zz3").visible = false;
		}
			if(slider1.value==1&&slider2.value==1)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz3").visible = true;
		}
		     if(slider1.value==0&&slider2.value==2)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = true;
		Snap("#zz3").visible = false;
		}
			if(slider1.value==1&&slider2.value==2)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz3").visible = true;
		}	
		}
		if(i4&j)//b4金属250,300,480,570nm偏转
		{
			Snap("#kabel").visible = true;
			if(slider1.value==0&&slider2.value==0)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = true;
		Snap("#zz3").visible = false;
		}
			if(slider1.value==1&&slider2.value==0)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz3").visible = true;
		}
		    if(slider1.value==0&&slider2.value==1)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = true;
		Snap("#zz3").visible = false;
		}
			if(slider1.value==1&&slider2.value==1)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz3").visible = true;
		}
		     if(slider1.value==0&&slider2.value==2)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = true;
		Snap("#zz3").visible = false;
		}
			if(slider1.value==1&&slider2.value==2)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz3").visible = true;
		}	
		    if(slider1.value==0&&slider2.value==3)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = true;
		Snap("#zz3").visible = false;
		}
			if(slider1.value==1&&slider2.value==3)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz3").visible = true;
		}	
		}
		/*if((i1||i2||i3||i4)&j)
		{
		Snap("#kabel").visible = true;
		if(slider1.value==0&&slider2.value==0)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = true;
		Snap("#zz3").visible = false;
		}
		if(slider1.value==1&&slider2.value==0)
		{
		Snap("#zz1").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz3").visible = true;
		}
		
		//i1=i2=i3=i4=0;
		//Snap("#zg").visible = true;
		}*/
		j=0;
        Snap("#mask_mc5").visible = true;
		slider1.after(Snap("#mask_mc2"));
		txt1.after(Snap("#mask_mc1"));
        slider2.after(Snap("#mask_mc4"));
		txt2.after(Snap("#mask_mc3"));
		/*if(!play)
		{
			
			play = true;
			playStar(slider1.value);
			playStar(slider2.value);
		}*/
	}
	
	function _reset()//重置
	{
		play = false;
		slider1.value = 0 ;
		slider2.value = 0 ;
	
		refreshFire();
		Snap("#kabel").visible = false;
		Snap("#zz3").visible = false;	
		Snap("#zz2").visible = false;
		Snap("#zz1").visible = true;
		Snap("#B1").visible = false;
		Snap("#B2").visible = false;	
		Snap("#B3").visible = false;
		Snap("#B4").visible = false;
		Snap("#plytki").visible = false;
		i1=i2=i3=i4=0;
		Snap("#mask_mc5").visible = false;
		slider1.before(Snap("#mask_mc2"));
		txt1.before(Snap("#mask_mc1"));
		slider2.before(Snap("#mask_mc4"));
		txt2.before(Snap("#mask_mc3"));
		//hideResult();
	//	ts.tw0.reset();
	//	ts.tw0.set({visibility:"visible"});
	}
    
    function test()
	{
		Snap("#b1").click(_b1);
		Snap("#b2").click(_b2);
		Snap("#b3").click(_b3);
		Snap("#b4").click(_b4);
		Snap("#playBtn").click(_run);
		Snap("#resetBtn").click(_reset);
		playBtn.style.cursor="pointer";
		b1.style.cursor="pointer";
		b2.style.cursor="pointer";
		b3.style.cursor="pointer";
		b4.style.cursor="pointer";
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