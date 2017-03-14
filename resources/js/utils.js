$(document).ready(function() {
    console.log("utils ready");

});

// Display and Animate Puzzle or Container dynamically
function displayContainer(container){
    setTimeout(function() {
        $('html, body').animate({
            scrollTop: container.offset().top
        }, 500);
    }, 180);
}

function extractNumber(text) {
    var txt = text;
    var numb = txt.match(/\d/g);
        numb = numb.join("");
        numb = parseInt(numb);
    return numb;
}

function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
    object.value = object.value.slice(0, object.maxLength);
}

function isNumeric (evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode (key);
    var regex = /[0-9]|\./;
    if ( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
}
