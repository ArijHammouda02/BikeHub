
function toggleBg(div) {
    let body = document.querySelector('body');
    div.classList.toggle('black');
    body.style.backgroundColor = div.classList.contains('black') ? 'grey' : 'white';

}
document.addEventListener('click', event => {
    if (event.target.classList.contains('toggle')) {
        toggleBg(event.target);

    }
});
