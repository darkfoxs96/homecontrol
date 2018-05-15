<!DOCTYPE html>

<html>

<head>
    <!-- Required meta tags -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="/static/img/icon.png" rel="shortcut icon" type="image/x-icon">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/static/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <!--  Private CSS -->
    <link href="/static/css/main.css" rel="stylesheet">

    <title>MovieNotes</title>
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


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="/static/js/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="/static/js/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="/static/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

    <!--  Fontawesome icon -->
    <script src="https://use.fontawesome.com/8a931c9321.js"></script>

    <!--  Private JS -->
    <script src="/static/js/main.js"></script>
    <script src="/static/js/record.js"></script>
</body>

</html>