//GLOBAL VARIABLES
const backgroundColor = "#000000";
const windowX = window.innerWidth;
const windowY = window.innerHeight;
var frame = 0;


function animate() {
  frame++;
  animateTitle();
  if (frame%9==0){
    document.getElementById("pic1").innerHTML = getColoredParis() ;
    document.getElementById("pic7").innerHTML = getColoredWizard() ;
  }//close animate title if mod 10
  if (frame%10==0){
    document.getElementById("pic5").innerHTML = getColoredManifest() ;
  }//close animate title if mod 10
  if (frame%20==0){
    document.getElementById("pic2").innerHTML = getColoredJournals() ;
  }//close animate title if mod 10
  if (frame%5==0){
    document.getElementById("pic3").innerHTML = getColoredPainter() ;
  }
  if (frame%13==0){
    document.getElementById("pic4").innerHTML = getColoredModernTimes() ;
    document.getElementById("pic8").innerHTML = getColoredPortrait() ;
  }
  if (frame%33==0){
    document.getElementById("pic10").innerHTML = getColoredPass() ;
  }
  if (frame%2==0){
    document.getElementById("pic9").innerHTML = getColoredJournals2() ;
    document.getElementById("pic6").innerHTML = getColoredFires() ;
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