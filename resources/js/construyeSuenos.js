var _casaStuff = [ // Main Array for Casa
        {name: 'paredes', text: 'Paredes', price_y1: 500, price_y2: 600, price_y3: 900, price_y2a: 625, iclass: 'item-paredes',fclass: 'f-item-paredes'},
        {name: 'cama', text: 'Cama', price_y1: 100, price_y2: 120, price_y3: 180, price_y2a: 125, iclass: 'item-cama',fclass: 'f-item-cama'},
        {name: 'comedor', text: 'Comedor', price_y1: 500, price_y2: 600, price_y3: 900, price_y2a: 625, iclass: 'item-comedor',fclass: 'item-comedor'},
        {name: 'garage', text: 'Garage', price_y1: 100, price_y2: 120, price_y3: 180, price_y2a: 125, iclass: 'item-garage',fclass: 'f-item-garage'},
        {name: 'puerta', text: 'Puerta', price_y1: 200, price_y2: 240, price_y3: 360, price_y2a: 250, iclass: 'item-puerta',fclass: 'f-item-puerta'},
        {name: 'sillon', text: 'Sillón grande', price_y1: 200, price_y2: 240, price_y3: 360, price_y2a: 250, iclass: 'f-item-sillon',fclass: 'item-sillon'},
        {name: 'techos', text: 'Techos', price_y1: 200, price_y2: 240, price_y3: 360, price_y2a: 250, iclass: 'item-techos',fclass: 'f-item-techos'},
        {name: 'television', text: 'Televisión', price_y1: 200, price_y2: 240, price_y3: 360, price_y2a: 250, iclass: 'item-television',fclass: 'f-item-television'},
        {name: 'ventanas', text: 'Ventanas', price_y1: 50, price_y2: 60, price_y3: 90, price_y2a: 63, iclass: 'item-ventanas',fclass: 'f-item-ventanas'}
    ],
    _autoStuff = [ // Main Array for Auto
        {name: 'carroceria', text: 'Carrocería', price_y1: 500, price_y2: 600, price_y3: 900, price_y2a: 625, iclass: 'item-carroceria',fclass: 'f-item-carroceria'},
        {name: 'velocimetro', text: 'Velocímetro', price_y1: 100, price_y2: 120, price_y3: 180,  price_y2a: 125, iclass: 'item-velocimetro',fclass: 'f-item-velocimetro'},
        {name: 'volante', text: 'Volante', price_y1: 500, price_y2: 600, price_y3: 900, price_y2a: 625, iclass: 'item-volante',fclass: 'f-item-volante'},
        {name: 'cajuela', text: 'Cajuela', price_y1: 100, price_y2: 120, price_y3: 180, price_y2a: 125, iclass: 'item-cajuela',fclass: 'f-item-cajuela'},
        {name: 'puerta', text: 'Puerta', price_y1: 200, price_y2: 240, price_y3: 360, price_y2a: 250, iclass: 'item-puertaa',fclass: 'f-item-puertaa'},
        {name: 'asiento', text: 'Asiento', price_y1: 200, price_y2: 240, price_y3: 360, price_y2a: 250, iclass: 'item-asiento',fclass: 'f-item-asiento'},
        {name: 'llanta', text: 'Llantas', price_y1: 200, price_y2: 240, price_y3: 360, price_y2a: 250, iclass: 'item-llanta',fclass: 'f-item-llanta'},
        {name: 'estereo', text: 'Estéreo', price_y1: 200, price_y2: 240, price_y3: 360, price_y2a: 250, iclass: 'item-estereo',fclass: 'f-item-estereo'},
        {name: 'parabrisas', text: 'Parabrisas', price_y1: 50, price_y2: 60, price_y3: 90, price_y2a: 63, iclass: 'item-parabrisas',fclass: 'f-item-parabrisas'}
    ],
    _naveStuff = [ // Main Array for Nave
        {name: 'plataforma', text: 'Plataforma', price_y1: 500, price_y2: 600, price_y3: 900, price_y2a: 625, iclass: 'item-plataforma',fclass:'f-item-plataforma'},
        {name: 'cama', text: 'Cama', price_y1: 100, price_y2: 120, price_y3: 180,  price_y2a: 125, iclass: 'item-caman',fclass: 'f-item-caman'},
        {name: 'mesa', text: 'Mesa', price_y1: 500, price_y2: 600, price_y3: 900, price_y2a: 625, iclass: 'item-mesa',fclass: 'f-item-mesa'},
        {name: 'mando', text: 'Mando', price_y1: 100, price_y2: 120, price_y3: 180, price_y2a: 125, iclass: 'item-mando',fclass: 'f-item-mando'},
        {name: 'puerta', text: 'Puerta', price_y1: 200, price_y2: 240, price_y3: 360, price_y2a: 250, iclass: 'item-puertan',fclass: 'f-item-puertan'},
        {name: 'sillon', text: 'Sillón', price_y1: 200, price_y2: 240, price_y3: 360, price_y2a: 250, iclass: 'item-sillonn',fclass: 'f-item-sillonn'},
        {name: 'casco', text: 'Casco', price_y1: 200, price_y2: 240, price_y3: 360, price_y2a: 250, iclass: 'item-casco',fclass: 'f-item-casco'},
        {name: 'tv', text: 'TV', price_y1: 200, price_y2: 240, price_y3: 360, price_y2a: 250, iclass: 'item-tv',fclass: 'f-item-tv'},
        {name: 'ventana', text: 'Ventana', price_y1: 50, price_y2: 60, price_y3: 90, price_y2a: 63, iclass: 'item-ventana',fclass: 'f-item-ventana'}
    ],
    finalimg = {
        casa: '../resources/img/activity_suenos/Casa.svg',
        camioneta: '../resources/img/activity_suenos/Camioneta.svg',
        nave: '../resources/img/activity_suenos/Nave.svg'
    },
    crrnt_stuff, DREAM = '',
    valor_dream = { first: 0, second: 0}, money_limit = 1000;
    c_counter = 0, CRRNT_ROUND = 1, _year = 1;
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
        btnStart    = $('#btnStart'),
        btnNxtYear  = $('#btnNxtYear'),
        instructions= $('#instructionsContent'),
        checkSueno  = $('.sueno_check'),

        firstFeed   = $('#firstFeed'),
        secondFeed  = $('#secondFeed'),
        finalFeed   = $('#finalFeed'),

        btnSecondR  = $('#btnSecondR'),
        btnFinalFeed= $('#btnFinalFeed'),

        counterBlock = $('#counterBlock'),
        mainDream   = $('#mainDream'),
        dreamTable  = $('#dreamTable'),
        yearTitle   = $('#yearTitle');

    buttons.hide();
    mainDream.hide();
    firstFeed.hide();
    secondFeed.hide();
    finalFeed.hide();
    btnNxtYear.addClass('bbva-disable');

    checkSueno.each(function() {
        $(this).change(function(event) {
            let dream_item  = $(this).attr('id'),       // Get Input Id dynamically
                item        = dream_item.split('_'),    // Split ID
                _name       = $(this).attr('name'),     // Element name
                _year       = '_'+item[1],              // Element Year
                _value      = parseInt(this.value),     // Current value to Integer
                _check      = $(this);

            // Check state and set values
            if (!this.checked) {
                c_counter--;
                substractResult(_value);
                removeDOMItem(crrnt_stuff, _check);
            } else {
                _value = _value;
                c_counter++;
                updateResults(_value, _check, crrnt_stuff);
            }
            // Two options selected -> next year
            if (c_counter == 2) {
                disableChecks();
                btnNxtYear.removeClass('bbva-disable');
            }

            if ( notAvaiable() == true ) {
                roundCompleted();
            }

        });
    });

    btnStart.click(function(event) {
        $(this).hide();
        instructions.hide();
        buttons.fadeIn(300).show('fast');
        displayContainer(buttons);
    });

    btnCasa.click(function(event) {
        crrnt_stuff = _casaStuff;
        setPrices(crrnt_stuff, _year);
        buttons.hide();
        mainDream.fadeIn(300).show('fast');
        displayContainer(mainDream);
        $('#finalImage').attr('src', finalimg.casa);
        DREAM = 'casa';
    });

    btnAuto.click(function(event) {
        crrnt_stuff = _autoStuff;
        setPrices(crrnt_stuff, _year);
        buttons.hide();
        mainDream.fadeIn(300).show('fast');
        displayContainer(mainDream);
        $('#finalImage').attr('src', finalimg.camioneta);
        DREAM = 'auto';
    });

    btnCohete.click(function(event) {
        crrnt_stuff = _naveStuff;
        setPrices(crrnt_stuff, _year);
        buttons.hide();
        mainDream.fadeIn(300).show('fast');
        displayContainer(mainDream);
        $('#finalImage').attr('src', finalimg.nave);
        DREAM = 'nave';
    });

    btnNxtYear.click(function(event) {
        //
        _year++;
        yearTitle.text('Año '+_year);
        // Reset Check counter
        c_counter = 0;
        $(this).addClass('bbva-disable');
        enableChecks();
        // Checked inputs still blocked
        areChecked();
        setPrices(crrnt_stuff, _year);
        displayContainer(mainDream);
    });

    btnSecondR.click(function(event) {
        resetDream();
        CRRNT_ROUND = 2;
        yearTitle.text('Año '+_year);
        $('#dreamYear').autoNumeric('set', money_limit );
        $('#dreamYear').autoNumeric('update', {
            aSign: '$'
        });
        removeAllDOMItems();
    });

    btnFinalFeed.click(function(event) {
        dreamTable.hide();
        firstFeed.hide();
        secondFeed.hide();
        finalFeed.fadeIn(300).show('fast');
        displayContainer(finalFeed);
    });

});

