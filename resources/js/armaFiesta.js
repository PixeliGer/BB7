var _partyStuff = [
    {name: 'pizza', text: "Pizza", price_first: 80, price_second: 240, price_third: 400, _class: 'item-pizza'},
    {name: 'agua', text: "Agua", price_first: 10, price_second: 30, price_third: 50, _class: 'item-agua'},
    {name: 'globos', text: "Globos", price_first: 10, price_second: 30, price_third: 50, _class: 'item-globos'},
    {name: 'platos', text: "Platos", price_first: 5, price_second: 15, price_third: 25, _class: 'item-platos'},
    {name: 'musica', text: "Música", price_first: 50, price_second: 150, price_third: 250, _class: 'item-musica'},
];
var _tb = {
    pizza  : { _r1: 0,_r2: 0,_r3: 0 },
    agua   : { _r1: 0,_r2: 0,_r3: 0 },
    globos : { _r1: 0,_r2: 0,_r3: 0 },
    platos : { _r1: 0,_r2: 0,_r3: 0 },
    musica : { _r1: 0,_r2: 0,_r3: 0 }
}
var _budget = {
    _first  : 100,
    _second : 300,
    _third  : 500,
    _r1_budget : 0,
    _r2_budget : 0,
    _r3_budget : 0
}
var finalItems = [];
var itemsFirst = new Array();
itemsFirst.pizza = [];
itemsFirst.agua = {};
itemsFirst.globos = {};
itemsFirst.platos = {};
itemsFirst.musica = {};
var itemsSecond = new Array();
var itemsThird = new Array();

var CRRNT_RND;

var _prty_item = '';
var pos_x = 0, item_i = 0;


