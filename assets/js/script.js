// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Init AOS
AOS.init({ duration: 1000, once: true });

// Navbar scroll effect
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Initialize EmailJS
(function() {
  emailjs.init("fy-vdsqCYpipDJsWJ"); // Replace with your EmailJS Public Key
})();

// Handle Contact Form
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("service_f13czhp", "template_ltoqixl", this)
    .then(function() {
      document.getElementById("form-status").textContent = "Your message has been sent successfully!";
      document.getElementById("form-status").classList.remove("text-danger");
      document.getElementById("form-status").classList.add("text-success");
    }, function(error) {
      document.getElementById("form-status").textContent = "Failed to send message. Please try again.";
      document.getElementById("form-status").classList.remove("text-success");
      document.getElementById("form-status").classList.add("text-danger");
      console.error("EmailJS Error:", error);
    });
});
