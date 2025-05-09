// hamburger.js - Fixed version

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded. Initializing hamburger menu...');
    
    // Get hamburger menu elements
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const headerMenu = document.querySelector('.header-menu');
    
    
    console.log('Hamburger menu elements found successfully');
    
    // Toggle menu on hamburger icon click
    hamburgerIcon.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event from bubbling to document
        console.log('Hamburger clicked');
        this.classList.toggle('active');
        headerMenu.classList.toggle('active');
    });
    
    // Close menu when a menu link is clicked
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Menu link clicked');
            hamburgerIcon.classList.remove('active');
            headerMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!headerMenu.classList.contains('active')) return;
        
        const isClickInsideMenu = headerMenu.contains(event.target);
        const isClickOnHamburger = hamburgerIcon.contains(event.target);
        
        console.log('Document clicked, checking if should close menu', {
            isClickInsideMenu,
            isClickOnHamburger
        });
        
        if (!isClickInsideMenu && !isClickOnHamburger) {
            hamburgerIcon.classList.remove('active');
            headerMenu.classList.remove('active');
        }
    });
    
    // Handle resize events
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && headerMenu.classList.contains('active')) {
            console.log('Window resized larger than 768px, resetting menu');
            hamburgerIcon.classList.remove('active');
            headerMenu.classList.remove('active');
        }
    });
    
    console.log('Hamburger menu initialized successfully');
});