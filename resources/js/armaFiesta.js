var _partyStuff = [
    {name: 'pizza', text: "Pizza", price_first: 80, price_second: 80, price_third: 400, _class: 'item-pizza'},
    {name: 'agua', text: "Agua", price_first: 10, price_second: 10, price_third: 50, _class: 'item-agua'},
    {name: 'globos', text: "Globos", price_first: 10, price_second: 10, price_third: 50, _class: 'item-globos'},
    {name: 'platos', text: "Platos", price_first: 5, price_second: 5, price_third: 25, _class: 'item-platos'},
    {name: 'musica', text: "Música", price_first: 50, price_second: 50, price_third: 250, _class: 'item-musica'},
];
var _tb = {
    pizza  : { _r1: 0,_r2: 0,_r3: 0 },
    agua   : { _r1: 0,_r2: 0,_r3: 0 },
    globos : { _r1: 0,_r2: 0,_r3: 0 },
    platos : { _r1: 0,_r2: 0,_r3: 0 },
    musica : { _r1: 0,_r2: 0,_r3: 0 }
}
var _budget = {
    _fisrt  : 100,
    _second : 300,
    _third  : 500,
    _r1_budget : 0,
    _r2_budget : 0,
    _r3_budget : 0
}
var _F_COMP = false,
    _S_COMP = false,
    _T_COMP = false;
var _prty_item = '';
var pos_x = 0;
$(document).ready(function() {
    // Auto-numeric
    $('.auto').autoNumeric('init');
    //
    var _firstRound     = $('#round1');
    var _secondRound    = $('#round2');
    var _thirdRound     = $('#round3');
    var _resultsCnt     = $('#resultsCnt')
    var btnStart        = $('#btnStart');
    var btnSecondR      = $('#btnSecondR');
    var btnThirdR       = $('#btnThirdR');
    var btnResults      = $('#btnResults');
    var firstFeed       = $('#firstFeed');
    var secondFeed      = $('#secondFeed');
    var thirdFeed       = $('#thirdFeed');
    //
    // _firstRound.hide();
    // _secondRound.hide();
    // _thirdRound.hide();
    // _resultsCnt.hide();
    // firstFeed.hide();
    // secondFeed.hide();
    // thirdFeed.hide();
    //

    btnStart.click(function(event) {
        btnStart.parent('div').hide('fast');
        //
        _firstRound.fadeIn(300).show('fast');
        $("html, body").animate({
            scrollTop: _firstRound.offset().top
        }, 500);
    });

    btnSecondR.click(function(event) {
        // If not Items yet
        //
        _firstRound.hide('fast');
        _secondRound.fadeIn(300).show('fast');
    });

    btnThirdR.click(function(event) {
        _secondRound.hide('fast');
        _thirdRound.fadeIn(300).show('fast');

    });

    btnResults.click(function(event) {
        _thirdRound.hide('fast');
        _resultsCnt.fadeIn(300).show('fast');
    });

    $('.input-fiesta').each(function() {
        $(this).change(function(event) {
            if (this.value === undefined || this.value === "" ) {
                this.value = 0;
            }
            _prty_item = $(this).attr('id');
            fillItems(_prty_item);
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
function updateResults() {
    var results = AddResults();
    _budget._r1_budget = results.res1;
    _budget._r2_budget = results.res2;
    _budget._r3_budget = results.res3;

    // Print Budget Results
    $('#firstRound').text(_budget._r1_budget);

}

function AddResults(){
    //
    normalizeValues();
    var _res1 = 0,
        _res2 = 0,
        _res3 = 0;
    //#! First Round Values
    $pizza_1  = (_tb.pizza._r1 * _partyStuff[0].price_first);
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
            console.log(_item[round]);
            if (isNaN(_item[round])) {
                _item[round] = 0;
            }
        }
    }
}

function fillItems(_prty_item){
    $item = _prty_item.split("_");
    _name = $item[0];
    _round = "_"+$item[1];
    //
    if (_tb[_name][_round] < 1) {
        $('#mesa-'+ _name + _round).remove();
        // Initial position in Table
        pos_x == 0 ? pos_x = 0 : pos_x-=40;
    } else if (_tb[_name][_round] >= 1) {
        // If Exists Destroy --> Prevent Multiple Items
        if ( $('#mesa-'+ _name + _round).length ) {
            // Remove Specific DOM Element
            $('#mesa-'+ _name + _round).remove();
            // Decrease Position Axis-X
            pos_x-=40;

            // Create DOM Object
            $('<div/>' , {
                'class': 'mesa-item-cnt item-'+_name,
                'id': 'mesa-' + _name + _round
            }).appendTo('.mesa-sqrs');

            // Increment Position Axis-X and set
            pos_x+=40;
            $('#mesa-'+_name+_round).css('left', pos_x);

        } else {
            // Create DOM Object
            $('<div/>' , {
                'class': 'mesa-item-cnt item-'+_name,
                'id': 'mesa-' + _name + _round
            }).appendTo('.mesa-sqrs');

            // Increment Position Axis-X and set
            pos_x+=40;
            $('#mesa-'+_name+_round).css('left', pos_x);
        }
    }
}

// Catch a Party Item Dynamically
function exploreStuffArray(pitem){
    // Party Item
    pitem = pitem;
    for (var stuff in _partyStuff) {
        if (_partyStuff[stuff].name === pitem) {

        }
        _partyStuff[stuff]._class
    }
}
