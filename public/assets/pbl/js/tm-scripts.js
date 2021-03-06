var hos = window.location.protocol + "//" + window.location.host + '/';

function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* cookie.JS
 ========================================================*/
include(hos + 'assets/pbl/js/jquery.cookie.js');

/* Easing library
 ========================================================*/
include(hos + 'assets/pbl/js/jquery.easing.1.3.js');


/* Stick up menus
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include(hos + 'assets/pbl/js/tmstickup.js');

        $(document).ready(function () {
            $('#stuck_container').TMStickUp({})
        });
    }
})(jQuery);

/* ToTop
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include(hos + 'assets/pbl/js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({easingType: 'easeOutQuart'});
        });
    }
})(jQuery);

/* EqualHeights
 ========================================================*/
;
(function ($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include(hos + 'assets/pbl/js/jquery.equalheights.js');
    }
})(jQuery);

/* SMOOTH SCROLLIG
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include(hos + 'assets/pbl/js/jquery.mousewheel.min.js');
        include(hos + 'assets/pbl/js/jquery.simplr.smoothscroll.min.js');

        $(document).ready(function () {
            $.srSmoothscroll({
                step: 150,
                speed: 800
            });
        });
    }
})(jQuery);

/* Copyright Year
 ========================================================*/
;
(function ($) {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function () {
        $("#copyright-year").text((new Date).getFullYear());
    });
})(jQuery);

;
(function ($) {
    function include(url) {
	document.write('<script src="'+hos+'assets/pbl/js/' + url + '"></script>');
	return false;
}
	include('superfish.js');
	jQuery(function () {
	// jQuery('.sf-menu').mobileMenu();
})
	// include('jquery.mobilemenu.js');
})(jQuery);


/* Responsive Tabs
 ========================================================*/
;
(function ($) {
    var o = $('.resp-tabs');
    if (o.length > 0) {
        include(hos + 'assets/pbl/js/jquery.responsive.tabs.js');

        $(document).ready(function () {
            o.easyResponsiveTabs();
        });
    }
})(jQuery);



/* Navbar
 ========================================================*/
;
(function ($) {
    include(hos + 'assets/pbl/js/jquery.rd-navbar.js');
})(jQuery);



/* JQuery UI Accordion
 ========================================================*/
;
(function ($) {
    var o = $('.accordion');
    if (o.length > 0) {
        include(hos + 'assets/pbl/js/jquery.ui.accordion.min.js');

        $(document).ready(function () {
            o.accordion({
                active: false,
                header: '.accordion_header',
                heightStyle: 'content',
                collapsible: true
            });
        });
    }
})(jQuery);


/* Google Map
 ========================================================*/
