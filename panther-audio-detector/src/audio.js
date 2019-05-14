var spectrogram = require('audio-spectrogram');
 
var spectro = Spectrogram(element);
 
spectro.addSource(buffer, audioContext);
spectro.start();