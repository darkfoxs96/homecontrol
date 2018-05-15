<!DOCTYPE html>

<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<title>Live input record and playback</title>
  <style type='text/css'>
    ul { list-style: none; }
    #recordingslist audio { display: block; margin-bottom: 10px; }
  </style>
</head>
<body>

  <h1>Recorder.js simple WAV export example</h1>

  <p>Make sure you are using a recent version of Google Chrome.</p>
  <p>Also before you enable microphone input either plug in headphones or turn the volume down if you want to avoid ear splitting feedback!</p>

  <button onclick="load(this);">load</button>
  <button onclick="startRecording(this);">record</button>
  <button onclick="stopRecording(this);" disabled>stop</button>
  
  <h2>Recordings</h2>
  <ul id="recordingslist"></ul>
  
  <h2>Log</h2>
  <pre id="log"></pre>

  

  <script src="/static/js/record.js"></script>
  <script src="/static/js/main.js"></script>
</body>
</html>