var HOST = location.origin.replace(/^http/, 'ws')
var ws = new WebSocket(HOST);
ws.onmessage = function(event) {
	msg = JSON.parse(event.data);
	if (msg.type == 'play') {
		samples.play(msg.data);
	}
};

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
	var sample = '';
	switch (event.keyCode) {
		case 96:
			sample = 'kick';
			break;
		case 97:
			sample = 'tom1';
			break;
		case 98:
			sample = 'tom2';
			break;
		case 99:
			sample = 'tom3';
			break;
		case 100:
			sample = 'splash';
			break;
		case 101:
			sample = 'crash';
			break;
		case 102:
			sample = 'china';
			break;
		case 103:
			sample = 'ride1';
			break;
		case 104:
			sample = 'ride2';
			break;
		case 13:
			sample = 'hihat1';
			break;
		case 107:
			sample = 'hihat2';
			break;
		case 108:
		case 110:
			sample = 'snare';
			break;
		case 105:
			sample = 'cowbell';
			break;
	}

	if (sample != '') {
		samples.play(sample);
		ws.send(JSON.stringify({type: 'play', data: sample}));
	}
});

function onTap(event) {
	var rect = drumkit.getBoundingClientRect();
	var x =  event.clientX - rect.left;
	var y = event.clientY - rect.top;
	var sample = '';

	if (x > 318 && y > 60 && x < 318 + 154 && y < 60 + 69) {
		sample = 'splash';
	}
	if (x > 221 && y > 159 && x < 221 + 132 && y < 159 + 134) {
		sample = 'tom1';
	}
	if (x > 355 && y > 149 && x < 355 + 141 && y < 149 + 132) {
		sample = 'tom2';
	}
	if ((x > 475 && y > 244 && x < 475 + 169 && y < 244 + 110) || (x > 496 && y > 358 && x < 496 + 102 && y < 358 + 35)) {
		sample = 'tom3';
	}
	if ((x > 0 && y > 110 && x < 0 + 144 && y < 110 + 66) || (x > 16 && y > 154 && x < 16 + 206 && y < 154 + 85)) {
		sample = 'crash';
	}
	if ((x > 130 && y > 40 && x < 130 + 181 && y < 40 + 79) || (x > 185 && y > 116 && x < 185 + 136 && y < 116 + 37)) {
		sample = 'china';
	}
	if ((x > 467 && y > 45 && x < 467 + 274 && y < 45 + 66) || (x > 467 && y > 112 && x < 467 + 206 && y < 112 + 32)) {
		sample = 'ride2';
	}
	if ((x > 544 & y > 144 & x < 544 + 257 && y < 144 + 98) || (x > 678 && y > 112 && x < 678 + 122 && y < 112 + 45)) {
		sample = 'ride1';
	}
	if (x > 641 && y > 232 && x < 641 + 159 && y < 232 + 115) {
		sample = 'hihat2';
	}
	if ((x > 643 && y > 352 && x < 643 + 157 && y < 352 + 100) || (x > 602 && y > 364 && x < 602 + 57 && y < 364 + 69)) {
		sample = 'hihat1';
	}
	if (x > 16 && y > 239 && x < 16 + 196 && y < 239 + 229) {
		sample = 'kick';
	}
	if (x > 212 && y > 292 && x < 212 + 193 && y < 293 + 122) {
		sample = 'snare';
	}
	if ((x > 405 && y > 354 && x < 405 + 82 && y < 354 + 108) || (x > 463 && y > 375 && x < 463 + 50 && y < 375 + 87)) {
		sample = 'cowbell';
	}

	if (sample != '') {
		samples.play(sample);
		ws.send(JSON.stringify({type: 'play', data: sample}));
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