$(document).ready(function() {
    // Auto-numeric
    $('.auto').autoNumeric('init');
    //
    var _firstCnt       = $('#firstCnt'),
        _firstRound     = $('#round1'),
        _secondRound    = $('#round2'),
        _thirdRound     = $('#round3'),
        _resultsCnt     = $('#resultsCnt'),
        btnStart        = $('#btnStart'),
        btnSecondR      = $('#btnSecondR'),
        btnThirdR       = $('#btnThirdR'),
        btnResults      = $('#btnResults'),
        firstFeed       = $('#firstFeed'),
        secondFeed      = $('#secondFeed'),
        thirdFeed       = $('#thirdFeed'),
        cntFinals       = $('#cntFinals'),
        firstBudget     = $('#firstBudget'),
        secondBudget    = $('#secondBudget'),
        thirdBudget     = $('#thirdBudget');
    //
    _firstRound.hide();
    _secondRound.hide();
    _thirdRound.hide();
    _resultsCnt.hide();
    btnSecondR.hide();
    btnThirdR.hide();
    firstFeed.hide();
    secondFeed.hide();
    thirdFeed.hide();
    cntFinals.hide();
    //
    firstBudget.text('$'+_budget._first);
    secondBudget.text('$'+_budget._second);
    thirdBudget.text('$'+_budget._third);

    btnStart.click(function(event) {
        _firstCnt.hide('fast');
        //
        _firstRound.fadeIn(300).show('fast');
        displayContainer(_firstRound);
        CRRNT_RND = 'round1';
    });

    btnSecondR.click(function(event) {
        _firstRound.hide('fast');
        _secondRound.fadeIn(300).show('fast');
        displayContainer(_secondRound);
        CRRNT_RND = 'round2';
        pos_x = 0;
        $('.input-fiesta').removeClass('bbva-disable');
    });

    btnThirdR.click(function(event) {
        _secondRound.hide('fast');
        _thirdRound.fadeIn(300).show('fast');
        displayContainer(_thirdRound);
        CRRNT_RND = 'round3';
        pos_x = 0;
        $('.input-fiesta').removeClass('bbva-disable');
    });

    btnResults.click(function(event) {
        _thirdRound.hide('fast');
        _resultsCnt.fadeIn(300).show('fast');
        displayContainer(_resultsCnt);
        setFinalItems();
    });

    $('.input-fiesta').each(function() {
        $(this).change(function(event) {
            if (this.value === undefined || this.value === "" ) {
                this.value = 0;
            }
            var _prty_item  = $(this).attr('id'),
                item        = _prty_item.split('_'),
                _name       = item[0],
                _round      = "_"+item[1],
                _value      = parseInt(this.value),
                _ammount    = obtainAmmount(_prty_item),
                _pitem      = (_value * _ammount);
            console.log(_pitem);
            //

            _tb[_name][_round] = _value;

            updateResults();

            if (CRRNT_RND === 'round1') {
                //
                if ( (_budget._r1_budget) <= _budget._first ) {
                    _tb[_name][_round] = _value;
                    fillItems(_prty_item);

                    if ((_budget._r1_budget) == _budget._first) {
                        firstFeed.fadeIn(300).show('fast');
                        btnSecondR.fadeIn(300).show('fast');
                        displayContainer(firstFeed);
                        $('.input-fiesta').addClass('bbva-disable');
                    }
                    // Update Budget and all item vars
                    updateResults();
                } else{
                    // Decrease value if can't add
                    _tb[_name][_round] = 0;
                    fillItems(_prty_item);
                    $(this).val(_tb[_name][_round]);
                    // Update Budget and all item vars
                    updateResults();

                    alertify.error('No tienes suficiente dinero para comprar más artículos');
                }
            }
            else if (CRRNT_RND === 'round2') {
                //
                if ( (_budget._r2_budget) <= _budget._second ) {
                    _tb[_name][_round] = _value;
                    fillItems(_prty_item);

                    if ((_budget._r2_budget) == _budget._second) {
                        secondFeed.fadeIn(300).show('fast');
                        btnThirdR.fadeIn(300).show('fast');
                        displayContainer(secondFeed);
                        $('.input-fiesta').addClass('bbva-disable');
                    }
                    // Update Budget and all item vars
                    updateResults();
                } else{
                    // Decrease value if can't add
                    _tb[_name][_round] = 0;
                    fillItems(_prty_item);
                    $(this).val(_tb[_name][_round]);
                    // Update Budget and all item vars
                    updateResults();
                    alertify.error('No tienes suficiente dinero para comprar más artículos');
                }
            }
            else if (CRRNT_RND === 'round3') {
                //
                if ( (_budget._r3_budget) <= _budget._third ) {
                    _tb[_name][_round] = _value;
                    fillItems(_prty_item);

                    if ((_budget._r3_budget) == _budget._third) {
                        thirdFeed.fadeIn(300).show('fast');
                        cntFinals.fadeIn(300).show('fast');
                        displayContainer(thirdFeed);
                        $('.input-fiesta').addClass('bbva-disable');
                    }
                    // Update Budget and all item vars
                    updateResults();
                } else{
                    // Decrease value if can't add
                    _tb[_name][_round] = 0
                    fillItems(_prty_item)
                    $(this).val(_tb[_name][_round]);
                    // Update Budget and all item vars
                    updateResults();
                    alertify.error('No tienes suficiente dinero para comprar más artículos');
                }
            }

        });
    });
});

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

function obtainAmmount(_prty_item) {
    var item = _prty_item.split('_');
    var _name = item[0];
    var _round = "_"+item[1];
    var _price = 0;

    for (var pitem in _partyStuff) {
        if (_round === '_r1') {
            if(_partyStuff[pitem].name === _name){
                _price = _partyStuff[pitem].price_first;
            }
        } else if (_round === '_r2') {
            if(_partyStuff[pitem].name === _name){
                _price = _partyStuff[pitem].price_second;
            }
        } else if (_round ===  '_r3') {
            if(_partyStuff[pitem].name === _name){
                _price = _partyStuff[pitem].price_third;
            }
        }
    }

    return _price;

}

