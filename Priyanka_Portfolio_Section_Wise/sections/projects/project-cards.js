/* ================= PROJECT CARD HOVER ================= */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transition =
            "transform 0.35s ease, box-shadow 0.35s ease";

    });

});
