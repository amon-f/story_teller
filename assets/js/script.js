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

// Contact form submission with clear on submit
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // Optionally, handle sending the form here (AJAX/EmailJS/etc.)
      form.reset();
      status.textContent = "Thank you! Your message has been sent.";
      setTimeout(() => { status.textContent = ""; }, 5000);
    });
  }
});

// Scroll to Top Button
document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollToTop");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
