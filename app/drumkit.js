var drumkit = document.getElementById('drumkit');
var context = drumkit.getContext('2d');

drums = new Drums();

function draw() {
	context.drawImage(drums.background, 0, 0, 800, 480);
	context.drawImage(drums.splash, 309, 57, 168, 71);
	context.drawImage(drums.tom1, 217, 155, 135, 168);
	context.drawImage(drums.tom2, 356, 149, 150, 185);
	context.drawImage(drums.tom3, 471, 240, 179, 251);
	context.drawImage(drums.crash, -20, 92, 248, 145);
	context.drawImage(drums.china, 114, 36, 213, 125);
	context.drawImage(drums.ride_bell, 464, 45, 279, 101);
	context.drawImage(drums.ride, 542, 108, 270, 125);
	context.drawImage(drums.hihat_open_lower, 634, 266, 207, 83);
	context.drawImage(drums.hihat_open_upper, 634, 232, 216, 92);
	context.drawImage(drums.hihat_closed, 591, 344, 229, 102);
	context.drawImage(drums.kick, -10, 238, 250, 235);
	context.drawImage(drums.snare, 212, 288, 197, 178);
	context.drawImage(drums.cowbell, 402, 353, 106, 107);
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
		case 105:
			samples.play('hihat1');
			break;
		case 107:
			samples.play('hihat2');
			break;
		case 110:
			samples.play('snare');
			break;
		case 13:
			samples.play('cowbell');
			break;
	}
	console.log(event.keyCode);
});

draw();
