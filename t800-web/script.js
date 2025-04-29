// Create invisible divs for text placement in the center quadrants
function randomizeTextPositions() {
  const texts = document.querySelectorAll('.animated-text');
  texts.forEach(text => {
    const top = `${40 + Math.random() * 20}%`; // Restrict movement to the center vertically
    text.style.top = top;

    // Start typewriter animation
    const originalText = text.textContent;
    text.textContent = '';
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < originalText.length) {
        text.textContent += originalText[index];
        index++;
      } else {
        clearInterval(typeInterval);
        blinkText(text, originalText);
      }
    }, 100); // Typewriter speed
  });
}

function blinkText(text, originalText) {
  let blinkCount = 0;
  const blinkInterval = setInterval(() => {
    text.style.visibility = text.style.visibility === 'hidden' ? 'visible' : 'hidden';
    blinkCount++;

    if (blinkCount >= 60) { // 3 blinks (visibility toggles twice per blink)
      clearInterval(blinkInterval);
      text.style.visibility = 'visible';
      text.textContent = ''; // Clear text after animation
    }
  }, 300); // Blink speed
}

// Ensure overlay videos are centered
function playRandomVideo() {
  const videoElement = document.getElementById('video');
  const videos = ['../overlay1.mp4', '../overlay2.mp4'];
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];

  videoElement.src = randomVideo;
  videoElement.style.mixBlendMode = 'screen'; // Make black transparent
  videoElement.style.position = 'absolute';
  videoElement.style.top = '50%';
  videoElement.style.left = '50%';
  videoElement.style.transform = 'translate(-50%, -50%)';
  videoElement.play();

  const randomDelay = [1000, 2000, 5000][Math.floor(Math.random() * 3)];
  setTimeout(playRandomVideo, randomDelay);
}

// Initialize animations and video playback
setInterval(randomizeTextPositions, 1000); // Faster text animation
playRandomVideo();