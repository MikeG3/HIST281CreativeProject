var red = 0, green = 0, blue = 0;

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
    updateColors();
    var modedImage = getParis();
    var newColor = updateColors();
    return modedImage.replace("fill=\"#ffffff\"", newColor); 
}//close function

function getColoredJournals(){ 
    updateColors();
    var modedImage = getJournals();
    var newColor = updateColors();
    return modedImage.replace("fill=\"#ffffff\"", newColor); 
}//close function

function getColoredPortrait(){ 
    updateColors();
    var modedImage = getPortrait();
    var newColor = updateColors();
    return modedImage.replace("fill=\"#ffffff\"", newColor); 
}//close function

function getColoredModernTimes(){ 
    updateColors();
    var modedImage = getModernTimes();
    var newColor = updateColors();
    return modedImage.replace("fill=\"#ffffff\"", newColor); 
}//close function

function getColoredPass(){ 
    updateColors();
    var modedImage = getPass();
    var newColor = updateColors();
    return modedImage.replace("fill=\"#ffffff\"", newColor); 
}//close function

function getColoredFires(){ 
    updateColors();
    var modedImage = getFires();
    var newColor = updateColors();
    return modedImage.replace("fill=\"#ffffff\"", newColor); 
}//close function

function getColoredPainter(){ 
    updateColors();
    var modedImage = getPainter();
    var newColor = updateColors();
    return modedImage.replace("fill=\"#ffffff\"", newColor); 
}//close function

function getColoredJournals2(){ 
    updateColors();
    var modedImage = getJournals2();
    var newColor = updateColors();
    return modedImage.replace("fill=\"#ffffff\"", newColor); 
}//close function

function getColoredWizard(){ 
    updateColors();
    var modedImage = getWizard();
    var newColor = updateColors();
    return modedImage.replace("fill=\"#ffffff\"", newColor); 
}//close function

function getColoredManifest(){ 
    updateColors();
    var modedImage = getManifest();
    var newColor = updateColors();
    return modedImage.replace("fill=\"#ffffff\"", newColor); 
}//close function

function getColoredHorse(){ 
    updateColors();
    var modedImage = getHorse();
    var newColor = updateColors();
    return modedImage.replace("fill=\"#ffffff\"", newColor); 
}//close function

function getColoredCave(){ 
    updateColors();
    var modedImage = getCave();
    var newColor = updateColors();
    return modedImage.replace("fill=\"#ffffff\"", newColor); 
}//close function

function getColoredCave1(){ 
    updateColors();
    var modedImage = getCave1();
    var newColor = updateColors();
    return modedImage.replace("fill=\"#ffffff\"", newColor); 
}//close function

function getColoredCave2(){ 
    updateColors();
    var modedImage = getCave2();
    var newColor = updateColors();
    return modedImage.replace("fill=\"#ffffff\"", newColor); 
}//close function

function getColoredPepper(){ 
    updateColors();
    var modedImage = getPepper();
    var newColor = updateColors();
    return modedImage.replace("fill=\"#ffffff\"", newColor); 
}//close function