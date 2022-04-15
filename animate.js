//GLOBAL VARIABLES
const backgroundColor = "#000000";
const windowX = window.innerWidth;
const windowY = window.innerHeight;
var frame = 0;


function animate() {
  frame++;
  if (frame%9==0){
    document.getElementById("pic1").innerHTML = getColoredParis() ;
  }//close animate title if mod 10
  if (frame%20==0){
    document.getElementById("pic2").innerHTML = getColoredJournals() ;
  }//close animate title if mod 10
  if (frame%5==0){
    document.getElementById("pic3").innerHTML = getColoredPortrait() ;
  }
  if (frame%13==0){
    document.getElementById("pic4").innerHTML = getColoredModernTimes() ;
  }
  
  //RESET
  if (frame == 256){
    frame = 0;
  }//close reset frame counter if 200
  
  console.log("frame = " + frame);
  requestAnimationFrame(animate);
    
} //close function play tic tac toe

//CODE TO BE EXECUTED
animate();