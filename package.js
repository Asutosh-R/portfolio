document.addEventListener("DOMContentLoaded", () => {
    const projectGallery = document.querySelector(".project-gallery");
    const scrollLeftButton = document.getElementById("scroll-left");
    const scrollRightButton = document.getElementById("scroll-right");

    // Smooth scrolling
    function scrollGallery(amount) {
        projectGallery.scrollBy({
            left: amount,
            behavior: 'smooth'
        });
    }

    // Scroll buttons event listeners
    scrollLeftButton.addEventListener("click", () => {
        scrollGallery(-300); // Adjust the amount to scroll as needed
    });

    scrollRightButton.addEventListener("click", () => {
        scrollGallery(300); // Adjust the amount to scroll as needed
    });
});
