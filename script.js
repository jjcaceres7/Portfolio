const sensor = document.querySelector('.menu-sensor');
const menu = document.getElementById('sideMenu');

sensor.addEventListener('mouseenter', () => {
  menu.classList.add('visible');
});

menu.addEventListener('mouseleave', () => {
  menu.classList.remove('visible');
});

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}


// tactiles
function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('visible');
  }
  
  // Cerrar el menú si se hace clic fuera de él
  document.addEventListener('click', function (event) {
    const menu = document.getElementById('sideMenu');
    const toggle = document.querySelector('.menu-toggle');
  
    // Si el menú está visible, y el clic NO fue dentro del menú ni en el botón toggle
    if (menu.classList.contains('visible') &&
        !menu.contains(event.target) &&
        !toggle.contains(event.target)) {
      menu.classList.remove('visible');
    }
  });
  

