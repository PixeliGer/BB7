var _casaStuff = [ // Main Array for Casa
        {name: 'paredes', text: 'Paredes', price_y1: 500, price_y2: 600, price_y3: 900, iclass: 'item-paredes'},
        {name: 'cama', text: 'Cama', price_y1: 100, price_y2: 120, price_y3: 180, iclass: 'item-cama'},
        {name: 'comedor', text: 'Comedor', price_y1: 500, price_y2: 600, price_y3: 900, iclass: 'item-comedor'},
        {name: 'garage', text: 'Garage', price_y1: 100, price_y2: 120, price_y3: 180, iclass: 'item-garage'},
        {name: 'puerta', text: 'Puerta', price_y1: 200, price_y2: 240, price_y3: 360, iclass: 'item-puerta'},
        {name: 'sillon', text: 'Sillón grande', price_y1: 200, price_y2: 240, price_y3: 360, iclass: 'item-sillon'},
        {name: 'techos', text: 'Techos', price_y1: 200, price_y2: 240, price_y3: 360, iclass: 'item-techos'},
        {name: 'television', text: 'Televisión', price_y1: 200, price_y2: 240, price_y3: 360, iclass: 'item-television'},
        {name: 'ventanas', text: 'Ventanas', price_y1: 50, price_y2: 60, price_y3: 90, iclass: 'item-ventanas'}
    ],
    _autoStuff = [ // Main Array for Auto
        {name: 'carroceria', text: 'Carrocería', price_y1: 500, price_y2: 600, price_y3: 900, iclass: 'item-carroceria'},
        {name: 'velocimetro', text: 'Velocímetro', price_y1: 100, price_y2: 120, price_y3: 180, iclass: 'item-velocimetro'},
        {name: 'volante', text: 'Volante', price_y1: 500, price_y2: 600, price_y3: 900, iclass: 'item-volante'},
        {name: 'cajuela', text: 'Cajuela', price_y1: 100, price_y2: 120, price_y3: 180, iclass: 'item-cajuela'},
        {name: 'puertaa', text: 'Puerta', price_y1: 200, price_y2: 240, price_y3: 360, iclass: 'item-puertaa'},
        {name: 'asiento', text: 'Asiento', price_y1: 200, price_y2: 240, price_y3: 360, iclass: 'item-asiento'},
        {name: 'llanta', text: 'LLanta', price_y1: 200, price_y2: 240, price_y3: 360, iclass: 'item-llanta'},
        {name: 'estereo', text: 'Estéreo', price_y1: 200, price_y2: 240, price_y3: 360, iclass: 'item-estereo'},
        {name: 'parabrisas', text: 'Parabrisas', price_y1: 50, price_y2: 60, price_y3: 90, iclass: 'item-parabrisas'}
    ],
    _naveStuff = [ // Main Array for Nave
        {name: 'plataforma', text: 'Plataforma', price_y1: 500, price_y2: 600, price_y3: 900, iclass: 'item-plataforma'},
        {name: 'caman', text: 'Cama', price_y1: 100, price_y2: 120, price_y3: 180, iclass: 'item-caman'},
        {name: 'mesa', text: 'Mesa', price_y1: 500, price_y2: 600, price_y3: 900, iclass: 'item-mesa'},
        {name: 'mando', text: 'Mando', price_y1: 100, price_y2: 120, price_y3: 180, iclass: 'item-mando'},
        {name: 'puertan', text: 'Puerta', price_y1: 200, price_y2: 240, price_y3: 360, iclass: 'item-puertan'},
        {name: 'sillonn', text: 'Sillón', price_y1: 200, price_y2: 240, price_y3: 360, iclass: 'item-sillonn'},
        {name: 'casco', text: 'Casco', price_y1: 200, price_y2: 240, price_y3: 360, iclass: 'item-casco'},
        {name: 'tv', text: 'TV', price_y1: 200, price_y2: 240, price_y3: 360, iclass: 'item-tv'},
        {name: 'ventana', text: 'Ventana', price_y1: 50, price_y2: 60, price_y3: 90, iclass: 'item-ventana'}
    ],
    valor_dream = { first: 0, second: 0}, money_limit = 1000;
    c_counter = 0, CRRNT_ROUND = 1,
    _dream_items = [],
    _elemsHouse = {},_elemsCar   = {},_elemsRocket = {},
    itemsCar    = {},
    itemsRocket = {},
    itemsHome   = {};
    itemsCar.round1 = []; itemsCar.round2 = [];
    itemsRocket.round1 = []; itemsRocket.round2 = [];
    itemsHome.round1 = []; itemsHome.round2 = [];


