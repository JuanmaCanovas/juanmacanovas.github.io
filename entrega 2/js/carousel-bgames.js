const buttonPrevBgames = document.getElementById('button-prev-bgames');
const buttonNextBgames = document.getElementById('button-next-bgames');
const trackBgames = document.getElementById('track-bgames');
const slickListBgames = document.getElementById('slick-list-bgames');
const slickBgames = document.querySelectorAll('.slick-bgames');

const slickWidthBgames = slickBgames[0].offsetWidth;

buttonPrevBgames.onclick = () => MoveBgames(1);
buttonNextBgames.onclick = () => MoveBgames(2);

function MoveBgames (value){
    const trackWidthBgames = trackBgames.offsetWidth
    const listWidthBgames = slickListBgames.offsetWidth
    trackBgames.style.left == "" ? leftPosition = trackBgames.style.left = 0 : leftPosition = parseFloat(trackBgames.style.left.slice(0, -2) * -1)
    if(leftPosition < (trackWidthBgames - listWidthBgames) && value == 2){
        trackBgames.style.left = `${-1 * (leftPosition + slickWidthBgames)}px`
    }else if(leftPosition > 0 && value == 1){
        trackBgames.style.left = `${-1 * (leftPosition - slickWidthBgames)}px`
    }
}