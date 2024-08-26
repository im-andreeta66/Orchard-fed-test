import '../sass/main.scss';

// Adds the data taken from the ids to the function and puts them in the modal elements
window.updateModal = (imageSrc, text) => {
    const modalImage = document.getElementById('modalImage');
    const modalText = document.getElementById('modalText');

    if (modalImage && modalText) {
        modalImage.src = imageSrc;
        modalText.textContent = text;
    } 
};

// Captures the element that was clicked on the navbar
const initializeScrollSpyAndHandlers = () => {
    // Initialize ScrollSpy without changing the hash in the URL
    new bootstrap.ScrollSpy(document.body, {
        target: '#navbar-main',
        offset: 5
    });

    // Select all target links once
    const links = document.querySelectorAll('[data-scroll-target]');

    // Customize ScrollSpy behavior to not modify the hash
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Display in the console the element that was clicked
            console.log(`Anchor clicked element: ${event.target.outerHTML}`);

            // Get the displacement target
            const targetSelector = link.getAttribute('data-scroll-target');
            const targetElement = document.querySelector(targetSelector);

            // Check if target exists before moving
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.warn('Elemento no encontrado:', targetSelector);
            }
        });
    });
};

// Execute the functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeScrollSpyAndHandlers();
});

// Add effect and style change in current
document.querySelectorAll('.nav').forEach(nav => {
    const currentClass = 'nav__item--current';
    
    // Optimize the initial selection
    let currentItem = nav.querySelector(`.${currentClass}`);
    const navItems = Array.from(nav.querySelectorAll('.nav__item'));

    const setCurrent = newItem => {
        if (newItem === currentItem) return;

        // Update the current item
        if (currentItem) currentItem.classList.remove(currentClass);
        newItem.classList.add(currentClass);
        currentItem = newItem; 
    };
    
    navItems.forEach(item => {
        item.addEventListener('click', () => setCurrent(item));
    });
});
