// Variables
let hamburger = document.getElementById("hamburger");
let links = document.getElementById("links");
let main = document.querySelector("main");
hamburger.addEventListener("click", hideLinks); // When hamburger is clicked, the links appear or disappear

// When one of the links is clicked, the links disappear
let link = document.querySelectorAll("ul#links > *");
for (let i = 0; i < link.length; i++) {
	link[i].addEventListener("click", hideLinks);
}
// When the outer part of the hamburger menu is clicked the links disappear

main.addEventListener("click", hideLinksOnly);

document.querySelector("footer").addEventListener("click", hideLinksOnly);

//Year at the bottom
document.getElementById("year").innerHTML = new Date().getFullYear();



// Function Components
function hideLinks() {
	if (links.classList.contains("hidden")) {
		links.classList.remove("hidden");
		hamburger.classList.add("active");
	} else {
		links.classList.add("hidden");
		hamburger.classList.remove("active");
	}
}
function hideLinksOnly() {
	if (links.classList.contains("hidden") === false) {
		links.classList.add("hidden");
		hamburger.classList.remove("active");
	}
}

// Carousel
var owl = $(".owl-carousel");

if (window.innerWidth < 640) {
	//Small Screens
	owl.owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		items: 1,
		lazyLoad: true,
		autoplay: false,
		autoplayHoverPause: true,
		autoplaySpeed: 3000,
		center: false,
	});
} else if (window.innerWidth < 780) {
	//Medium Screens
	owl.owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		items: 2,
		lazyLoad: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplaySpeed: 3000,
		center: true,
	});
} else {
	owl.owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		items: 1,
		lazyLoad: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplaySpeed: 3000,
		center: true,
	});
}

var owlNav = $(".owl-nav");
owlNav.addClass("text-4xl font-mono flex justify-center");
$(".owl-prev").addClass("outline-0");
