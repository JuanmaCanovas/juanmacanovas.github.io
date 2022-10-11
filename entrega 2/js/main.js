
const favstar = document.querySelectorAll(".favstar");
const gamecard = document.querySelectorAll(".gamecard");

const btnInstructions = document.getElementById('instructions-btn')
const btnDetails = document.getElementById('details-btn')
const btnComments = document.getElementById('comments-btn')
let details = document.querySelector('.details-content');
let instructions = document.querySelector('.instructions-content');
let comments = document.querySelector('.comments-content');

favstar.forEach(e => {
    e.addEventListener('click', () => e.classList.toggle("active"));
  });


gamecard.forEach(e => {
    e.querySelector(".cart").addEventListener('click',() => 
    { 
        e.querySelector(".cart").classList.toggle("d-none");
        e.querySelector(".on-cart").classList.toggle("d-none");
    });
    e.querySelector(".on-cart").addEventListener('click',() => 
    { 
        e.querySelector(".on-cart").classList.toggle("d-none");
        e.querySelector(".cart").classList.toggle("d-none");
    });
});





function pageInstructions(){
    let details = document.querySelector('.details-content');
    let instructions = document.querySelector('.instructions-content');
    let comments = document.querySelector('.comments-content');

    if (!(details.classList.contains('d-none'))){
        details.classList.toggle('d-none');
    }
    if (!(comments.classList.contains('d-none'))){
        comments.classList.toggle('d-none');
    }
    instructions.classList.toggle('d-none');
}

function pageDetails(){
    let details = document.querySelector('.details-content');
    let instructions = document.querySelector('.instructions-content');
    let comments = document.querySelector('.comments-content');

    if (!(instructions.classList.contains('d-none'))){
        instructions.classList.toggle('d-none');
    }
    if (!(comments.classList.contains('d-none'))){
        comments.classList.toggle('d-none');
    }
    details.classList.toggle('d-none');
}

function pageComments(){
    let details = document.querySelector('.details-content');
    let instructions = document.querySelector('.instructions-content');
    let comments = document.querySelector('.comments-content');

    if (!(details.classList.contains('d-none'))){
        details.classList.toggle('d-none');
    }
    if (!(instructions.classList.contains('d-none'))){
        instructions.classList.toggle('d-none');
    }
    comments.classList.toggle('d-none');
    
}



btnInstructions.addEventListener('click', () => {
    if (instructions.classList.contains('d-none')){
        pageInstructions();
        btnInstructions.classList.add('focused');
        btnComments.classList.remove('focused');
        btnDetails.classList.remove('focused');
    }
});
btnDetails.addEventListener('click', () => {
    if (details.classList.contains('d-none')){
        pageDetails();
        btnInstructions.classList.remove('focused');
        btnComments.classList.remove('focused');
        btnDetails.classList.add('focused');
    }
});
btnComments.addEventListener('click', () => {
    if (comments.classList.contains('d-none')){
        pageComments();
        btnInstructions.classList.remove('focused');
        btnComments.classList.add('focused');
        btnDetails.classList.remove('focused');
    }
});
