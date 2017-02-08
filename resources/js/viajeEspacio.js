/*
* Default Piece Status,
* Puzzle Solution Arrays
*/
var _states = {
    space: {
        piece1: {state:0, degree: 0}, piece2: {state:0, degree: 0},
        piece3: {state:0, degree: 0}, piece4: {state:0, degree: 0},
        piece5: {state:0, degree: 0}, piece6: {state:0, degree: 0},
        piece7: {state:0, degree: 0}, piece8: {state:0, degree: 0}
    },
    plane: {
        piece1: {state:0, degree: 0}, piece2: {state:0, degree: 0},
        piece3: {state:0, degree: 0}, piece4: {state:0, degree: 0},
        piece5: {state:0, degree: 0}, piece6: {state:0, degree: 0},
        piece7: {state:0, degree: 0}, piece8: {state:0, degree: 0}
    },
    truck: {
        piece1: {state:0, degree: 0}, piece2: {state:0, degree: 0},
        piece3: {state:0, degree: 0}, piece4: {state:0, degree: 0},
        piece5: {state:0, degree: 0}, piece6: {state:0, degree: 0},
        piece7: {state:0, degree: 0}, piece8: {state:0, degree: 0}
    },
    unicorn: {
        piece1: {state:0, degree: 0}, piece2: {state:0, degree: 0},
        piece3: {state:0, degree: 0}, piece4: {state:0, degree: 0},
        piece5: {state:0, degree: 0}, piece6: {state:0, degree: 0},
        piece7: {state:0, degree: 0}, piece8: {state:0, degree: 0}
    }
}
// Current Piece States
var _c_states = {
    space: {
        piece1: {state:0, degree: 0}, piece2: {state:0, degree: 0},
        piece3: {state:0, degree: 0}, piece4: {state:0, degree: 0},
        piece5: {state:0, degree: 0}, piece6: {state:0, degree: 0},
        piece7: {state:0, degree: 0}, piece8: {state:0, degree: 0}
    },
    plane: {
        piece1: {state:0, degree: 0}, piece2: {state:0, degree: 0},
        piece3: {state:0, degree: 0}, piece4: {state:0, degree: 0},
        piece5: {state:0, degree: 0}, piece6: {state:0, degree: 0},
        piece7: {state:0, degree: 0}, piece8: {state:0, degree: 0}
    },
    truck: {
        piece1: {state:0, degree: 0}, piece2: {state:0, degree: 0},
        piece3: {state:0, degree: 0}, piece4: {state:0, degree: 0},
        piece5: {state:0, degree: 0}, piece6: {state:0, degree: 0},
        piece7: {state:0, degree: 0}, piece8: {state:0, degree: 0}
    },
    unicorn: {
        piece1: {state:0, degree: 0}, piece2: {state:0, degree: 0},
        piece3: {state:0, degree: 0}, piece4: {state:0, degree: 0},
        piece5: {state:0, degree: 0}, piece6: {state:0, degree: 0},
        piece7: {state:0, degree: 0}, piece8: {state:0, degree: 0}
    }
}

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

    /*
    * Rotation Buttons, catch every puzzle piece dynamically
    *
    */

    $('.rotate-right').click(function(event) {
        var current_piece   = $(this).siblings('.puzzle-piece').attr('id');
        var _current        = current_piece.split('_');
        var _puzzle         = _current[0];
        var _piece          = _current[1];
        //
        _c_states[_puzzle][_piece].degree += 90;
        _c_states[_puzzle][_piece].degree == 360 ? _c_states[_puzzle][_piece].degree = 0 : _c_states[_puzzle][_piece].degree = _c_states[_puzzle][_piece].degree;
        //
        var _degree         = _c_states[_puzzle][_piece].degree;

        rotate(current_piece, _degree);
    });

    $('.rotate-left').click(function(event) {
        var current_piece   = $(this).siblings('.puzzle-piece').attr('id');
        var _current        = current_piece.split('_');
        var _puzzle         = _current[0];
        var _piece          = _current[1];
        //
        _c_states[_puzzle][_piece].degree -= 90;
        _c_states[_puzzle][_piece].degree == (-360) ? _c_states[_puzzle][_piece].degree = 0 : _c_states[_puzzle][_piece].degree = _c_states[_puzzle][_piece].degree;
        //
        var _degree = _c_states[_puzzle][_piece].degree;

        rotate(current_piece, _degree);
    });

    $('.space-square').click(function(event) {
        /*
          #! Deselect all Pieces but current
          #! Select Class for current Piece
          #! Show Rotate buttons
        */
        $(this).find('.rotate-right').toggleClass('show-buttons');
        $(this).find('.rotate-left').toggleClass('show-buttons');
    });

    function rotate(piece, degree){
        current_piece   = piece;
        _degree         = degree;

        $('#'+current_piece).css({
            '-moz-transform'    : 'rotate('+_degree+'deg)',
            '-webkit-transform' : 'rotate('+_degree+'deg)',
            'transform'         : 'rotate('+_degree+'deg)'
        });
        // Compare Array states => Piece ON Class
    }
});
