// Variable set
let usecsTimerCount = 9;
let tsecsTimerCount = 5;
let uminsTimerCount = 0;
let tminsTimerCount = 0;

let roundCount      = 3;

let usecRestCount   = 9;
let tsecsRestCount  = 2;

const usecsDisplay  = document.getElementById("uSecs"),
      tsecsDisplay  = document.getElementById("tSecs"),
      uminsDisplay  = document.getElementById("uMins"),
      tminsDisplay  = document.getElementById("tMins"),
      rcountDisplay = document.getElementById("rCount");


let rollState = true;

// Rest State functions
setInterval(function checkStatus(){
	if((tminsTimerCount == 0) && (uminsTimerCount == 0) &&
		(tsecsTimerCount == 0) && (usecsTimerCount == 0)){
		rollState = false
	    document.body.classList.add("restperiod")
    } else if((usecsTimerCount == 0) && (rollState == false)){
    	rollState = true;
    	document.body.classList.add("rollperiod")
    }
}, 250);

function restState(){
	if(rollState = false){
		document.body.classList.add("restperiod")
		roundCount--;
	}
  rcountDisplay.innerHTML = roundCount;
};

// Counter Functions 
setInterval(function(stop){
  unitCountdown();
  if ((usecsTimerCount == 0) && (tsecsTimerCount == 0) && (roundCount == 0)){
    clearInterval();
  }
},1000);

function countTrack(){
    usecsDisplay.innerHTML = usecsTimerCount;
    tsecsDisplay.innerHTML = tsecsTimerCount;

}

function unitCountdown() {
  if((usecsTimerCount > 0) && (rollState == true)){
    usecsTimerCount--;
    console.log(usecsTimerCount);
  } else {
    usecsTimerCount = 9;
    tsecsCountdown();
  }
  countTrack();
  // usecsDisplay.innerHTML = usecsTimerCount;
};

function tsecsCountdown() {
  if((usecsTimerCount > 0) && (tsecsTimerCount > 0)){
    tsecsTimerCount--;
  } else if(uminsTimerCount > 0) {
    tsecsTimerCount = 5;
  }
  // tsecsDisplay.innerHTML = tsecsTimerCount;
};

setInterval(function uminsCountdown(){
  if(uminsTimerCount > 0){
    uminsTimerCount--;
  }
  uminsDisplay.innerHTML = uminsTimerCount;
}, 60000);

