$(document).ready(function() {
    var _instructions       = $('#instructionsContent');
    var _buttons            = $('#btnsContent');
    var btnNext             = $('#btnNext');
    var btnStartSpace       = $('#btnStartSpace');
    var btnRestartSpace     = $('#btnRestartSpace');
    var btnStartPlane       = $('#btnStartPlane');
    var btnRestartPlane     = $('#btnRestartPlane');
    var btnStartTruck       = $('#btnStartTruck');
    var btnRestartTruck     = $('#btnRestartTruck');
    var btnStartUnicorn     = $('#btnStartUnicorn');
    var btnRestartUnicorn   = $('#btnRestartUnicorn');
    var _spaceBtn           = $('#spaceBtn');
    var _planeBtn           = $('#planeBtn');
    var _truckBtn           = $('#truckBtn');
    var _unicornBtn         = $('#unicornBtn');
    var _spacePuzzle        = $('#puzzle1');
    var _planePuzzle        = $('#puzzle2');
    var _truckPuzzle        = $('#puzzle3');
    var _unicornPuzzle      = $('#puzzle4');

    _buttons.hide();
    btnRestartSpace.hide();
    btnRestartPlane.hide();
    btnRestartTruck.hide();
    btnRestartUnicorn.hide();
    _spacePuzzle.hide();
    _planePuzzle.hide();
    _truckPuzzle.hide();
    _unicornPuzzle.hide();

    btnNext.click(function(event) {
        _instructions.hide();
        $(this).hide();
        _buttons.fadeIn(300).show('fast');
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: _buttons.offset().top
            }, 500);
        }, 180);
    });

    _spaceBtn.click(function(event) {
        _buttons.hide();
        _spacePuzzle.fadeIn(300).show('fast');
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: _spacePuzzle.offset().top
            }, 500);
        }, 180);
    });

    _planeBtn.click(function(event) {
        _buttons.hide();
        _planePuzzle.fadeIn(300).show('fast');
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: _planePuzzle.offset().top
            }, 500);
        }, 180);
    });

    _truckBtn.click(function(event) {
        _buttons.hide();
        _truckPuzzle.fadeIn(300).show('fast');
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: _truckPuzzle.offset().top
            }, 500);
        }, 180);
    });
    
    _unicornBtn.click(function(event) {
        _buttons.hide();
        _unicornPuzzle.fadeIn(300).show('fast');
        setTimeout(function() {
            $('html, body').animate({
                scrollTop: _unicornPuzzle.offset().top
            }, 500);
        }, 180);
    });



    $('.space-square').click(function(event) {
        $(this).find('.rotate-right').toggleClass('show-buttons');
        $(this).find('.rotate-left').toggleClass('show-buttons');
    });
});
