var drums = new Object;

drums.load = function(image) {
	drums[image] = new Image();
	drums[image].src = 'drums/' + image + '.png';
}

drums.load('background');
drums.load('splash'); drums.load('splash_sel');
drums.load('tom1'); drums.load('tom1_sel');
drums.load('tom2'); drums.load('tom2_sel');
drums.load('tom3'); drums.load('tom3_sel');
drums.load('crash'); drums.load('crash_sel');
drums.load('china'); drums.load('china_sel');
drums.load('ride1'); drums.load('ride1_sel');
drums.load('ride2'); drums.load('ride2_sel');
drums.load('hihat_open_lower'); drums.load('hihat_open_lower_sel');
drums.load('hihat_open_upper'); drums.load('hihat_open_upper_sel');
drums.load('hihat_closed'); drums.load('hihat_closed_sel');
drums.load('kick'); drums.load('kick_sel');
drums.load('snare'); drums.load('snare_sel');
drums.load('cowbell'); drums.load('cowbell_sel');
drums.load('locks');