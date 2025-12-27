// 1. Typewriter Effect (Hero Section ke liye)
const textElement = document.querySelector(".hero p");
const text = "Web Developer | Programmer | Content Creator";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
        index++;
        setTimeout(typeWriter, 100);
    }
}

// 2. Sticky Header Animation
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// 3. Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Window load hone par typewriter start karein
window.onload = typeWriter;
// 4. Responsive Navigation Toggle
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("nav ul");   
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-open");
}); 
// 5. Highlight Active Section in Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");        
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
// 6. Back to Top Button
const backToTopButton = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }           
});
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// 7. Dark Mode Toggle
const darkModeToggle = document.querySelector(".dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
}
);  
// 8. Form Validation (Contact Section ke liye)
const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const name = contactForm.querySelector("input[name='name']").value;
    const email = contactForm.querySelector("input[name='email']").value;
    const message = contactForm.querySelector("textarea[name='message']").value;
    let valid = true;   
    if (name === "") {
        valid = false;
        alert("Please enter your name.");
    }       
    if (email === "" || !email.includes("@")) {
        valid = false;
        alert("Please enter a valid email.");
    }
    if (message === "") {
        valid = false;
        alert("Please enter your message.");
    }   
    if (valid) {
        alert("Form submitted successfully!");
        contactForm.reset();
    }
});
// 9. Image Gallery Lightbox (Portfolio Section ke liye)
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.createElement("div");
lightbox.id = "lightbox";
document.body.appendChild(lightbox);

galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.classList.add("active");   
        const img = document.createElement("img");
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
}); 
// 10. Scroll Reveal Animations
const revealElements = document.querySelectorAll(".reveal");    
window.addEventListener("scroll", () => {
    const windowHeight = window.innerHeight;    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
});

// Initial check for reveal elements on page load
window.dispatchEvent(new Event('scroll'));
