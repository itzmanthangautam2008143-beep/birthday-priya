// ==============================
// Happy Birthday Priya ❤️
// script.js
// ==============================

// Loader
setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";
}, 3000);

// Elements
const photo = document.getElementById("photo");
const music = document.getElementById("music");
const btn = document.getElementById("startBtn");

// Photo List
const photos = [
    "assets/1.jpg",
    "assets/2.jpg",
    "assets/3.jpg",
    "assets/4.jpg",
    "assets/5.jpg",
    "assets/6.jpg",
    "assets/7.jpg",
    "assets/8.jpg",
    "assets/9.jpg",
    "assets/10.jpg"
];

// Slideshow
let index = 0;

function nextPhoto() {
    index++;

    if (index >= photos.length) {
        index = 0;
    }

    photo.src = photos[index];
}

// Change photo every 3 seconds
setInterval(nextPhoto, 3000);

// Check if music file is loaded
music.addEventListener("loadeddata", () => {
    console.log("✅ Music Loaded");
});

music.addEventListener("error", () => {
    alert("❌ music.mp3 load nahi hui.\nFile name ya path check karo.");
});

// Button Click
btn.addEventListener("click", async () => {

    try {

        music.volume = 1.0;

        await music.play();

        btn.innerHTML = "🎵 Music Playing...";

        setTimeout(() => {
            btn.style.display = "none";
        }, 1000);

    }

    catch(err) {

        alert("Music Play Error:\n" + err);

        console.log(err);

    }

});