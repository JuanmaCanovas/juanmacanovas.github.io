const slider = document.getElementById('slider');
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

/*Obtengo el ultimo elemento y lo inserto al principio del slider*/ 
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next (){
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.7s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    },700);
}

function prev (){
    let sliderSection = document.querySelectorAll(".slider-section")
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.7s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },700);
}


btnRight.addEventListener('click', () => next());
btnLeft.addEventListener('click', () => prev());
