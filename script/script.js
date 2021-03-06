$(document).ready(function () {

    //=====================  табы ====================//
    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $('.tab ul.tabs li ').click(function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        } );
    })(jQuery);


        //================ скрол ======================//

    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        });
        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    //============= появление обьектов ================//

    Revealator.effects_padding = '-200';

    //=================== карта =====================//

    var mapContainer = document.getElementById('map');

    showMap(document.getElementById('map'),  55.761286,  37.662893 );

    function showMap(mapContaine, lat, lon) {
        var center = new google.maps.LatLng(lat, lon);

        var marker = new google.maps.Marker({
            position: {lat:  55.760598, lng: 37.662593},
            icon: {
                url: "script/map.png",
            }
        });

        var mapProp= {
            center: center,
            zoom: 16,
            zoomControl:false,
            disableDefaultUI: true,
            styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#c51616"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "hue": "#c51616"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "color": "#c51616"
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.locality",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "color": "#c51616"
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 65
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 51
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 30
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 40
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "color": "#c51616"
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "saturation": "100"
                            },
                            {
                                "gamma": "1.28"
                            },
                            {
                                "weight": "1.16"
                            },
                            {
                                "invert_lightness": true
                            },
                            {
                                "color": "#c51616"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station.bus",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "gamma": "1.20"
                            },
                            {
                                "lightness": "0"
                            },
                            {
                                "saturation": "100"
                            },
                            {
                                "hue": "#c51616"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station.rail",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "color": "#c51616"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station.rail",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "hue": "#c51616"
                            },
                            {
                                "visibility": "simplified"
                            },
                            {
                                "saturation": "100"
                            },
                            {
                                "gamma": "1.24"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": -25
                            },
                            {
                                "saturation": "69"
                            },
                            {
                                "color": "#dddddd"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "color": "#c51616"
                            }
                        ]
                    }
                ]

        };

        var map = new google.maps.Map(mapContainer, mapProp);
        marker.setMap(map);

    }

});


    //==================== вторая часть скрола ===================//

function onScroll(){
    var scrollPosition = $(document).scrollTop();
    $('.nav__menu a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
            $('.nav__menu ul li a').removeClass("active");
            currentLink.addClass("active");
        }
        else{
            currentLink.removeClass("active");
        }
    });
}