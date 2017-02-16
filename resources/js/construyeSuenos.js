var _casaStuff = [
        {name: 'paredes', text: 'Paredes', price_y1: 500, price_y2: 600, class: 'item-paredes'},
        {name: 'cama', text: 'Cama', price_y1: 100, price_y2: 120, class: 'item-cama'},
        {name: 'comedor', text: 'Comedor', price_y1: 500, price_y2: 600, class: 'item-comedor'},
        {name: 'garage', text: 'Garage', price_y1: 100, price_y2: 120, class: 'item-garage'},
        {name: 'puerta', text: 'Puerta', price_y1: 200, price_y2: 240, class: 'item-puerta'},
        {name: 'sillon', text: 'Sillón grande', price_y1: 200, price_y2: 240, class: 'item-sillon'},
        {name: 'techos', text: 'Techos', price_y1: 200, price_y2: 240, class: 'item-techos'},
        {name: 'television', text: 'Televisión', price_y1: 200, price_y2: 240, class: 'item-television'},
        {name: 'ventanas', text: 'Ventanas', price_y1: 50, price_y2: 60, class: 'item-ventanas'},
    ],
    _autoStuff = [
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
    ],
    _coheteStuff = [
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
        {name: '', text: '', price_y1: 0, price_y2: 0, class: 'item-'},
    ]

$(document).ready(function() {
    var btnCasa     = $('#btnCasa'),
        btnAuto     = $('#btnAuto'),
        btnCohete   = $('#btnCohete');



    // Main Activity Buttons Events
    btnCasa.click(function(event) {

    });

    btnAuto.click(function(event) {

    });

    btnCohete.click(function(event) {

    });

    $('.input-sueno').each(function() {
        $(this).change(function(event) {
            if (this.value === undefined || this.value === "" ) {
                this.value = 0;
            }
        });
    });

});
