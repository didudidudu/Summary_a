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
		var stage;
		var play = false;
		var svg,mc;
		var mc = document.getElementById("container");
		loadSvg();

		function loadSvg() {

			Snap.load("images/uc_c4_l089_il02_01_01.svg", function(f) {

				document.getElementById("container").appendChild(f.node);
				f.node.id = "svg";
				stage = Snap("#svg");
				svg = f.node;
				mc.appendChild(svg);
				
				init();
			});

		}

		function init() {
			load1();
			load2();
			load3();
			load4();
			load5();
			load6();
			load7();
			load8();
			load9();
			load10();
			load11();
			load12();
			back1();
			back2();
			back3();
			back4();
			back5();
			back6();
			back7();
			back8();
			back9();
			back10();
			back11();
			back12();
			start();
			test();
		}
		function start(){
			Snap('#z1').visible = false;
			Snap('#z2').visible = false;
			Snap('#z3').visible = false;
			Snap('#z4').visible = false;
			Snap('#z5').visible = false;
			Snap('#z6').visible = false;
			Snap('#z7').visible = false;
			Snap('#z8').visible = false;
			Snap('#z9').visible = false;
			Snap('#z10').visible = false;
			Snap('#z11').visible = false;
			Snap('#z12').visible = false;
			Snap('#b1').visible = true;
			Snap('#b2').visible = true;
			Snap('#b3').visible = true;
			Snap('#b4').visible = true;
			Snap('#b5').visible = true;
			Snap('#b6').visible = true;
			Snap('#b7').visible = true;
			Snap('#b8').visible = true;
			Snap('#b9').visible = true;
			Snap('#b10').visible = true;
			Snap('#b11').visible = true;
			Snap('#b12').visible = true;
		}

		function load1() {
			$('#b1').on('mouseover', function(e) {
				Snap('#b1').visible = false;
				Snap('#z1').visible = true;
			Snap('#z2').visible = false;
			Snap('#z3').visible = false;
			Snap('#z4').visible = false;
			Snap('#z5').visible = false;
			Snap('#z6').visible = false;
			Snap('#z7').visible = false;
			Snap('#z8').visible = false;
			Snap('#z9').visible = false;
			Snap('#z10').visible = false;
			Snap('#z11').visible = false;
			Snap('#z12').visible = false;
			Snap('#b2').visible = true;
			Snap('#b3').visible = true;
			Snap('#b4').visible = true;
			Snap('#b5').visible = true;
			Snap('#b6').visible = true;
			Snap('#b7').visible = true;
			Snap('#b8').visible = true;
			Snap('#b9').visible = true;
			Snap('#b10').visible = true;
			Snap('#b11').visible = true;
			Snap('#b12').visible = true;
			});
		}
		function back1(){
			$('#a1').on('mouseout', function(e) {
				start();
			});
		}
		function load2() {
			$('#b2').on('mouseover', function(e) {
				Snap('#b2').visible = false;
				Snap('#z2').visible = true;
				Snap('#z1').visible = false;
			Snap('#z3').visible = false;
			Snap('#z4').visible = false;
			Snap('#z5').visible = false;
			Snap('#z6').visible = false;
			Snap('#z7').visible = false;
			Snap('#z8').visible = false;
			Snap('#z9').visible = false;
			Snap('#z10').visible = false;
			Snap('#z11').visible = false;
			Snap('#z12').visible = false;
			Snap('#b1').visible = true;
			Snap('#b3').visible = true;
			Snap('#b4').visible = true;
			Snap('#b5').visible = true;
			Snap('#b6').visible = true;
			Snap('#b7').visible = true;
			Snap('#b8').visible = true;
			Snap('#b9').visible = true;
			Snap('#b10').visible = true;
			Snap('#b11').visible = true;
			Snap('#b12').visible = true;
			});
		}
		function back2(){
			$('#a2').on('mouseout', function(e) {
				start();
			});
		}
		function load3() {
			$('#b3').on('mouseover', function(e) {
				Snap('#b3').visible = false;
				Snap('#z3').visible = true;
				Snap('#z1').visible = false;
			Snap('#z2').visible = false;
			Snap('#z4').visible = false;
			Snap('#z5').visible = false;
			Snap('#z6').visible = false;
			Snap('#z7').visible = false;
			Snap('#z8').visible = false;
			Snap('#z9').visible = false;
			Snap('#z10').visible = false;
			Snap('#z11').visible = false;
			Snap('#z12').visible = false;
			Snap('#b1').visible = true;
			Snap('#b2').visible = true;
			Snap('#b4').visible = true;
			Snap('#b5').visible = true;
			Snap('#b6').visible = true;
			Snap('#b7').visible = true;
			Snap('#b8').visible = true;
			Snap('#b9').visible = true;
			Snap('#b10').visible = true;
			Snap('#b11').visible = true;
			Snap('#b12').visible = true;
			});
			
		}
		function back3(){
			$('#a3').on('mouseout', function(e) {
				start();
			});
		}
		function load4() {
			$('#b4').on('mouseover', function(e) {
				Snap('#b4').visible = false;
				Snap('#z4').visible = true;
				Snap('#z1').visible = false;
			Snap('#z2').visible = false;
			Snap('#z3').visible = false;
			Snap('#z5').visible = false;
			Snap('#z6').visible = false;
			Snap('#z7').visible = false;
			Snap('#z8').visible = false;
			Snap('#z9').visible = false;
			Snap('#z10').visible = false;
			Snap('#z11').visible = false;
			Snap('#z12').visible = false;
			Snap('#b1').visible = true;
			Snap('#b2').visible = true;
			Snap('#b3').visible = true;
			Snap('#b5').visible = true;
			Snap('#b6').visible = true;
			Snap('#b7').visible = true;
			Snap('#b8').visible = true;
			Snap('#b9').visible = true;
			Snap('#b10').visible = true;
			Snap('#b11').visible = true;
			Snap('#b12').visible = true;
			});
		}
		function back4(){
			$('#a4').on('mouseout', function(e) {
				start();
			});
		}
		function load5() {
			$('#b5').on('mouseover', function(e) {
				Snap('#b5').visible = false;
				Snap('#z5').visible = true;
				Snap('#z1').visible = false;
			Snap('#z2').visible = false;
			Snap('#z3').visible = false;
			Snap('#z4').visible = false;
			Snap('#z6').visible = false;
			Snap('#z7').visible = false;
			Snap('#z8').visible = false;
			Snap('#z9').visible = false;
			Snap('#z10').visible = false;
			Snap('#z11').visible = false;
			Snap('#z12').visible = false;
			Snap('#b1').visible = true;
			Snap('#b2').visible = true;
			Snap('#b3').visible = true;
			Snap('#b4').visible = true;
			Snap('#b6').visible = true;
			Snap('#b7').visible = true;
			Snap('#b8').visible = true;
			Snap('#b9').visible = true;
			Snap('#b10').visible = true;
			Snap('#b11').visible = true;
			Snap('#b12').visible = true;
			});
			
		}
		function back5(){
			$('#a5').on('mouseout', function(e) {
				start();
			});
		}
		function load6() {
			$('#b6').on('mouseover', function(e) {
				Snap('#b6').visible = false;
				Snap('#z6').visible = true;
				Snap('#z1').visible = false;
			Snap('#z2').visible = false;
			Snap('#z3').visible = false;
			Snap('#z4').visible = false;
			Snap('#z5').visible = false;
			Snap('#z7').visible = false;
			Snap('#z8').visible = false;
			Snap('#z9').visible = false;
			Snap('#z10').visible = false;
			Snap('#z11').visible = false;
			Snap('#z12').visible = false;
			Snap('#b1').visible = true;
			Snap('#b2').visible = true;
			Snap('#b3').visible = true;
			Snap('#b4').visible = true;
			Snap('#b5').visible = true;
			Snap('#b7').visible = true;
			Snap('#b8').visible = true;
			Snap('#b9').visible = true;
			Snap('#b10').visible = true;
			Snap('#b11').visible = true;
			Snap('#b12').visible = true;
			});
			
		}
		function back6(){
			$('#a6').on('mouseout', function(e) {
				start();
			});
		}
		function load7() {
			$('#b7').on('mouseover', function(e) {
				Snap('#b7').visible = false;
				Snap('#z7').visible = true;
				Snap('#z1').visible = false;
			Snap('#z2').visible = false;
			Snap('#z3').visible = false;
			Snap('#z4').visible = false;
			Snap('#z5').visible = false;
			Snap('#z6').visible = false;
			Snap('#z8').visible = false;
			Snap('#z9').visible = false;
			Snap('#z10').visible = false;
			Snap('#z11').visible = false;
			Snap('#z12').visible = false;
			Snap('#b1').visible = true;
			Snap('#b2').visible = true;
			Snap('#b3').visible = true;
			Snap('#b4').visible = true;
			Snap('#b5').visible = true;
			Snap('#b6').visible = true;
			Snap('#b8').visible = true;
			Snap('#b9').visible = true;
			Snap('#b10').visible = true;
			Snap('#b11').visible = true;
			Snap('#b12').visible = true;
			});
			
		}
		function back7(){
			$('#a7').on('mouseout', function(e) {
				start();
			});
		}
		function load8() {
			$('#b8').on('mouseover', function(e) {
				Snap('#b8').visible = false;
				Snap('#z8').visible = true;
				Snap('#z1').visible = false;
			Snap('#z2').visible = false;
			Snap('#z3').visible = false;
			Snap('#z4').visible = false;
			Snap('#z5').visible = false;
			Snap('#z6').visible = false;
			Snap('#z7').visible = false;
			Snap('#z9').visible = false;
			Snap('#z10').visible = false;
			Snap('#z11').visible = false;
			Snap('#z12').visible = false;
			Snap('#b1').visible = true;
			Snap('#b2').visible = true;
			Snap('#b3').visible = true;
			Snap('#b4').visible = true;
			Snap('#b5').visible = true;
			Snap('#b6').visible = true;
			Snap('#b7').visible = true;
			Snap('#b9').visible = true;
			Snap('#b10').visible = true;
			Snap('#b11').visible = true;
			Snap('#b12').visible = true;
			});
			
		}
		function back8(){
			$('#a8').on('mouseout', function(e) {
				start();
			});
		}
		function load9() {
			$('#b9').on('mouseover', function(e) {
				Snap('#b9').visible = false;
				Snap('#z9').visible = true;
				Snap('#z1').visible = false;
			Snap('#z2').visible = false;
			Snap('#z3').visible = false;
			Snap('#z4').visible = false;
			Snap('#z5').visible = false;
			Snap('#z6').visible = false;
			Snap('#z7').visible = false;
			Snap('#z8').visible = false;
			Snap('#z10').visible = false;
			Snap('#z11').visible = false;
			Snap('#z12').visible = false;
			Snap('#b1').visible = true;
			Snap('#b2').visible = true;
			Snap('#b3').visible = true;
			Snap('#b4').visible = true;
			Snap('#b5').visible = true;
			Snap('#b6').visible = true;
			Snap('#b7').visible = true;
			Snap('#b8').visible = true;
			Snap('#b10').visible = true;
			Snap('#b11').visible = true;
			Snap('#b12').visible = true;
			});
			
		}
		function back9(){
			$('#a9').on('mouseout', function(e) {
				start();
			});
		}
		function load10() {
			$('#b10').on('mouseover', function(e) {
				Snap('#b10').visible = false;
				Snap('#z10').visible = true;
				Snap('#z1').visible = false;
			Snap('#z2').visible = false;
			Snap('#z3').visible = false;
			Snap('#z4').visible = false;
			Snap('#z5').visible = false;
			Snap('#z6').visible = false;
			Snap('#z7').visible = false;
			Snap('#z8').visible = false;
			Snap('#z9').visible = false;
			Snap('#z11').visible = false;
			Snap('#z12').visible = false;
			Snap('#b1').visible = true;
			Snap('#b2').visible = true;
			Snap('#b3').visible = true;
			Snap('#b4').visible = true;
			Snap('#b5').visible = true;
			Snap('#b6').visible = true;
			Snap('#b7').visible = true;
			Snap('#b8').visible = true;
			Snap('#b9').visible = true;
			Snap('#b11').visible = true;
			Snap('#b12').visible = true;
			});
			
		}
		function back10(){
			$('#a10').on('mouseout', function(e) {
				start();
			});
		}
		function load11() {
			$('#b11').on('mouseover', function(e) {
				Snap('#b11').visible = false;
				Snap('#z11').visible = true;
				Snap('#z1').visible = false;
			Snap('#z2').visible = false;
			Snap('#z3').visible = false;
			Snap('#z4').visible = false;
			Snap('#z5').visible = false;
			Snap('#z6').visible = false;
			Snap('#z7').visible = false;
			Snap('#z8').visible = false;
			Snap('#z9').visible = false;
			Snap('#z10').visible = false;
			Snap('#z12').visible = false;
			Snap('#b1').visible = true;
			Snap('#b2').visible = true;
			Snap('#b3').visible = true;
			Snap('#b4').visible = true;
			Snap('#b5').visible = true;
			Snap('#b6').visible = true;
			Snap('#b7').visible = true;
			Snap('#b8').visible = true;
			Snap('#b9').visible = true;
			Snap('#b10').visible = true;
			Snap('#b12').visible = true;
			});
			
		}
		function back11(){
			$('#a11').on('mouseout', function(e) {
				start();
			});
		}
		function load12() {
			$('#b12').on('mouseover', function(e) {
				Snap('#b12').visible = false;
				Snap('#z12').visible = true;
				Snap('#z1').visible = false;
			Snap('#z2').visible = false;
			Snap('#z3').visible = false;
			Snap('#z4').visible = false;
			Snap('#z5').visible = false;
			Snap('#z6').visible = false;
			Snap('#z7').visible = false;
			Snap('#z8').visible = false;
			Snap('#z9').visible = false;
			Snap('#z10').visible = false;
			Snap('#z11').visible = false;
			Snap('#b1').visible = true;
			Snap('#b2').visible = true;
			Snap('#b3').visible = true;
			Snap('#b4').visible = true;
			Snap('#b5').visible = true;
			Snap('#b6').visible = true;
			Snap('#b7').visible = true;
			Snap('#b8').visible = true;
			Snap('#b9').visible = true;
			Snap('#b10').visible = true;
			Snap('#b11').visible = true;
			});
			
		}
		function back12(){
			$('#a12').on('mouseout', function(e) {
				start();
			});
		}
		
		
		function test() {
			
			
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