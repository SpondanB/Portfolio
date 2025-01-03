// set up text to print, each item in array is new line
var aText = new Array(
    "Hi, I am Spondan Bandyopadhyay.",
    "I am an aspiring data scientist, looking to getting to know about the latest technology and systems.",
    "Lets connect if you are interested in that kindof stuff"
);
var bText = new Array(
    "I am an aspiring data scientist, looking to getting to know about the latest technology and systems.",
    "Lets connect if you are interested in that kindof stuff.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum nemo fugiat tenetur quia quis quidem, perspiciatis, quos mollitia omnis numquam, amet consequatur harum incidunt corrupti in quisquam ratione assumenda quasi."
);
var iSpeed = 100; // time delay of print out
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
            setTimeout("typewriter()", 500);
        }
    } 
    else {
        setTimeout("typewriter()", iSpeed);
    }
}


typewriter();