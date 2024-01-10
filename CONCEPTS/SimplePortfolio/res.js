document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // You can add code here to handle form submission
        // For a simple example, you can just clear the form
        contactForm.reset();
        alert("Message sent!");
    });
});
