// localStorage name item: 'recording_out_sample_rate'
var recording_out_sample_rate = 16000;
var recording_audio_context;
var recording_recorder;

// Init recording
var recording_local_out_sample_rate = localStorage.getItem('recording_out_sample_rate');
if(recording_local_out_sample_rate && recording_local_out_sample_rate != '') {
  try {
    recording_out_sample_rate = parseInt(recording_local_out_sample_rate);
    if(recording_out_sample_rate == 0 || recording_out_sample_rate === NaN) {
      recording_out_sample_rate = 16000;
      localStorage.setItem('recording_out_sample_rate', '' + 16000);
    }
  } catch (e) {
    recording_out_sample_rate = 16000;
    localStorage.setItem('recording_out_sample_rate', '' + 16000);
  }
} else {
  localStorage.setItem('recording_out_sample_rate', '' + 16000);
}

function recordingSetSampleRate(sample_rate) {
  if(sample_rate) {
    if(sample_rate < 8000) {
      return new Error('Error: sample_rate < 8000');
    }
    if(sample_rate > 41000) {
      return new Error('Error: sample_rate > 41000');
    }
    recording_local_out_sample_rate = sample_rate;
    localStorage.setItem('recording_out_sample_rate', '' + sample_rate);
    return null;
  }
  return new Error('Error: sample_rate empty');
}

function recordingGetSampleRate() {
  return recording_local_out_sample_rate;
}

// Load recording
recordingLoadRecording();
function recordingLoadRecording() {
  try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
    window.URL = window.URL || window.webkitURL;
    recording_audio_context = new AudioContext;
    console.log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));

    navigator.getUserMedia({ audio: true }, startUserMedia, function(e) {
      alert('No live audio input: ' + e.message);
    });
  } catch (e) {
    alert('No live audio input: ' + e.message);
  }
}

function startUserMedia(stream) {
  var input = recording_audio_context.createMediaStreamSource(stream);
  recording_recorder = new Recorder(input);
}

// Control recording
var recording_flag_control = true;
function recordingGoControl() {
  if(recording_flag_control) {
    recordingStartRecording();
    recording_flag_control = false;
  } else {
    recordingStopRecording();
    recording_flag_control = true;
  }
}

function recordingStartRecording() {
  setTimeout(function() {
    recording_recorder.setOutSampelRate(recording_out_sample_rate);
    recording_recorder && recording_recorder.record();
  }, 1000)
}

function recordingStopRecording() {
  recording_recorder && recording_recorder.stop();

  recordingExportWAVBytes();
  recording_recorder.clear();
}

function recordingExportWAVBytes() {
  recording_recorder && recording_recorder.exportWAV(function(blob) {
    recordingWAVToServer(blob);
  });
}

function recordingWAVToServer(blob) {
  var formData = new FormData(document.forms.recording_use_command_form);
  formData.set('soundFile', blob);

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status == 200) {
        document.getElementById('recording_string_command_input').value = "";
      } else {
        alert('error: ' + this.responseText);
      }
    }
  };
  xhr.open("POST", '/api/command/used/sound', true);
  xhr.send(formData);
}
