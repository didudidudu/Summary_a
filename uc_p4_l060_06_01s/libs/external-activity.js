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
		var txt1, slider1;
		var navi = navigator.userAgent.toLowerCase();
		var touchDevice = /ipad|iphone|android|windows phone|blackberry/i.test(navi);
		var eventType = touchDevice ? 'touchstart' : 'mousedown';
			var eventType0 = touchDevice ? 'touchend' : 'mouseup';
		
		var bg, n_0, n0_2, n1_1, n1_3, n2_1, n2_3, n3_1, n3_3, s_0, s0_2, s1_1, s1_3, s2_1, s2_3, s3_1, s3_3, r_b, tweenID, requestID;
		var FPS = 25;
		var bj1, bj2, bj3, bj4, bj5, bj6, bj7, bj8, bj9;
		var j;
		var frame, frame0, frame1, frame2;
		init();

		function init() {

			Snap.load("images/uc_p4_l060_06_01s.svg", function(f) {
				document.getElementById("container").appendChild(f.node);
				f.node.id = "svg";
				stage = Snap("#svg");
				j = 0;
				bj1 = 1;
				bj2 = 0;
				bj3 = 1;
				bj4 = 0;
				bj5 = 1;
				bj6 = 0;
				bj7 = 1;
				bj8 = 0;
				bj9 = 0;
				frame = 1;
				frame0 = 1;
				frame1 = 2;
				frame2 = 2;
					start();
			});
		
		}

		function start() {

			base = Snap("#base");
			r_b = new ImageAnimation('rb', 'images/red_blue.json');

			n_0 = new ImageAnimation('n0', 'images/n0.json'); //圆盘
			n0_2 = new ImageAnimation('n02', 'images/n02.json'); //点叉
			n1_1 = new ImageAnimation('n11', 'images/n11.json');
			n1_3 = new ImageAnimation('n13', 'images/n13.json');
			n2_1 = new ImageAnimation('n21', 'images/n21.json');
			n2_3 = new ImageAnimation('n23', 'images/n23.json');
			n3_1 = new ImageAnimation('n31', 'images/n31.json');
			n3_3 = new ImageAnimation('n33', 'images/n33.json');

			s_0 = new ImageAnimation('s0', 'images/s0.json');
			s0_2 = new ImageAnimation('s02', 'images/s02.json');
			s1_1 = new ImageAnimation('s11', 'images/s11.json');
			s1_3 = new ImageAnimation('s13', 'images/s13.json');
			s2_1 = new ImageAnimation('s21', 'images/s21.json');
			s2_3 = new ImageAnimation('s23', 'images/s23.json');
			s3_1 = new ImageAnimation('s31', 'images/s31.json');
			s3_3 = new ImageAnimation('s33', 'images/s33.json');
			createTxt1(); //创建文本
			//createTxt2();
			createSlider1(); //创建滑块
			//createSlider2();
			_resetall();
		//	test();
			slider1.value = 0;
			_reset(); //初始化
			//			function test() {
			//				Snap("#b1").click(_b1);
			//				Snap("#b2").click(_b2);
			//				Snap("#gou_1").click(_gou1);
			//				Snap("#gou_2").click(_gou2);
			//				Snap("#xuan_1").click(_xuan1);
			//				Snap("#xuan_2").click(_xuan2);
			//				//Snap("#playBtn").click(_run);
			//				//Snap("#resetBtn").click(_reset);
			//
			//			}

			$('#b1').on(eventType, function(e) {
				e.preventDefault(); //防止默认事件触发
				_b1();
			});
			$('#b2').on(eventType0, function(e) {
				Snap('#resetBtn2').visible = false;
				_b2();
			});

			$('#gou_1').on(eventType, function(e) {
				e.preventDefault(); //防止默认事件触发
				_gou1();
			});
			$('#gou_2').on(eventType0, function(e) {
				Snap('#resetBtn2').visible = false;
				_gou2();
			});
			$('#xuan_1').on(eventType, function(e) {
				e.preventDefault(); //防止默认事件触发
				_xuan1()
			});
			$('#xuan_2').on(eventType0, function(e) {
				Snap('#resetBtn2').visible = false;
				_xuan2()
			});

			$('#resetBtn').on(eventType, function(e) {
				e.preventDefault(); //防止默认事件触发
				Snap('#resetBtn2').visible = true;
				_reset();
			});
			$('#resetBtn').on(eventType0, function(e) {
				Snap('#resetBtn2').visible = false;
			});



			$('#playBtn').on(eventType, function(e) {
				e.preventDefault(); //防止默认事件触发
				Snap('#playBtn2').visible = true;
				if(bj3==0&&bj4==1){Snap("#I_mc").visible =true;}
				_run();
			});
			$('#playBtn').on(eventType0, function(e) {
				Snap('#playBtn2').visible = false;
			});







		}

		function _resetall() {
			Snap("#I_mc").visible = false;
			Snap("#gou_1").visible = false;
			Snap("#xuan_1").visible = true;
			Snap("#gou_2").visible = false;
			Snap("#xuan_2").visible = true;
			Snap("#magnes_2").visible = false;
			Snap("#magnes_1").visible = true;
			Snap("#circle").visible = true;
			Snap('#resetBtn2').visible = false;
			Snap('#playBtn2').visible = false;
			$('#r_b').show();
			$('#n_0').hide();
			$('#n0_2').hide();
			$('#n1_1').hide();
			$('#n1_3').hide();
			$('#n2_1').hide();
			$('#n2_3').hide();
			$('#n3_1').hide();
			$('#n3_3').hide();

			$('#s_0').hide();
			$('#s0_2').hide();
			$('#s1_1').hide();
			$('#s1_3').hide();
			$('#s2_1').hide();
			$('#s2_3').hide();
			$('#s3_1').hide();
			$('#s3_3').hide();
		}
		

		function showJt() {
			if (j == 1 && bj6 == 1 && bj7 == 1 && bj1 == 1 && bj3 == 1) {
				z = 40;
				$('#n_0').show();
				$('#n1_1').hide();
				$('#n0_2').hide();
				$('#n1_3').hide();
				$('#n2_1').hide();
				$('#n2_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				n_0.init();
				clearTimeout(tweenID);
				updateTweenn1_0();
			}
			if (j == 1 && bj6 == 1 && bj7 == 1 && bj2 == 1 && bj3 == 1) {
				z = 40;
				$('#n1_1').show();
				$('#n_0').hide();
				$('#n0_2').hide();
				$('#n1_3').hide();
				$('#n2_1').hide();
				$('#n2_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				n1_1.init();
				clearTimeout(tweenID);
				updateTweenn1_1();
			}
			if (j == 1 && bj6 == 1 && bj7 == 1 && bj1 == 1 && bj4 == 1) {
				z = 40;
				$('#n0_2').show();
				$('#n1_1').hide();
				$('#n_0').hide();
				$('#n1_3').hide();
				$('#n2_1').hide();
				$('#n2_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				n0_2.init();
				clearTimeout(tweenID);
				updateTweenn0_21();
			}
			if (j == 1 && bj6 == 1 && bj7 == 1 && bj2 == 1 && bj4 == 1) {
				z = 40;
				$('#n1_3').show();
				$('#n1_1').hide();
				$('#n0_2').hide();
				$('#n_0').hide();
				$('#n2_1').hide();
				$('#n2_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				n1_3.init();
				clearTimeout(tweenID);
				updateTweenn1_3();
			} //逆时针小箭头
			if (j == 1 && bj6 == 1 && bj8 == 1 && bj1 == 1 && bj3 == 1) {
				z = 20;
				$('#n_0').show();
				$('#n1_1').hide();
				$('#n0_2').hide();
				$('#n1_3').hide();
				$('#n2_1').hide();
				$('#n2_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				n_0.init();
				clearTimeout(tweenID);
				updateTweenn2_0();
			}
			if (j == 1 && bj6 == 1 && bj8 == 1 && bj2 == 1 && bj3 == 1) {
				z = 20;
				$('#n2_1').show();
				$('#n_0').hide();
				$('#n0_2').hide();
				$('#n2_3').hide();
				$('#n1_1').hide();
				$('#n1_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				n2_1.init();
				clearTimeout(tweenID);
				updateTweenn2_1();
			}
			if (j == 1 && bj6 == 1 && bj8 == 1 && bj1 == 1 && bj4 == 1) {
				z = 20;
				$('#n0_2').show();
				$('#n2_1').hide();
				$('#n_0').hide();
				$('#n2_3').hide();
				$('#n1_1').hide();
				$('#n1_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				n0_2.init();
				clearTimeout(tweenID);
				updateTweenn0_22();
			}
			if (j == 1 && bj6 == 1 && bj8 == 1 && bj2 == 1 && bj4 == 1) {
				z = 20;
				$('#n2_3').show();
				$('#n2_1').hide();
				$('#n0_2').hide();
				$('#n_0').hide();
				$('#n1_1').hide();
				$('#n1_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				n2_3.init();
				clearTimeout(tweenID);
				updateTweenn2_3();
			} //逆时针中箭头
			if (j == 1 && bj6 == 1 && bj9 == 1 && bj1 == 1 && bj3 == 1) {
				z = 10;
				$('#n_0').show();
				$('#n1_1').hide();
				$('#n0_2').hide();
				$('#n1_3').hide();
				$('#n2_1').hide();
				$('#n2_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				n_0.init();
				clearTimeout(tweenID);
				updateTweenn3_0();
			}
			if (j == 1 && bj6 == 1 && bj9 == 1 && bj2 == 1 && bj3 == 1) {
				z = 10;
				$('#n3_1').show();
				$('#n_0').hide();
				$('#n0_2').hide();
				$('#n3_3').hide();
				$('#n1_1').hide();
				$('#n1_3').hide();
				$('#n2_1').hide();
				$('#n2_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				n3_1.init();
				clearTimeout(tweenID);
				updateTweenn3_1();
			}
			if (j == 1 && bj6 == 1 && bj9 == 1 && bj1 == 1 && bj4 == 1) {
				z = 10;
				$('#n0_2').show();
				$('#n2_1').hide();
				$('#n_0').hide();
				$('#n2_3').hide();
				$('#n1_1').hide();
				$('#n1_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				n0_2.init();
				clearTimeout(tweenID);
				updateTweenn0_23();
			}
			if (j == 1 && bj6 == 1 && bj9 == 1 && bj2 == 1 && bj4 == 1) {
				z = 10;
				$('#n3_3').show();
				$('#n3_1').hide();
				$('#n0_2').hide();
				$('#n_0').hide();
				$('#n1_1').hide();
				$('#n1_3').hide();
				$('#n2_1').hide();
				$('#n2_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				n3_3.init();
				clearTimeout(tweenID);
				updateTweenn3_3();
			} //逆时针大箭头
			if (j == 1 && bj5 == 1 && bj7 == 1 && bj1 == 1 && bj3 == 1) {
				z = 40;
				$('#n_0').hide();
				$('#n1_1').hide();
				$('#n0_2').hide();
				$('#n1_3').hide();
				$('#n2_1').hide();
				$('#n2_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').show();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				s_0.init();
				clearTimeout(tweenID);
				updateTweens1_0();
			}
			if (j == 1 && bj5 == 1 && bj7 == 1 && bj2 == 1 && bj3 == 1) {
				z = 40;
				$('#n1_1').hide();
				$('#n_0').hide();
				$('#n0_2').hide();
				$('#n1_3').hide();
				$('#n2_1').hide();
				$('#n2_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').hide();
				$('#s1_1').show();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				s1_1.init();
				clearTimeout(tweenID);
				updateTweens1_1();
			}
			if (j == 1 && bj5 == 1 && bj7 == 1 && bj1 == 1 && bj4 == 1) {
				z = 40;
				$('#n0_2').hide();
				$('#n1_1').hide();
				$('#n_0').hide();
				$('#n1_3').hide();
				$('#n2_1').hide();
				$('#n2_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').show();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				s0_2.init();
				clearTimeout(tweenID);
				updateTweens0_21();
			}
			if (j == 1 && bj5 == 1 && bj7 == 1 && bj2 == 1 && bj4 == 1) {
				z = 40;
				$('#n1_3').hide();
				$('#n1_1').hide();
				$('#n0_2').hide();
				$('#n_0').hide();
				$('#n2_1').hide();
				$('#n2_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').show();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				s1_3.init();
				clearTimeout(tweenID);
				updateTweens1_3();
			} //顺时针小箭头
			if (j == 1 && bj5 == 1 && bj8 == 1 && bj1 == 1 && bj3 == 1) {
				z = 20;
				$('#n1_1').hide();
				$('#n0_2').hide();
				$('#n1_3').hide();
				$('#n2_1').hide();
				$('#n2_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#n_0').hide();
				$('#s_0').show();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				s_0.init();
				clearTimeout(tweenID);
				updateTweens2_0();
			}
			if (j == 1 && bj5 == 1 && bj8 == 1 && bj2 == 1 && bj3 == 1) {
				z = 20;
				$('#n2_1').hide();
				$('#n_0').hide();
				$('#n0_2').hide();
				$('#n2_3').hide();
				$('#n1_1').hide();
				$('#n1_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').show();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				s2_1.init();
				clearTimeout(tweenID);
				updateTweens2_1();
			}
			if (j == 1 && bj5 == 1 && bj8 == 1 && bj1 == 1 && bj4 == 1) {
				z = 20;
				$('#n0_2').hide();
				$('#n2_1').hide();
				$('#n_0').hide();
				$('#n2_3').hide();
				$('#n1_1').hide();
				$('#n1_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').show();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				s0_2.init();
				clearTimeout(tweenID);
				updateTweens0_22();
			}
			if (j == 1 && bj5 == 1 && bj8 == 1 && bj2 == 1 && bj4 == 1) {
				z = 20;
				$('#n2_3').hide();
				$('#n2_1').hide();
				$('#n0_2').hide();
				$('#n_0').hide();
				$('#n1_1').hide();
				$('#n1_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').show();
				$('#s3_1').hide();
				$('#s3_3').hide();
				s2_3.init();
				clearTimeout(tweenID);
				updateTweens2_3();
			} //顺时针中箭头
			if (j == 1 && bj5 == 1 && bj9 == 1 && bj1 == 1 && bj3 == 1) {
				z = 10;
				$('#n1_1').hide();
				$('#n0_2').hide();
				$('#n1_3').hide();
				$('#n2_1').hide();
				$('#n2_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#n_0').hide();
				$('#s_0').show();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				s_0.init();
				clearTimeout(tweenID);
				updateTweens3_0();
			}
			if (j == 1 && bj5 == 1 && bj9 == 1 && bj2 == 1 && bj3 == 1) {
				z = 10;
				$('#n3_1').hide();
				$('#n_0').hide();
				$('#n0_2').hide();
				$('#n3_3').hide();
				$('#n1_1').hide();
				$('#n1_3').hide();
				$('#n2_1').hide();
				$('#n2_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').show();
				$('#s3_3').hide();
				s3_1.init();
				clearTimeout(tweenID);
				updateTweens3_1();
			}
			if (j == 1 && bj5 == 1 && bj9 == 1 && bj1 == 1 && bj4 == 1) {
				z = 10;
				$('#n0_2').hide();
				$('#n2_1').hide();
				$('#n_0').hide();
				$('#n2_3').hide();
				$('#n1_1').hide();
				$('#n1_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').show();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();
				s0_2.init();
				clearTimeout(tweenID);
				updateTweens0_23();
			}
			if (j == 1 && bj5 == 1 && bj9 == 1 && bj2 == 1 && bj4 == 1) {
				z = 10;
				$('#n3_3').hide();
				$('#n3_1').hide();
				$('#n0_2').hide();
				$('#n_0').hide();
				$('#n1_1').hide();
				$('#n1_3').hide();
				$('#n2_1').hide();
				$('#n2_3').hide();
				$('#s_0').hide();
				$('#s1_1').hide();
				$('#s0_2').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').show();
				s3_3.init();
				clearTimeout(tweenID);
				updateTweens3_3();
			} //顺时针大箭头
		}

		function updateTweenn1_0() //无12
			{
				if (frame == 2 && frame0 == 1) {
					if (n_0.currentFrame < n_0.totalFrames ) {
						n_0.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweenn1_0());
							updateTweenn1_0();
						}, z);
					} 
				}
			}

		function updateTweenn2_0() //无16
			{
				if (frame == 2 && frame0 == 2) {
					if (n_0.currentFrame < n_0.totalFrames ) {
						n_0.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweenn2_0());
							updateTweenn2_0();
						}, z);
					} 
				}
			}

		function updateTweenn3_0() //无20
			{
				if (frame == 2 && frame0 == 3) {
					if (n_0.currentFrame < n_0.totalFrames ) {
						n_0.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweenn3_0());
							updateTweenn3_0();
						}, z);
					} 
				}
			}

		function updateTweenn0_21() //点叉12
			{
				if (frame == 2 && frame0 == 1 && frame2 == 1) {
					if (n0_2.currentFrame < n0_2.totalFrames ) {
						n0_2.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweenn0_21());
							updateTweenn0_21();
						}, z);
					} 
				}
			}

		function updateTweenn0_22() //点叉16
			{
				if (frame == 2 && frame0 == 2 && frame2 == 1) {
					if (n0_2.currentFrame < n0_2.totalFrames ) {
						n0_2.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweenn0_22());
							updateTweenn0_22();
						}, z);
					} 
				}
			}

		function updateTweenn0_23() //点叉20
			{
				if (frame == 2 && frame0 == 3 && frame2 == 1) {
					if (n0_2.currentFrame < n0_2.totalFrames ) {
						n0_2.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweenn0_23());
							updateTweenn0_23();
						}, z);
					} 
				}
			}

		function updateTweenn1_1() //小箭头
			{
				if (frame == 2 && frame0 == 1 && frame1 == 1) {
					if (n1_1.currentFrame < n1_1.totalFrames ) {
						n1_1.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweenn1_1());
							updateTweenn1_1();
						}, z);
					} 
				}
			}

		function updateTweenn1_3() //小箭头+点叉
			{
				if (frame == 2 && frame0 == 1 && frame1 == 1 && frame2 == 1) {
					if (n1_3.currentFrame < n1_3.totalFrames ) {
						n1_3.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweenn1_3());
							updateTweenn1_3();
						}, z);
					} 
				}
			}

		function updateTweenn2_1() //中箭头
			{
				if (frame == 2 && frame0 == 2 && frame1 == 1) {
					if (n2_1.currentFrame < n2_1.totalFrames ) {
						n2_1.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweenn2_1());
							updateTweenn2_1();
						}, z);
					} 
				}
			}

		function updateTweenn2_3() //中箭头+点叉
			{
				if (frame == 2 && frame0 == 2 && frame1 == 1 && frame2 == 1) {
					if (n2_3.currentFrame < n2_3.totalFrames ) {
						n2_3.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweenn2_3());
							updateTweenn2_3();
						}, z);
					} 
				}
			}

		function updateTweenn3_1() //大箭头
			{
				if (frame == 2 && frame0 == 3 && frame1 == 1) {
					if (n3_1.currentFrame < n3_1.totalFrames ) {
						n3_1.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweenn3_1());
							updateTweenn3_1();
						}, z);
					} 
				}
			}

		function updateTweenn3_3() //大箭头+点叉
			{
				if (frame == 2 && frame0 == 3 && frame1 == 1 && frame2 == 1) {
					if (n3_3.currentFrame < n3_3.totalFrames ) {
						n3_3.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweenn3_3());
							updateTweenn3_3();
						}, z);
					} 
				}
			}

		function updateTweens1_0() //无12
			{
				if (frame == 1 && frame0 == 1) {
					if (s_0.currentFrame < s_0.totalFrames ) {
						s_0.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweens1_0());
							updateTweens1_0();
						}, z);
					} 
				}
			}

		function updateTweens2_0() //无16
			{
				if (frame == 1 && frame0 == 2) {
					if (s_0.currentFrame < s_0.totalFrames ) {
						s_0.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweens2_0());
							updateTweens2_0();
						}, z);
					} 
				}
			}

		function updateTweens3_0() //无20
			{
				if (frame == 1 && frame0 == 3) {
					if (s_0.currentFrame < s_0.totalFrames) {
						s_0.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweens3_0());
							updateTweens3_0();
						}, z);
					} 
				}
			}

		function updateTweens0_21() //点叉12
			{
				if (frame == 1 && frame0 == 1 && frame2 == 1) {
					if (s0_2.currentFrame < s0_2.totalFrames ) {
						s0_2.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweens0_21());
							updateTweens0_21();
						}, z);
					}
				}
			}

		function updateTweens0_22() //点叉16
			{
				if (frame == 1 && frame0 == 2 && frame2 == 1) {
					if (s0_2.currentFrame < s0_2.totalFrames ) {
						s0_2.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweens0_22());
							updateTweens0_22();
						}, z);
					} 
				}
			}

		function updateTweens0_23() //点叉20
			{
				if (frame == 1 && frame0 == 3 && frame2 == 1) {
					if (s0_2.currentFrame < s0_2.totalFrames ) {
						s0_2.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweens0_23());
							updateTweens0_23();
						}, z);
					} 
				}
			}

		function updateTweens1_1() //小箭头
			{
				if (frame == 1 && frame0 == 1 && frame1 == 1) {
					if (s1_1.currentFrame < s1_1.totalFrames ) {
						s1_1.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweens1_1());
							updateTweens1_1();
						}, z);
					} 
				}
			}

		function updateTweens1_3() //小箭头+点叉
			{
				if (frame == 1 && frame0 == 1 && frame1 == 1 && frame2 == 1) {
					if (s1_3.currentFrame < s1_3.totalFrames ) {
						s1_3.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweens1_3());
							updateTweens1_3();
						}, z);
					} 
				}
			}

		function updateTweens2_1() //中箭头
			{
				if (frame == 1 && frame0 == 2 && frame1 == 1) {
					if (s2_1.currentFrame < s2_1.totalFrames ) {
						s2_1.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweens2_1());
							updateTweens2_1();
						}, z);
					} 
				}
			}

		function updateTweens2_3() //中箭头+点叉
			{
				if (frame == 1 && frame0 == 2 && frame1 == 1 && frame2 == 1) {
					if (s2_3.currentFrame < s2_3.totalFrames ) {
						s2_3.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweens2_1());
							updateTweens2_3();
						}, z);
					} 
				}
			}

		function updateTweens3_1() //大箭头
			{
				if (frame == 1 && frame0 == 3 && frame1 == 1) {
					if (s3_1.currentFrame < s3_1.totalFrames ) {
						s3_1.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweens3_1());
							updateTweens3_1();
						}, z);
					}
				}
			}

		function updateTweens3_3() //大箭头+点叉
			{
				if (frame == 1 && frame0 == 3 && frame1 == 1 && frame2 == 1) {
					if (s3_3.currentFrame < s3_3.totalFrames) {
						s3_3.gotoNextFrame();
						tweenID = setTimeout(function() {
							//requestID = requestAnimationFrame(updateTweens3_3());
							updateTweens3_3();
						}, z);
					} 
				}
			}

		function createTxt1() {
			txt1 = stage.text(335, 28, "12");
			txt1.attr({
				"font-size": "18px",
			});
		}

		function createSlider1() {
			slider1 = stage.slider("#014689", 70, 2);
			slider1.attr({
				transform: "matrix(1,0,0,1,335,55)"
			})
			slider1.onchange = function() {
				refreshFire();
			}
		}

		function refreshFire() {
			if (slider1.value == 0) {
				txt1.attr({
					text: 12
				});
				bj7 = 1;
				bj8 = 0;
				bj9 = 0;
				frame0 = 1;
				showJt();
			}
			if (slider1.value == 1) {
				txt1.attr({
					text: 16
				});
				bj7 = 0;
				bj8 = 1;
				bj9 = 0;
				frame0 = 2;
				showJt();
			}
			if (slider1.value == 2) {
				txt1.attr({
					text: 20
				});
				bj7 = 0;
				bj8 = 0;
				bj9 = 1;
				frame0 = 3;
				showJt();
			}
		}

		function _b1() { //标记
			frame = 1;
			Snap("#magnes_2").visible = false;
			Snap("#magnes_1").visible = true;
			bj5 = 1;
			bj6 = 0;
			showJt();
		}

		function _b2()

		{
			//alert('1111');
			frame = 2;
			Snap("#magnes_1").visible = false;
			Snap("#magnes_2").visible = true;
			bj5 = 0;
			bj6 = 1;
			showJt();
		}

		function _xuan1() { //标记 12
			frame1 = 1;
			Snap("#xuan_1").visible = false;
			Snap("#gou_1").visible = true;
			bj1 = 0;
			bj2 = 1;
			showJt();
			//标记 bj1 bj2
		}

		function _gou1() {
			frame1 = 2;
			Snap("#gou_1").visible = false;
			Snap("#xuan_1").visible = true;
			bj1 = 1;
			bj2 = 0;
			showJt();
			//加标记bj1 bj2
			//调用箭头 
		}

		function _xuan2() { //标记34
			//alert("444444");
			frame2 = 1;
			Snap("#xuan_2").visible = false;
			Snap("#gou_2").visible = true;
			if (j == 1) {
				Snap("#I_mc").visible = true;
			}
			bj3 = 0;
			bj4 = 1;
			showJt();
		}

		function _gou2() {
			frame2 = 2;
			Snap("#gou_2").visible = false;
			Snap("#xuan_2").visible = true;
			if (j == 1) {
				Snap("#I_mc").visible = false;
			}
			bj3 = 1;
			bj4 = 0;
			showJt();
		}

		function _run() {
			Snap("#circle").visible = false;
			j = 1;
			showJt();
		}



		function _reset() //重置
			{
				play = false;
				slider1.value = 0;
				refreshFire();
				Snap("#gou_1").visible = false;
				Snap("#xuan_1").visible = true;
				Snap("#gou_2").visible = false;
				Snap("#xuan_2").visible = true;
				Snap("#magnes_2").visible = false;
				Snap("#magnes_1").visible = true;
				Snap("#I_mc").visible = false;
				Snap("#circle").visible = true;
				j = 0;
				frame = 1;
				frame0 = 1;
				frame1 = 2;
				frame2 = 2;
				bj1 = 1;
				bj2 = 0;

				bj3 = 1;
				bj4 = 0;

				bj5 = 1;
				bj6 = 0;

				bj7 = 1;
				bj8 = 0;
				bj9 = 0;
				$('#r_b').show();
				$('#n_0').hide();
				$('#n0_2').hide();
				$('#n1_1').hide();
				$('#n1_3').hide();
				$('#n2_1').hide();
				$('#n2_3').hide();
				$('#n3_1').hide();
				$('#n3_3').hide();

				$('#s_0').hide();
				$('#s0_2').hide();
				$('#s1_1').hide();
				$('#s1_3').hide();
				$('#s2_1').hide();
				$('#s2_3').hide();
				$('#s3_1').hide();
				$('#s3_3').hide();

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