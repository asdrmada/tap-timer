# tap-timer
First project, A round timer used for martial arts built in JS.

---

<!DOCTYPE html>
<html>
<head>
	<title>Tap Timer</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

	<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="assets/css/roundtimerstyle.css">
</head>

<body>
  <section class="container-fluid">
  	<div class="row">
      <div class="col-lg-12 col-md-8">
          <h1><span id ="tMins">0</span><span id="uMins">0</span>:<span id="tSecs">0</span><span id="uSecs">0</span></h1>
      </div>
    </div>
    <div class="row">
      <div class="col-4">        
      </div>
      <div class="col-12">
        <h3>Rounds Remaining: <span id="rCount">3</span></h3>
      </div>
      <div class="col-4">
      </div>
    </div>
  </section>

  <section class="container-fluid">
    <div class="row justify-content-around">
      <div class="col-4">
        <div class="card text-center controls">
          <span class="border border-white">
          <div class="card-body">
            Round length:
            <input type="number" name="roundLength" min="3" max="10" required>
          </div>
          </span>
        </div>
      </div>
      <div class="col-4">
        <div class="card text-center controls">
          <span class="border border-white">
          <div class="card-body">
            Number of Rounds:
            <input type="number" name="roundNumber" min="3" max="6" required>
          </div>
        </span>
        </div>
      </div>
      <div class="col-4">
        <div class="card text-center controls">
          <span class="border border-white">
          <div class="card-body">
            Start Timer:
            <button name="startTimer">Begin</button>
          </div>
          </span>
        </div>
      </div>
    </div>
  </section>
</body>

<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.15/howler.core.min.js"></script>
<script src="assets/js/libs/jquery-3.3.1.min.js"></script>
<script src="assets/js/roundtimer.js"></script>
</html>

---
