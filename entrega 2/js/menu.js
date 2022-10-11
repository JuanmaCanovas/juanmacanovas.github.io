const burger = document.querySelector(".burger");
const menusm = document.querySelector(".menu-sm");

burger.addEventListener("click",()=>{

    burger.classList.toggle("active");
    menusm.classList.toggle("active");

})

