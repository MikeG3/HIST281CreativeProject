var red = 0, green = 0, blue = 0;

const movieImage = ["pic1","pic2","pic3","pic4"];

function updateColors(){
    red += 1;
    blue += 3;
    green +=5;
    red %= 255;
    blue %= 255;
    green %=255;
    return 'fill=\'rgb(' + red + ',' + blue + ',' + green + ')\'';
}//close function update colors

function getColoredParis(){ 
    
    var colorParis = getParis();
    var newColor = updateColors();
    return colorParis.replace("fill=\"#ffffff\"", newColor); 
}//close function

function getColoredJournals(){ 
    updateColors();
    var colorJournals = getJournals();
    var newColor = updateColors();
    return colorJournals.replace("fill=\"#ffffff\"", newColor); 
}//close function

function getColoredPortrait(){ 
    updateColors();
    var colorPortrait = getPortrait();
    var newColor = updateColors();
    return colorPortrait.replace("fill=\"#ffffff\"", newColor); 
}//close function

function getColoredModernTimes(){ 
    updateColors();
    var colorModernTimes = getModernTimes();
    var newColor = updateColors();
    return colorModernTimes.replace("fill=\"#ffffff\"", newColor); 
}//close function
