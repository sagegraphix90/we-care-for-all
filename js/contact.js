document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successPopup = document.getElementById('successPopup');
    const closePopup = document.querySelector('.close-popup');
    
    // Form validation and submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.style.display = 'none');
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        let isValid = true;
        
        // Validate name
        if (name === '') {
            document.getElementById('name-error').style.display = 'block';
            isValid = false;
        }
        
        // Validate email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
        if (email === '') {
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        } else if (!emailPattern.test(email)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address';
            document.getElementById('email-error').style.display = 'block';
            isValid = false;
        }
        
        // Validate subject
        if (subject === '') {
            document.getElementById('subject-error').style.display = 'block';
            isValid = false;
        }
        
        // Validate message
        if (message === '') {
            document.getElementById('message-error').style.display = 'block';
            isValid = false;
        }
        
        if (isValid) {
            // Here you would typically send the form data to your server
            // For now, we'll just show the success popup
            showPopup();
            contactForm.reset();
        }
    });
    
    // Show popup
    function showPopup() {
        successPopup.classList.add('active');
    }
    
    // Close popup when clicking the close button
    closePopup.addEventListener('click', function() {
        successPopup.classList.remove('active');
    });
    
    // Close popup when clicking outside
    successPopup.addEventListener('click', function(e) {
        if (e.target === successPopup) {
            successPopup.classList.remove('active');
        }
    });
    
    // Close popup when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && successPopup.classList.contains('active')) {
            successPopup.classList.remove('active');
        }
    });
}); 