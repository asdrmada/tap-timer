// Variable set
let usecsTimerCount = 0;
let tsecsTimerCount = 0;
let uminsTimerCount = 2;
let tminsTimerCount = 0;

let roundCount      = 3;

let usecsRestCount  = 0;
let tsecsRestCount  = 6;

const usecsDisplay  = document.getElementById("uSecs"),
      tsecsDisplay  = document.getElementById("tSecs"),
      uminsDisplay  = document.getElementById("uMins"),
      tminsDisplay  = document.getElementById("tMins"),
      rcountDisplay = document.getElementById("rCount");


let rollState = true;

// Rest state functions
setInterval(function checkStatus(){
	if((tminsTimerCount == 0) && (uminsTimerCount == 0) &&
		(tsecsTimerCount == 0) && (usecsTimerCount == 0)){
		  rollState = false;
	    document.body.classList.add("restperiod")
} if((usecsRestCount == 0) && (tsecsRestCount == 0)){
    	rollState = true;
    	document.body.classList.remove("restperiod")
    }
}, 250);

// Counter Functions 
setInterval(function(stop){
  if (rollState === true){
  unitCountdown();
  } if (rollState === false){
  restCountdown();
  roundReset();
  }
  else if((usecsTimerCount == 0) && (tsecsTimerCount == 0) && (roundCount == 0)){
  clearInterval();
  }
},1000);

function countTrack(){
    usecsDisplay.innerHTML = usecsTimerCount;
    tsecsDisplay.innerHTML = tsecsTimerCount;
    uminsDisplay.innerHTML = uminsTimerCount - 1;

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
  }
};

setInterval(function uminsCountdown(){
  if(uminsTimerCount > 0){
    uminsTimerCount--;
    console.log(uminsTimerCount);
  }
}, 60000);

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
    console.log(tsecsRestCount);
  }
};

function roundReset() {
  if((usecsRestCount == 0) && (tsecsRestCount == 0)){
     roundCount--
     rcountDisplay.innerHTML = roundCount;
   uminsTimerCount = 2 + 1;
   usecsTimerCount = 0;
   tsecsTimerCount = 0;  
  }
}