// Set and Update Prices and Texts in Table
function setPrices(d_array, year) {
    let _index = 1;

    for (var item in d_array) {
        $('#ditem_'+_index).addClass(d_array[item].iclass);
        $('#dtitle_'+_index).text(d_array[item].text);
        $('#dcheck_'+_index).attr('name', d_array[item].name);
        if (year == 1) {
            $('#dprice_'+_index).text(d_array[item].price_y1);
            $('#dcheck_'+_index).attr('value', d_array[item].price_y1);
        } else if (year == 2) {
            if (CRRNT_ROUND == 1) {
                $('#dprice_'+_index).text(d_array[item].price_y2);
                $('#dcheck_'+_index).attr('value', d_array[item].price_y2);
            } else {
                $('#dprice_'+_index).text(d_array[item].price_y2a);
                $('#dcheck_'+_index).attr('value', d_array[item].price_y2a);
            }
        } else if (year == 3) {
            $('#dprice_'+_index).text(d_array[item].price_y3);
            $('#dcheck_'+_index).attr('value', d_array[item].price_y3);
        }
        _index++;
    }
}

function substractResult(value) {
    if (CRRNT_ROUND == 1) {
        valor_dream.first -= value;
        // Se actualiza el Input de Caja registradora
        refreshBudget(valor_dream.first);
    } else if (CRRNT_ROUND == 2) {
        valor_dream.second -= value;
        // Se actualiza el Input de Caja registradora
        refreshBudget(valor_dream.second);
    }
}

