function hoverIcon(icon) {
    console.log("Hover");
    icon.classList.add('icon-large');
    icon.classList.remove('icon');
}

function unhoverIcon(icon){
    icon.classList.remove('icon-large');
    icon.classList.add('icon');
}