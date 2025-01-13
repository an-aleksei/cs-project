

function darkModeToggle() {    //adding toggle for dark mode (add some other colors later)
    let element = document.body;
    element.classList.toggle("dark-mode");

    let navbar = document.getElementById('navbar');
    navbar.classList.toggle('dark-mode');

    let links = document.querySelectorAll("#link, #link1"); 
    links.forEach(function(link) {
      link.classList.toggle('dark-mode');
    });
    
  }
  // script.js
const popup = document.getElementById('popup');


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Когда пользователь прокрутил больше 50px
        popup.style.top = '-50px'; // Скрыть сообщение
        navbar.classList.remove('hidden'); // Показать navbar
    } else {
        popup.style.top = '0'; // Показать сообщение
        navbar.classList.add('hidden'); // Скрыть navbar
    }
});
s