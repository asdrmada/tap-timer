// Variable set
let usecsTimerCount = 0;
let tsecsTimerCount = 3;
let uminsTimerCount = 0;
let tminsTimerCount = 0;

const usecsDisplay = document.getElementById("uSecs"),
      tsecsDisplay = document.getElementById("tSecs"),
      uminsDisplay = document.getElementById("uMins"),
      tminsDisplay = document.getElementById("tMins");

const rollState = true;

// init();

// var init =

// Counter Functions
var unitCountdown = setInterval(function(){
   if(usecsTimerCount > 0){
    usecsTimerCount --; 
   console.log(usecsTimerCount);  
   } else {
    usecsTimerCount = 9;
   } if (usecsTimerCount && tsecsTimerCount && uminsTimerCount === 0) {
    clearInterval();
   }
   usecsDisplay.innerHTML = usecsTimerCount;
}, 1000);


var tenthsCountdown = setInterval(function(){
  if(tsecsTimerCount > 0){
    tsecsTimerCount --; 
  } else {
    tsecsTimerCount = 5;
    uminsTimerCount --;
  } if (usecsTimerCount && tsecsTimerCount && uminsTimerCount === 0) {
    clearInterval();
   }
  tsecsDisplay.innerHTML = tsecsTimerCount;
  uminsDisplay.innerHTML = uminsTimerCount;
}, 10000);


// Rest condition setting
function triggerRestState(){
  if(uminsTimerCount <= 0 & tsecsTimerCount <= 0 & usecsTimerCount <= 0){
    var rollState= !true;
  }
};
