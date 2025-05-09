document.addEventListener('DOMContentLoaded', function() {
    const buttondonate = document.getElementById('button-donate');
    const donationPopup = document.getElementById('donation-popup');
    const closeButton = document.getElementById('close');
    
    if (buttondonate) {
        buttondonate.addEventListener('click', function(e) {
            e.preventDefault();
            
            let valid = true;
            
            let firstname = document.getElementById('donate-name').value.trim();
            let errorfname = document.getElementById('donate-name-error');
            errorfname.style.display = 'none';
            if (firstname === '') {
                errorfname.style.display = 'block';
                valid = false; 
            }
            
            let donateemail = document.getElementById('donate-email').value.trim();
            let erroremaildonate = document.getElementById('donate-email-error');
            let emailinvalid = document.getElementById('donate-email-invalid');
            
            erroremaildonate.style.display = 'none';
            emailinvalid.style.display = 'none';
            const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
            if (donateemail === '') {
                erroremaildonate.style.display = 'block';
                valid = false;
            } else if (!pattern.test(donateemail)) {
                emailinvalid.style.display = 'block';
                valid = false;
            }
            
            let phonenumber = document.getElementById('donate-phone').value.trim();
            let errornumber = document.getElementById('donate-phone-error');
            errornumber.style.display = 'none';
            if (phonenumber === '') {
                errornumber.style.display = 'block';
                valid = false; 
            }
            
            let donateamount = document.getElementById('donate-amount').value.trim();
            let erroramount = document.getElementById('donate-amount-error');
            let negativeamount = document.getElementById('negative-amount-error');
            
            erroramount.style.display = 'none';
            negativeamount.style.display = 'none';
            if (donateamount === '') {
                erroramount.style.display = 'block';
                valid = false; 
            } else if (donateamount <= 0) {
                negativeamount.style.display = 'block';
                valid = false;
            }
            
            // Check if terms checkbox is checked
            const termsCheckbox = document.querySelector('.checkbox-text input[type="checkbox"]');
            if (!termsCheckbox.checked) {
                valid = false;
                // You might want to add an error message for this
            }
            
            // If all validations pass, show the popup
            if (valid) {
                showPopup();
                // Reset the form
                document.getElementById('donate-name').value = '';
                document.getElementById('donate-last-name').value = '';
                document.getElementById('donate-email').value = '';
                document.getElementById('donate-phone').value = '';
                document.getElementById('donate-amount').value = '';
                document.getElementById('message').value = '';
                termsCheckbox.checked = false;
            }
        });
    }
    
    // Function to show popup
    function showPopup() {
        donationPopup.style.display = 'flex';
        // Add a class to the body to prevent scrolling
        document.body.style.overflow = 'hidden';
    }
    
    // Function to hide popup
    function hidePopup() {
        donationPopup.style.display = 'none';
        // Restore scrolling
        document.body.style.overflow = 'auto';
    }
    
    // Close popup when clicking the close button
    if (closeButton) {
        closeButton.addEventListener('click', function(e) {
            e.preventDefault();
            hidePopup();
        });
    }
    
    // Close popup when clicking outside
    donationPopup.addEventListener('click', function(e) {
        if (e.target === donationPopup) {
            hidePopup();
        }
    });
    
    // Close popup when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && donationPopup.style.display === 'flex') {
            hidePopup();
        }
    });
});


