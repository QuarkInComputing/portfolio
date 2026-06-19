const links = document.getElementById('nav-links').children;
const sections = document.getElementsByTagName('section');

function showSection(selected){
    Array.from(sections).forEach(sec => {
        sec.classList.remove('visible-section');
    });
    document.getElementById(`section-${selected}`).classList.add('visible-section');
}