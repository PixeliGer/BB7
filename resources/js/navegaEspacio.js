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
    var instructions        = $('#instructionsContent'),
        buttons             = $('#btnsContent'),
        btnNext             = $('#btnNext'),
        // Main Start/Restart Buttons
        btnStartSpace       = $('#btnStartSpace'),
        btnRestartSpace     = $('#btnRestartSpace'),
        btnStartPlane       = $('#btnStartPlane'),
        btnRestartPlane     = $('#btnRestartPlane'),
        btnStartTruck       = $('#btnStartTruck'),
        btnRestartTruck     = $('#btnRestartTruck'),
        btnStartUnicorn     = $('#btnStartUnicorn'),
        btnRestartUnicorn   = $('#btnRestartUnicorn'),
        // Main Screen Buttons
        spaceBtn            = $('#spaceBtn'),
        planeBtn            = $('#planeBtn'),
        unicornBtn          = $('#unicornBtn');
        // Difficulty Buttons
        btnEasy             = $('#btnEasy'),
        btnMedium           = $('#btnMedium'),
        btnHard             = $('#btnHard');

    buttons.hide();
    btnRestartSpace.hide();
    btnRestartPlane.hide();
    btnRestartTruck.hide();
    btnRestartUnicorn.hide();

    btnNext.click(function(event) {
        instructions.hide();
        $(this).hide();
        buttons.fadeIn(300).show('fast');
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: buttons.offset().top
            }, 500);
        }, 180);
    });

    spaceBtn.click(function(event) {
        buttons.hide();
        changeBackground('space');
        changeVehicle('ship');
    });

    planeBtn.click(function(event) {
        buttons.hide();
        changeBackground('plane');
        changeVehicle('plane');
    });

    unicornBtn.click(function(event) {
        buttons.hide();
        changeBackground('unicorn');
        changeVehicle('unicorn');
    });

    // #! Difficulty
    btnEasy.click(function(event) {
        difficulty = 3;
        quitInputs();
        codeInputs(difficulty);
    });
    btnMedium.click(function(event) {
        difficulty = 6;
        quitInputs();
        codeInputs(difficulty);
    });
    btnHard.click(function(event) {
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
