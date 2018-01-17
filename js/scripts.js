$(function(){
	
	var carouselList = $("#carousel ul");

	setInterval(changeSlide, 3000);

	function changeSlide(){
		carouselList
			.animate({'marginLeft':-400}, 500, moveFirstSlide);
	}
	
	function moveFirstSlide(){
		carouselList
			.find("li:last")
			.after(carouselList.find("li:first"));
		carouselList.css({marginLeft: 0});
	};
});