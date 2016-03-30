/*
  * @package Cyprass
  * @subpackage Cyprass HTML
  * 
  * Template Scripts
  * Created by Themeturn
  
  1. Fixed header
  2. Site search
  3. Main slideshow
  4. Owl Carousel
      a. Testimonial
      b. Clients
      c. Team
  5. Back to top
  6. Skills
  7. BX slider
      a. Blog Slider
      b. Portfolio item slider
  8. Isotope
  9. Animation (wow)
  10. Flickr
  
*/


jQuery(function($) {
  "use strict";
 $.noConflict();
     $('.nav a').on('click', function(){ 
        if($('.navbar-toggle').css('display') !='none'){
            $(".navbar-toggle").trigger( "click" );
        }
    });

   
//  Navigation scrolling

      $('a.page-scroll').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			
			$("#bs-example-navbar-collapse-1 li").removeClass('active');
			$($('a[href="/' + this.hash  + '"]').parents('li')[0]).addClass('active');
			
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top - 40
              }, 900);
              return false;
            }
          }
        });

   
 $(document).ready(function() {
	var hash = window.location.hash;
	var a = {};
	if(hash.length == 0) {
		hash = window.location.pathname;
		a = $($('a[href="' + hash  + '"]')[0]);
	} else {
		hash = "/" + hash;
		a = $('a[href="' + hash  + '"]');
	}
	
	$("#bs-example-navbar-collapse-1 li").removeClass('active');
	$(a.parents('li')[0]).addClass('active');
 });

 
  // accordian
  $('.accordion-toggle').on('click', function(){
    $(this).closest('.panel-group').children().each(function(){
    $(this).find('>.panel-heading').removeClass('active');
     });

    $(this).closest('.panel-heading').toggleClass('active');
  });

 
 /* ----------------------------------------------------------- */
/*  BX slider
/* ----------------------------------------------------------- */

      //Portfolio item and blog slider
    
/*Smooth Scroll*/
      smoothScroll.init({
          speed: 400,
          easing: 'easeInQuad',
          offset:0,
          updateURL: true,
          callbackBefore: function ( toggle, anchor ) {},
          callbackAfter: function ( toggle, anchor ) {}
        }); 


  /* ----------------------------------------------------------- */
  /*  Main slideshow
  /* ----------------------------------------------------------- */

  $('#slider_part').carousel({
    pause: true,
    interval: 100000,
  });

  /* ----------------------------------------------------------- */
  /* Team Carousel
  /* ----------------------------------------------------------- */

	$("#owl-demo").owlCarousel({
		navigation : true, // Show next and prev buttons
		// navigationText: ["prev","next"], 
		navigationText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
			],
		slideSpeed : 300,
		paginationSpeed : 400,
		autoPlay: false,  
		items : 1,
		itemsDesktop:[500,1],  
		itemsDesktopSmall:[979,1],  //As above.
		itemsTablet:[768,1],    //As above.
		// itemsTablet:[640,2],   
		itemsMobile:[479,1],    //As above
		goToFirst: true,    //Slide to first item if autoPlay reach end
		goToFirstSpeed:1000 
	});

    //Testimonial

    $("#testimonial-carousel").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 600,
      pagination:false,
      singleItem:true
 
    });

    // Custom Navigation Events
    var owl = $("#testimonial-carousel");


    // Custom Navigation Events
    $(".next").click(function(){
      owl.trigger('owl.next');
    })
    $(".prev").click(function(){
      owl.trigger('owl.prev');
    })
    $(".play").click(function(){
      owl.trigger('owl.play',1000); //owl.play event accept autoPlay speed as second parameter
    })
    $(".stop").click(function(){
      owl.trigger('owl.stop');
    })
    

//Clients
//
    $("#client-carousel").owlCarousel({

      navigation : true, // Show next and prev buttons
      navigationText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      slideSpeed : 400,
      pagination:false,
      items : 5,
      rewindNav: true,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      itemsTablet:[768,3],    //As above.
      // itemsMobile:[479,2],
      itemsMobile:[320,1],
      stopOnHover:true,
      autoPlay:true

    });


  /* ----------------------------------------------------------- */
  /* Team Carousel
  /* ----------------------------------------------------------- */

  $("#owl-blog").owlCarousel({
    autoPlay: true,  
    items : 4,
    itemsDesktop:[1199,4], 
    itemsDesktopSmall:[979,3],  //As above.
    itemsTablet:[768,2],    //As above.
    itemsMobile:[479,1],    //As above
    goToFirst: true,    //Slide to first item if autoPlay reach end
    goToFirstSpeed:1000, 
  
  });


//Counter 
  
   
    // jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 100,
            time: 2000
        });
    // }); 

// prettyphoto

 $("a[data-rel^='prettyPhoto']").prettyPhoto();
 
    
 


/* ==============================================
Back To Top Button
=============================================== */  
 
  $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });
      // scroll body to 0px on click
      $('#back-top').click(function () {
          $('#back-top a').tooltip('hide');
          $('body,html').animate({
              scrollTop: 0
          }, 800);
          return false;
      });
      
      $('#back-top').tooltip('hide');




});