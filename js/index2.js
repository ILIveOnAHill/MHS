(function ($) {

    /**
     * Copyright 2012, Digital Fusion
     * Licensed under the MIT license.
     * http://teamdf.com/jquery-plugins/license/
     *
     * @author Sam Sehnert
     * @desc A small plugin that checks whether elements are within
     *     the user visible viewport of a web browser.
     *     only accounts for vertical position, not horizontal.
     */

    $.fn.visible = function (partial) {

        var $t = $(this),
                $w = $(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height(),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

})(jQuery);

var win = $(window);
var allMods = $(".module");

allMods.each(function (i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("already-visible");
    }
});

win.scroll(function (event) {
    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("come-in");
        }
    });
});




$(window).scroll(function(){
  var wh = $(window).height()-100;
	if($(window).scrollTop() > $('.header').offset().top-wh){
  	$('.header').addClass('play');}
        else{
            $('.header').removeClass('play');
        }
      
});


$(window).scroll(function(){
  var wh = $(window).height()-100;
	if($(window).scrollTop() > $('#AboutText').offset().top-wh){
  	$('#AboutText').addClass('play');
  }
});



        
document.getElementById("contents").addEventListener("wheel", myFunction);
document.getElementById("contents").addEventListener("click", myFunction);

function myFunction() {
    document.location.href = "#Produkti";
}




function myFunction2(x) {
  x.classList.toggle("change");
}