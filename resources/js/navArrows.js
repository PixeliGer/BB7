
function constructArrows() {
	// Create DOM Object
	$('<div/>', {
		'id': 'btnScrollUp',
		'class': 'btn-scroll-arrowUp',
		click : scrollToTop
	}).appendTo('.nav-arrows');

	// Create DOM Object
	$('<div/>', {
		'id': 'btnScrollDown',
		'class': 'btn-scroll-arrowDown',
		click : scrollToBottom
	}).appendTo('.nav-arrows');
}

function scrollToBottom() {
	var scroll = $(window).scrollTop();
	var body = $("html, body");
    body.animate({
        scrollTop: scroll + 500
    }, '500', 'swing', function() {
    });
}

function scrollToTop() {
	var scroll = $(window).scrollTop();
	var body = $("html, body");
    body.animate({
        scrollTop: scroll - 500
    }, '500', 'swing', function() {
        //callback
    });
}

$(document).ready(function() {
	constructArrows();
	//
	var arrowUp = $('#btnScrollUp');
	var arrowDown = $('#btnScrollDown');
});

$(window).scroll(function(event) {
    var bodyHeight = $(document).height();
    var scroll = $(window).scrollTop();
	var arrowUp = $('#btnScrollUp');
	var arrowDown = $('#btnScrollDown');

    if ($(window).scrollTop() == 0) {
        arrowUp.fadeOut(500).hide('fast');
    } else {
        arrowUp.fadeIn(500).show('fast');
    }
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        arrowDown.fadeOut(500).hide('fast');
    } else {
        arrowDown.fadeIn(500).show('fast');
    }

});
