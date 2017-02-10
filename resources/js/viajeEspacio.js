var backgr = {
    space   : '../resources/img/backgrounds/Back_Nave_espacial.jpg',
    plane   : '../resources/img/backgrounds/Back_Cielo.jpg',
    truck   : '../resources/img/backgrounds/Back_Carretera.jpg',
    unicorn : '../resources/img/backgrounds/Back_Unicornio.jpg'
}
var piece_backgr = {
    space   : '../resources/img/activity_espacio/puzzle_nave/Nave_',
    plane   : '../resources/img/activity_espacio/puzzle_avion/Avion_',
    truck   : '../resources/img/activity_espacio/puzzle_camioneta/Camioneta_',
    unicorn : '../resources/img/activity_espacio/puzzle_unicornio/Unicornio_',
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
        piece1: {state:1, degree: 0}, piece2: {state:1, degree: 0},
        piece3: {state:0, degree: 0}, piece4: {state:0, degree: 0},
        piece5: {state:0, degree: 0}, piece6: {state:1, degree: 0},
        piece7: {state:1, degree: 0}, piece8: {state:1, degree: 0}
    },
    plane: {
        piece1: {state:1, degree: 0}, piece2: {state:0, degree: 0},
        piece3: {state:0, degree: 0}, piece4: {state:0, degree: 0},
        piece5: {state:1, degree: 0}, piece6: {state:1, degree: 0},
        piece7: {state:1, degree: 0}, piece8: {state:1, degree: 0}
    },
    truck: {
        piece1: {state:1, degree: 0}, piece2: {state:1, degree: 0},
        piece3: {state:1, degree: 0}, piece4: {state:1, degree: 0},
        piece5: {state:1, degree: 0}, piece6: {state:1, degree: 0},
        piece7: {state:0, degree: 0}, piece8: {state:1, degree: 0}
    },
    unicorn: {
        piece1: {state:1, degree: 0}, piece2: {state:1, degree: 0},
        piece3: {state:1, degree: 0}, piece4: {state:1, degree: 0},
        piece5: {state:0, degree: 0}, piece6: {state:1, degree: 0},
        piece7: {state:1, degree: 0}, piece8: {state:1, degree: 0}
    }
}


