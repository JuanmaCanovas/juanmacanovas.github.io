const container = document.getElementById('container-loader');
const percent = document.getElementById('percentage');
window.addEventListener('scroll', disableScroll);
let perVal = 0;
let increament = setInterval(()=>{
    perVal++
    percent.textContent = `%${perVal}`;
    if (perVal == 100){
        clearInterval(increament);
    }
},40);

setTimeout(function(){
    window.removeEventListener('scroll', disableScroll);  
    container.classList.add('cerrar');
}, 5000);

function disableScroll(){  
    window.scrollTo(0, 0);
  }