// Update Addition results
function updateResults(value, _check, crrnt_stuff) {
    if (CRRNT_ROUND == 1) {
        if ( (value + valor_dream.first) <= money_limit) {
            valor_dream.first += value;
            // Se agrega elemento a la lista
            // Se crea elemento en contenedor
            addDomItem(crrnt_stuff, _check);
            // Se actualiza el Input de Caja registradora
            refreshBudget(valor_dream.first);
            valor_dream.first == money_limit ? roundCompleted() : console.log('');
        } else {
            alert('Ya no tienes dinero para adquirir mas artículos');
            _check.prop('checked', false);
            c_counter--;
            removeDOMItem(crrnt_stuff, _check);
            return;
        }
    } else if (CRRNT_ROUND == 2) {
        if ( (value + valor_dream.second) <= money_limit) {
            valor_dream.second += value;
            // Se agrega elemento a la lista
            // Se crea elemento en contenedor
            addDomItem(crrnt_stuff, _check);
            // Se actualiza el Input de Caja registradora
            refreshBudget(valor_dream.second);
            valor_dream.second == money_limit ? roundCompleted() : console.log('');
        } else {
            alert('Ya no tienes dinero para adquirir mas artículos');
            _check.prop('checked', false);
            c_counter--;
            removeDOMItem(crrnt_stuff, _check);
            return;
        }
    }
}

