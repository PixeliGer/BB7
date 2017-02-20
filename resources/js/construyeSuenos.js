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
        c_budget: 0 , a_budget: 0, n_budget: 0
    },
    CRRNT_DRM, CRRNT_CA_RND, CRRNT_AU_RND, CRRNT_NA_RND;
    itemsCar    = {},
    itemsRocket = {},
    itemsHome   = {};
    itemsCar.round1 = []; itemsCar.round2 = [];
    itemsRocket.round1 = []; itemsRocket.round2 = [];
    itemsHome.round1 = []; itemsHome.round2 = [];




$(document).ready(function() {
    var btnCasa     = $('#btnCasa'),
        btnAuto     = $('#btnAuto'),
        btnCohete   = $('#btnCohete'),
        buttons     = $('#btns_cnt'),
        btnNextCa   = $('#btnNxtCa'),
        btnNextAu   = $('#btnNxtAu'),
        btnNextNa   = $('#btnNxtNa'),
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
        rocket_y2   = $('#rocket_y2'),
        // [HOUSE] ELEMENTS
        btnHouseSR      = $('#btnHouseSecondR'),
        btnFHouseFeed   = $('#btnFHouseFeed'),
        houseFeed       = $('#houseFeed'),
        houseResults    = $('#houseResults'),
        finalHouseFeed  = $('#finalHouseFeed');

    // Hide Dream Containers
    dreamHouse.hide();
    dreamCar.hide();
    dreamRocket.hide();
    // Disable [Next Year] Buttons
    btnNextCa.addClass('bbva-disable');
    btnNextAu.addClass('bbva-disable');
    btnNextNa.addClass('bbva-disable');
    // Hide Year [2] Dreams
    house_y2.hide();
    car_y2.hide();
    rocket_y2.hide();
    // Hide [HOUSE] Elements
    btnHouseSR.hide();
    btnFHouseFeed.hide();
    houseFeed.hide();
    houseResults.hide();
    finalHouseFeed.hide();


    // Main Activity Buttons Events
    btnCasa.click(function(event) {
        CRRNT_DRM = 'casa';
        CRRNT_CA_RND = 'round1';
        buttons.hide();
        dreamHouse.fadeIn(300).show('fast');
        displayContainer(dreamHouse);
    });

    btnAuto.click(function(event) {
        CRRNT_DRM = 'auto';
        CRRNT_AU_RND = 'round1';
        buttons.hide();
        dreamCar.fadeIn(300).show('fast');
        displayContainer(dreamCar);
    });

    btnCohete.click(function(event) {
        CRRNT_DRM = 'nave';
        CRRNT_NA_RND = 'round1';
        buttons.hide();
        dreamRocket.fadeIn(300).show('fast');
        displayContainer(dreamRocket);
    });

    // [Next Year] Buttons
    btnNextCa.click(function(event) {
        house_y1.hide();
        house_y2.fadeIn(300).show('fast');
        displayContainer(house_y2);
    });

    btnNextAu.click(function(event) {
        car_y1.hide();
        car_y2.fadeIn(300).show('fast');
        displayContainer(car_y2);

    });

    btnNextNa.click(function(event) {
        rocket_y1.hide();
        rocket_y2.fadeIn(300).show('fast');
        displayContainer(rocket_y2);
    });

    //
    btnHouseSR.click(function(event) {
        CRRNT_CA_RND = 'round2';
    });

    $('.input-sueno').each(function() {
        $(this).change(function(event) {
            if (this.value === undefined || this.value === "" ) {
                this.value = 0;
            }
            var dream_item  = $(this).attr('id'),       // Get Input Id dynamically
                item        = dream_item.split('_');    // Split ID
                _name       = item[0];                  // Element name
                _year       = '_'+item[1];              // Element Year
                _value      = parseInt(this.value);     // Current value to Integer
                _ammount    = obtainAmmount(dream_item);// F() -> Get Input value and set in array var

            if (CRRNT_DRM === 'casa') {
                ts_ca[_name][_year] = _value;
                updateResults(_year);
                //if (CRRNT_CA_RND === 'round1') {
                    ts_ca[_name][_year] = _value;
                    if ( (budget.a_budget) <= budget.casa) {
                        ts_ca[_name][_year] = _value;
                        fillItems(dream_item, CRRNT_DRM);
                        // F-> Fill Items
                        if ( budget.a_budget == budget.casa) {
                            if (_year === '_y2') {
                                houseFeed.fadeIn(300).show('fast');
                                displayContainer(houseFeed);
                            }
                            btnNextCa.removeClass('bbva-disable');
                        }
                    } else {
                        // Decrease value if can't add
                        ts_ca[_name][_year] = 0;
                        $(this).val(ts_ca[_name][_year]);
                        // Update Budget and all item vars
                        updateResults(_year);
                        //  F-> Update Results
                        alert('No tienes suficiente dinero para más artículos');
                    }
                //}
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

function updateResults(year) {
    var _year = year;
    var results = AddResults(_year);
}

function AddResults(year) {
    var _auto = 0, _suma_auto = 0,
        _casa = 0, _suma_casa1 = 0, _suma_casa2 = 0,
        _nave = 0, _suma_nave1 = 0, _suma_nave2 = 0,
        index = 0, _year = year;

    for (var c_item in _casaStuff) {
        var casa_var = _casaStuff[c_item].name;
        if (_year === '_y1') {
            window[casa_var+"_1"] = ( (ts_ca[casa_var]._y1) * (_casaStuff[c_item].price_y1) );
            _suma_auto += window[casa_var+"_1"];
        } else if (_year === '_y2') {
            window[casa_var+"_2"] = ( (ts_ca[casa_var]._y2) * (_casaStuff[c_item].price_y2) );
            _suma_auto += window[casa_var+"_2"];
        }
    }
    budget.a_budget = _suma_auto;
}

function fillItems(dream_item, current_dream) {
    var _item   = dream_item.split("_"),
        _name   = _item[0],
        _year   = "_"+_item[1],
        _dream  = current_dream;
    /*
    *
    */
    if (_dream === 'casa') {
        if ( ts_ca[_name][_year] < 1) {
            removeFinalItem(_dream, _name, _year);
        } else if ( ts_ca[_name][_year] >= 1) {
            removeFinalItem(_dream, _name, _year);
            addFinalItem(_dream, _name, _year);
        }
    }
    /*
    *
    */
    else if (_dream === 'auto') {
        if ( ts_au[_name][_year] < 1) {
            removeFinalItem(_dream, _name, _year);
        } else if ( ts_au[_name][_year] >= 1) {
            removeFinalItem(_dream, _name, _year);
            addFinalItem(_dream, _name, _year);
        }
    }
    /*
    *
    */
    else if (_dream === 'nave') {
        if ( ts_na[_name][_year] < 1) {
            removeFinalItem(_dream, _name, _year);
        } else if ( ts_na[_name][_year] >= 1) {
            removeFinalItem(_dream, _name, _year);
            addFinalItem(_dream, _name, _year);
        }
    }

}
function addFinalItem(dream, name, year) {
    var _dream = dream,
        _name  = name,
        _year  = year;
        /*
        *
        */
        if (_dream === 'casa') {
            if (CRRNT_CA_RND === 'round1') {
                if (_year === '_y1') {
                    _price  = exploreMainArrays(_name, _casaStuff).price_1;
                    _cant   = ts_ca[_name][_year];
                    itemsHome.round1.push({
                        name: _name,
                        price: _price,
                        cant: _cant,
                        iclass: 'item-'+_name
                    });
                } else if (_year === '_y2') {
                    _price  = exploreMainArrays(_name, _casaStuff).price_2;
                    _cant   = ts_ca[_name][_year];
                    itemsHome.round1.push({
                        name: _name,
                        price: _price,
                        cant: _cant,
                        iclass: 'item-'+_name
                    });
                }
            } else if (CRRNT_CA_RND === 'round2') {
                if (_year === '_y1') {
                    _price  = exploreMainArrays(_name, _casaStuff).price_1;
                    _cant   = ts_ca[_name][_year];
                    itemsHome.round2.push({
                        name: _name,
                        price: _price,
                        cant: _cant,
                        iclass: 'item-'+_name
                    });
                } else if (_year === '_y2') {
                    _price  = exploreMainArrays(_name, _casaStuff).price_2;
                    _cant   = ts_ca[_name][_year];
                    itemsHome.round2.push({
                        name: _name,
                        price: _price,
                        cant: _cant,
                        iclass: 'item-'+_name
                    });
                }
            }

        }
        /*
        *
        */
        else if (_dream === 'auto') {
            if (CRRNT_CA_RND === 'round1') {
                if (_year === '_y1') {
                    _price  = exploreMainArrays(_name, _autoStuff).price_1;
                    _cant   = ts_ca[_name][_year];
                    itemsCar.round1.push({
                        name: _name,
                        price: _price,
                        cant: _cant,
                        iclass: 'item-'+_name
                    });
                } else if (_year === '_y2') {
                    _price  = exploreMainArrays(_name, _autoStuff).price_2;
                    _cant   = ts_ca[_name][_year];
                    itemsCar.round1.push({
                        name: _name,
                        price: _price,
                        cant: _cant,
                        iclass: 'item-'+_name
                    });
                }
            } else if (CRRNT_CA_RND === 'round2') {
                if (_year === '_y1') {
                    _price  = exploreMainArrays(_name, _autoStuff).price_1;
                    _cant   = ts_ca[_name][_year];
                    itemsCar.round2.push({
                        name: _name,
                        price: _price,
                        cant: _cant,
                        iclass: 'item-'+_name
                    });
                } else if (_year === '_y2') {
                    _price  = exploreMainArrays(_name, _autoStuff).price_2;
                    _cant   = ts_ca[_name][_year];
                    itemsCar.round2.push({
                        name: _name,
                        price: _price,
                        cant: _cant,
                        iclass: 'item-'+_name
                    });
                }
            }
        }
        /*
        *
        */
        else if (_dream === 'nave') {
            if (CRRNT_CA_RND === 'round1') {
                if (_year === '_y1') {
                    _price  = exploreMainArrays(_name, _naveStuff).price_1;
                    _cant   = ts_ca[_name][_year];
                    itemsRocket.round1.push({
                        name: _name,
                        price: _price,
                        cant: _cant,
                        iclass: 'item-'+_name
                    });
                } else if (_year === '_y2') {
                    _price  = exploreMainArrays(_name, _naveStuff).price_2;
                    _cant   = ts_ca[_name][_year];
                    itemsRocket.round1.push({
                        name: _name,
                        price: _price,
                        cant: _cant,
                        iclass: 'item-'+_name
                    });
                }
            } else if (CRRNT_CA_RND === 'round2') {
                if (_year === '_y1') {
                    _price  = exploreMainArrays(_name, _naveStuff).price_1;
                    _cant   = ts_ca[_name][_year];
                    itemsRocket.round2.push({
                        name: _name,
                        price: _price,
                        cant: _cant,
                        iclass: 'item-'+_name
                    });
                } else if (_year === '_y2') {
                    _price  = exploreMainArrays(_name, _naveStuff).price_2;
                    _cant   = ts_ca[_name][_year];
                    itemsRocket.round2.push({
                        name: _name,
                        price: _price,
                        cant: _cant,
                        iclass: 'item-'+_name
                    });
                }
            }
        }
}
function removeFinalItem(dream, name, year) {
    var _dream  = dream,
        _name   = name,
        _year   = year;

    if (_dream === 'casa') {
        if (CRRNT_CA_RND === 'round1') {
            for(var i = 0; i < itemsHome.round1.length; i++){
                if (itemsHome.round1[i].name === _name) itemsHome.round1.splice(i, 1);
            }
        } else if (CRRNT_CA_RND === 'round2') {
            for(var i = 0; i < itemsHome.round2.length; i++){
                if (itemsHome.round2[i].name === _name) itemsHome.round2.splice(i, 1);
            }
        }

    } else if (_dream === 'auto') {
        if (CRRNT_AU_RND === 'round1') {
            for(var i = 0; i < itemsCar.round1.length; i++){
                if (itemsCar.round1[i].name === _name) itemsCar.round1.splice(i, 1);
            }
        } else if (CRRNT_AU_RND === 'round2') {
            for(var i = 0; i < itemsCar.round2.length; i++){
                if (itemsCar.round2[i].name === _name) itemsCar.round2.splice(i, 1);
            }
        }
    } else if (_dream === 'nave') {
        if (CRRNT_NA_RND === 'round1') {
            for(var i = 0; i < itemsRocket.round1.length; i++){
                if (itemsRocket.round1[i].name === _name) itemsRocket.round1.splice(i, 1);
            }
        } else if (CRRNT_NA_RND === 'round2') {
            for(var i = 0; i < itemsRocket.round2.length; i++){
                if (itemsRocket.round2[i].name === _name) itemsRocket.round2.splice(i, 1);
            }
        }
    }

}
function setFinalItems(dreamItems) {

    var f_row = '', f_rows = '',
        s_row = '', s_rows = '';

    for (var item in dreamItems.round1) {
        f_row = '<div class="lit-row">'+'\n'+
                    '<div class="cmn-block">'+'\n'+
                        '<div class="mid-clmn-lwys">'+'\n'+
                            '<div class="bbva-blue-lghtr cnt-h80">'+'\n'+
                                '<div class="prty-ttl vertical-align">'+'\n'+
                                    '<div class="item-cnt-sueno">'+'\n'+
                                        '<div class="'+dreamItems.round1[item].iclass+'"></div>'+'\n'+
                                    '</div>'+'\n'+
                                '</div>'+'\n'+
                            '</div>'+'\n'+
                        '</div>'+'\n'+
                        '<div class="mid-clmn-lwys">'+'\n'+
                            '<div class="bbva-blue-lghtr cnt-h80">'+'\n'+
                                '<div class="prty-ttl vertical-align">'+'\n'+
                                    '<span> $'+dreamItems.round1[item].price+'</span>'+'\n'+
                                '</div>'+'\n'+
                            '</div>'+'\n'+
                        '</div>'+'\n'+
                    '</div>'+'\n'+
                '</div>'+'\n';
        f_rows += f_row;
    }

    for (var item in dreamItems.round2) {
        f_row = '<div class="lit-row">'+'\n'+
                    '<div class="cmn-block">'+'\n'+
                        '<div class="mid-clmn-lwys">'+'\n'+
                            '<div class="bbva-blue-lghtr cnt-h80">'+'\n'+
                                '<div class="prty-ttl vertical-align">'+'\n'+
                                    '<div class="item-cnt-sueno">'+'\n'+
                                        '<div class="'+dreamItems.round2[item].iclass+'"></div>'+'\n'+
                                    '</div>'+'\n'+
                                '</div>'+'\n'+
                            '</div>'+'\n'+
                        '</div>'+'\n'+
                        '<div class="mid-clmn-lwys">'+'\n'+
                            '<div class="bbva-blue-lghtr cnt-h80">'+'\n'+
                                '<div class="prty-ttl vertical-align">'+'\n'+
                                    '<span> $'+dreamItems.round2[item].price+'</span>'+'\n'+
                                '</div>'+'\n'+
                            '</div>'+'\n'+
                        '</div>'+'\n'+
                    '</div>'+'\n'+
                '</div>'+'\n';
        f_rows += f_row;
    }
}
function exploreMainArrays(_name, _array) {
    var name        = _name,
        stuffArray  = _array,
        price_1     = 0,
        price_2     = 0;

    for (var stuff in stuffArray) {
        if (stuffArray[stuff].name === name) {
            price_1 = stuffArray[stuff].price_y1;
            price_2 = stuffArray[stuff].price_y2;
        }
    }

    return {
        price_1 : price_1,
        price_2 : price_2
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
