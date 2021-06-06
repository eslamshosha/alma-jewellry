$('.product-slider .owl-carousel').owlCarousel({
	loop: true,
	autoplay: true,
	autoplayTimeout: 4000,
	margin: 10,
	rtl: true,
	navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: false,
			dots: true,
			loop: true
		},
		480: {
			items: 2,
			nav: false,
			dots: true,
			loop: true
		},
		720: {
			items: 3,
			nav: false,
			dots: true,
			loop: true
		},
		992: {
			items: 4,
			nav: false,
			dots: true,
			loop: true
		},
		1200: {
			items: 4,
			nav: true,
			dots: false,
			loop: true
		}
	}
});

//This is to Open Search Box 
$(".search .search-icon").click(function() {
	// $("body").addClass("overflow")
	$(".search .search-icon").removeClass("open-search")
	$(".search .search-icon").addClass("close-search")
	$(".search-box").addClass("search-open");
	$(".overlay-box").fadeIn(500);
});

$(".overlay-box").click(function() {
	$("body").removeClass("overflow")
	$(".search .search-icon").addClass("open-search")
	$(".search .search-icon").removeClass("close-search")
	$(".search-box").removeClass("search-open");
	$(".overlay-box").fadeOut(500);
});