// Generated by CoffeeScript 1.3.3
(function() {
  var updateSizes;

  updateSizes = function() {
    if ($(window).width() >= 980) {
      return $('.sidebar').height($(window).height());
    } else {
      return $('.sidebar').height('auto');
    }
  };

  window.addEventListener("load", function() {
    return setTimeout(function() {
      return window.scrollTo(0, 1);
    }, 0);
  });

  window.addEventListener("resize", function() {
    return updateSizes();
  });

  /*
  window.addEventListener "load", ->
  	$('.go-up').fadeOut();
  
  	$(window).scroll ->
  		if $(@).scrollTop > 100
  			$('.go-up').fadeIn()
  		else
  			$('.go-up').fadeOut();
  
  	$('.go-up a').click ->
  		$('body, html').animate
  			scrollTop: 0
  		, 500
  		false
  */


  window.updateSizes = updateSizes;

}).call(this);
