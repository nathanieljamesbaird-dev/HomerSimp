const imageElement = document.getElementById('interactiveImage');
const clickSound = new Audio('./assets/sound/doh-9.mp3'); 

// Functions to switch state
function setHurtState(e) {
    // Prevent default mobile scrolling gestures while holding down
    if(e.type === 'touchstart') e.preventDefault(); 
    
    clickSound.currentTime = 0; 
    clickSound.play().catch(err => console.log("Audio interaction wait"));
    imageElement.setAttribute('src', './assets/img/intro/clickedon1.png');
}

function setHappyState() {
    imageElement.setAttribute('src', './assets/img/intro/happyHomer.png');
}

// Desktop Mouse Events
imageElement.addEventListener('mousedown', setHurtState);
imageElement.addEventListener('mouseup', setHappyState);
imageElement.addEventListener('mouseleave', setHappyState);

// iOS/Android Mobile Touch Events
imageElement.addEventListener('touchstart', setHurtState);
imageElement.addEventListener('touchend', setHappyState);
imageElement.addEventListener('touchcancel', setHappyState); // Triggers if an incoming alert interrupts the hold
