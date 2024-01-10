// JavaScript for Project 1: Personal Portfolio Website

// Add smooth scrolling to navigation links
document.querySelectorAll('header nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Add a simple form submission function
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // You can add code to handle form submission here, like sending data to a server or displaying a thank-you message.
        // For example:
        // const formData = new FormData(contactForm);
        // const data = Object.fromEntries(formData.entries());
        // console.log(data);

        // For now, let's just display a message
        alert('Thank you for submitting the form!');
        contactForm.reset();
    });
}