$(document).ready(function() {
    var _instructions       = $('#instructionsContent');
    var _buttons            = $('#btnsContent');
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
    var _spaceBtn           = $('#spaceBtn');
    var _planeBtn           = $('#planeBtn');
    var _truckBtn           = $('#truckBtn');
    var _unicornBtn         = $('#unicornBtn');
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

    _buttons.hide();
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
        randomRotation('plane')
    });

    _truckBtn.click(function(event) {
        _buttons.hide();
        _truckPuzzle.fadeIn(300).show('fast');
        displayPuzzle(_truckPuzzle);
        changeBackground('truck');
        randomRotation('truck');
    });

    _unicornBtn.click(function(event) {
        _buttons.hide();
        _unicornPuzzle.fadeIn(300).show('fast');
        displayPuzzle(_unicornPuzzle);
        changeBackground('unicorn');
        randomRotation('unicorn');
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
        var _state          = _c_states[_puzzle][_piece].state;

        rotate(current_piece, _degree);
        if ( _degree == 0 && _state == 1) {
            focusPiece(current_piece);
        }
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
        var _degree         = _c_states[_puzzle][_piece].degree;
        var _state          = _c_states[_puzzle][_piece].state;

        rotate(current_piece, _degree);
        if ( _degree == 0 && _state == 1) {
            focusPiece(current_piece);
        }
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

    // Reveal Correct Position of pieces
    function focusPiece(piece) {
        var c_piece     = piece.split('_');
        var name_puzzle = c_piece[0];
        var id_piece    = c_piece[1];
        var num_piece   = extractNumber(id_piece);
        if (name_puzzle === 'truck') {
            $('#'+current_piece).css({
                'background': 'url('+piece_backgr[name_puzzle]+num_piece+'_on.png) no-repeat center',
                'display'   : 'inline-block',
                'background-size' : 'contain'
            });
        } else {
            $('#'+current_piece).css({
                'background': 'url('+piece_backgr[name_puzzle]+num_piece+'_on.svg) no-repeat center',
                'display'   : 'inline-block'
            });
        }

    }

    function unfocusPiece(puzzle) {
        var name_puzzle = puzzle;
        var index_piece = 1;
        for (var piece in _c_states[name_puzzle]) {
            $('#'+name_puzzle+'_piece'+index_piece).css({
                'background' : '',
                'display'    : ''
            });
            index_piece++;
        }
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

    function extractNumber(text) {
        var txt = text;
        var numb = txt.match(/\d/g);
            numb = numb.join("");
            numb = parseInt(numb);
        return numb;
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
        $(this).hide();
        puzzleSpace.removeClass('bbva-dnt');
        startTimer(firstTimer);
    });

    btnRestartSpace.click(function(event) {
        $(this).hide();
        puzzleSpace.removeClass('bbva-dnt');
        // Unfocus All Pieces
        unfocusPiece('space');
        // Restart All Pieces Rotation Randomly
        randomRotation('space');
        // Restart Puzzle Timer
        startTimer(firstTimer);
    });

    btnStartPlane.click(function(event) {
        $(this).hide();
        puzzlePlane.removeClass('bbva-dnt');
        startTimer(secondTimer);
    });

    btnRestartPlane.click(function(event) {
        $(this).hide();
        puzzlePlane.removeClass('bbva-dnt');
        // Unfocus All Pieces
        unfocusPiece('plane');
        // Restart All Pieces Rotation Randomly
        randomRotation('plane');
        // Restart Puzzle Timer
        startTimer(secondTimer);
    });

    btnStartTruck.click(function(event) {
        $(this).hide();
        puzzleTruck.removeClass('bbva-dnt');
        startTimer(thirdTimer);
    });

    btnRestartTruck.click(function(event) {
        $(this).hide();
        puzzleTruck.removeClass('bbva-dnt');
        // Unfocus All Pieces
        unfocusPiece('truck');
        // Restart All Pieces Rotation Randomly
        randomRotation('truck');
        // Restart Puzzle Timer
        startTimer(thirdTimer);
    });

    btnStartUnicorn.click(function(event) {
        $(this).hide();
        puzzleUnicorn.removeClass('bbva-dnt');
        startTimer(fourthTimer);
    });

    btnRestartUnicorn.click(function(event) {
        $(this).hide();
        puzzleUnicorn.removeClass('bbva-dnt');
        // Unfocus All Pieces
        unfocusPiece('unicorn');
        // Restart All Pieces Rotation Randomly
        randomRotation('unicorn');
        // Restart Puzzle Timer
        startTimer(fourthTimer);
    });

    // #! Start Timer dynamically
    function startTimer(_timer){
        _timer.start({
            countdown: true,
            startValues: {
                seconds: 30
            }
        });
    }
    // #! Stop Timer dynamically
    function stopTimer(_timer){
        _timer.stop();
    }

    // #! First Timer => Space Puzzle
    $('#firstTimer .values').html(firstTimer.getTimeValues().toString(['minutes', 'seconds']));
    firstTimer.addEventListener('secondsUpdated', function(e) {
        $('#firstTimer .values').html(firstTimer.getTimeValues().toString(['minutes', 'seconds']));
    });
    firstTimer.addEventListener('targetAchieved', function(e) {
        puzzleSpace.addClass('bbva-dnt');
        btnStartSpace.hide();
        btnRestartSpace.fadeIn(300).show();
    });

    // #! Second Timer => Plane Puzzle
    $('#secondTimer .values').html(secondTimer.getTimeValues().toString(['minutes', 'seconds']));
    secondTimer.addEventListener('secondsUpdated', function(e) {
        $('#secondTimer .values').html(secondTimer.getTimeValues().toString(['minutes', 'seconds']));
    });
    secondTimer.addEventListener('targetAchieved', function(e) {
        puzzlePlane.addClass('bbva-dnt')
        btnStartPlane.hide();
        btnRestartPlane.fadeIn(300).show();
    });

    // #! Third Timer => Truck Puzzle
    $('#thirdTimer .values').html(firstTimer.getTimeValues().toString(['minutes', 'seconds']));
    thirdTimer.addEventListener('secondsUpdated', function(e) {
        $('#thirdTimer .values').html(thirdTimer.getTimeValues().toString(['minutes', 'seconds']));
    });
    thirdTimer.addEventListener('targetAchieved', function(e) {
        puzzleTruck.addClass('bbva-dnt')
        btnStartTruck.hide();
        btnRestartTruck.fadeIn(300).show();
    });

    // #! Fourth Timer => Unicorn Puzzle
    $('#fourthTimer .values').html(firstTimer.getTimeValues().toString(['minutes', 'seconds']));
    fourthTimer.addEventListener('secondsUpdated', function(e) {
        $('#fourthTimer .values').html(fourthTimer.getTimeValues().toString(['minutes', 'seconds']));
    });
    fourthTimer.addEventListener('targetAchieved', function(e) {
        puzzleUnicorn.addClass('bbva-dnt')
        btnStartUnicorn.hide();
        btnRestartUnicorn.fadeIn(300).show();
    });

});