;
(function ($) {
    var o = document.getElementById("google-map");
    if (o) {
        include('//maps.google.com/maps/api/js?sensor=false');
        include(hos + 'assets/pbl/js/jquery.rd-google-map.js');

        $(document).ready(function () {
            var o = $('#google-map');
            if (o.length > 0) {
                o.googleMap({styles:[{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":60}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]}]});
            }
        });
    }
})
(jQuery);


/* WOW
 ========================================================*/
;
(function ($) {
    var o = $('html');

    if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) || (isIE() && isIE() > 9)) {
        if (o.hasClass('desktop')) {
            include(hos + 'assets/pbl/js/wow.js');

            $(document).ready(function () {
                new WOW().init();
            });
        }
    }
})(jQuery);

/* Contact Form
 ========================================================*/
;
(function ($) {
    var o = $('#contact-form');
    if (o.length > 0) {
        include(hos + 'assets/pbl/js/modal.js');
        include(hos + 'assets/pbl/js/TMForm.js'); 

        if($('#contact-form .recaptcha').length > 0){
        	include('//www.google.com/recaptcha/api/assets/pbl/js/recaptcha_ajax.js');
        }
    }
})(jQuery);

/* Orientation tablet fix
 ========================================================*/
$(function () {
    // IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menus li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');

/* Search.js
 ========================================================*/
;
(function ($) {
    var o = $('.search-form');
    if (o.length > 0) {
        include(hos + 'assets/pbl/js/TMSearch.js');
    }
})(jQuery);  



/* panel */

$(document).ready(function () {
	// $('head').append('<link rel="stylesheet" href="assets/pbl/css/tm_docs.css" type="text/css" media="screen"><link href="assets/pbl/css/tm_panel.css" rel="stylesheet">');
	// $('body').prepend('<div id="panel"><div class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner" id="advanced"><span class="trigger"><strong></strong><em></em></span><div class="container"><div class="navbar-header"><button class="navbar-toggle tm_offs1" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation"><ul class="nav navbar-nav"><li class="home"><a href="index.html" class="glyphicon glyphicon-home"></a></li><li class="divider-vertical"></li><li><a href="assets/getting-started.html">Getting started</a></li><li><a href="assets/css.html">CSS</a></li><li><a href="assets/components.html">Components</a></li><li><a href="assets/javascript.html">JavaScript</a></li><li class="divider-vertical"></li><li class="dropdown -tm-dropdown"><a data-toggle="dropdown" href="#">TM add-ons<span class="caret"></span></a><ul class="dropdown-menu" role="menu"><li role="presentation"><a role="menuitem" tabindex="-1" href="404.html">Pages</a><ul class="pages"><li><a href="404.html" role="menuitem" tabindex="-1">404 page</a></li><li><a href="assets/under-construction.html" role="menuitem" tabindex="-1">Under Construction</a></li></ul></li><li role="presentation"><a role="menuitem" tabindex="-1" href="assets/portfolio.html">Porfolio</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="assets/slider.html">Slider</a></li><li role="presentation"><a role="menuitem" tabindex="-1" href="assets/social_media.html">Social and media</a></li></ul></li></ul></nav></div></div></div>');
    // $('head').append('<link rel="stylesheet" href="assets/pbl/css/tm_docs.css" type="text/css" media="screen"><link href="assets/pbl/css/tm_panel.css" rel="stylesheet">');
    // $('body').prepend('<div id="panel"><div class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner" id="advanced"></div></div>');
});
$(window).scroll(
	function () {
		if (
			$(this).scrollTop() > 0) {
			$("#advanced").css({
				position: 'fixed'
			});
		} else {
			$("#advanced").css({
				position: 'relative'
			});
		}
	}
);
$(function () {
	var
		strCookies1 = $.cookie('panel1'),
		isAnimate = false,
		isOpen = false;

	if (strCookies1 == null) {
		$.cookie('panel1', 'closed');
		strCookies1 = $.cookie('panel1');
		isOpen = false;
	}

	if (strCookies1 == 'opened') {
		$("#advanced").css({
			marginTop: '0px'
		}).removeClass('closed');
		isOpen = true;
		$('#stuck_container').trigger('rePosition', 50); //for sticky menu
	} else {
		$("#advanced").css({
			marginTop: '-50px'
		}).addClass('closed');
		isOpen = false;
		$('#stuck_container').trigger('rePosition', 0); //for sticky menu
	}

	$("#advanced .trigger").click(
		function () {
			if (!isOpen) {
				$(this).find('strong').animate({
					opacity: 0
				}).parent().parent('#advanced').removeClass('closed').animate({
					marginTop: '0px'
				}, 300);
				$.cookie('panel1', 'opened');
				strCookies1 = $.cookie('panel1');

				isOpen = true;
				$('#stuck_container').trigger('rePosition', 50);
			} else {
				$(this).find('strong').animate({
					opacity: 1
				}).parent().parent('#advanced').addClass('closed').animate({
					marginTop: '-50px'
				}, 300)
				$.cookie('panel1', 'closed');
				strCookies1 = $.cookie('panel1');

				isOpen = false;
				$('#stuck_container').trigger('rePosition', 0); //for sticky menu
			}
		}
	)
});
/*--------- end panel *------------*/

/* Facebook
 ========================================================*/

//     ;(function(d, s, id) {
//         var js, fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) return;
//         js = d.createElement(s); js.id = id;
//         js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.3";
//         fjs.parentNode.insertBefore(js, fjs);
//     }(document, 'script', 'facebook-jssdk'));

// ;(function ($) {
//     var o = $('.fb-page');

//     $(window).load(function () {
//         o.css({'display': 'block'})
//             .find('span').css({
//                 'width': '100%',
//                 'display': 'block',
//                 'text-align': 'inherit'
//             })
//             .find('iframe').css({
//                 'display': 'inline-block',
//                 'position': 'static'
//             });
//     });

//     $(window).on('load resize', function () {
//         if (o.parent().width() < o.find('iframe').width()) {
//             o.find('iframe').css({
//                 'transform': 'scale(' + (o.width() / o.find('iframe').width()) + ')',
//                 'transform-origin': '0% 0%'
//             })
//                 .parent().css({
//                     'height': (o.find('iframe').height() * (o.width() / o.find('iframe').width())) + 'px'
//                 });
//         } else {
//             o
//                 .find('span').css({
//                     'height': 'auto'
//                 })
//                 .find('iframe').css({
//                     'transform': 'none'
//                 });
//         }
//     });
// })(jQuery);

/* FancyBox
========================================================*/
;(function ($) {
    var o = $('.thumb');
    if (o.length > 0) {
        include(hos + 'assets/pbl/js/jquery.fancybox.js');
        include(hos + 'assets/pbl/js/jquery.fancybox-media.js');
        include(hos + 'assets/pbl/js/jquery.fancybox-buttons.js');
        $(document).ready(function () {
            o.fancybox();
        });
    }
})(jQuery);

/* Parallax
=============================================*/
;(function ($) {
    include(hos + 'assets/pbl/js/jquery.rd-parallax.js');
})(jQuery); 


