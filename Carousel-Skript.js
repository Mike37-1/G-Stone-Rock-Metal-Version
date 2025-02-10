document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const buttonLeft = document.querySelector(".button-left");
    const buttonRight = document.querySelector(".button-right");
    let currentIndex = 1;

    const updateCarousel = () => {
        cards.forEach((card, index) => {
            card.classList.remove("main", "side", "hidden", "l", "r");

            if (index === currentIndex) {
                card.classList.add("main");
            } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
                card.classList.add("side", "l");
            } else if (index === (currentIndex + 1) % cards.length) {
                card.classList.add("side", "r");
            } else {
                card.classList.add("hidden");
            }
        });
    };

    buttonLeft.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    });

    buttonRight.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    });

    updateCarousel();
});