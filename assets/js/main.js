window.onscroll = function () { myFunction() };
var navbar = document.getElementById("stickyNav");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky-nav")
    } else {
        navbar.classList.remove("sticky-nav");
    }
}

var swiper = new Swiper(".testimonial-wrapper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    loop: true,
    speed: 1300,
    autoplay: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});
