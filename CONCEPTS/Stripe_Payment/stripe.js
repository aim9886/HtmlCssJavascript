// script.js

// Set your publishable key
var stripe = Stripe('pk_test_51OKEBDSIUVo6Kd3G0IN02jEP8pKiFXdTiv01NiX9YYFivnmDwuADqr8RhxxR7gESYX233AejZdZfxFJrzcx0CmiV00tgeqxdO7');
var elements = stripe.elements();

// Create an instance of the card Element
var card = elements.create('card');

// Add an instance of the card Element into the `card-element` div
card.mount('#card-element');

// Handle real-time validation errors from the card Element
card.addEventListener('change', function(event) {
    var displayError = document.getElementById('card-errors');
    if (event.error) {
        displayError.textContent = event.error.message;
    } else {
        displayError.textContent = '';
    }
});

// Handle form submission
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    stripe.createToken(card).then(function(result) {
        if (result.error) {
            // Inform the user if there was an error
            var errorElement = document.getElementById('card-errors');
            errorElement.textContent = result.error.message;
        } else {
            // Send the token to your server
            stripeTokenHandler(result.token);
        }
    });
});

// Submit the form with the token to your server
function stripeTokenHandler(token) {
    // You can send the token to your server here
    // e.g., using fetch or XMLHttpRequest
    console.log(token);
}
