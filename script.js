function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  if (navbar.style.width == "250px") {
    navbar.style.width = "0";
  } else {
    navbar.style.width = "250px";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const phrases = ["Progress Building Resources", "An automated toolkit for social justice.", "Reducing barriers to entry for activism."];
  let currentIndex = 0;

  const animatedText = document.getElementById('animatedText');

  setInterval(() => {
    // Fade out and change the text
    animatedText.style.opacity = 0;

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % phrases.length;
      animatedText.textContent = phrases[currentIndex];

      // Fade in with new text
      animatedText.style.opacity = 1;
    }, 1000); // Matches the CSS transition time
  }, 3000); // Change text every 3 seconds
});


function scrollToSection() {
  var selectedSection = document.getElementById("scrollMenu").value;
  if (selectedSection) {
    document.getElementById(selectedSection).scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Optionally, you can add code to hide the button when the user is at the top of the page
window.onscroll = function() {
  var backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};





