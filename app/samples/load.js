var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var samples = new Object;
samples.playing = new Object;

samples.play = function(audio) {
	var source = audioContext.createBufferSource();
	source.connect(audioContext.destination);
	source.buffer = samples[audio];
	source.start(0);

	samples.playing[audio] = true;
	setTimeout(function() {
		samples.playing[audio] = false;
	}, 33);
}

samples.load = function(sound) {
	var request = new XMLHttpRequest();
	request.open("GET", 'samples/' + sound + '.wav', true);
	request.responseType = 'arraybuffer';
	request.onload = function() {
		audioContext.decodeAudioData(request.response, function(buffer) {
			samples[sound] = buffer;
		}, function(e) {
			console.log('error');
		});
    }
	request.send();
}

samples.load('splash');
samples.load('tom1');
samples.load('tom2');
samples.load('tom3');
samples.load('crash');
samples.load('china');
samples.load('ride1');
samples.load('ride2');
samples.load('hihat1');
samples.load('hihat2');
samples.load('kick');
samples.load('snare');
samples.load('cowbell');
