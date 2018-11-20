// Variable set
let usecsTimerCount = 0;
let tsecsTimerCount = 0;
let uminsTimerCount = 6;

let roundCount      = 5;

let usecsRestCount  = 0;
let tsecsRestCount  = 3;

const usecsDisplay  = document.getElementById("uSecs"),
      tsecsDisplay  = document.getElementById("tSecs"),
      uminsDisplay  = document.getElementById("uMins"),
      tminsDisplay  = document.getElementById("tMins"),
      rcountDisplay = document.getElementById("rCount");


let rollState = true;

// Counter functions

const mainCounterFunc = function(){
  if (rollState === true){
  unitCountdown();
  roundEnding();
  } if (rollState === false){
  restCountdown();
  roundReset();
  }
};

const runTimer = setInterval(mainCounterFunc, 1000);
function stopTimer(){
if(roundCount == 0){
  clearInterval(runTimer);
  usecsTimerCount = 0;
  tsecsTimerCount = 0;; 
}
};

function countTrack(){
    usecsDisplay.innerHTML = usecsTimerCount;
    tsecsDisplay.innerHTML = tsecsTimerCount;
    uminsDisplay.innerHTML = uminsTimerCount;
    rcountDisplay.innerHTML = roundCount;
}

function unitCountdown() {
  if(usecsTimerCount > 0) {
    usecsTimerCount--;
  } else {
    usecsTimerCount = 9;
    tsecsCountdown();
  }
  countTrack();
};

function tsecsCountdown() {
  if((usecsTimerCount > 0) && (tsecsTimerCount > 0)){
    tsecsTimerCount--;
  } else if(uminsTimerCount > 0) {
    tsecsTimerCount = 5;
    uminsCountdown();
  }
};

function uminsCountdown(){
  if((uminsTimerCount > 0) && (tsecsTimerCount == 5)){
    uminsTimerCount--;
  } else if(tminsTimerCount > 0){
    uminsTimerCount = 9;
    tminsCountdown();
  }  
};

const roundEnding = function(){
  if(tsecsTimerCount == 3 && usecsTimerCount == 0){
    usecsRestCount = 0;
    tsecsRestCount = 3;
  }
}

// Rest State functions

function restCountdown() {
  if(usecsRestCount > 0) {
    usecsRestCount--
  } else {
    usecsRestCount = 9;
    trestCountdown();
  }
  countTrack();
  usecsDisplay.innerHTML = usecsRestCount;
  tsecsDisplay.innerHTML = tsecsRestCount;
  uminsDisplay.innerHTML = 0;
  tminsDisplay.innerHTML = 0;
};

function trestCountdown() {
  if((usecsRestCount > 0) && (tsecsRestCount > 0)){
    tsecsRestCount--;
  }
};

const roundReset = function() {
  if((usecsRestCount == 0) && (tsecsRestCount == 0)){
     roundCount--
   uminsTimerCount = 5;
   usecsTimerCount = 0;
   tsecsTimerCount = 0;
   stopTimer();
  }
};

function checkStatus() {
  if((uminsTimerCount == 0) &&
    (tsecsTimerCount == 0) && (usecsTimerCount == 0)){
      rollState = false;
      document.body.classList.add("restperiod");
} else if ((usecsRestCount == 0) && (tsecsRestCount == 0)){
      rollState = true;
      document.body.classList.remove("restperiod");
    }
};

setInterval(function(){checkStatus()}, 250);

