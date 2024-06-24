document.addEventListener('DOMContentLoaded', function() {
    // Sidebar functionality
    const openBtn = document.querySelector('.open-btn');
    const closeBtn = document.querySelector('.close-btn');
    const sidebar = document.querySelector('.sidebar');

    openBtn.addEventListener('click', function() {
        sidebar.style.left = '0';
    });

    closeBtn.addEventListener('click', function() {
        sidebar.style.left = '-250px';
    });

    // Project gallery scroll functionality
    const projectGallery = document.querySelector('.project-gallery');
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');

    function scrollGallery(amount) {
        projectGallery.scrollBy({
            left: amount,
            behavior: 'smooth'
        });
    }

    scrollLeftButton.addEventListener('click', () => {
        scrollGallery(-300); // Adjust the amount to scroll as needed
    });

    scrollRightButton.addEventListener('click', () => {
        scrollGallery(300); // Adjust the amount to scroll as needed
    });

    // Scroll-triggered animation
    const scrollElements = document.querySelectorAll('.scroll-animate');

    function elementInView(el, dividend = 1) {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    }

    function displayScrollElement(element) {
        element.classList.add('animated');
    }

    function handleScrollAnimation() {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    }

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    const nameInput = document.getElementById('nameInput');
    const nameDisplay = document.getElementById('nameDisplay');
    nameDisplay.textContent = nameInput.textContent;
});
