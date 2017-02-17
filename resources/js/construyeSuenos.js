var _casaStuff = [ // Main Array for Casa
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
    _autoStuff = [ // Main Array for Auto
        {name: 'carroceria', text: 'Carrocería', price_y1: 500, price_y2: 600, class: 'item-carroceria'},
        {name: 'velocimetro', text: 'Velocímetro', price_y1: 100, price_y2: 120, class: 'item-velocimetro'},
        {name: 'volante', text: 'Volante', price_y1: 500, price_y2: 600, class: 'item-volante'},
        {name: 'cajuela', text: 'Cajuela', price_y1: 100, price_y2: 120, class: 'item-cajuela'},
        {name: 'puertaa', text: 'Puerta', price_y1: 200, price_y2: 240, class: 'item-puertaa'},
        {name: 'asiento', text: 'Asiento', price_y1: 200, price_y2: 240, class: 'item-asiento'},
        {name: 'llanta', text: 'LLanta', price_y1: 200, price_y2: 240, class: 'item-llanta'},
        {name: 'estereo', text: 'Estéreo', price_y1: 200, price_y2: 240, class: 'item-estereo'},
        {name: 'parabrisas', text: 'Parabrisas', price_y1: 50, price_y2: 60, class: 'item-parabrisas'},
    ],
    _naveStuff = [ // Main Array for Nave
        {name: 'plataforma', text: 'Plataforma', price_y1: 500, price_y2: 600, class: 'item-plataforma'},
        {name: 'caman', text: 'Cama', price_y1: 100, price_y2: 120, class: 'item-caman'},
        {name: 'mesa', text: 'Mesa', price_y1: 500, price_y2: 600, class: 'item-mesa'},
        {name: 'mando', text: 'Mando', price_y1: 100, price_y2: 120, class: 'item-mando'},
        {name: 'puertan', text: 'Puerta', price_y1: 200, price_y2: 240, class: 'item-puertan'},
        {name: 'sillonn', text: 'Sillón', price_y1: 200, price_y2: 240, class: 'item-sillonn'},
        {name: 'casco', text: 'Casco', price_y1: 200, price_y2: 240, class: 'item-casco'},
        {name: 'tv', text: 'TV', price_y1: 200, price_y2: 240, class: 'item-tv'},
        {name: 'ventana', text: 'Ventana', price_y1: 50, price_y2: 60, class: 'item-ventana'},
    ],
    /*
    * Arrays for mutable values submitted by user
    */
    ts_ca = { // Mutable [Casa] values
        paredes     : { _y1: 0, _y2: 0},
        cama        : { _y1: 0, _y2: 0},
        comedor     : { _y1: 0, _y2: 0},
        garage      : { _y1: 0, _y2: 0},
        puerta      : { _y1: 0, _y2: 0},
        sillon      : { _y1: 0, _y2: 0},
        techos      : { _y1: 0, _y2: 0},
        television  : { _y1: 0, _y2: 0},
        ventanas    : { _y1: 0, _y2: 0}
    },
    ts_au = { // Mutable [Auto] values
        carroceria  : { _y1: 0, _y2: 0},
        velocimetro : { _y1: 0, _y2: 0},
        volante     : { _y1: 0, _y2: 0},
        cajuela     : { _y1: 0, _y2: 0},
        puertaa     : { _y1: 0, _y2: 0},
        asiento     : { _y1: 0, _y2: 0},
        llanta      : { _y1: 0, _y2: 0},
        estereo     : { _y1: 0, _y2: 0},
        parabrisas  : { _y1: 0, _y2: 0}
    },
    ts_na = { // Mutable [Nave] values
        plataforma  : { _y1: 0, _y2: 0},
        caman       : { _y1: 0, _y2: 0},
        mesa        : { _y1: 0, _y2: 0},
        mando       : { _y1: 0, _y2: 0},
        puertan     : { _y1: 0, _y2: 0},
        sillonn     : { _y1: 0, _y2: 0},
        casco       : { _y1: 0, _y2: 0},
        tv          : { _y1: 0, _y2: 0},
        ventana     : { _y1: 0, _y2: 0}

    },
    budget = {
        casa : 1000, auto: 1000, nave: 1000,
        c_budg: 0 , a_budg: 0, n_budg: 0
    },
    CRRNT_DRM;

$(document).ready(function() {
    var btnCasa     = $('#btnCasa'),
        btnAuto     = $('#btnAuto'),
        btnCohete   = $('#btnCohete'),
        buttons     = $('#btns_cnt');
        // Dream Main Containers
        dreamHouse  = $('#dream_house'),
        dreamCar    = $('#dream_car'),
        dreamRocket = $('#dream_rocket'),
        // Dream Year
        house_y1    = $('#house_y1'),
        house_y2    = $('#house_y2'),
        car_y1      = $('#car_y1'),
        car_y2      = $('#car_y2'),
        rocket_y1   = $('#rocket_y1'),
        rocket_y2   = $('#rocket_y2')


        // Hide Dream Containers
        dreamHouse.hide();
        dreamCar.hide();
        dreamRocket.hide();
        // Hide Year [2] Dreams
        house_y2.hide();
        car_y2.hide();
        rocket_y2.hide();



    // Main Activity Buttons Events
    btnCasa.click(function(event) {
        CRRNT_DRM = 'casa';
        buttons.hide();
        dreamHouse.fadeIn(300).show('fast');
        displayContainer(dreamHouse);
    });

    btnAuto.click(function(event) {
        CRRNT_DRM = 'auto';
        buttons.hide();
        dreamCar.fadeIn(300).show('fast');
        displayContainer(dreamCar);
    });

    btnCohete.click(function(event) {
        CRRNT_DRM = 'nave';
        buttons.hide();
        dreamRocket.fadeIn(300).show('fast');
        displayContainer(dreamRocket);
    });

    $('.input-sueno').each(function() {
        $(this).change(function(event) {
            if (this.value === undefined || this.value === "" ) {
                this.value = 0;
            }
            var dream_item  = $(this).attr('id'),
                item        = dream_item.split('_');
                _name       = item[0];
                _year       = '_'+item[1];
                _value      = parseInt(this.value);
                _ammount    = obtainAmmount(dream_item);

            if (CRRNT_DRM === 'casa') {
                ts_ca[_name][_year] = _value;
            } else if (CRRNT_DRM === 'auto') {
                ts_au[_name][_year] = _value;
            } else if (CRRNT_DRM === 'nave') {
                ts_na[_name][_year] = _value;
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

function obtainAmmount(dream_item) {
    var item    = dream_item.split('_'),
        _name   = item[0],
        _year   = "_"+item[1],
        _price  = 0;

    if (CRRNT_DRM === 'casa') {
        for (var ditem in _casaStuff) {
            if (_year === '_y1') {
                if(_casaStuff[ditem].name === _name){
                    _price = _casaStuff[ditem].price_y1;
                }
            } else if (_year === '_y2') {
                if(_casaStuff[ditem].name === _name){
                    _price = _casaStuff[ditem].price_y2;
                }
            }
        }
    } else if (CRRNT_DRM === 'auto') {
        for (var ditem in _autoStuff) {
            if (_year === '_y1') {
                if(_autoStuff[ditem].name === _name){
                    _price = _autoStuff[ditem].price_y1;
                }
            } else if (_year === '_y2') {
                if(_autoStuff[ditem].name === _name){
                    _price = _autoStuff[ditem].price_y2;
                }
            }
        }
    } else if (CRRNT_DRM === 'nave') {
        for (var ditem in _naveStuff) {
            if (_year === '_y1') {
                if(_naveStuff[ditem].name === _name){
                    _price = _naveStuff[ditem].price_y1;
                }
            } else if (_year === '_y2') {
                if(_naveStuff[ditem].name === _name){
                    _price = _naveStuff[ditem].price_y2;
                }
            }
        }
    }
    return _price;
}

function updateResults() {

}

// Display and Animate Puzzle or Container dynamically
function displayContainer(container){
    setTimeout(function() {
        $('html, body').animate({
            scrollTop: container.offset().top
        }, 500);
    }, 180);
}
