const imageEle = document.getElementById('interactiveFamily');
const soundClick = new Audio('assets/sound/bart-simpson.mp3'); 

// Functions to switch state
function setHurtState(e) {
    // Prevent default mobile scrolling gestures while holding down
    if(e.type === 'touchstart') e.preventDefault(); 
    
    soundClick.currentTime = 0; 
    soundClick.play().catch(err => console.log("Audio interaction wait"));
    imageEle.setAttribute('src', 'assets/img/about-us/bart.png');
}

function setHappyState() {
    imageEle.setAttribute('src', 'assets/img/about-us/familypic.png');
}

// Desktop Mouse Events
imageEle.addEventListener('mousedown', setHurtState);
imageEle.addEventListener('mouseup', setHappyState);
imageEle.addEventListener('mouseleave', setHappyState);

// iOS/Android Mobile Touch Events
imageEle.addEventListener('touchstart', setHurtState);
imageEle.addEventListener('touchend', setHappyState);
imageEle.addEventListener('touchcancel', setHappyState); // Triggers if an incoming alert interrupts the hold
