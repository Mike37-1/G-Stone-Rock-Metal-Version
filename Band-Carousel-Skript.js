document.addEventListener("DOMContentLoaded", function () {
    const band = document.querySelectorAll(".band");
    const buttonLeft = document.querySelector(".bands-button-left");
    const buttonRight = document.querySelector(".bands-button-right");
    let currentIndex = 2; 

    const updateCarousel = () => {
        band.forEach((item, index) => {
            item.classList.remove(
                "spotlight-band",
                "band-side",
                "band-hidden",
                "band-l",
                "band-r",
                "band-ml",
                "band-mr"
            );
            if (index === currentIndex) {
                item.classList.add("spotlight-band");
            } else if (index === (currentIndex - 1 + band.length) % band.length) {
                item.classList.add("band-side", "band-ml");
            } else if (index === (currentIndex - 2 + band.length) % band.length) {
                item.classList.add("band-side", "band-l");
            } else if (index === (currentIndex + 1) % band.length) {
                item.classList.add("band-side", "band-mr");
            } else if (index === (currentIndex + 2) % band.length) {
                item.classList.add("band-side", "band-r");
            } else {
                item.classList.add("band-hidden");
            }
        });
    };

    buttonLeft.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + band.length) % band.length;
        updateCarousel();
    });

    buttonRight.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % band.length;
        updateCarousel();
    });

    updateCarousel();
});
