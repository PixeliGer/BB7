var backgr = {
    space   : '../resources/img/backgrounds/Back_Nave_espacial.jpg',
    plane   : '../resources/img/backgrounds/Back_Cielo.jpg',
    truck   : '../resources/img/backgrounds/Back_Carretera.jpg',
    unicorn : '../resources/img/backgrounds/Back_Unicornio.jpg'
}
var vehicles = {
    ship    : '../resources/img/activity_space/Ico_inicio_nave.svg',
    plane   : '../resources/img/activity_space/Ico_inicio_avion.svg',
    unicorn : '../resources/img/activity_space/Ico_inicio_unicornio.svg'
}
var difficulty = 0,
    codes = [],
    arr = [],
    degreeArray = [90, 180, 270];

$(document).ready(function() {
    var instructions    = $('#instructionsContent'),
        // Containers
        btnsContent     = $('#btnsContent'),
        difContent      = $('#difContent'),
        codesContent    = $('#codesContent'),
        // Main Screen Buttons
        spaceBtn        = $('#spaceBtn'),
        planeBtn        = $('#planeBtn'),
        unicornBtn      = $('#unicornBtn');
        // Difficulty Buttons
        btnEasy         = $('#btnEasy'),
        btnMedium       = $('#btnMedium'),
        btnHard         = $('#btnHard'),
        btnNext         = $('#btnNext');

    btnsContent.hide();
    difContent.hide();
    codesContent.hide();

    btnNext.click(function(event) {
        instructions.hide();
        $(this).hide();
        btnsContent.fadeIn(300).show('fast');
        displayContainer(btnsContent);
    });

    spaceBtn.click(function(event) {
        btnsContent.hide();
        difContent.fadeIn(300).show('fast');
        displayContainer(difContent);
        changeBackground('space');
        changeVehicle('ship');
    });

    planeBtn.click(function(event) {
        btnsContent.hide();
        difContent.fadeIn(300).show('fast');
        displayContainer(difContent);
        changeBackground('plane');
        changeVehicle('plane');
    });

    unicornBtn.click(function(event) {
        btnsContent.hide();
        difContent.fadeIn(300).show('fast');
        displayContainer(difContent);
        changeBackground('unicorn');
        changeVehicle('unicorn');
    });

    // #! Difficulty
    btnEasy.click(function(event) {
        difContent.hide();
        codesContent.fadeIn(300).show('fast');
        displayContainer(codesContent);
        difficulty = 3;
        quitInputs();
        codeInputs(difficulty);
    });
    btnMedium.click(function(event) {
        difContent.hide();
        codesContent.fadeIn(300).show('fast');
        displayContainer(codesContent);
        difficulty = 6;
        quitInputs();
        codeInputs(difficulty);
    });
    btnHard.click(function(event) {
        difContent.hide();
        codesContent.fadeIn(300).show('fast');
        displayContainer(codesContent);
        difficulty = 9;
        quitInputs();
        codeInputs(difficulty);
    });

});

function changeBackground(img) {
    var _img = backgr[img];
    $('.puzzles-bckgr').css({
        'background'        : 'url('+_img+') no-repeat top fixed',
        'background-size'   : 'cover'
    });
}

function changeVehicle(img) {
    var _img = vehicles[img];
    $('#vehicle > img').attr('src', _img);
}

function codeInputs(difficulty){
    for (var i = 1; i <= difficulty; i++) {
        // Create DOM Object
        $('<input/>' , {
            'class': 'code-input',
            'id': 'code-' + i,
            'type': 'number',
            'maxlength': '1',
            'max': '9',
            'min': '0',
            'onkeypress':'return isNumeric(event)',
            'oninput':'maxLengthCheck(this)',
            on: {
                change: function (event) {
                    console.log(this.value);
                }
            }
        }).appendTo('.codes-row');
    }
}

function quitInputs() {
    $('.codes-row .code-input').remove();
}
function validateInputs() {
  $('.code-input').each(function() {
    if ( $(this).val() === '' ) {
      return false
    }
    else {
      return true;
    }
  });
}

var arr = $(".code-input").map(function(){
    return parseInt($(this).val());
}).toArray();

var is_same = codes.length == arr.length && codes.every(function(element, index) {
    return element === arr[index];
});