function updateResults() {
    var results = AddResults();
    _budget._r1_budget = results.res1;
    _budget._r2_budget = results.res2;
    _budget._r3_budget = results.res3;

    // Print Budget Results
    $('#firstRound').text('$'+ (_budget._first - _budget._r1_budget) );
    $('#secondRound').text('$'+ (_budget._second - _budget._r2_budget) );
    $('#thirdRound').text('$'+ (_budget._third - _budget._r3_budget) );

}

function AddResults(){
    //
    normalizeValues();
    var _res1 = 0,
        _res2 = 0,
        _res3 = 0;
    //#! First Round Values
    $pizza_1 = (_tb.pizza._r1 * _partyStuff[0].price_first);
    $agua_1   = (_tb.agua._r1 * _partyStuff[1].price_first);
    $globos_1 = (_tb.globos._r1 * _partyStuff[2].price_first);
    $platos_1 = (_tb.platos._r1 * _partyStuff[3].price_first);
    $musica_1 = (_tb.musica._r1 * _partyStuff[4].price_first);
    //
    _res1 = $pizza_1 + $agua_1 + $globos_1 + $platos_1 + $musica_1;

    // #! Second Round Values
    $pizza_2  = (_tb.pizza._r2 * _partyStuff[0].price_second);
    $agua_2   = (_tb.agua._r2 * _partyStuff[1].price_second);
    $globos_2 = (_tb.globos._r2 * _partyStuff[2].price_second);
    $platos_2 = (_tb.platos._r2 * _partyStuff[3].price_second);
    $musica_2 = (_tb.musica._r2 * _partyStuff[4].price_second);

    _res2 = $pizza_2 + $agua_2 + $globos_2 + $platos_2 + $musica_2;

    // #! Third Round Values
    $pizza_3 = (_tb.pizza._r3 * _partyStuff[0].price_third);
    $agua_3 = (_tb.agua._r3 * _partyStuff[1].price_third);
    $globos_3 = (_tb.globos._r3 * _partyStuff[2].price_third);
    $platos_3 = (_tb.platos._r3 * _partyStuff[3].price_third);
    $musica_3 = (_tb.musica._r3 * _partyStuff[4].price_third);

    _res3 = $pizza_3  + $agua_3 + $globos_3 + $platos_3 + $musica_3

    return {
        res1: _res1,
        res2: _res2,
        res3: _res3
    }
}

function normalizeValues(){
    for (var item in _tb) {
        _item = _tb[item];
        for (var round in _item) {
            if (isNaN(_item[round])) {
                _item[round] = 0;
            }
        }
    }
}

/*
    This create/remove elements in DOM
    Add/Remove elements from Final Arrays
*/
function fillItems(_prty_item, _value){
    // Catch a DOM id (from inputs) and use for making stuff
    var $item   = _prty_item.split("_"),
        _name   = $item[0],
        _round  = "_"+$item[1];
    //
    if (_tb[_name][_round] < 1) {
        $('#mesa'+_round).find( $('[id*="'+_name+'"]') ).remove();
        // Initial position in Table
        pos_x == 0 ? pos_x = 0 : pos_x-=40;

        removeFinalItem(_name, _round);
    }
    else if (_tb[_name][_round] >= 1) {
            // Increment Position Axis-X and set
            addFinalItem(_name, _round);

            if (CRRNT_RND == 'round1') {
                // Reset number of items and Position
                $('#mesa'+_round).children().remove();
                pos_x = 0;
                // Explore added First Items and populate  Party Table
                for (var item in itemsFirst) {
                    let partyitem = itemsFirst[item];
                    for (var element in partyitem) {
                        pos_x+=40;
                        $('<div/>' , {
                            'class': 'mesa-item-cnt item-'+partyitem[element].name,
                            'id': 'mesa-'+partyitem[element].id,
                            css: {
                                'left': pos_x
                            }
                        }).appendTo('#mesa'+_round);
                    }
                }
            } else if (CRRNT_RND == 'round2') {
                // Reset number of items and Position
                $('#mesa'+_round).children().remove();
                pos_x = 0;
                // Explore added First Items and populate  Party Table
                for (var item in itemsSecond) {
                    let partyitem = itemsSecond[item];
                    for (var element in partyitem) {
                        $('<div/>' , {
                            'class': 'mesa-item-cnt item-'+partyitem[element].name,
                            'id': 'mesa-'+partyitem[element].id
                        }).appendTo('#mesa'+_round);
                    }
                }
            } else if (CRRNT_RND == 'round3') {
                // Reset number of items and Position
                $('#mesa'+_round).children().remove();
                pos_x = 0;
                // Explore added First Items and populate  Party Table
                for (var item in itemsThird) {
                    let partyitem = itemsThird[item];
                    for (var element in partyitem) {
                        $('<div/>' , {
                            'class': 'mesa-item-cnt item-'+partyitem[element].name,
                            'id': 'mesa-'+partyitem[element].id
                        }).appendTo('#mesa'+_round);
                    }
                }
            }

            // Create DOM Object


        //}
    }
}

