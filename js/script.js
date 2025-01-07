// set up text to print, each item in array is new line
var aText = new Array(
    "Hi, I am Spondan Bandyopadhyay.",
    "I am a Computer Science graduate with a strong passion for Data Science, AI and ML.",
    "I'm always learning about new developments in these areas and would love to connect with others interested in using data and AI to solve real-world problems!"
);
var bText = new Array(
    "Hi, I am Spondan Bandyopadhyay.",
    "I am a Computer Science graduate with a strong passion for Data Science, Artificial Intelligence and Machine Learning.",
    "I’m constantly exploring new advancements in these fields and am excited to connect with others who share an interest in leveraging data and AI to solve real-world problems!"
);
var iSpeed = 60; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var jArrLength = bText[0].length;
var iScrollAt = 20; // start scrolling up at this many lines
    
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
    
function typewriter()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("main-typed-text");
    
    while ( iRow < iIndex ) {
        sContents += aText[iRow++] + '<br /><br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength ) {
        iTextPos = 0;
        iIndex++;
        if ( iIndex != aText.length ) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 250);
        }
    } 
    else {
        setTimeout("typewriter()", iSpeed);
    }
}


typewriter();