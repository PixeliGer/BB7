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

    var btnHanoi = $('#btnHanoi');
    var btnPitagras = $('#btnPitagoras');
    var btnGauss = $('#btnGauss');
    var btnMoebius = $('#btnMoebius');
    var btnElemComp = $('#btnElemComp');
    var mainSection = $('#main-section');
    var sectionArticle = $('#section-article-I');

    $('#arrow-down').click(function(event) {
        $('html, body').animate({ scrollTop: $("#two").offset().top }, 500);
    });

    btnHanoi.mouseover(function(event) {
        $(this).find('.img-Button').attr('src', 'resources/img/icons/Botones_Menu/btn_menu_1_on.svg');
        $(this).find('.txt-Button-Container').css('color', '#332414');
    }).mouseout(function(event) {
        $(this).find('.img-Button').attr('src', 'resources/img/icons/Botones_Menu/btn_menu_1.svg');
        $(this).find('.txt-Button-Container').css('color', '#FFF');
    });

    btnPitagras.mouseover(function(event) {
        $(this).find('.img-Button').attr('src', 'resources/img/icons/Botones_Menu/btn_menu_2_on.svg');
        $(this).find('.txt-Button-Container').css('color', '#332414');
    }).mouseout(function(event) {
        $(this).find('.img-Button').attr('src', 'resources/img/icons/Botones_Menu/btn_menu_2.svg');
        $(this).find('.txt-Button-Container').css('color', '#FFF');
    });

    btnGauss.mouseover(function(event) {
        $(this).find('.img-Button').attr('src', 'resources/img/icons/Botones_Menu/btn_menu_3_on.svg');
        $(this).find('.txt-Button-Container').css('color', '#332414');
    }).mouseout(function(event) {
        $(this).find('.img-Button').attr('src', 'resources/img/icons/Botones_Menu/btn_menu_3.svg');
        $(this).find('.txt-Button-Container').css('color', '#FFF');
    });

    btnMoebius.mouseover(function(event) {
        $(this).find('.img-Button').attr('src', 'resources/img/icons/Botones_Menu/btn_menu_4_on.svg');
        $(this).find('.txt-Button-Container').css('color', '#332414');
    }).mouseout(function(event) {
        $(this).find('.img-Button').attr('src', 'resources/img/icons/Botones_Menu/btn_menu_4.svg');
        $(this).find('.txt-Button-Container').css('color', '#FFF');
    });

    btnElemComp.mouseover(function(event) {
        $(this).find('.img-Button').attr('src', 'resources/img/icons/Botones_Menu/btn_menu_5_on.svg');
        $(this).find('.txt-Button-Container').css('color', '#332414');
    }).mouseout(function(event) {
        $(this).find('.img-Button').attr('src', 'resources/img/icons/Botones_Menu/btn_menu_5.svg');
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

$(window).resize(function() {
    var mainSection = $('#main-section');

    var sectionArticle = $('#section-article-I');

    mainHeight = mainSection.outerHeight();
    //
    percentHeight = (mainHeight - (mainHeight *.20));
    //
    divHeight = percentHeight;
    //
    if(isFirefox){
        $("div.inner-column").css('height', '100%');
    } else{
        sectionArticle.css('height', divHeight);
        $("div.inner-column").css('height', divHeight);
    }
    //
    var menuHeight = $("#menu-section").outerHeight();
    var newSize = menuHeight*.42;
    $(".row1").css('height', newSize);
});
