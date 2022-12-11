import "./style.css";

const ttmnavitems = document.querySelectorAll(".testimonial-nav>button");
let slides = document.querySelectorAll(".testimonial-slide");

let slidewidth = slides[0].clientWidth + 32;

// console.log(slidewidth);

function addActiveCLass(target, className) {
    ttmnavitems.forEach(itm => itm.classList.remove('active'));
    target.classList.add(className);
}

function moveSlide(target, distance, idx) {
   target.forEach((slide) => {
      slide.style.translate = - distance * idx + "px";
   });
}

ttmnavitems.forEach((navitm, idx) => {
    navitm.addEventListener("click", () => {
       moveSlide(slides, slidewidth, idx);
        addActiveCLass(navitm, 'active');
   });
});


window.addEventListener('resize',() => {
    slides = document.querySelectorAll(".testimonial-slide");
    slidewidth = slides[0].clientWidth + 32;
} )