function addFinalItem(name, round) {
    _name = name;
    _round = round;

    if (_round === '_r1') {
        // Obtaining price from Main Table
        _price = exploreStuffArray(_name).price_f;
        // Obtaining Item Quantity
        _cant = _tb[_name][_round];
        // Populate Final Array
        itemsFirst[_name] = [];
        for (var i = 1; i <= _cant; i++) {
            itemsFirst[_name].push({
                name: _name,
                price: _price,
                iclass: 'item-'+_name,
                id: _name + i
            });
        }
    } else if (_round === '_r2') {
        // Obtaining price from Main Table
        _price = exploreStuffArray(_name).price_s;
        // Obtaining Item Quantity
        _cant = _tb[_name][_round];
        // Populate Final Array
        itemsSecond[_name] = [];
        for (var i = 1; i <= _cant; i++) {
            itemsSecond[_name].push({
                name: _name,
                price: _price,
                iclass: 'item-'+_name,
                id: _name + i
            });
        }
    } else if (_round === '_r3') {
        // Obtaining price from Main Table
        _price = exploreStuffArray(_name).price_t;
        // Obtaining Item Quantity
        _cant = _tb[_name][_round];
        // Populate Final Array
        itemsThird[_name] = [];
        for (var i = 1; i <= _cant; i++) {
            itemsThird[_name].push({
                name: _name,
                price: _price,
                iclass: 'item-'+_name,
                id: _name + i
            });
        }
    }
}

function removeFinalItem(name, round) {
    _name = name;
    _round = round;
    if (_round === '_r1') {
        itemsFirst[_name] = [];
        // for (var element in itemsFirst) {
        //     if (itemsFirst[element].name === _name) {
        //         itemsFirst.splice(itemsFirst[element], 1);
        //     }
        // }
    } else if (_round === '_r2') {
        itemsSecond[_name] = [];
        // for (var element in itemsSecond) {
        //     if (itemsSecond[element].name === _name) {
        //         itemsSecond.splice(itemsSecond[element], 1);
        //     }
        // }
    } else if (_round === '_r3') {
        itemsThird[_name] = [];
        // for (var element in itemsThird) {
        //     if (itemsThird[element].name === _name) {
        //         itemsThird.splice(itemsThird[element], 1);
        //     }
        // }
    }
}

