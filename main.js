let showElements = document.querySelectorAll('.none');

function btnShow() {
    showElements.forEach(show => {
        if (show.style.display === 'none') {
            show.style.display = 'flex';
        } else {
            show.style.display = 'none';
        }
    });
}