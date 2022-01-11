var slideIndex = [1, 1, 1, 1];
var slideId = ["slide0", "slide1", "slide2", "slide3"]
var dotId = ["c_dot1", "c_dot2", "c_dot3", "c_dot4"]

displaySlides(1, 0);
displaySlides(1, 1);
displaySlides(1, 2);
displaySlides(1, 3);

function changeSlides(n, cIndex) {
    displaySlides(slideIndex[cIndex] += n, cIndex);
}

function changeSlideDirect(n, cIndex) {
    displaySlides(slideIndex[cIndex] = n, cIndex);
}

function displaySlides(n, cIndex) {
    var i;
    var c = document.getElementsByClassName(slideId[cIndex]);
    var dots = document.getElementsByClassName(dotId[cIndex]);
    if (n > c.length) { slideIndex[cIndex] = 1 }
    if (n < 1) { slideIndex[cIndex] = c.length }
    for (i = 0; i < c.length; i++) {
        c[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    c[slideIndex[cIndex] - 1].style.display = "inline-flex";
    dots[slideIndex[cIndex] - 1].className += " active";
}