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

var degreeArray = [90, 180, 270];

$(document).ready(function() {
    var instructions       = $('#instructionsContent');
    var buttons            = $('#btnsContent');
    var btnNext             = $('#btnNext');
    // Main Start/Restart Buttons
    var btnStartSpace       = $('#btnStartSpace');
    var btnRestartSpace     = $('#btnRestartSpace');
    var btnStartPlane       = $('#btnStartPlane');
    var btnRestartPlane     = $('#btnRestartPlane');
    var btnStartTruck       = $('#btnStartTruck');
    var btnRestartTruck     = $('#btnRestartTruck');
    var btnStartUnicorn     = $('#btnStartUnicorn');
    var btnRestartUnicorn   = $('#btnRestartUnicorn');
    // Main Screen Buttons
    var spaceBtn           = $('#spaceBtn');
    var planeBtn           = $('#planeBtn');
    var unicornBtn         = $('#unicornBtn');
    // Main Puzzle Containers
    var _spacePuzzle        = $('#puzzle1');
    var _planePuzzle        = $('#puzzle2');
    var _truckPuzzle        = $('#puzzle3');
    var _unicornPuzzle      = $('#puzzle4');
    // Puzzle Grid Boards
    var puzzleSpace         = $('#space_puzzle');
    var puzzlePlane         = $('#plane_puzzle');
    var puzzleTruck         = $('#truck_puzzle');
    var puzzleUnicorn       = $('#unicorn_puzzle');

    buttons.hide();
    btnRestartSpace.hide();
    btnRestartPlane.hide();
    btnRestartTruck.hide();
    btnRestartUnicorn.hide();
    // Hide Main Puzzle Containers
    _spacePuzzle.hide();
    _planePuzzle.hide();
    _truckPuzzle.hide();
    _unicornPuzzle.hide();
    // Disable Puzzle Grid Boards
    puzzleSpace.addClass('bbva-dnt');
    puzzlePlane.addClass('bbva-dnt');
    puzzleTruck.addClass('bbva-dnt');
    puzzleUnicorn.addClass('bbva-dnt');

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
        _spacePuzzle.fadeIn(300).show('fast');
        displayPuzzle(_spacePuzzle);
        changeBackground('space');
        changeVehicle('ship');
    });

    planeBtn.click(function(event) {
        buttons.hide();
        _planePuzzle.fadeIn(300).show('fast');
        displayPuzzle(_planePuzzle);
        changeBackground('plane');
        changeVehicle('plane');
    });

    unicornBtn.click(function(event) {
        buttons.hide();
        _unicornPuzzle.fadeIn(300).show('fast');
        displayPuzzle(_unicornPuzzle);
        changeBackground('unicorn');
        changeVehicle('unicorn');
    });

    // Display and Animate Puzzle or Container dynamically
    function displayPuzzle(puzzle){
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: puzzle.offset().top
            }, 500);
        }, 180);
    }

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

    function extractNumber(text) {
        var txt = text;
        var numb = txt.match(/\d/g);
            numb = numb.join("");
            numb = parseInt(numb);
        return numb;
    }


});
