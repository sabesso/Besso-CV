$(document).ready(function(){
    // Add scrollspy to <body>
    // $('body').scrollspy({target: ".navbar", offset: 50});   
  
    // Add smooth scrolling on all links inside the navbar
    $("#navbarMenu a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
    
            // Store hash
            var hash = this.hash;
    
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
        
                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
        }  // End if
	});
	
	//	Add the scroll to the navbar
	$(window).on('scroll', function() {
		if ($(window).scrollTop() > 40) {
			$('nav').addClass('scrolled');
		} else {
			$('nav').removeClass('scrolled');
		}
	});

	// Add animation for about
	// $('#about').animate({
	// 	height: '1000px'
	// });
	$( '.navbar-nav a' ).on( 'click', function () {
		$( '.navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
		$( this ).parent( 'li' ).addClass( 'active' );
	});

});


	//	Add the scroll to the navbar
	// let scrolled = document.querySelector('.navbar');
	// let rect = scrolled.getBoundingClientRect();

	// document.addEventListener('scroll', function() {
	// 	let topPosition = document.documentElement.scrollTop + rect.top;
	// 	if (topPosition < 50) {
	// 		scrolled.classList.remove('scrolled');
	// 	} else {
	// 		scrolled.classList.add('scrolled');
	// 	}
	// });