var backgr = {
    space   : '../resources/img/backgrounds/Back_Nave_espacial.jpg',
    plane   : '../resources/img/backgrounds/Back_Cielo.jpg',
    truck   : '../resources/img/backgrounds/Back_Carretera.jpg',
    unicorn : '../resources/img/backgrounds/Back_Unicornio.jpg'
}
var degreeArray = [90, 180, 270];
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
    var puzzleSpace         = $('#space_puzzle');

    _buttons.hide();
    btnRestartSpace.hide();
    btnRestartPlane.hide();
    btnRestartTruck.hide();
    btnRestartUnicorn.hide();
    _spacePuzzle.hide();
    _planePuzzle.hide();
    _truckPuzzle.hide();
    _unicornPuzzle.hide();

    puzzleSpace.addClass('bbva-dnt');

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
        displayPuzzle(_spacePuzzle);
        changeBackground('space');
        randomRotation('space');
    });

    _planeBtn.click(function(event) {
        _buttons.hide();
        _planePuzzle.fadeIn(300).show('fast');
        displayPuzzle(_planePuzzle);
        changeBackground('plane');
    });

    _truckBtn.click(function(event) {
        _buttons.hide();
        _truckPuzzle.fadeIn(300).show('fast');
        displayPuzzle(_truckPuzzle);
        changeBackground('truck');
    });

    _unicornBtn.click(function(event) {
        _buttons.hide();
        _unicornPuzzle.fadeIn(300).show('fast');
        displayPuzzle(_unicornPuzzle);
        changeBackground('unicorn');
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

    /*
        Space Puzzle Pieces
    */
    $('.space-square').click(function(event) {
        // Reset Selected Class in all Pieces
        resetSelected('.space-square');
        // Catch current Piece
        var currentSelected = $(this).attr('id');
        if ($(this).hasClass('relevant')) {
            // Remove Selected Class in Current Piece
            removeSelected(currentSelected);
            //
            $(this).removeClass('relevant')
        } else {
            // #! Reset RELEVANT Class for all Pieces
            $('div.space-square').removeClass('relevant');
            // #! Add RELEVANT Class to this element
            $(this).addClass('relevant');
            // Add Class to make Selected
            addSelected(currentSelected);
        }
    }).children('.rotate-btn').click(function(e) {
        return false;
    });
    /*
        Plane Puzzle Pieces
    */
    $('.plane-square').click(function(event) {
        // Reset Selected Class in all Pieces
        resetSelected('.plane-square');
        // Catch current Piece
        var currentSelected = $(this).attr('id');
        if ($(this).hasClass('relevant')) {
            // Remove Selected Class in Current Piece
            removeSelected(currentSelected);
            //
            $(this).removeClass('relevant')
        } else {
            // #! Reset RELEVANT Class for all Pieces
            $('div.plane-square').removeClass('relevant');
            // #! Add RELEVANT Class to this element
            $(this).addClass('relevant');
            // Add Class to make Selected
            addSelected(currentSelected);
        }
    }).children('.rotate-btn').click(function(e) {
        return false;
    });
    /*
        Truck Puzzle Pieces
    */
    $('.truck-square').click(function(event) {
        // Reset Selected Class in all Pieces
        resetSelected('.truck-square');
        // Catch current Piece
        var currentSelected = $(this).attr('id');
        if ($(this).hasClass('relevant')) {
            // Remove Selected Class in Current Piece
            removeSelected(currentSelected);
            //
            $(this).removeClass('relevant')
        } else {
            // #! Reset RELEVANT Class for all Pieces
            $('div.truck-square').removeClass('relevant');
            // #! Add RELEVANT Class to this element
            $(this).addClass('relevant');
            // Add Class to make Selected
            addSelected(currentSelected);
        }
    }).children('.rotate-btn').click(function(e) {
        return false;
    });

    /*
        Unicorn Puzzle Pieces
    */
    $('.unicorn-square').click(function(event) {
        // Reset Selected Class in all Pieces
        resetSelected('.unicorn-square');
        // Catch current Piece
        var currentSelected = $(this).attr('id');
        if ($(this).hasClass('relevant')) {
            // Remove Selected Class in Current Piece
            removeSelected(currentSelected);
            //
            $(this).removeClass('relevant')
        } else {
            // #! Reset RELEVANT Class for all Pieces
            $('div.unicorn-square').removeClass('relevant');
            // #! Add RELEVANT Class to this element
            $(this).addClass('relevant');
            // Add Class to make Selected
            addSelected(currentSelected);
        }
    }).children('.rotate-btn').click(function(e) {
        return false;
    });



    function resetSelected(piece_class) {
        $('div'+piece_class).removeClass('piece-selected');
        $('div'+piece_class).find('.rotate-btn').hide();
    }

    function removeSelected(currentSelected) {
        $('#'+currentSelected).removeClass('piece-selected');
        $('#'+currentSelected).find('.rotate-btn').fadeOut(300).hide();
    }

    function addSelected(currentSelected) {
        $('#'+currentSelected).addClass('piece-selected');
        $('#'+currentSelected).find('.rotate-btn').fadeIn(300).show();
    }

    // Rotate Pieces
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

    // Randomly rotate each piece in Current Puzzle
    function randomRotation(puzzle){
        var index = 1;
        for (var piece in _c_states[puzzle]) {
            var degree = degreeArray[Math.floor(Math.random() * degreeArray.length)];
            // DOM puzzle-piece
            _piece = (puzzle +'_piece'+ index);
            // Current States degree
            (_c_states[puzzle])[piece].degree = degree;
            // Rotate dynamically
            rotate(_piece, degree);
            // Increment aux index
            index++;
        }
    }

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

    /*
    * # # # # # # # # # # #
    * TIMERS SECTION
    * # # # # # # # # # # #
    */

    var firstTimer = new Timer();
    var secondTimer = new Timer();
    var thirdTimer = new Timer();
    var fourthTimer = new Timer();

    btnStartSpace.click(function(event) {
        puzzleSpace.removeClass('bbva-dnt');
        startFirst();
    });
    btnRestartSpace.click(function(event) {
        puzzleSpace.removeClass('bbva-dnt');
        randomRotation('space');
        startFirst();
    });

    function startFirst() {
        firstTimer.start({
            countdown: true,
            startValues: {
                seconds: 30
            }
        });
    }

    // #! First Timer => Space Puzzle
    $('#firstTimer .values').html(firstTimer.getTimeValues().toString(['minutes', 'seconds']));
    firstTimer.addEventListener('secondsUpdated', function(e) {
        $('#firstTimer .values').html(firstTimer.getTimeValues().toString(['minutes', 'seconds']));
    });
    secondTimer.addEventListener('targetAchieved', function(e) {
        puzzleSpace.addClass('bbva-dnt')
        btnStartSpace.hide();
        btnRestartSpace.fadeIn(300).show();
    });

    // #! Second Timer => Plane Puzzle
    $('#secondTimer .values').html(secondTimer.getTimeValues().toString(['minutes', 'seconds']));
    secondTimer.addEventListener('secondsUpdated', function(e) {
        $('#secondTimer .values').html(secondTimer.getTimeValues().toString(['minutes', 'seconds']));
    });
    secondTimer.addEventListener('targetAchieved', function(e) {
        puzzleSpace.addClass('bbva-dnt')
        btnStartSpace.hide();
        btnRestartSpace.fadeIn(300).show();
    });

    // #! Third Timer => Truck Puzzle
    $('#firstTimer .values').html(firstTimer.getTimeValues().toString(['minutes', 'seconds']));
    firstTimer.addEventListener('secondsUpdated', function(e) {
        $('#firstTimer .values').html(firstTimer.getTimeValues().toString(['minutes', 'seconds']));
    });
    firstTimer.addEventListener('targetAchieved', function(e) {
        puzzleSpace.addClass('bbva-dnt')
        btnStartSpace.hide();
        btnRestartSpace.fadeIn(300).show();
    });

    // #! Fourth Timer => Unicorn Puzzle
    $('#firstTimer .values').html(firstTimer.getTimeValues().toString(['minutes', 'seconds']));
    firstTimer.addEventListener('secondsUpdated', function(e) {
        $('#firstTimer .values').html(firstTimer.getTimeValues().toString(['minutes', 'seconds']));
    });secondTimer
    firstTimer.addEventListener('targetAchieved', function(e) {
        puzzleSpace.addClass('bbva-dnt')
        btnStartSpace.hide();
        btnRestartSpace.fadeIn(300).show();
    });

});
