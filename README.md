# 📖 Thee Story Teller -- Photography Portfolio Website

![Website Preview](./assets/image/preview.png)\

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)\
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)\
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)\
![JavaScript](https://img.shields.io/badge/JavaScript-F7E017?style=for-the-badge&logo=javascript&logoColor=black)\
![EmailJS](https://img.shields.io/badge/EmailJS-FF6C37?style=for-the-badge&logo=gmail&logoColor=white)\
![GitHub
Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-121013?style=for-the-badge&logo=github&logoColor=white)

------------------------------------------------------------------------

## 📌 Overview

**Thee Story Teller** is a photography portfolio website designed to
showcase creative works, services, and client testimonials while
allowing visitors to easily book a photoshoot. The site emphasizes
storytelling through visuals with a clean, responsive, and elegant
design.

It also includes a fully functional **contact form** powered by
**EmailJS**, allowing clients to send inquiries directly to the business
email.

------------------------------------------------------------------------

## ✨ Features

-   🎨 **Modern UI/UX** with a minimal, elegant design.\
-   📱 **Fully responsive** -- optimized for desktop, tablet, and
    mobile.\
-   📷 **Featured Work Album Layout** -- beautifully organized event
    galleries.\
-   🛠️ **Services Section** -- clearly presents packages and offerings.\
-   👤 **About Section** -- introduces the brand and philosophy.\
-   💬 **Client Testimonials** -- builds trust with real feedback.\
-   📩 **Contact Form** -- integrated with **EmailJS** to send inquiries
    directly to `programseduc@gmail.com`.

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **HTML5** -- semantic structure\
-   **CSS3 / Bootstrap 5** -- styling and responsive grid system\
-   **JavaScript (Vanilla JS)** -- interactivity and animations\
-   **AOS (Animate On Scroll)** -- smooth scroll animations\
-   **EmailJS** -- contact form email integration\
-   **GitHub Pages** (or any hosting) -- deployment

------------------------------------------------------------------------

## 🚀 Getting Started

### 1. Clone the Repository

``` bash
git clone https://github.com/your-username/thee-story-teller.git
cd thee-story-teller
```

### 2. Open Locally

Simply open `index.html` in your browser.

------------------------------------------------------------------------

## 📩 Contact Form Setup (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com) to send
emails.\
To set it up:

1.  Create a free **EmailJS** account.\

2.  Connect your Gmail/Outlook account as an **Email Service**.\

3.  Create a new **Template** with these variables:

    -   `{{firstName}}`\
    -   `{{lastName}}`\
    -   `{{email}}`\
    -   `{{message}}`\

4.  In your template settings, set **Recipient Email** to:\
    `programseduc@gmail.com`\

5.  Copy your:

    -   **SERVICE_ID**\
    -   **TEMPLATE_ID**\
    -   **PUBLIC_KEY**\

6.  Update them in `script.js`:

    ``` javascript
    emailjs.init("YOUR_PUBLIC_KEY");
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this);
    ```

------------------------------------------------------------------------

## 📂 Project Structure

    thee-story-teller/
    │── index.html        # Main website file
    │── assets/
    │   ├── css/
    │   │   └── style.css # Custom styles
    │   ├── js/
    │   │   └── script.js # JS functionality (EmailJS, animations, navbar)
    │   └── image/        # Images (logo, gallery, about, etc.)
    │── README.md         # Project documentation

------------------------------------------------------------------------

## 🌍 Deployment

You can deploy this project using: - **GitHub Pages**\
- **Netlify**\
- **Vercel**\
- Any static hosting service

For GitHub Pages:

``` bash
git add .
git commit -m "Deploy site"
git push origin main
```

Then enable Pages in your repo settings.

------------------------------------------------------------------------

## 🤝 Contributing

1.  Fork the repo.\
2.  Create a new branch (`feature-new-section`).\
3.  Commit changes.\
4.  Push and submit a pull request.

------------------------------------------------------------------------

## 📸 Live Demo

👉 ![Live Link] (https://amon-f.github.io/story_teller/)\

------------------------------------------------------------------------

## 👤 Author

**Amon Wanyonyi**\
📧 Email: `programseduc@gmail.com`\
📍 Nairobi, Kenya
