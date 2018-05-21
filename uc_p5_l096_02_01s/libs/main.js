(
	function(move) {
		var InteractiveActivity = function(_api) {
			api = _api;
			init();
		}
		var api;
		var p = InteractiveActivity.prototype;
		var stage;
		var play = false;
		var txt2, slider2;
		var svg;

		var xx = 0;
		var m1, m2,m;
		var mc = document.getElementById("container");
		var pictureZoom_mc, mx;
		loadSvg();

		function loadSvg() {

			Snap.load("images/img.svg", function(f) {

				document.getElementById("container").appendChild(f.node);
				f.node.id = "svg";
				stage = Snap("#svg");
				svg = f.node;
				mc.appendChild(svg);
				Snap('#hand_mc').drag();
				pictureZoom_mc = svg.getElementById("hand_mc");
				init();
			});

		}

		function init() {

			start();
			test();
			setFdj();
	
		}


		function start() {
			base = Snap("#base");
			createTxt2();
			createSlider2();
		}

		function createTxt2() {
			txt2 = stage.text(173, 24, "0");
			txt2.attr({
				"font-size": "18px"
			});
		}

		function createSlider2() {
			slider2 = stage.slider("#014689", 100, 75);
			slider2.attr({
				transform: "matrix(1,0,0,1,145,50)"
			})
			slider2.onchange = function() {
				refreshTxt();
				var obj = getMatrix(pictureZoom_mc);
				xx = slider2.value * 0.1 + 1;
				m1 = new Snap.Matrix(xx, 0, 0, xx, obj.x, obj.y);
				Snap('#picture_mc').transform(m1.toTransformString());

				var mx = pictureZoom_mc.getAttribute("transform");

				//console.dir(mx.split());
				var txtArr = mx.split(",");
				var str = txtArr[5].split(")");
	
            m = new Snap.Matrix();
       
             m.scale(xx, xx,txtArr[4], str[0]);
    // 缩放
              Snap('#picture_mc').transform(m);

				var m2 = new Snap.Matrix(1, 0, 0, 1, txtArr[4], str[0]);
				
				Snap('#Mask_mask_mc').transform(m2.toTransformString());

			}
		}



		function refreshTxt() {
			
			var v2 = Math.round((slider2.value)) / 10;

			txt2.attr({
				text: v2
			});

		}


		function setFdj() {

			$("#hand_mc").zdw_addEvent("mousemove", onMoveFdj)
			$("#resetBtn").zdw_addEvent("mousedown", _reset)		
		}

		function onMoveFdj(e) { //放大镜
			mx = pictureZoom_mc.getAttribute("transform");
			var obj = getMatrix(pictureZoom_mc);

			var txtArr = mx.split(",");
			var str = txtArr[5].split(")");

			m2 = new Snap.Matrix(1, 0, 0, 1, txtArr[4], str[0]);

			Snap('#Mask_mask_mc').transform(m2.toTransformString());

		
            m = new Snap.Matrix();
      
             m.scale(xx, xx,txtArr[4], str[0]);
    // 缩放
              Snap('#picture_mc').transform(m);

		}

		function test() {
			$("#resetBtn").click(_reset());
			
			
		}



		function _reset(e) {
				       slider2.value=0;
	
			refreshTxt();

				


				
				m1 = new Snap.Matrix(1, 0, 0, 1, 0, 0);
				Snap('#picture_mc').transform(m1.toTransformString());
					Snap('#hand_mc').transform(m1.toTransformString());
			
                     
				var m2 = new Snap.Matrix(1, 0, 0, 1, 0, 0);
			
				Snap('#Mask_mask_mc').transform(m2.toTransformString());
		}


		function getMatrix(temp_) {
			var mx = temp_.getAttribute("transform");
			var txtArr = mx.split(",");
			var str = txtArr[0].split("(");
			txtArr[0] = getNamber(str);
			var str2 = txtArr[5].slice(0, txtArr[5].length - 2);
			txtArr[5] = str2 //getNamber(str2);
			var obj = new Object();
		
			obj.x = txtArr[4];
			obj.y = txtArr[5];
			obj.scaleX = txtArr[0];
			obj.scaleY = txtArr[3];
			obj.scaleZX = txtArr[1];
			obj.scaleZY = txtArr[2];
			return obj;
			
		

			function getNamber(_str) {
					for (var i = _str.length - 1; i >= 0; i--) {
						if (Number(_str[i]) != NaN) {
							return _str[i];
						}
					}
				}
				
		}




		p.reset = function() {


		}

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