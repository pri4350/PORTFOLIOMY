// ===============================
// MOBILE NAVBAR
// ===============================

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");

    const icon = menuIcon.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// Close mobile menu when clicking a link

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuIcon.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ===============================
// DARK / LIGHT MODE
// ===============================

const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const icon = themeButton.querySelector("i");

    if (document.body.classList.contains("light-theme")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");

    }

});


// Load saved theme

window.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-theme");

        const icon = themeButton.querySelector("i");

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }

});


// ===============================
// TYPING ANIMATION
// ===============================

const typingText = document.getElementById("typing-text");

const words = [
    "BCA Student",
    "Web Developer",
    "AI Learner",
    "App Developer",
    "Content Creator"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }

        }

    }

    const speed = isDeleting ? 50 : 100;

    setTimeout(typeEffect, speed);

}


typeEffect();


// ===============================
// HEADER SCROLL EFFECT
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ===============================
// SCROLL TO TOP
// ===============================

const scrollTopButton =
    document.getElementById("scroll-top");


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        scrollTopButton.classList.add("show");
    } else {
        scrollTopButton.classList.remove("show");
    }

});


scrollTopButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    formMessage.textContent =
        `Thank you, ${name}! Your message has been received. 🚀`;

    contactForm.reset();

});


// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===============================
// SIMPLE SCROLL REVEAL
// ===============================

const revealElements =
    document.querySelectorAll(
        ".skill-card, .journey-card, .project-card, .about-content, .contact-info"
    );


const revealOnScroll = () => {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};


// Initial styles

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

});


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();