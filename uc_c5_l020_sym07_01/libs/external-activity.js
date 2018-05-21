(
	function(move) {
		var InteractiveActivity = function(_api) {
			api = _api;
			snd_dianji = loadSound('sound/didi.mp3');
			snd_dpl = loadSound('sound/streamsound.mp3');
			init();
		}
		var api;
		var p = InteractiveActivity.prototype;
		var navi = navigator.userAgent.toLowerCase();
		var touchDevice = /ipad|iphone|android|windows phone|blackberry/i.test(navi);
		var eventType = touchDevice ? 'touchend' : 'mouseup';
		var eventType0 = touchDevice ? 'touchend' : 'mouseup';
		var a=[];
		var stage;
		var play = false;
		var svg, mc, cz1, cz2, cz3, cz4, cy1, cy2, cy3, cy4, dz1, dz2, dz3, dz4, dy1, dy2, dy3, dy4;
		var mc = document.getElementById("container");
		var snd_dianji, snd_dpl;
		init();
		function isIE() { //ie?  
			if (!!window.ActiveXObject || "ActiveXObject" in window)
				return true;
			else
				return false;
		}

		function init() {

			Snap.load("images/uc_c5_l020_sym07_01.svg", function(f) {

				document.getElementById("container").appendChild(f.node);
				f.node.id = "svg";
				stage = Snap("#svg");
				svg = f.node;
				mc.appendChild(svg);

				Snap('#si').drag();
				cz1 = svg.getElementById("si");
				Snap('#si').attr({
					transform: "matrix(0.75,0,0,0.75,77,45)"
				});

				Snap('#s').drag();
				cz2 = svg.getElementById("s");
				Snap('#s').attr({
					transform: "matrix(0.75,0,0,0.75,73,96)"
				});

				Snap('#cl').drag();
				cz3 = svg.getElementById("cl");
				Snap('#cl').attr({
					transform: "matrix(0.6,0,0,0.6,69,199)"
				});

				Snap('#al').drag();
				cz4 = svg.getElementById("al");
				Snap('#al').attr({
					transform: "matrix(0.75,0,0,0.75,69,267)"
				});

				Snap('#na').drag();
				cy1 = svg.getElementById("na");
				Snap('#na').attr({
					transform: "matrix(0.75,0,0,0.75,500,33)"
				});

				Snap('#ar').drag();
				cy2 = svg.getElementById("ar");
				Snap('#ar').attr({
					transform: "matrix(0.6,0,0,0.6,504,131)"
				});

				Snap('#p').drag();
				cy3 = svg.getElementById("p");
				Snap('#p').attr({
					transform: "matrix(0.75,0,0,0.75,506,183)"
				});

				Snap('#mg').drag();
				cy4 = svg.getElementById("mg");
				Snap('#mg').attr({
					transform: "matrix(0.75,0,0,0.75,500,250)"
				});



				Snap('#si0').drag();
				dz1 = svg.getElementById("si0");
				Snap('#si0').attr({
					transform: "matrix(0.75,0,0,0.75,280,240)"
				});

				Snap('#s0').drag();
				dz2 = svg.getElementById("s0");
				Snap('#s0').attr({
					transform: "matrix(0.75,0,0,0.75,280,240)"
				});

				Snap('#cl0').drag();
				dz3 = svg.getElementById("cl0");
				Snap('#cl0').attr({
					transform: "matrix(0.6,0,0,0.6,280,240)"
				});

				Snap('#al0').drag();
				dz4 = svg.getElementById("al0");
				Snap('#al0').attr({
					transform: "matrix(0.75,0,0,0.75,280,240)"
				});

				Snap('#na0').drag();
				dy1 = svg.getElementById("na0");
				Snap('#na0').attr({
					transform: "matrix(0.75,0,0,0.75,280,240)"
				});

				Snap('#ar0').drag();
				dy2 = svg.getElementById("ar0");
				Snap('#ar0').attr({
					transform: "matrix(0.6,0,0,0.6,280,240)"
				});

				Snap('#p0').drag();
				dy3 = svg.getElementById("p0");
				Snap('#p0').attr({
					transform: "matrix(0.75,0,0,0.75,280,240)"
				});

				Snap('#mg0').drag();
				dy4 = svg.getElementById("mg0");
				Snap('#mg0').attr({
					transform: "matrix(0.75,0,0,0.75,280,240)"
				});

				loadSvg();
			});

		}

		function loadSvg() {
			loadsi();
			loadsi0();
			loads();
			loads0();
			loadcl();
			loadcl0();
			loadal();
			loadal0();
			loadna();
			loadna0();
			loadar();
			loadar0();
			loadp();
			loadp0();
			loadmg();
			loadmg0();
//			_dPl();
			start();
			//test();
		}

		function loadSound(url) //加载声音
			{
				var snd = null;
				var callback = {
					onSoundCreated: function(sound, url) {
						snd = sound;
					}
				}
				var onEndCallback = {
					onEnd: function() {}
				};
				api.initSound(url, callback, onEndCallback);
				return snd;
			}

		function stopSound() {
			snd_dianji.stop();
			snd_dpl.stop();
		}

		function start() {
			base = Snap("#base");
			Snap('#dc_l').visible = false;
			Snap('#dc_d').visible = true;
			Snap('#dp_hl').visible = false;
			Snap('#dp_l').visible = false;
			Snap('#dp_d').visible = true;
			Snap('#jz').visible = false;

			Snap('#si').visible = true;
			Snap('#s').visible = true;
			Snap('#cl').visible = true;
			Snap('#al').visible = true;
			Snap('#na').visible = true;
			Snap('#ar').visible = true;
			Snap('#p').visible = true;
			Snap('#mg').visible = true;
			Snap('#si0').visible = false;
			Snap('#s0').visible = false;
			Snap('#cl0').visible = false;
			Snap('#al0').visible = false;
			Snap('#na0').visible = false;
			Snap('#ar0').visible = false;
			Snap('#p0').visible = false;
			Snap('#mg0').visible = false;

		}

		function loadsi() {
			$('#si').on(eventType, function(e) {
				var mx = cz1.getAttribute("transform");
				var splitchar = isIE() ? " " : ",";
				var	txtArr = mx.split(splitchar);
				var	str0 = mx.split(splitchar)[5].split(")")[0];	
				
				var xx = parseFloat(txtArr[4]);
				var yy = parseFloat(str0);
				if (xx > 240 && xx < 320 && yy > 200 && yy < 280) {
					Snap('#si0').visible = true;
					Snap('#s0').visible = false;
					Snap('#cl0').visible = false;
					Snap('#al0').visible = false;
					Snap('#na0').visible = false;
					Snap('#ar0').visible = false;
					Snap('#p0').visible = false;
					Snap('#mg0').visible = false;
					Snap('#si').visible = false;
					Snap('#s').visible = true;
					Snap('#cl').visible = true;
					Snap('#al').visible = true;
					Snap('#na').visible = true;
					Snap('#ar').visible = true;
					Snap('#p').visible = true;
					Snap('#mg').visible = true;
					Snap('#si').attr({
						transform: "matrix(0.75,0,0,0.75,77,45)"
					});
					Snap('#s').attr({
						transform: "matrix(0.75,0,0,0.75,73,96)"
					});
					Snap('#cl').attr({
						transform: "matrix(0.6,0,0,0.6,69,199)"
					});
					Snap('#al').attr({
						transform: "matrix(0.75,0,0,0.75,69,267)"
					});
					Snap('#na').attr({
						transform: "matrix(0.75,0,0,0.75,500,33)"
					});
					Snap('#ar').attr({
						transform: "matrix(0.6,0,0,0.6,504,131)"
					});
					Snap('#p').attr({
						transform: "matrix(0.75,0,0,0.75,506,183)"
					});
					Snap('#mg').attr({
						transform: "matrix(0.75,0,0,0.75,500,250)"
					});
					Snap('#dc_l').visible = true;
					Snap('#dp_l').visible = true;
					Snap('#dc_d').visible = false;
					Snap('#dp_hl').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[0]=1;
//					stopSound();
//					snd_dpl.playLooped();
				} else {
					Snap('#si').attr({
						transform: "matrix(0.75,0,0,0.75,77,45)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[0]=0;
//					stopSound();
				}
			});
		}

		function loadsi0() {
			$('#si0').on(eventType, function(e) {
				var mx = dz1.getAttribute("transform");
				var splitchar = isIE() ? " " : ",";
				var	txtArr = mx.split(splitchar);
				var	str0 = mx.split(splitchar)[5].split(")")[0];	
				var xx = parseFloat(txtArr[4]);
				var yy = parseFloat(str0);
				if (xx > 240 && xx < 320 && yy > 200 && yy < 280) {
					Snap('#si0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#dc_l').visible = true;
					Snap('#dp_l').visible = true;
					Snap('#dc_d').visible = false;
					Snap('#dp_hl').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[0]=1;
//					stopSound();
//					snd_dpl.playLooped();
				} else {
					Snap('#si').visible = true;
					Snap('#si0').visible = false;
					Snap('#si0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#s0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#cl0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#al0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#na0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#ar0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#p0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#mg0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[0]=0;
//					stopSound();
				}
			});
		}

		function loads() {
			$('#s').on(eventType, function(e) {
				var mx = cz2.getAttribute("transform");
				var splitchar = isIE() ? " " : ",";
				var	txtArr = mx.split(splitchar);
				var	str0 = mx.split(splitchar)[5].split(")")[0];	
				var xx = parseFloat(txtArr[4]);
				var yy = parseFloat(str0);
				if (xx > 240 && xx < 320 && yy > 200 && yy < 280) {
					Snap('#s0').visible = true;
					Snap('#si0').visible = false;
					Snap('#cl0').visible = false;
					Snap('#al0').visible = false;
					Snap('#na0').visible = false;
					Snap('#ar0').visible = false;
					Snap('#p0').visible = false;
					Snap('#mg0').visible = false;
					Snap('#s').visible = false;
					Snap('#si').visible = true;
					Snap('#cl').visible = true;
					Snap('#al').visible = true;
					Snap('#na').visible = true;
					Snap('#ar').visible = true;
					Snap('#p').visible = true;
					Snap('#mg').visible = true;
					Snap('#si').attr({
						transform: "matrix(0.75,0,0,0.75,77,45)"
					});
					Snap('#s').attr({
						transform: "matrix(0.75,0,0,0.75,73,96)"
					});
					Snap('#cl').attr({
						transform: "matrix(0.6,0,0,0.6,69,199)"
					});
					Snap('#al').attr({
						transform: "matrix(0.75,0,0,0.75,69,267)"
					});
					Snap('#na').attr({
						transform: "matrix(0.75,0,0,0.75,500,33)"
					});
					Snap('#ar').attr({
						transform: "matrix(0.6,0,0,0.6,504,131)"
					});
					Snap('#p').attr({
						transform: "matrix(0.75,0,0,0.75,506,183)"
					});
					Snap('#mg').attr({
						transform: "matrix(0.75,0,0,0.75,500,250)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[1]=0;
//					stopSound();
				} else {
					Snap('#s').attr({
						transform: "matrix(0.75,0,0,0.75,73,96)"
					});
					//				Snap('#dc_l').visible = false;
					//				Snap('#dc_d').visible = true;
					//				Snap('#dp_hl').visible = false;
					//				Snap('#dp_l').visible = false;
					//				Snap('#dp_d').visible = true;
					//				Snap('#jz').visible = false;
//					stopSound();
					a[1]=0;
				}
			});
		}

		function loads0() {
			$('#s0').on(eventType, function(e) {
				var mx = dz2.getAttribute("transform");
				var splitchar = isIE() ? " " : ",";
				var	txtArr = mx.split(splitchar);
				var	str0 = mx.split(splitchar)[5].split(")")[0];	
				var xx = parseFloat(txtArr[4]);
				var yy = parseFloat(str0);
				if (xx > 240 && xx < 320 && yy > 200 && yy < 280) {
					Snap('#s0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[1]=0;
//					stopSound();
				} else {
					Snap('#s').visible = true;
					Snap('#s0').visible = false;
					Snap('#si0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#s0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#cl0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#al0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#na0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#ar0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#p0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#mg0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[1]=0;
//					stopSound();
				}
			});
		}

		function loadcl() {
			$('#cl').on(eventType, function(e) {
				var mx = cz3.getAttribute("transform");
				var splitchar = isIE() ? " " : ",";
				var	txtArr = mx.split(splitchar);
				var	str0 = mx.split(splitchar)[5].split(")")[0];	
				var xx = parseFloat(txtArr[4]);
				var yy = parseFloat(str0);
				if (xx > 240 && xx < 320 && yy > 200 && yy < 280) {
					Snap('#si').visible = true;
					Snap('#s').visible = true;
					Snap('#cl').visible = false;
					Snap('#al').visible = true;
					Snap('#na').visible = true;
					Snap('#ar').visible = true;
					Snap('#p').visible = true;
					Snap('#mg').visible = true;
					Snap('#si0').visible = false;
					Snap('#s0').visible = false;
					Snap('#cl0').visible = true;
					Snap('#al0').visible = false;
					Snap('#na0').visible = false;
					Snap('#ar0').visible = false;
					Snap('#p0').visible = false;
					Snap('#mg0').visible = false;
					Snap('#si').attr({
						transform: "matrix(0.75,0,0,0.75,77,45)"
					});
					Snap('#s').attr({
						transform: "matrix(0.75,0,0,0.75,73,96)"
					});
					Snap('#cl').attr({
						transform: "matrix(0.6,0,0,0.6,69,199)"
					});
					Snap('#al').attr({
						transform: "matrix(0.75,0,0,0.75,69,267)"
					});
					Snap('#na').attr({
						transform: "matrix(0.75,0,0,0.75,500,33)"
					});
					Snap('#ar').attr({
						transform: "matrix(0.6,0,0,0.6,504,131)"
					});
					Snap('#p').attr({
						transform: "matrix(0.75,0,0,0.75,506,183)"
					});
					Snap('#mg').attr({
						transform: "matrix(0.75,0,0,0.75,500,250)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[2]=0;
//					stopSound();
				} else {
					Snap('#cl').attr({
						transform: "matrix(0.6,0,0,0.6,69,199)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[2]=0;
//					stopSound();
				}
			});
		}

		function loadcl0() {
			$('#cl0').on(eventType, function(e) {
				var mx = dz3.getAttribute("transform");
				var splitchar = isIE() ? " " : ",";
				var	txtArr = mx.split(splitchar);
				var	str0 = mx.split(splitchar)[5].split(")")[0];	
				var xx = parseFloat(txtArr[4]);
				var yy = parseFloat(str0);
				if (xx > 240 && xx < 320 && yy > 200 && yy < 280) {
					Snap('#cl0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[2]=0;
//					stopSound();
				} else {
					Snap('#cl').visible = true;
					Snap('#cl0').visible = false;
					Snap('#si0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#s0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#cl0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#al0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#na0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#ar0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#p0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#mg0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[2]=0;
//					stopSound();
				}
			});
		}

		function loadal() {
			$('#al').on(eventType, function(e) {
				var mx = cz4.getAttribute("transform");
						var splitchar = isIE() ? " " : ",";
				var	txtArr = mx.split(splitchar);
				var	str0 = mx.split(splitchar)[5].split(")")[0];	
				var xx = parseFloat(txtArr[4]);
				var yy = parseFloat(str0);
				if (xx > 240 && xx < 320 && yy > 200 && yy < 280) {
					Snap('#si').visible = true;
					Snap('#s').visible = true;
					Snap('#cl').visible = true;
					Snap('#al').visible = false;
					Snap('#na').visible = true;
					Snap('#ar').visible = true;
					Snap('#p').visible = true;
					Snap('#mg').visible = true;
					Snap('#si0').visible = false;
					Snap('#s0').visible = false;
					Snap('#cl0').visible = false;
					Snap('#al0').visible = true;
					Snap('#na0').visible = false;
					Snap('#ar0').visible = false;
					Snap('#p0').visible = false;
					Snap('#mg0').visible = false;
					Snap('#si').attr({
						transform: "matrix(0.75,0,0,0.75,77,45)"
					});
					Snap('#s').attr({
						transform: "matrix(0.75,0,0,0.75,73,96)"
					});
					Snap('#cl').attr({
						transform: "matrix(0.6,0,0,0.6,69,199)"
					});
					Snap('#al').attr({
						transform: "matrix(0.75,0,0,0.75,69,267)"
					});
					Snap('#na').attr({
						transform: "matrix(0.75,0,0,0.75,500,33)"
					});
					Snap('#ar').attr({
						transform: "matrix(0.6,0,0,0.6,504,131)"
					});
					Snap('#p').attr({
						transform: "matrix(0.75,0,0,0.75,506,183)"
					});
					Snap('#mg').attr({
						transform: "matrix(0.75,0,0,0.75,500,250)"
					});
					Snap('#dc_l').visible = true;
					Snap('#dp_l').visible = true;
					Snap('#dc_d').visible = false;
					Snap('#dp_hl').visible = true;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[3]=1;
//					stopSound();
//					snd_dpl.playLooped();
				} else {
					Snap('#al').attr({
						transform: "matrix(0.75,0,0,0.75,69,267)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[3]=0;
//					stopSound();
				}
			});
		}

		function loadal0() {
			$('#al0').on(eventType, function(e) {
				var mx = dz4.getAttribute("transform");
								var splitchar = isIE() ? " " : ",";
				var	txtArr = mx.split(splitchar);
				var	str0 = mx.split(splitchar)[5].split(")")[0];	
				var xx = parseFloat(txtArr[4]);
				var yy = parseFloat(str0);
				if (xx > 240 && xx < 320 && yy > 200 && yy < 280) {
					Snap('#al0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#dc_l').visible = true;
					Snap('#dp_l').visible = true;
					Snap('#dc_d').visible = false;
					Snap('#dp_hl').visible = true;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[3]=1;
//					stopSound();
//					snd_dpl.playLooped();
				} else {
					Snap('#al').visible = true;
					Snap('#al0').visible = false;
					Snap('#si0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#s0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#cl0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#al0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#na0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#ar0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#p0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#mg0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[3]=0;
//					stopSound();
				}
			});
		}

		function loadna() {
			$('#na').on(eventType, function(e) {
				var mx = cy1.getAttribute("transform");
				var splitchar = isIE() ? " " : ",";
				var	txtArr = mx.split(splitchar);
				var	str0 = mx.split(splitchar)[5].split(")")[0];	
				var xx = parseFloat(txtArr[4]);
				var yy = parseFloat(str0);
				if (xx > 240 && xx < 320 && yy > 200 && yy < 280) {
					Snap('#si').visible = true;
					Snap('#s').visible = true;
					Snap('#cl').visible = true;
					Snap('#al').visible = true;
					Snap('#na').visible = false;
					Snap('#ar').visible = true;
					Snap('#p').visible = true;
					Snap('#mg').visible = true;
					Snap('#si0').visible = false;
					Snap('#s0').visible = false;
					Snap('#cl0').visible = false;
					Snap('#al0').visible = false;
					Snap('#na0').visible = true;
					Snap('#ar0').visible = false;
					Snap('#p0').visible = false;
					Snap('#mg0').visible = false;
					Snap('#si').attr({
						transform: "matrix(0.75,0,0,0.75,77,45)"
					});
					Snap('#s').attr({
						transform: "matrix(0.75,0,0,0.75,73,96)"
					});
					Snap('#cl').attr({
						transform: "matrix(0.6,0,0,0.6,69,199)"
					});
					Snap('#al').attr({
						transform: "matrix(0.75,0,0,0.75,69,267)"
					});
					Snap('#na').attr({
						transform: "matrix(0.75,0,0,0.75,500,33)"
					});
					Snap('#ar').attr({
						transform: "matrix(0.6,0,0,0.6,504,131)"
					});
					Snap('#p').attr({
						transform: "matrix(0.75,0,0,0.75,506,183)"
					});
					Snap('#mg').attr({
						transform: "matrix(0.75,0,0,0.75,500,250)"
					});
					Snap('#dc_l').visible = true;
					Snap('#dp_l').visible = true;
					Snap('#dc_d').visible = false;
					Snap('#dp_hl').visible = true;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = true;
					a[4]=1;
//					stopSound();
//					snd_dpl.playLooped();
				} else {
					Snap('#na').attr({
						transform: "matrix(0.75,0,0,0.75,500,33)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[4]=0;
//					stopSound();
				}
			});
		}

		function loadna0() {
			$('#na0').on(eventType, function(e) {
				var mx = dy1.getAttribute("transform");
							var splitchar = isIE() ? " " : ",";
				var	txtArr = mx.split(splitchar);
				var	str0 = mx.split(splitchar)[5].split(")")[0];	
				var xx = parseFloat(txtArr[4]);
				var yy = parseFloat(str0);
				if (xx > 240 && xx < 320 && yy > 200 && yy < 280) {
					Snap('#na0').attr({
						transform: "matrix(0.75,0,0,0.75,280,250)"
					});
					Snap('#dc_l').visible = true;
					Snap('#dp_l').visible = true;
					Snap('#dc_d').visible = false;
					Snap('#dp_hl').visible = true;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = true;
					a[4]=1;
//					stopSound();
//					snd_dpl.playLooped();
				} else {
					Snap('#na').visible = true;
					Snap('#na0').visible = false;
					Snap('#si0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#s0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#cl0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#al0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#na0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#ar0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#p0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#mg0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[4]=0;
//					stopSound();
				}
			});
		}

		function loadar() {
			$('#ar').on(eventType, function(e) {
				var mx = cy2.getAttribute("transform");
								var splitchar = isIE() ? " " : ",";
				var	txtArr = mx.split(splitchar);
				var	str0 = mx.split(splitchar)[5].split(")")[0];	
				var xx = parseFloat(txtArr[4]);
				var yy = parseFloat(str0);
				if (xx > 240 && xx < 320 && yy > 200 && yy < 280) {
					Snap('#si').visible = true;
					Snap('#s').visible = true;
					Snap('#cl').visible = true;
					Snap('#al').visible = true;
					Snap('#na').visible = true;
					Snap('#ar').visible = false;
					Snap('#p').visible = true;
					Snap('#mg').visible = true;
					Snap('#si0').visible = false;
					Snap('#s0').visible = false;
					Snap('#cl0').visible = false;
					Snap('#al0').visible = false;
					Snap('#na0').visible = false;
					Snap('#ar0').visible = true;
					Snap('#p0').visible = false;
					Snap('#mg0').visible = false;
					
					Snap('#si').attr({
						transform: "matrix(0.75,0,0,0.75,77,45)"
					});
					Snap('#s').attr({
						transform: "matrix(0.75,0,0,0.75,73,96)"
					});
					Snap('#cl').attr({
						transform: "matrix(0.6,0,0,0.6,69,199)"
					});
					Snap('#al').attr({
						transform: "matrix(0.75,0,0,0.75,69,267)"
					});
					Snap('#na').attr({
						transform: "matrix(0.75,0,0,0.75,500,33)"
					});
					Snap('#ar').attr({
						transform: "matrix(0.6,0,0,0.6,504,131)"
					});
					Snap('#p').attr({
						transform: "matrix(0.75,0,0,0.75,506,183)"
					});
					Snap('#mg').attr({
						transform: "matrix(0.75,0,0,0.75,500,250)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[5]=0;
//					stopSound();
				} else {
					Snap('#ar').attr({
						transform: "matrix(0.6,0,0,0.6,504,131)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[5]=0;
//					stopSound();
				}
			});
		}

		function loadar0() {
			$('#ar0').on(eventType, function(e) {
				var mx = dy2.getAttribute("transform");
							var splitchar = isIE() ? " " : ",";
				var	txtArr = mx.split(splitchar);
				var	str0 = mx.split(splitchar)[5].split(")")[0];	
				var xx = parseFloat(txtArr[4]);
				var yy = parseFloat(str0);
				if (xx > 240 && xx < 320 && yy > 200 && yy < 280) {
					Snap('#ar0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[5]=0;
//					stopSound();
				} else {
					Snap('#ar').visible = true;
					Snap('#ar0').visible = false;
					Snap('#si0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#s0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#cl0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#al0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#na0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#ar0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#p0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#mg0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[5]=0;
//					stopSound();
				}
			});
		}

		function loadp() {
			$('#p').on(eventType, function(e) {
				var mx = cy3.getAttribute("transform");
								var splitchar = isIE() ? " " : ",";
				var	txtArr = mx.split(splitchar);
				var	str0 = mx.split(splitchar)[5].split(")")[0];	
				var xx = parseFloat(txtArr[4]);
				var yy = parseFloat(str0);
				if (xx > 240 && xx < 320 && yy > 200 && yy < 280) {
					Snap('#si').visible = true;
					Snap('#s').visible = true;
					Snap('#cl').visible = true;
					Snap('#al').visible = true;
					Snap('#na').visible = true;
					Snap('#ar').visible = true;
					Snap('#p').visible = false;
					Snap('#mg').visible = true;
					Snap('#si0').visible = false;
					Snap('#s0').visible = false;
					Snap('#cl0').visible = false;
					Snap('#al0').visible = false;
					Snap('#na0').visible = false;
					Snap('#ar0').visible = false;
					Snap('#p0').visible = true;
					Snap('#mg0').visible = false;
					Snap('#si').attr({
						transform: "matrix(0.75,0,0,0.75,77,45)"
					});
					Snap('#s').attr({
						transform: "matrix(0.75,0,0,0.75,73,96)"
					});
					Snap('#cl').attr({
						transform: "matrix(0.6,0,0,0.6,69,199)"
					});
					Snap('#al').attr({
						transform: "matrix(0.75,0,0,0.75,69,267)"
					});
					Snap('#na').attr({
						transform: "matrix(0.75,0,0,0.75,500,33)"
					});
					Snap('#ar').attr({
						transform: "matrix(0.6,0,0,0.6,504,131)"
					});
					Snap('#p').attr({
						transform: "matrix(0.75,0,0,0.75,506,183)"
					});
					Snap('#mg').attr({
						transform: "matrix(0.75,0,0,0.75,500,250)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = true;
					a[6]=0;
//					stopSound();
				} else {
					Snap('#p').attr({
						transform: "matrix(0.75,0,0,0.75,506,183)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[6]=0;
//					stopSound();
				}
			});
		}

		function loadp0() {
			$('#p0').on(eventType, function(e) {
				var mx = dy3.getAttribute("transform");
								var splitchar = isIE() ? " " : ",";
				var	txtArr = mx.split(splitchar);
				var	str0 = mx.split(splitchar)[5].split(")")[0];	
				var xx = parseFloat(txtArr[4]);
				var yy = parseFloat(str0);
				if (xx > 240 && xx < 320 && yy > 200 && yy < 280) {
					Snap('#p0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = true;
					a[6]=0;
//					stopSound();
				} else {
					Snap('#p').visible = true;
					Snap('#p0').visible = false;
					Snap('#si0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#s0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#cl0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#al0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#na0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#ar0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#p0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#mg0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[6]=0;
//					stopSound();
				}
			});
		}

		function loadmg() {
			$('#mg').on(eventType, function(e) {
				var mx = cy4.getAttribute("transform");
								var splitchar = isIE() ? " " : ",";
				var	txtArr = mx.split(splitchar);
				var	str0 = mx.split(splitchar)[5].split(")")[0];	
				var xx = parseFloat(txtArr[4]);
				var yy = parseFloat(str0);
				if (xx > 200 && xx < 400 && yy > 160 && yy < 320) {
					Snap('#si').visible = true;
					Snap('#s').visible = true;
					Snap('#cl').visible = true;
					Snap('#al').visible = true;
					Snap('#na').visible = true;
					Snap('#ar').visible = true;
					Snap('#p').visible = true;
					Snap('#mg').visible = false;
					Snap('#si0').visible = false;
					Snap('#s0').visible = false;
					Snap('#cl0').visible = false;
					Snap('#al0').visible = false;
					Snap('#na0').visible = false;
					Snap('#ar0').visible = false;
					Snap('#p0').visible = false;
					Snap('#mg0').visible = true;
					Snap('#si').attr({
						transform: "matrix(0.75,0,0,0.75,77,45)"
					});
					Snap('#s').attr({
						transform: "matrix(0.75,0,0,0.75,73,96)"
					});
					Snap('#cl').attr({
						transform: "matrix(0.6,0,0,0.6,69,199)"
					});
					Snap('#al').attr({
						transform: "matrix(0.75,0,0,0.75,69,267)"
					});
					Snap('#na').attr({
						transform: "matrix(0.75,0,0,0.75,500,33)"
					});
					Snap('#ar').attr({
						transform: "matrix(0.6,0,0,0.6,504,131)"
					});
					Snap('#p').attr({
						transform: "matrix(0.75,0,0,0.75,506,183)"
					});
					Snap('#mg').attr({
						transform: "matrix(0.75,0,0,0.75,500,250)"
					});
					Snap('#dc_l').visible = true;
					Snap('#dp_l').visible = true;
					Snap('#dc_d').visible = false;
					Snap('#dp_hl').visible = true;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = true;
					a[7]=1;
//					stopSound();
//					snd_dpl.playLooped();
				} else {
					Snap('#mg').attr({
						transform: "matrix(0.75,0,0,0.75,500,250)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[7]=0;
//					stopSound();
				}
			});
		}

		function loadmg0() {
			$('#mg0').on(eventType, function(e) {
				var mx = dy4.getAttribute("transform");
								var splitchar = isIE() ? " " : ",";
				var	txtArr = mx.split(splitchar);
				var	str0 = mx.split(splitchar)[5].split(")")[0];	
				var xx = parseFloat(txtArr[4]);
				var yy = parseFloat(str0);
				if (xx > 200 && xx < 400 && yy > 160 && yy < 320) {
					Snap('#mg0').attr({
						transform: "matrix(0.75,0,0,0.75,280,250)"
					});
					Snap('#dc_l').visible = true;
					Snap('#dp_l').visible = true;
					Snap('#dc_d').visible = false;
					Snap('#dp_hl').visible = true;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = true;
					a[7]=1;
//					stopSound();
//					snd_dpl.playLooped();
				} else {
					Snap('#mg').visible = true;
					Snap('#mg0').visible = false;
					Snap('#si0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#s0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#cl0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#al0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#na0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#ar0').attr({
						transform: "matrix(0.6,0,0,0.6,280,240)"
					});
					Snap('#p0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#mg0').attr({
						transform: "matrix(0.75,0,0,0.75,280,240)"
					});
					Snap('#dc_l').visible = false;
					Snap('#dc_d').visible = true;
					Snap('#dp_hl').visible = false;
					Snap('#dp_l').visible = false;
					Snap('#dp_d').visible = true;
					Snap('#jz').visible = false;
					a[7]=0;
//					stopSound();
				}
			});
		}
//function _dPl(){
//	if(a[]==1){
//		snd_dpl.playLooped();
//	}
//	else{
//		stopSound();
//	}
//}
		function _didi() {
				stopSound();
				snd_dianji.play();
			}
			//		function test() {
			//			Snap("#si").mousedown(_didi);
			//			Snap("#s").click(_didi);
			//			Snap("#cl").click(_didi);
			//			Snap("#al").click(_didi);
			//			Snap("#na").click(_didi);
			//			Snap("#ar").click(_didi);
			//			Snap("#p").click(_didi);
			//			Snap("#mg").click(_didi);
			//			
			//			Snap("#si0").click(_didi);
			//			Snap("#s0").click(_didi);
			//			Snap("#cl0").click(_didi);
			//			Snap("#al0").click(_didi);
			//			Snap("#na0").click(_didi);
			//			Snap("#ar0").click(_didi);
			//			Snap("#p0").click(_didi);
			//			Snap("#mg0").click(_didi);
			//			
			//		}

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