

function darkModeToggle() {    //adding toggle for dark mode (add some other colors later)
    let element = document.body;
    element.classList.toggle("dark-mode");

    let navbar = document.getElementById('navbar');
    navbar.classList.toggle('dark-mode');

    let toggle = document.getElementById('toggledarkmode');
    toggle.classList.toggle('dark-mode');

    let dropdownlinks = document.getElementById("dropdownlinks");
    dropdownlinks.classList.toggle('dark-mode');

    let links = document.querySelectorAll("#link, #link1"); 
    links.forEach(function(link) {
      link.classList.toggle('dark-mode');
    });
    
  }
const popup = document.getElementById('popup');


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { 
        popup.style.top = '-50px'; 
        navbar.classList.remove('hidden'); 
    } else {
        popup.style.top = '0'; 
        navbar.classList.add('hidden'); 
    }
});