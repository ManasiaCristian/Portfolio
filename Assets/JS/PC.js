document.addEventListener("DOMContentLoaded", () => {
  particlesJS.load(
    "particles-js",
    "Assets/JS/particles-config.json",
    function () {
      console.log("Particles.js loaded for PC.");
    }
  );

  if (window.innerWidth > 768) {
    // Initialize particles.js for the full page
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        // When scrolled past 50px, make the navbar solid
        navbar.classList.add("scrolled");
      } else {
        // When at the top, make the navbar transparent
        navbar.classList.remove("scrolled");
      }
    });

    // Handle Timeline for Desktop
    const timelineContainer = document.querySelector(".timeline-container");
    const timelineItems = document.querySelectorAll(".timeline-item");

    // Create the center line
    const line = document.createElement("div");
    line.classList.add("timeline-line-center");
    line.style.position = "absolute";
    line.style.left = "50%"; // Center alignment
    line.style.transform = "translateX(-50%)";
    line.style.width = "4px";
    line.style.background = "#333333";
    line.style.zIndex = "0";

    if (timelineItems.length > 0) {
      const firstItem = timelineItems[0];
      const lastItem = timelineItems[timelineItems.length - 1];
      const containerRect = timelineContainer.getBoundingClientRect();
      const firstItemRect = firstItem.getBoundingClientRect();
      const lastItemRect = lastItem.getBoundingClientRect();

      // Dynamically calculate height
      line.style.height = `${lastItemRect.bottom - firstItemRect.top}px`;
      line.style.top = `${firstItemRect.top - containerRect.top}px`;
    } else {
      line.style.height = "100%";
      line.style.top = "0";
    }

    // Append the center line for desktop
    if (!timelineContainer.querySelector(".timeline-line-center")) {
      timelineContainer.style.position = "relative";
      timelineContainer.appendChild(line);
    }

    // Add dots aligned with the center line
    timelineItems.forEach((item, index) => {
      if (!item.querySelector(".timeline-dot")) {
        const dot = document.createElement("div");
        dot.classList.add("timeline-dot");
        dot.style.position = "absolute";
        dot.style.left = "50%";
        dot.style.transform = "translateX(-50%)"; // Align dot to the center
        dot.style.top = "0";
        dot.style.width = "16px";
        dot.style.height = "16px";
        dot.style.backgroundColor = "#007bff";
        dot.style.borderRadius = "50%";
        dot.style.border = "2px solid #ffffff";
        dot.style.zIndex = "1";
        item.style.position = "relative";
        item.prepend(dot);
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor behavior

      const targetId = this.getAttribute("href").substring(1); // Get the target ID
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Scroll smoothly to the target element
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Update only specific links to display the base URL
  document.querySelectorAll("a.base-url").forEach(link => {
    const fullUrl = link.href; // Get the full URL from the href attribute
    try {
      const parsedUrl = new URL(fullUrl); // Parse the full URL
      const baseUrl = `${parsedUrl.origin}/`; // Extract the base URL
      link.textContent = baseUrl; // Update the displayed text of the link
    } catch (error) {
      console.error("Invalid URL:", fullUrl); // Handle invalid URLs gracefully
    }
  });
});
