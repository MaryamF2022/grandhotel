document.addEventListener('DOMContentLoaded', function(){
    const imageContainers = document.querySelectorAll('.room-img');

    // Loop through each element and set its background image
    imageContainers.forEach(container => {
    const dataSrc = container.getAttribute('data-src');
    if (dataSrc) {
        container.style.backgroundImage = `url(${dataSrc})`;
    }
    });

    setTimeout(imgas, 200);
})

let imgas = function(){

    let query = window.matchMedia('(max-width:1200px)');
    let images = document.querySelector('.about-us-images');
    let about = document.getElementById('About');
    let content = document.querySelector('.about-us-content');
    if (query){
        images.style.opacity = '0.4';
        about.style.position = 'relative';
        images.style.position = 'absolute';
        images.style.top = '50%';
        images.style.left = '50%';
        images.style.transform = 'translate(-50%, -50%)';
        images.style.zIndex = 1;

        about.style.display = 'block';
        content.style.position = 'absolte';
        content.style.top = '50%';
        content.style.left = '50%';
        content.style.transform = 'translate(-50%, -50%)';
        content.style.zIndex = 2;
    }
}