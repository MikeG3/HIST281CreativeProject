var red = 0, green = 0, blue = 0;

const letters = ["t1","t2","t3","t4","t5","t6","t7","t8","t9","t10","t11","t12","t13","t14","t15","t16","t17","t18","t19","t20","t21","t22"];

function updateTitleColors(){
    red += 1;
    blue += 2;
    green += 3;
    red %= 255;
    blue %= 255;
    green %=255;
}//close function update colors

function animateTitle(){
    updateTitleColors()
    for (let i = 0 ; i < letters.length ; i++ ){
        let color = 'rgb(' + red + ',' + blue + ',' + green + ')';
        document.getElementById(letters[i]).style.color = color;
    }//close for each letter
}//close function animate title

//Animate Covid Title
function warningRed1(){
    document.getElementById("fake1").style.color = "rgb(202, 26, 26)";
}//close animate covid

function warningWhite1(){
    document.getElementById("fake1").style.color = "rgb(255, 255, 255)";
}//close animate covid

function warningRed2(){
    document.getElementById("fake2").style.color = "rgb(202, 26, 26)";
}//close animate covid

function warningWhite2(){
    document.getElementById("fake2").style.color = "rgb(255, 255, 255)";
}//close animate covid
function warningRed3(){
    document.getElementById("fake3").style.color = "rgb(202, 26, 26)";
}//close animate covid

function warningWhite3(){
    document.getElementById("fake3").style.color = "rgb(255, 255, 255)";
}//close animate covid