$(document).ready(function() {
    // Auto-numeric init
    $('.auto').autoNumeric('init',{
        aPad: false
    });
    //
    var btnCasa     = $('#btnCasa'),
        btnAuto     = $('#btnAuto'),
        btnCohete   = $('#btnCohete'),
        buttons     = $('#btns_cnt'),
        btnNxtYear  = $('#btnNxtYear'),
        checkSueno  = $('.sueno_check'),

        mainDream   = $('#mainDream');

    mainDream.hide();
    btnNxtYear.addClass('bbva-disable');

    checkSueno.each(function() {
        $(this).change(function(event) {
            let dream_item  = $(this).attr('id'),       // Get Input Id dynamically
                item        = dream_item.split('_'),    // Split ID
                _name       = item[0],                  // Element name
                _year       = '_'+item[1],              // Element Year
                _value      = parseInt(this.value),     // Current value to Integer
                _check      = $(this);
            if (!this.checked) {
                _value = 0;
                c_counter--;
            } else {
                _value = _value;
                c_counter++;
                if (c_counter == 2) {
                    disableChecks();
                    btnNxtYear.removeClass('bbva-disable');
                }
            }
            updateResults(_value, _check);

        });
    });

    btnCasa.click(function(event) {
        setPrices(_casaStuff, 1);
        buttons.hide();
        mainDream.fadeIn(300).show('fast');
        displayContainer(mainDream);
    });

    btnAuto.click(function(event) {
        setPrices(_autoStuff, 1);
        buttons.hide();
        mainDream.fadeIn(300).show('fast');
        displayContainer(mainDream);
    });

    btnCohete.click(function(event) {
        setPrices(_naveStuff, 1);
        buttons.hide();
        mainDream.fadeIn(300).show('fast');
        displayContainer(mainDream);
    });

    btnNxtYear.click(function(event) {
        // Reset Check counter
        c_counter = 0;
        $(this).addClass('bbva-disable');
        enableChecks();
        // Checked inputs still blocked
        areChecked();
    });

});

// Set and Update Prices and Texts in Table
function setPrices(d_array, year) {
    let _index = 1;

    for (var item in d_array) {
        $('#ditem_'+_index).addClass(d_array[item].iclass);
        $('#dtitle_'+_index).text(d_array[item].text);
        if (year == 1) {
            $('#dprice_'+_index).text(d_array[item].price_y1);
            $('#dcheck_'+_index).attr('value', d_array[item].price_y1);
        } else if (year == 2) {
            $('#dprice_'+_index).text(d_array[item].price_y2);
            $('#dcheck_'+_index).attr('value', d_array[item].price_y2);
        } else if (year == 3) {
            $('#dprice_'+_index).text(d_array[item].price_y3);
            $('#dcheck_'+_index).attr('value', d_array[item].price_y2);
        }
        _index++;
    }
}

// Update Addition results
function updateResults(value, _check) {
    if (CRRNT_ROUND == 1) {
        if ( (value + valor_dream.first) <= money_limit) {
            valor_dream.first += value;
            // Se agrega elemento a la lista
            // Se crea elemento en contenedor
            // Se actualiza el Input de Caja registradora
            $('#dreamYear').autoNumeric('set', (money_limit - valor_dream.first) );
            $('#dreamYear').autoNumeric('update', {
                aSign: '$'
            });

        } else {
            alert('Ya no tienes dinero para adquirir mas artículos');
            _check.prop('checked', false);
            c_counter--;
            return;
        }
    } else if (CRRNT_ROUND == 2) {
        if ( (value + valor_dream.second) <= money_limit) {
            valor_dream.second += value;
            // Se agrega elemento a la lista
            // Se crea elemento en contenedor
            // Se actualiza el Input de Caja registradora
            $('#dreamYear').autoNumeric('set', (money_limit - valor_dream.second) );
            $('#dreamYear').autoNumeric('update', {
                aSign: '$'
            });

        } else {
            alert('Ya no tienes dinero para adquirir mas artículos');
            _check.prop('checked', false);
            c_counter--;
            return;
        }
    }
}

function areChecked() {
    $('.sueno_check').each(function() {
        $(this).is(':checked') ? $(this).addClass('bbva-disable').siblings('label').addClass('disable-check') : console.log(this); ;
    });
}

function disableChecks() {
    $('.sueno_check')
    .prop('disabled', true)
    .addClass('bbva-disable')
    .siblings('label')
    .addClass('disable-check');
}

function enableChecks() {
    $('.sueno_check')
    .prop('disabled', false)
    .removeClass('bbva-disable')
    .siblings('label')
    .removeClass('disable-check');
}
