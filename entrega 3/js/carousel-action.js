const buttonPrev = document.getElementById('button-prev-action');
const buttonNext = document.getElementById('button-next-action');
const track = document.getElementById('track-action');
const slickList = document.getElementById('slick-list-action');
const slick = document.querySelectorAll('.slick-action');

const slickWidth = slick[0].offsetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);

function Move (value){
    const trackWidth = track.offsetWidth
    const listWidth = slickList.offsetWidth
    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1)
    if(((leftPosition < (trackWidth - listWidth) && value == 2)&&(leftPosition < 1525))){
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`
    }else if(leftPosition > 0 && value == 1){
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`
    }
}