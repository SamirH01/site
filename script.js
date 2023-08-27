function fadeInOutText() {
    const headerTextList = document.querySelectorAll('p.text');
    let currentIndex = 0;
    const fadeInDuration = 2000; // in milliseconds (fade-in duration)
    const fadeOutDuration = 2000; // in milliseconds (fade-out duration)
    const displayDuration = 3000; // in milliseconds (duration to display the text)
    const initialDelay = 1000; // in milliseconds (initial delay before starting)
    let animationFrame;
  
    function fadeIn() {
      headerTextList[currentIndex].style.display = 'block';
      headerTextList[currentIndex].style.opacity = 0;
  
      // Fade in the current item
      let start;
      function step(timestamp) {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const opacity = Math.min(1, elapsed / fadeInDuration);
        headerTextList[currentIndex].style.opacity = opacity;
  
        if (opacity < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setTimeout(fadeOut, displayDuration);
        }
      }
      animationFrame = requestAnimationFrame(step);
    }
  
    function fadeOut() {
      // Fade out the current item
      let start;
      function step(timestamp) {
        if (!start) start = timestamp;
        const elapsed = timestamp - start;
        const opacity = Math.max(0, 1 - elapsed / fadeOutDuration);
        headerTextList[currentIndex].style.opacity = opacity;
  
        if (opacity > 0) {
          animationFrame = requestAnimationFrame(step);
        } else {
          headerTextList[currentIndex].style.display = 'none';
          currentIndex = (currentIndex + 1) % headerTextList.length;
          fadeIn();
        }
      }
      animationFrame = requestAnimationFrame(step);
    }
  
    // Start the fadeInOut loop with an initial delay
    setTimeout(fadeIn, initialDelay);
  }
  
  // Call the function to initiate the fadeInOut effect when the page loads
  document.addEventListener('DOMContentLoaded', fadeInOutText);