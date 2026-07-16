
  const myAudio = new Audio('./assets/sound/simpsong.mp3');

  function toggleAudio() {
    if (myAudio.paused) {
      myAudio.play(); 
    } else {
      myAudio.pause(); 
      myAudio.currentTime = 0; 
    }
  }