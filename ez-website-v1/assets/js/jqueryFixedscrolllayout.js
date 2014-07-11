/**
 * cbpFixedScrollLayout.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpFixedScrollLayout = (function() {

	// cache and initialize some values
	var config = {
        // the cbp-fbscroller's sections
        $sections : $( '#cbp-fbscroller > section' ),
		// the navigation links
		$navlinks : $( '#cbp-fbscroller > nav:first > a' ),
		// index of current link / section
		currentLink : 0,
		// the body element
		$body : $( 'html, body' ),
		// the body animation speed
		animspeed : 650,
		// the body animation easing (jquery easing)
		animeasing : 'easeInOutExpo'
	};

    var navPortfolio = "";
    $("#btAll").click(function() { navPortfolio = "all"; });
    $("#btWeb").click(function() { navPortfolio = "web"; });
    $("#btMobile").click(function() { navPortfolio = "mobile"; });
    $("#btAnimation").click(function() { navPortfolio = "animation"; });
    $("#btOthers").click(function() { navPortfolio = "others"; });

	function init() {

		// click on a navigation link: the body is scrolled to the position of the respective section
		config.$navlinks.on( 'click', function() {
            $( '#cbp-fbscroller > nav:first > a').removeClass( 'cbp-fbcurrent' );
            if( $(this).index() > 0 ) {
                config.currentLink = 1;
                switch ( navPortfolio ) {
                    case "web":
                        $( '#cbp-fbscroller > nav:first > a#btWeb').addClass( 'cbp-fbcurrent' );
                        break;
                    case "mobile":
                        $( '#cbp-fbscroller > nav:first > a#btMobile').addClass( 'cbp-fbcurrent' );
                        break;
                    case "animation":
                        $( '#cbp-fbscroller > nav:first > a#btAnimation').addClass( 'cbp-fbcurrent' );
                        break;
                    case "others":
                        $( '#cbp-fbscroller > nav:first > a#btOthers').addClass( 'cbp-fbcurrent' );
                        break;
                    default:
                        $( '#cbp-fbscroller > nav:first > a#btAll').addClass( 'cbp-fbcurrent' );
                        break;
                }
            } else {
                config.currentLink = 0;
                config.$navlinks.eq( config.currentLink ).addClass( 'cbp-fbcurrent' );
            }
            $('html, body').animate({ scrollTop:$(this.hash).offset().top }, config.animspeed, config.animeasing);
			return false;
		} );

		// 2 waypoints defined:
		// First one when we scroll down: the current navigation link gets updated. A "new section" is reached when it occupies more than 70% of the viewport
		// Second one when we scroll up: the current navigation link gets updated. A "new section" is reached when it occupies more than 70% of the viewport
		config.$sections.waypoint( function( direction ) {
			if( direction === 'down' ) {
                //changeNav( $( this ) );
                console.log("direction should be down: " + direction);
                $( '#cbp-fbscroller > nav:first > a').removeClass( 'cbp-fbcurrent' );
                switch ( navPortfolio ) {
                    case "web":
                        $( '#cbp-fbscroller > nav:first > a#btWeb').addClass( 'cbp-fbcurrent' );
                        break;
                    case "mobile":
                        $( '#cbp-fbscroller > nav:first > a#btMobile').addClass( 'cbp-fbcurrent' );
                        break;
                    case "animation":
                        $( '#cbp-fbscroller > nav:first > a#btAnimation').addClass( 'cbp-fbcurrent' );
                        break;
                    case "others":
                        $( '#cbp-fbscroller > nav:first > a#btOthers').addClass( 'cbp-fbcurrent' );
                        break;
                    default:
                        $( '#cbp-fbscroller > nav:first > a#btAll').addClass( 'cbp-fbcurrent' );
                        break;
                }
            }
		}, { offset: '30%' } ).waypoint( function( direction ) {
			if( direction === 'up' ) {
                //changeNav( $( this ) );
                console.log("direction should be up: " + direction);
                $( '#cbp-fbscroller > nav:first > a').removeClass( 'cbp-fbcurrent' );
                $( '#cbp-fbscroller > nav:first > a#btFeatured').addClass( 'cbp-fbcurrent' );
            }
		}, { offset: '-30%' } );

		// on window resize: the body is scrolled to the position of the current section
		$( window ).on( 'debouncedresize', function() {
            if( config.currentLink > 0 ) {
                $('html, body').animate({ scrollTop:$("#fbsection2").offset().top }, config.animspeed, config.animeasing);
            } else {
                $('html, body').animate({ scrollTop:$("#fbsection1").offset().top }, config.animspeed, config.animeasing);
            }
		} );
		
	}

	return { init : init };

})();