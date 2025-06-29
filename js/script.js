// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
// Audio Play/Pause Feature
document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("play-audio");
  const audio = document.getElementById("intro-audio");

  if (playButton && audio) {
    playButton.addEventListener("click", function () {
      if (audio.paused) {
        audio.play();
        playButton.textContent = "⏸️ Pause";
      } else {
        audio.pause();
        playButton.textContent = "🎙️ Play";
      }
    });
  } else {
    console.log("Audio or Play Button not found");
  }
});



// Scroll Sections Active Links
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky navbar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle icon and navbar when click navbar link
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Scroll reveal
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { 
  origin: "bottom" 
});
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Typed js
const typed = new Typed('.multiple-text', {
  strings: ['Test Engineer', 'Test Engineer', 'Test Engineer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Progress bar animation
// Progress bar animation
// Skills Animation JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        const percent = parseInt(container.dataset.percent);
        const progressBar = container.querySelector('.progress-bar');
        const currentValue = container.querySelector('.current-value');
        
        // Animate progress bar
        progressBar.style.width = `${percent}%`;
        
        // Animate number count
        let start = 0;
        const duration = 1500;
        const step = Math.ceil(percent / (duration / 50));

        const interval = setInterval(() => {
          start += step;
          if (start >= percent) {
            start = percent;
            clearInterval(interval);
          }
          currentValue.textContent = start;
        }, 50);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.progress-container').forEach(container => {
    observer.observe(container);
  });
});