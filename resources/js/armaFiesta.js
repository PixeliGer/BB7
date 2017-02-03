var _partyStuff = [
    {name: 'pizza', text: "Pizza", price_first: 80, price_second: 80, price_third: 400},
    {name: 'agua', text: "Agua", price_first: 10, price_second: 10, price_third: 50},
    {name: 'globos', text: "Globos", price_first: 10, price_second: 10, price_third: 50},
    {name: 'platos', text: "Platos", price_first: 5, price_second: 5, price_third: 25},
    {name: 'musica', text: "Música", price_first: 50, price_second: 50, price_third: 250},
];
var _budget = {
    _fisrt  : 100,
    _second : 300,
    _third  : 500,
    _r1_budget : 0,
    _r2_budget : 0,
    _r3_budget : 0
}
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
    _firstRound.hide();
    _secondRound.hide();
    _thirdRound.hide();
    _resultsCnt.hide();
    firstFeed.hide();
    secondFeed.hide();
    thirdFeed.hide();
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
});
