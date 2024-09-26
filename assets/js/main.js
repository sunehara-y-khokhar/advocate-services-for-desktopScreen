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