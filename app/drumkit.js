var drumkit = document.getElementById('drumkit');
var context = drumkit.getContext('2d');

var playing = new Object;

function draw() {
	context.drawImage(drums.background, 0, 0, 800, 480);

	context.drawImage(samples.playing.splash ? drums.splash_sel : drums.splash, 309, 57, 168, 71);
	context.drawImage(samples.playing.tom1 ? drums.tom1_sel : drums.tom1, 217, 155, 135, 168);
	context.drawImage(samples.playing.tom2 ? drums.tom2_sel : drums.tom2, 356, 149, 150, 185);
	context.drawImage(samples.playing.tom3 ? drums.tom3_sel : drums.tom3, 471, 240, 179, 251);
	context.drawImage(samples.playing.crash ? drums.crash_sel : drums.crash, -20, 92, 248, 145);
	context.drawImage(samples.playing.china ? drums.china_sel : drums.china, 114, 36, 213, 125);
	context.drawImage(samples.playing.ride2 ? drums.ride2_sel : drums.ride2, 464, 45, 279, 101);
	context.drawImage(samples.playing.ride1 ? drums.ride1_sel : drums.ride1, 542, 108, 270, 125);
	context.drawImage(samples.playing.hihat2 ? drums.hihat_open_lower_sel : drums.hihat_open_lower, 634, 266, 207, 83);
	context.drawImage(samples.playing.hihat2 ? drums.hihat_open_upper_sel : drums.hihat_open_upper, 634, 232, 216, 92);
	context.drawImage(samples.playing.hihat1 ? drums.hihat_closed_sel : drums.hihat_closed, 591, 344, 229, 102);
	context.drawImage(samples.playing.kick ? drums.kick_sel : drums.kick, -10, 238, 250, 235);
	context.drawImage(samples.playing.snare ? drums.snare_sel : drums.snare, 212, 288, 197, 178);
	context.drawImage(samples.playing.cowbell ? drums.cowbell_sel : drums.cowbell, 402, 353, 106, 107);

	context.drawImage(drums.locks, 0, 0, 800, 480);

	window.requestAnimationFrame(draw);
}

document.addEventListener('keydown', function(event) {
	switch (event.keyCode) {
		case 96:
			samples.play('kick');
			break;
		case 97:
			samples.play('tom1');
			break;
		case 98:
			samples.play('tom2');
			break;
		case 99:
			samples.play('tom3');
			break;
		case 100:
			samples.play('splash');
			break;
		case 101:
			samples.play('crash');
			break;
		case 102:
			samples.play('china');
			break;
		case 103:
			samples.play('ride1');
			break;
		case 104:
			samples.play('ride2');
			break;
		case 13:
			samples.play('hihat1');
			break;
		case 107:
			samples.play('hihat2');
			break;
		case 108:
		case 110:
			samples.play('snare');
			break;
		case 105:
			samples.play('cowbell');
			break;
	}
	console.log(event.keyCode);
});

function onTap(event) {
	var rect = drumkit.getBoundingClientRect();
	var x =  event.clientX - rect.left;
	var y = event.clientY - rect.top;

	if (x > 318 && y > 60 && x < 318 + 154 && y < 60 + 69) {
		samples.play('splash');
	}
	if (x > 221 && y > 159 && x < 221 + 132 && y < 159 + 134) {
		samples.play('tom1');
	}
	if (x > 355 && y > 149 && x < 355 + 141 && y < 149 + 132) {
		samples.play('tom2');
	}
	if ((x > 475 && y > 244 && x < 475 + 169 && y < 244 + 110) || (x > 496 && y > 358 && x < 496 + 102 && y < 358 + 35)) {
		samples.play('tom3');
	}
	if ((x > 0 && y > 110 && x < 0 + 144 && y < 110 + 66) || (x > 16 && y > 154 && x < 16 + 206 && y < 154 + 85)) {
		samples.play('crash');
	}
	if ((x > 130 && y > 40 && x < 130 + 181 && y < 40 + 79) || (x > 185 && y > 116 && x < 185 + 136 && y < 116 + 37)) {
		samples.play('china');
	}
	if ((x > 467 && y > 45 && x < 467 + 274 && y < 45 + 66) || (x > 467 && y > 112 && x < 467 + 206 && y < 112 + 32)) {
		samples.play('ride2');
	}
	if ((x > 544 & y > 144 & x < 544 + 257 && y < 144 + 98) || (x > 678 && y > 112 && x < 678 + 122 && y < 112 + 45)) {
		samples.play('ride1');
	}
	if (x > 641 && y > 232 && x < 641 + 159 && y < 232 + 115) {
		samples.play('hihat2');
	}
	if ((x > 643 && y > 352 && x < 643 + 157 && y < 352 + 100) || (x > 602 && y > 364 && x < 602 + 57 && y < 364 + 69)) {
		samples.play('hihat1');
	}
	if (x > 16 && y > 239 && x < 16 + 196 && y < 239 + 229) {
		samples.play('kick');
	}
	if (x > 212 && y > 292 && x < 212 + 193 && y < 293 + 122) {
		samples.play('snare');
	}
	if ((x > 405 && y > 354 && x < 405 + 82 && y < 354 + 108) || (x > 463 && y > 375 && x < 463 + 50 && y < 375 + 87)) {
		samples.play('cowbell');
	}

	event.preventDefault();
}

drumkit.addEventListener('mousedown', onTap, false);
drumkit.addEventListener('touchstart', function(event) {
	event.preventDefault();
	for (var i = 0; i < event.changedTouches.length; i++) {
		onTap(event.changedTouches[i]);
	}
}, false);

draw();

var HOST = location.origin.replace(/^http/, 'ws')
var socket = new WebSocket(HOST);
socket.send('hello');
