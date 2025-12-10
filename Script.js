const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
// Smooth reveal animation with Locomotive Scroll
scroll.on("scroll", (args) => {
    const revealElements = document.querySelectorAll(".reveal");

    revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        // If element is inside viewport
        if (rect.top < window.innerHeight * 0.85) {
            el.classList.add("show");
        }
    });
});
// Image scale on scroll
scroll.on("scroll", () => {
    const allImages = document.querySelectorAll(".scale-img");

    allImages.forEach((img) => {
        let rect = img.getBoundingClientRect();

        // If image enters viewport
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
            img.classList.add("scaled");
        } 
        else {
            img.classList.remove("scaled");
        }
    });
});