function setFinalItems() {
    var $f_row = '', $frows = '',
        $s_row = '', $srows = '',
        $t_row = '', $trows = '';

    // Creating Rows for first Table Results
    for (var item in itemsFirst) {
        $f_row = '<div class="lit-row">'+'\n'+
                    '<div class="cmn-block">'+'\n'+
                        '<div class="mid-clmn-lwys">'+'\n'+
                            '<div class="bbva-blue-lghtr cnt-h80">'+'\n'+
                                '<div class="prty-ttl vertical-align">'+'\n'+
                                    '<div class="item-cnt">'+'\n'+
                                        '<div class="'+itemsFirst[item].iclass+'"></div>'+'\n'+
                                    '</div>'+'\n'+
                                '</div>'+'\n'+
                            '</div>'+'\n'+
                        '</div>'+'\n'+
                        '<div class="mid-clmn-lwys">'+'\n'+
                            '<div class="bbva-blue-lghtr cnt-h80">'+'\n'+
                                '<div class="prty-ttl vertical-align">'+'\n'+
                                    '<span> $'+itemsFirst[item].price+'</span>'+'\n'+
                                '</div>'+'\n'+
                            '</div>'+'\n'+
                        '</div>'+'\n'+
                    '</div>'+'\n'+
                '</div>'+'\n';
        $frows += $f_row;
    }
    // Creating Rows for second Table Results
    for (var item in itemsSecond) {
        $s_row = '<div class="lit-row">'+'\n'+
                    '<div class="cmn-block">'+'\n'+
                        '<div class="mid-clmn-lwys">'+'\n'+
                            '<div class="bbva-blue-lghtr cnt-h80">'+'\n'+
                                '<div class="prty-ttl vertical-align">'+'\n'+
                                    '<div class="item-cnt">'+'\n'+
                                        '<div class="'+itemsSecond[item].iclass+'"></div>'+'\n'+
                                    '</div>'+'\n'+
                                '</div>'+'\n'+
                            '</div>'+'\n'+
                        '</div>'+'\n'+
                        '<div class="mid-clmn-lwys">'+'\n'+
                            '<div class="bbva-blue-lghtr cnt-h80">'+'\n'+
                                '<div class="prty-ttl vertical-align">'+'\n'+
                                    '<span> $'+itemsSecond[item].price+'</span>'+'\n'+
                                '</div>'+'\n'+
                            '</div>'+'\n'+
                        '</div>'+'\n'+
                    '</div>'+'\n'+
                '</div>'+'\n';
        $srows += $s_row;
    }
    // Creating Rows for third Table Results
    for (var item in itemsThird) {
        $t_row = '<div class="lit-row">'+'\n'+
                    '<div class="cmn-block">'+'\n'+
                        '<div class="mid-clmn-lwys">'+'\n'+
                            '<div class="bbva-blue-lghtr cnt-h80">'+'\n'+
                                '<div class="prty-ttl vertical-align">'+'\n'+
                                    '<div class="item-cnt">'+'\n'+
                                        '<div class="'+itemsThird[item].iclass+'"></div>'+'\n'+
                                    '</div>'+'\n'+
                                '</div>'+'\n'+
                            '</div>'+'\n'+
                        '</div>'+'\n'+
                        '<div class="mid-clmn-lwys">'+'\n'+
                            '<div class="bbva-blue-lghtr cnt-h80">'+'\n'+
                                '<div class="prty-ttl vertical-align">'+'\n'+
                                    '<span> $'+itemsThird[item].price+'</span>'+'\n'+
                                '</div>'+'\n'+
                            '</div>'+'\n'+
                        '</div>'+'\n'+
                    '</div>'+'\n'+
                '</div>'+'\n';
        $trows += $t_row;
    }

    //
    $('#firstResults .total-results').prepend($frows);
    $('#secondResults .total-results').prepend($srows);
    $('#thirdResults .total-results').prepend($trows);

    // Totals
    $('#firstTotal').text('$'+_budget._r1_budget);
    $('#secondTotal').text('$'+_budget._r2_budget);
    $('#thirdTotal').text('$'+_budget._r3_budget);
}

// Exploring Party Items array
function exploreStuffArray(name){
    // Party Item
    name = name;
    // Auxiliar vars for Prices
    var price_f = 0,
        price_s = 0,
        price_t = 0;

    for (var stuff in _partyStuff) {
        if (_partyStuff[stuff].name === name) {
            price_f = _partyStuff[stuff].price_first;
            price_s = _partyStuff[stuff].price_second;
            price_t = _partyStuff[stuff].price_third;
        }
    }

    return{
        price_f : price_f,
        price_s : price_s,
        price_t : price_t
    }

}
// Display and Animate Puzzle or Container dynamically
function displayContainer(container){
    setTimeout(function() {
        $('html, body').animate({
            scrollTop: container.offset().top
        }, 500);
    }, 180);
}
