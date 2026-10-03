let currentSlide = 1;

const totalSlides = 6;


/* ================= SHOW SLIDE ================= */

function showSlide(number) {

    if (number < 1 || number > totalSlides) {
        return;
    }

    currentSlide = number;

    // Hide every slide
    document.querySelectorAll(".slide").forEach(slide => {
        slide.classList.remove("active");
    });

    // Show only selected slide
    const selectedSlide =
        document.getElementById(`slide${number}`);

    selectedSlide.classList.add("active");


    // Update dots
    document.querySelectorAll(".dot").forEach((dot, index) => {

        dot.classList.toggle(
            "active",
            index === number - 1
        );

    });

}


/* ================= NEXT ================= */

function nextSlide() {

    if (currentSlide < totalSlides) {

        showSlide(currentSlide + 1);

    }

}


/* ================= RESTART ================= */

function restart() {

    showSlide(1);

}


/* ================= START ================= */

showSlide(1);