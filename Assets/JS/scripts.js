document.addEventListener("DOMContentLoaded", () => {
  // Initialize particles.js for the full page
  particlesJS.load(
    "particles-js",
    "Assets/JS/particles-config.json",
    function () {
      console.log("Particles.js loaded for the full page.");
    }
  );

  // Navbar background toggle on scroll
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Remove the '#' symbol
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust offset if you have a fixed navbar
            behavior: 'smooth'
        });
    });
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const timelineContainer = document.querySelector(".timeline-container");
    const timelineItems = document.querySelectorAll(".timeline-item");
  
    // Create the vertical line
    const line = document.createElement("div");
    line.style.position = "absolute";
    line.style.left = "50%";
    line.style.transform = "translateX(-50%)";
    line.style.width = "4px";
    line.style.background = "#333333"; // Solid line color
    line.style.zIndex = "0";
  
    // Calculate the line's height dynamically
    if (timelineItems.length > 0) {
      const firstItem = timelineItems[0];
      const lastItem = timelineItems[timelineItems.length - 1];
      const containerRect = timelineContainer.getBoundingClientRect();
      const firstItemRect = firstItem.getBoundingClientRect();
      const lastItemRect = lastItem.getBoundingClientRect();
  
      // Set the height of the line to span from the first to the last item
      line.style.height = `${lastItemRect.bottom - firstItemRect.top}px`;
  
      // Align the line's top with the first item's top
      line.style.top = `${firstItemRect.top - containerRect.top}px`;
    } else {
      // Fallback: If no items exist, set a default height for the line
      line.style.height = "100%";
      line.style.top = "0";
    }
  
    // Add the line to the container
    timelineContainer.appendChild(line);
  
    // Add alternating layout to timeline items
    timelineItems.forEach((item, index) => {
      if (index % 2 === 1) {
        item.classList.add("reverse"); // Add the reverse class to odd items
      }
    });
  });
  
  
  