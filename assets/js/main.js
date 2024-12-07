// =============SCROLL REVEAL============//
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2000,
    reset: true
})

// HOME
sr.reveal('.home-title',{})
sr.reveal('.home-subtitle',{})
sr.reveal('.home-img-container',{delay: 100})
sr.reveal('.home-icon',{interval:100})

//  ABOUT
sr.reveal('.about-img-container',{delay: 100})
sr.reveal('.about-text',{})
sr.reveal('.about-button-container',{delay: 100})

//  PORTFOLIO
sr.reveal('.portfolio-img',{interval: 100})

//  CONTACT
sr.reveal('.contact-item-container',{interval: 100})

// =============END ESCROLL REVEAL============//

//===== NABAR =====//
const navItems = document.querySelectorAll(".listNav")

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const navItem = document.querySelector(`.nav-bar a[href="#${id}"]`)

        if(entry.isIntersecting) {
            navItem.classList.add("active")
        } else {
            navItem.classList.remove("active")
        }
    })
}, {rootMargin: "-50% 0% -50% 0%"})

navItems.forEach(navItem => {
    const hash = navItem.getAttribute("href");
    const target = document.querySelector(hash)

    if(target) {
        observer.observe(target)
    }
})
//===== END NABAR =====//

// ===== TEXTO DINÁMICO ===== //
const roles = [
    "Desarrollador web",
    "Desarrollador de software",
    "Ingeniero de sistemas"
];

// Selecciona el primer elemento con la clase "home-subtitle"
const textContainer = document.getElementsByClassName('home-subtitle')[0];

if (textContainer) {
    let index = 0;

    function updateText() {
        textContainer.textContent = roles[index];
        index = (index + 1) % roles.length; // Vuelve al inicio al llegar al final
    }

    // Cambia el texto cada 1.5 segundos
    setInterval(updateText, 1500);

    // Inicia el texto
    updateText();
} else {
    console.error('No se encontró ningún elemento con la clase "home-subtitle".');
}