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
