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
    degreeArray = [90, 180, 270],
    degrees = 0,
    code_step = 1,
    win_points = 0, fail_points = 0;

$(document).ready(function() {
    var instructions    = $('#instructionsContent'),
        // Containers
        btnsContent     = $('#btnsContent'),
        difContent      = $('#difContent'),
        codesContent    = $('#codesContent'),
        finalsContent   = $('#finalsContent'),
        // Main Screen Buttons
        spaceBtn        = $('#spaceBtn'),
        planeBtn        = $('#planeBtn'),
        unicornBtn      = $('#unicornBtn');
        // Difficulty Buttons
        btnEasy         = $('#btnEasy'),
        btnMedium       = $('#btnMedium'),
        btnHard         = $('#btnHard'),
        btnNext         = $('#btnNext'),
        btnStart        = $('#btnStart'),
        btnContinue     = $('#btnContinue'),
        btnRestart      = $('button[id^="btnRestart"]'),
        btnClose        = $('button[id^="btnClose"]'),
        // Codes
        genCode         = $('#genCode'),
        userCode        = $('#userCode'),
        // Feedbacks
        mainFeed        = $('#mainFeed'),
        instFeed        = $('#instructionFeed'),
        failFeedA       = $('#failFeedA'),
        winFeedA        = $('#winFeedA'),
        // Radar Pointer
        pointer         = $('#pointer'),
        // Final Blocks
        finalSuccess    = $('#finalSuccess'),
        finalFail       = $('#finalFail');

    btnsContent.hide();
    difContent.hide();
    codesContent.hide();
    finalsContent.hide();
    btnContinue.hide();
    genCode.hide();
    userCode.hide();
    instFeed.hide();
    failFeedA.hide();
    winFeedA.hide();
    finalSuccess.hide();
    finalFail.hide();

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
        pointer.addClass('rocket-min');
    });

    planeBtn.click(function(event) {
        btnsContent.hide();
        difContent.fadeIn(300).show('fast');
        displayContainer(difContent);
        changeBackground('plane');
        changeVehicle('plane');
        pointer.addClass('plane-min');
    });

    unicornBtn.click(function(event) {
        btnsContent.hide();
        difContent.fadeIn(300).show('fast');
        displayContainer(difContent);
        changeBackground('unicorn');
        changeVehicle('unicorn');
        pointer.addClass('unicorn-min');
    });

    // #! Difficulty
    btnEasy.click(function(event) {
        difContent.hide();
        codesContent.fadeIn(300).show('fast');
        displayContainer(codesContent);
        difficulty = 3;
    });
    btnMedium.click(function(event) {
        difContent.hide();
        codesContent.fadeIn(300).show('fast');
        displayContainer(codesContent);
        difficulty = 6;
    });
    btnHard.click(function(event) {
        difContent.hide();
        codesContent.fadeIn(300).show('fast');
        displayContainer(codesContent);
        difficulty = 9;
    });

    // Start
    btnStart.click(function(event) {
        $(this).hide();
        btnContinue.fadeIn(300).show('fast').addClass('bbva-disable');
        mainFeed.hide();
        instFeed.fadeIn(300).show('fast');
        switchCodes();
        startTimer(codeTimer);
    });

    btnContinue.click(function(event) {
        $(this).addClass('bbva-disable');
        code_step++;
        hideAllFeeds();
        instFeed.fadeIn(300).show('fast');
        switchCodes();
    });

    btnRestart.click(function(event) {
        resetActivity();
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

function showCodes(difficulty) {
    for (var i = 1; i <= difficulty; i++) {
        $('<input/>',{
            'class': 'code-input bbva-dnt',
            'type': 'number',
            'maxlength': '1',
            'max': '9',
            'min': '0',
            'value': codes[i-1]
        }).appendTo('.codes-example');
    }
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
                    let isFilled = validateInputs();
                    if (isFilled) {
                        btnContinue.removeClass('bbva-disable');
                        userCode.hide();
                        instFeed.hide();
                        compareCodes() ? incrementPoints() : decrementPoints();
                    }
                }
            }
        }).appendTo('.codes-row');
    }
}

