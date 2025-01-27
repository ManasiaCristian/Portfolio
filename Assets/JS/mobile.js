document.addEventListener("DOMContentLoaded", () => {
    // Initialize particles.js
    particlesJS.load(
      "particles-js",
      "Assets/JS/particles-config.json",
      function () {
        console.log("Particles.js loaded for mobile.");
      }
    );
  
    // Remove the center line if it exists
    const centerLine = document.querySelector(".timeline-line-center");
    if (centerLine) {
      centerLine.remove();
    }
  
    // Handle Timeline for Mobile
    const timelineContainer = document.querySelector(".timeline-container");
    const timelineItems = document.querySelectorAll(".timeline-item");
  
    // Create the left-aligned timeline line
    const line = document.createElement("div");
    line.classList.add("timeline-line");
    line.style.position = "absolute";
    line.style.left = "8px"; // Align line to the left
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
  
    // Append the left line
    timelineContainer.style.position = "relative";
    timelineContainer.appendChild(line);
  
    // Add dots aligned to the left
    timelineItems.forEach((item) => {
      if (!item.querySelector(".timeline-dot")) {
        const dot = document.createElement("div");
        dot.classList.add("timeline-dot");
        dot.style.position = "absolute";
        dot.style.left = "0"; // Align dot with the line
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
  });
  