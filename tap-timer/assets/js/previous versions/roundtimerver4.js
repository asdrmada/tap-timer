// Variable set
let usecsTimerCount = 0;
let tsecsTimerCount = 3;
let uminsTimerCount = 0;
let tminsTimerCount = 0;

let roundCount      = 3;

let usecsRestCount  = 0;
let tsecsRestCount  = 3;

const usecsDisplay  = document.getElementById("uSecs"),
      tsecsDisplay  = document.getElementById("tSecs"),
      uminsDisplay  = document.getElementById("uMins"),
      tminsDisplay  = document.getElementById("tMins"),
      rcountDisplay = document.getElementById("rCount");


let rollState = true;

// Counter functions
setInterval(function(){
  if (rollState === true){
  unitCountdown();
  } if (rollState === false){
  restCountdown();
  roundReset();
  }
  else if((usecsTimerCount == 0) && (tsecsTimerCount == 0) && (roundCount == 0)){
  clearInterval();
  };
},1000);

function countTrack(){
    usecsDisplay.innerHTML = usecsTimerCount;
    tsecsDisplay.innerHTML = tsecsTimerCount;
    uminsDisplay.innerHTML = uminsTimerCount;

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
  if(uminsTimerCount > 0 && tsecsTimerCount == 5)
    uminsTimerCount--
    console.log(uminsTimerCount);
};

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

function roundReset() {
  if((usecsRestCount == 0) && (tsecsRestCount == 0)){
     roundCount--
     rcountDisplay.innerHTML = roundCount;
   tminsTimerCount = 0;
   uminsTimerCount = 0;
   usecsTimerCount = 0;
   tsecsTimerCount = 3;
  }
};

function checkStatus() {
  if((tminsTimerCount == 0) && (uminsTimerCount == 0) &&
    (tsecsTimerCount == 0) && (usecsTimerCount == 0)){
      rollState = !true
      document.body.classList.add("restperiod");
} if((usecsRestCount == 0) && (tsecsRestCount == 0)){
      rollState = !false
      document.body.classList.remove("restperiod");
    }
};

// function checkStatus() {
//   switch(true){

//     case((tminsTimerCount == 0) && (uminsTimerCount == 0) && (tsecsTimerCount == 0) && (usecsTimerCount == 0)):
//     rollState = !true
//     break;

//     case((usecsRestCount == 0) && (tsecsRestCount == 0)):
//     rollState = !false
//     break;
//   }
// }

setInterval(function(){checkStatus()}, 250);