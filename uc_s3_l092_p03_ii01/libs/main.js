(
	function(move) {
		var InteractiveActivity = function(_api) {
			api = _api;
			init();
		}
	var i1=0,i2=0,i3=0,i4=0;	
	var api;
	var p = InteractiveActivity.prototype;
	var stage;
	var play = false;
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
	           
		});

	}
	function start()
	{			
		base = Snap("#base");	
		Snap("#hbg2").visible = false;
		Snap("#o1").visible = false;
		Snap("#o20").visible = false;
		Snap("#o21").visible = false;
		Snap("#o22").visible = false;
		Snap("#o40").visible = false;
		Snap("#o41").visible = false;
		Snap("#o42").visible = false;
		Snap("#o6").visible = false;
		Snap("#o7").visible = false;
		Snap("#o8").visible = false;
		Snap("#b1").visible = false;
		Snap("#b2").visible = false;
		Snap("#b3").visible = false;
		Snap("#b4").visible = false;
		Snap("#b5").visible = false;	
		Snap("#b6").visible = false;
		Snap("#b7").visible = false;	
		Snap("#b8").visible = false;
		Snap("#p0").visible = false;
		Snap("#Ti").visible = true;
        Snap("#Sti").visible = true;
        _reset();//初始化
    }
	function _b0()
	{
		Snap("#hbg2").visible = true;
		Snap("#p0").visible = true;
		Snap("#b0").visible = false;
		Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
	}
	function _p0()
	{
		Snap("#hbg2").visible = false;
		Snap("#b0").visible = true;
		Snap("#p0").visible = false;
		Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
	}
	function _p1()
    {	
		Snap("#p1").visible = false;
		Snap("#b1").visible = true;
		Snap("#o1").visible = true;
		Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
    }
    function _b1()
    {
    	Snap("#b1").visible = false;
		Snap("#p1").visible = true;
    	Snap("#o1").visible = false;
    	Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
    }
    function _p6()
    {	
		Snap("#p6").visible = false;
		Snap("#b6").visible = true;
		Snap("#o6").visible = true;
		Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
    }
    function _b6()
    {
    	Snap("#b6").visible = false;
		Snap("#p6").visible = true;
    	Snap("#o6").visible = false;
    	Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
    }
    function _p7()
    {	
		Snap("#p7").visible = false;
		Snap("#b7").visible = true;
		Snap("#o7").visible = true;
		Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
    }
    function _b7()
    {
    	Snap("#b7").visible = false;
		Snap("#p7").visible = true;
    	Snap("#o7").visible = false;
    	Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
    }
    function _p8()
    {	
		Snap("#p8").visible = false;
		Snap("#b8").visible = true;
		Snap("#o8").visible = true;
		Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
    }
    function _b8()
    {
    	Snap("#b8").visible = false;
		Snap("#p8").visible = true;
    	Snap("#o8").visible = false;
    	Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
    }
    function refreshFire1()
    {
    	if(i1)
    	{
    		if(i2)
    		{
    			Snap("#o21").visible = false;
		        Snap("#o22").visible = true;
		        Snap("#o20").visible = false;
    		}
    		else
    		{
    			Snap("#o21").visible = false;
		        Snap("#o22").visible = false;
		        Snap("#o20").visible = true;
    		}
    	}
    	else
    	{
    		if(i2)
    	    {
		        Snap("#o21").visible = true;
		        Snap("#o22").visible = false;
		        Snap("#o20").visible = false;
    	    }
    	    else
    	    {
		        Snap("#o22").visible = false;
		        Snap("#o21").visible = false;
		        Snap("#o20").visible = false;
    	    }
    	}
    }
    function _p2()
    {	
		Snap("#p2").visible = false;
		Snap("#b2").visible = true;
		Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
		i1=1;
		refreshFire1();
    }
    function _b2()
    {
    	Snap("#b2").visible = false;
		Snap("#p2").visible = true;
		Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
    	i1=0;
    	refreshFire1();
    }
    function _p3()
    {	
		Snap("#p3").visible = false;
		Snap("#b3").visible = true;
		Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
		i2=1;
		refreshFire1();
    }
    function _b3()
    {
    	Snap("#b3").visible = false;
		Snap("#p3").visible = true;
		Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
    	i2=0;
    	refreshFire1();
    }
    function refreshFire2()
    {
    	if(i3)
    	{
    		if(i4)
    		{
    			Snap("#o41").visible = false;
		        Snap("#o42").visible = true;
		        Snap("#o40").visible = false;
    		}
    		else
    		{
    			Snap("#o41").visible = false;
		        Snap("#o42").visible = false;
		        Snap("#o40").visible = true;
    		}
    	}
    	else
    	{
    		if(i4)
    	    {
		        Snap("#o41").visible = true;
		        Snap("#o42").visible = false;
		        Snap("#o40").visible = false;
    	    }
    	    else
    	    {
		        Snap("#o42").visible = false;
		        Snap("#o41").visible = false;
		        Snap("#o40").visible = false;
    	    }
    	}
    }
    function _p4()
    {	
		Snap("#p4").visible = false;
		Snap("#b4").visible = true;
		Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
		i3=1;
		refreshFire2();
    }
    function _b4()
    {
    	Snap("#b4").visible = false;
		Snap("#p4").visible = true;
		Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
    	i3=0;
    	refreshFire2();
    }
    function _p5()
    {	
		Snap("#p5").visible = false;
		Snap("#b5").visible = true;
		Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
		i4=1;
		refreshFire2();
    }
    function _b5()
    {
    	Snap("#b5").visible = false;
		Snap("#p5").visible = true;
		Snap("#Ti").visible = false;
        Snap("#Sti").visible = false;
    	i4=0;
    	refreshFire2();
    }
	function _reset()//重置
	{
		play = false;
		Snap("#hbg2").visible = false;
		Snap("#o1").visible = false;
		Snap("#o20").visible = false;
		Snap("#o21").visible = false;
		Snap("#o22").visible = false;
		Snap("#o40").visible = false;
		Snap("#o41").visible = false;
		Snap("#o42").visible = false;
		Snap("#o6").visible = false;
		Snap("#o7").visible = false;
		Snap("#o8").visible = false;
		Snap("#b1").visible = false;
		Snap("#b2").visible = false;
		Snap("#b3").visible = false;
		Snap("#b4").visible = false;
		Snap("#b5").visible = false;	
		Snap("#b6").visible = false;
		Snap("#b7").visible = false;	
		Snap("#b8").visible = false;
		Snap("#p0").visible = false;
		Snap("#p1").visible = true;
		Snap("#p2").visible = true;
		Snap("#p3").visible = true;
		Snap("#p4").visible = true;
		Snap("#p5").visible = true;	
		Snap("#p6").visible = true;
		Snap("#p7").visible = true;	
		Snap("#p8").visible = true;
		Snap("#b0").visible = true;
		Snap("#Ti").visible = true;
        Snap("#Sti").visible = true;
		//hideResult();
	//	ts.tw0.reset();
	//	ts.tw0.set({visibility:"visible"});
	}
    
    function test()
	{
		Snap("#b0").click(_b0);
		Snap("#b1").click(_b1);
		Snap("#b2").click(_b2);
		Snap("#b3").click(_b3);
		Snap("#b4").click(_b4);
		Snap("#b5").click(_b5);
		Snap("#b6").click(_b6);
		Snap("#b7").click(_b7);
		Snap("#b8").click(_b8);
		Snap("#p0").click(_p0);
		Snap("#p1").click(_p1);
		Snap("#p2").click(_p2);
		Snap("#p3").click(_p3);
		Snap("#p4").click(_p4);
		Snap("#p5").click(_p5);
		Snap("#p6").click(_p6);
		Snap("#p7").click(_p7);
		Snap("#p8").click(_p8);
		//Snap("#playBtn").click(_run);
		Snap("#resetBtn").click(_reset);
		//playBtn.style.cursor="pointer";
		b0.style.cursor="pointer";
		b1.style.cursor="pointer";
		b2.style.cursor="pointer";
		b3.style.cursor="pointer";
		b4.style.cursor="pointer";
		b5.style.cursor="pointer";
		b6.style.cursor="pointer";
		b7.style.cursor="pointer";
		b8.style.cursor="pointer";
		p0.style.cursor="pointer";
		p1.style.cursor="pointer";
		p2.style.cursor="pointer";
		p3.style.cursor="pointer";
		p4.style.cursor="pointer";
		p5.style.cursor="pointer";
		p6.style.cursor="pointer";
		p7.style.cursor="pointer";
		p8.style.cursor="pointer";
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