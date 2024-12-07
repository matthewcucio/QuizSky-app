// Select the audio element and the icon for controlling music
const backgroundMusic = document.getElementById('background-music');
const musicIcon = document.getElementById('music-icon');

// Set initial volume and play music
backgroundMusic.volume = 0.10;
backgroundMusic.play().catch(() => {
    console.log("User interaction required to start audio in some browsers.");
});

// Load playback time from localStorage
if (localStorage.getItem('musicTime')) {
    backgroundMusic.currentTime = parseFloat(localStorage.getItem('musicTime'));
}

// Save playback time before navigating away
window.addEventListener('beforeunload', () => {
    localStorage.setItem('musicTime', backgroundMusic.currentTime);
});

// Mute or unmute the audio when the icon is clicked
musicIcon.addEventListener('click', () => {
    if (backgroundMusic.muted) {
        // If the music is muted, unmute it and change the icon
        backgroundMusic.muted = false;
        musicIcon.src = "Assets/speaker.png";  // Show unmuted speaker icon
    } else {
        // If the music is unmuted, mute it and change the icon
        backgroundMusic.muted = true;
        musicIcon.src = "Assets/muted-speaker.png";  // Show muted speaker icon
    }
});

// Select all buttons on the page
const buttons = document.querySelectorAll('button');

// Create a new audio element for the Wind Blow sound effect
const windBlowSound = new Audio('Assets/Music/Wind Blow.mp3');

// Set the sound to play on button click
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Play the wind blow sound effect
        windBlowSound.currentTime = 0;  // Reset the sound to the beginning
        windBlowSound.play();
    });
});

