/* =====================================================
   PRIYANKA PORTFOLIO
   JavaScript
===================================================== */


/* ================= NAVBAR ================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu after clicking link */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* ================= ACTIVE NAV LINK ================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navItems.forEach((link) => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ================= BACK TO TOP ================= */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= SMOOTH INTERNAL LINKS ================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (targetId === "#") {

            return;

        }

        const target =
            document.querySelector(targetId);

        if (!target) {

            return;

        }

        event.preventDefault();

        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});


/* ================= HERO CARD TILT ================= */

const heroCard =
    document.querySelector(".hero-card");

const heroWrapper =
    document.querySelector(".hero-card-wrapper");


if (
    heroCard &&
    heroWrapper &&
    window.innerWidth > 900
) {

    heroWrapper.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroWrapper.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 35;

            const rotateY =
                (centerX - x) / 35;

            heroCard.style.transform =
                `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        }
    );


    heroWrapper.addEventListener(
        "mouseleave",
        () => {

            heroCard.style.transform =
                "rotate(2deg)";

        }
    );

}


/* ================= PROJECT CARD HOVER ================= */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transition =
            "transform 0.35s ease, box-shadow 0.35s ease";

    });

});


/* ================= CONSOLE MESSAGE ================= */

console.log(
    "%c🌱 Hi! Welcome to Priyanka's Portfolio.",
    "color:#2186a8;font-size:16px;font-weight:bold;"
);

console.log(
    "%cKeep learning. Keep creating. Keep growing. 💙",
    "color:#6b9f75;font-size:13px;"
);