var divHeight, mainHeight, percentHeight;
// Detecting Browser
// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// At least Safari 3+: "[object HTMLElementConstructor]"
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// Chrome 1+
var isChrome = !!window.chrome && !isOpera;
// At least IE6
var isIE = /*@cc_on!@*/false || !!document.documentMode;

$(document).ready(function() {

    var btnHanoi = $('#viajaTiempo');
    var btnPitagras = $('#resuelveMisterio');
    var btnGauss = $('#construyeSue');
    var btnMoebius = $('#armaFiesta');
    var btnElemComp = $('#navegaEspacio');
    var mainSection = $('#main-section');
    var sectionArticle = $('#section-article-I'); one

    $('#arrow-down').click(function(event) {
        $('html, body').animate({ scrollTop: $("#two").offset().top }, 500);
    });
    $('#arrow-arriba').click(function (event) {
        $('html, body').animate({ scrollTop: "0px" });
    });
    $('#arrow-arribaActividades').click(function (event) {
        $('html, body').animate({ scrollTop: $("#two").offset().top }, 500);
    });
    $('#viajaTiempo').click(function (event) {
        $('html, body').animate({ scrollTop: "2100px" });
    });

    btnHanoi.mouseover(function (event) {
        $(this).find('.img-Button').attr('src', 'Resources/Images/Home/Botones_Menu/Ico_Menu_Maquina_Tiempo_on.svg');
        $(this).find('.txt-Button-Container').css('color', '#1F80DC');
    }).mouseout(function(event) {
        $(this).find('.img-Button').attr('src', 'Resources/Images/Home/Botones_Menu/Ico_Menu_Maquina_Tiempo.svg');
        $(this).find('.txt-Button-Container').css('color', '#FFF');
    });

    btnPitagras.mouseover(function(event) {
        $(this).find('.img-Button').attr('src', 'Resources/Images/Home/Botones_Menu/Ico_Menu_Misterio_on.svg');
        $(this).find('.txt-Button-Container').css('color', '#1F80DC');
    }).mouseout(function(event) {
        $(this).find('.img-Button').attr('src', 'Resources/Images/Home/Botones_Menu/Ico_Menu_Misterio.svg');
        $(this).find('.txt-Button-Container').css('color', '#FFF');
    });

    btnGauss.mouseover(function(event) {
        $(this).find('.img-Button').attr('src', 'Resources/Images/Home/Botones_Menu/Ico_Menu_Construye_Suenos_on.svg');
        $(this).find('.txt-Button-Container').css('color', '#1F80DC');
    }).mouseout(function(event) {
        $(this).find('.img-Button').attr('src', 'Resources/Images/Home/Botones_Menu/Ico_Menu_Construye_Suenos.svg');
        $(this).find('.txt-Button-Container').css('color', '#FFF');
    });

    btnMoebius.mouseover(function(event) {
        $(this).find('.img-Button').attr('src', 'Resources/Images/Home/Botones_Menu/Ico_Menu_Fiesta_on.svg');
        $(this).find('.txt-Button-Container').css('color', '#1F80DC');
    }).mouseout(function(event) {
        $(this).find('.img-Button').attr('src', 'Resources/Images/Home/Botones_Menu/Ico_Menu_Fiesta.svg');
        $(this).find('.txt-Button-Container').css('color', '#FFF');
    });

    btnElemComp.mouseover(function(event) {
        $(this).find('.img-Button').attr('src', 'Resources/Images/Home/Botones_Menu/Ico_Menu_Navega_on.svg');
        $(this).find('.txt-Button-Container').css('color', '#1F80DC');
    }).mouseout(function(event) {
        $(this).find('.img-Button').attr('src', 'Resources/Images/Home/Botones_Menu/Ico_Menu_Navega.svg');
        $(this).find('.txt-Button-Container').css('color', '#FFF');
    });
    mainHeight = mainSection.outerHeight();
    //
    percentHeight = (mainHeight - (mainHeight *.20));
    //
    divHeight = percentHeight;
    //
    if(isFirefox){
        $("div.inner-column").css('height', '100%');
    }
    //
    var menuHeight = $("#menu-section").outerHeight();
    //
    var newSize = menuHeight*.42;
    //
    $(".row1").css('height', newSize);
});