function sliceInputs() {
    var divs = $('.codes-row > .code-input');
    for(var i = 0; i < divs.length; i+=3) {
        divs.slice(i, i+3).wrapAll("<div class='codes-flex-block'></div>");
    }
}

function quitInputs() {
    $('.codes-row .code-input').remove();
}

function quitExample() {
    $('.codes-example .code-input').remove();
}

function validateInputs() {
    var isValid = true;
    $('.code-input').each(function() {
        if ( $(this).val() === '' )
        isValid = false;
    });
    return isValid;
}

function compareCodes() {
    var arr = $(".codes-row .code-input").map(function(){
        return parseInt($(this).val());
    }).toArray();

    var is_same = codes.length == arr.length && codes.every(function(element, index) {
        return element === arr[index];
    });

    console.log(is_same);
    return is_same;
}

function generateCodes(difficulty) {
    // Reset Codes Array
    codes = [];
    // Fill Codes Array
    for (var i = 0; i < difficulty; i++) {
        codes[i] = Math.floor(Math.random() * 9);
    }
    console.log(codes);
}


function switchCodes() {
    // Generate and Show Example Codes
    quitExample();
    genCode.fadeIn(300).show('fast');
    generateCodes(difficulty);
    showCodes(difficulty);

    setTimeout(function() {
        userCodes();
        genCode.hide();
        userCode.fadeIn(300).show('fast');
    }, 2000);
}

function userCodes() {
    quitInputs();
    codeInputs(difficulty);
    sliceInputs();
}

function hideAllFeeds(){
    $('#codesContent .fdbck-min').hide();
}

function incrementPoints() {
    win_points++;
    winFeedA.fadeIn(300).show('fast');
    if (win_points >= 3) {
        btnContinue.addClass('bbva-disable');
        stopTimer(codeTimer);
        $('#codesContent').hide();
        $('#finalsContent').fadeIn(300).show('fast');
        $('#finalSuccess').fadeIn(300).show('fast');
    }
}

function decrementPoints() {
    // :(
    fail_points++;
    degrees+=30;
    failFeedA.fadeIn(300).show('fast');
    pointer.css({
        'transform': 'rotate('+degrees+'deg)'
    });
    if (fail_points == 3) {
        btnContinue.addClass('bbva-disable');
        stopTimer(codeTimer);

        $('#codesContent').hide();
        $('#finalsContent').fadeIn(300).show('fast');
        $('#finalFail').fadeIn(300).show('fast');
    }
}

function resetActivity() {
    $('#finalsContent').hide();
    $('#codesContent').show();
    $('#codeTimer').text('00:60');
    // Reset Vars
    win_points  = 0;
    fail_points = 0;
    degrees     = 0;
    code_step   = 0;
    //
    $('#pointer').css({
        'transform': 'rotate('+degrees+'deg)'
    });
    // Hide Stuff
    hideAllFeeds();
    // Re-show instructions
    instFeed.fadeIn(300).show('fast');
    // Re-show Buttons
    btnStart.fadeIn(300).show('fast');
    btnContinue.hide();
}

// Timer
var codeTimer = new Timer();
// #! First Timer => Space Puzzle
$('#codeTimer .values').html(codeTimer.getTimeValues().toString(['minutes', 'seconds']));
codeTimer.addEventListener('secondsUpdated', function(e) {
    $('#codeTimer .values').html(codeTimer.getTimeValues().toString(['minutes', 'seconds']));
});
codeTimer.addEventListener('targetAchieved', function(e) {
    if (win_points >= 3) {
        btnContinue.addClass('bbva-disable');
        stopTimer(codeTimer);
        $('#codesContent').hide();
        $('#finalsContent').fadeIn(300).show('fast');
        $('#finalSuccess').fadeIn(300).show('fast');
    }
    btnContinue.addClass('bbva-disable');
});

// #! Start Timer dynamically
function startTimer(_timer){
    _timer.start({
        countdown: true,
        startValues: {
            seconds: 60
        }
    });
}
// #! Stop Timer dynamically
function stopTimer(_timer){
    _timer.stop();
}