function notAvaiable() {
    let t_count = 0,
        f_count = 0,
        not_avaiable = false;

    $('.sueno_check').each(function() {
        if (!$(this).is(':checked')) {
            if (CRRNT_ROUND == 1) {
                $(this).attr('value') > (money_limit - valor_dream.first) ? t_count++ : f_count++;

            } else if (CRRNT_ROUND == 2) {
                $(this).attr('value') > (money_limit - valor_dream.second) ? t_count++ : f_count++;
            }
        }
    });

    if ( (t_count > 0) && (f_count == 0) ) {
        not_avaiable = true;
    }

    return not_avaiable;
}

function roundCompleted() {
    let firstFeed = $('#firstFeed'),
        secondFeed = $('#secondFeed'),
        btnNxtYear = $('#btnNxtYear');

    if (CRRNT_ROUND == 1 ) {
        checkDream();
        firstFeed.fadeIn(300).show('fast');
        displayContainer(firstFeed);
    } else if (CRRNT_ROUND == 2) {
        secondFeed.fadeIn(300).show('fast');
        displayContainer(secondFeed);
    }
    btnNxtYear.addClass('bbva-disable');
}

function gameCompleted() {
    $('#dreamTable').hide();
    $('#firstFeed').hide();
    $('#secondFeed').hide();
    let finalFeed = $('#finalFeed');

    finalFeed.fadeIn(300).show('fast');
    displayContainer(finalFeed);
}

function refreshBudget(v_dream) {
    $('#dreamYear').autoNumeric('set', (money_limit - v_dream) );
    $('#dreamYear').autoNumeric('update', {
        aSign: '$'
    });
}

function areChecked() {
    $('.sueno_check').each(function() {
        $(this).is(':checked') ? $(this).addClass('bbva-disable').siblings('label').addClass('disable-check') : console.log(''); ;
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

function uncheckChecks() {
    $('.sueno_check').each(function() {
        $(this).prop('checked', false);
    });
}

function resetDream() {
    let firstFeed = $('#firstFeed'),
        secondFeed = $('#secondFeed'),
        mainDream = $('#mainDream');

    firstFeed.hide();
    secondFeed.hide();
    c_counter = 0;
    _year = 1;
    CRRNT_ROUND = 1;
    enableChecks();
    uncheckChecks();
    setPrices(crrnt_stuff, _year);
    displayContainer(mainDream);
}


function addDomItem(crrnt_stuff, _check) {
    let name = _check.attr('name');
    for (var item in crrnt_stuff) {
        if (crrnt_stuff[item].name === name) {
            console.log(crrnt_stuff[item].fclass);
            // Create DOM Object
            $('<div/>' , {
                'class': 'dream-item-cnt '+ crrnt_stuff[item].fclass,
                'id': 'dItem_'+name
            }).appendTo('#dreamR');
        }
    }
}

function removeDOMItem(crrnt_stuff, _check) {
    let name = _check.attr('name');
    for (var item in crrnt_stuff) {
        if (crrnt_stuff[item].name === name) {
            let fclass = crrnt_stuff[item].fclass;
            console.log(fclass);
            $('#dreamR').find('.'+fclass).remove();
        }
    }
}

function removeAllDOMItems() {
    $('#dreamR').children().remove();
}

function checkDream() {
    if (DREAM === 'casa') {
        if($('.sueno_check').attr('name', 'llanta').is(':checked')){
            console.log($('.sueno_check').attr('name') )
        }

    } else if (DREAM === 'auto') {

    } else if (DREAM === 'nave') {

    }
}
