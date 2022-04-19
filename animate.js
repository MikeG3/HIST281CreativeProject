//GLOBAL VARIABLES
var frame = 0;


function animate() {
  frame++;
  animateTitle();
  //Animate movie icons
  if (frame%9==0){
    document.getElementById("pic1").innerHTML = getColoredParis() ;
    document.getElementById("pic7").innerHTML = getColoredWizard() ;
  }//close animate title if mod 10
  if (frame%10==0){
    document.getElementById("pic5").innerHTML = getColoredManifest() ;
    document.getElementById("pic13").innerHTML = getColoredCave1() ;
  }//close animate title if mod 10
  if (frame%20==0){
    document.getElementById("pic2").innerHTML = getColoredJournals() ;
  }//close animate title if mod 10
  if (frame%5==0){
    document.getElementById("pic3").innerHTML = getColoredPainter() ;
    document.getElementById("pic15").innerHTML = getColoredCave2() ;
  }
  if (frame%13==0){
    document.getElementById("pic4").innerHTML = getColoredModernTimes() ;
    document.getElementById("pic8").innerHTML = getColoredPortrait() ;
  }
  if (frame%33==0){
    document.getElementById("pic10").innerHTML = getColoredHorse() ;
  }
  if (frame%2==0){
    document.getElementById("pic9").innerHTML = getColoredJournals2() ;
    document.getElementById("pic6").innerHTML = getColoredFires() ;
  }
  if (frame%4==0){
    document.getElementById("pic11").innerHTML = getColoredPepper() ;
  }
  if (frame%25==0){
    document.getElementById("pic12").innerHTML = getColoredPass() ;
  }
  if (frame%15==0){
    document.getElementById("pic14").innerHTML = getColoredCave() ;
  }

  
  //Animate Covid Title
  if (frame==1 || frame==50 || frame==99 || frame==148 || frame==197 || frame==255 ){
    warningRed1();
    warningWhite2();
    warningRed3();
  }
  
  if (frame==25 || frame==75 || frame==124 || frame==175 || frame==225 ){
    warningWhite1();
    warningRed2();
    warningWhite3();
  }

  //Animate Caduceus



  //RESET
  if (frame == 256){
    frame = 0;
  }//close reset frame counter if 200
  
  //.console.log("frame = " + frame);
  requestAnimationFrame(animate);
    
} //close function play tic tac toe

//CODE TO BE EXECUTED
animate();


