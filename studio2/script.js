// set up variables
let globalData;
let startedSongs = false;
let prevClick = 0;

// variables for sound
const carSound = new Audio('sounds/car-interior.mp3');

async function getData() {
    const listenedSongs = await fetch('data.json');
    const data = await listenedSongs.json();
    
    globalData = Object.values(data);
}

function showSongInfo(point, data) {
    document.querySelector('#time').innerHTML = `<h1>${data[point].time}</h1>`;
    document.querySelector('#result').innerHTML = `<p>${data[point].song}<br>${data[point].artist}</p>`;
}

// mouse click interaction to start showing data
document.querySelector('#changebutton').addEventListener('click', playClick);

function playClick() {
    document.querySelector('#changebutton').removeEventListener('click', playClick);
    document.querySelector('#changebutton').className = "fa-solid fa-pause-circle";

    startedSongs = true;
    if (startedSongs === true) {
        showSongInfo(0, globalData);
        startedSongs = false;
    }

    // mouse click interaction added to change between data points
    document.querySelector('#forwardbutton').addEventListener('click', forwardClick);
    document.querySelector('#backbutton').addEventListener('click', backwardClick);

    // playing car driving sound
    carSound.play();
    carSound.loop = true;
}

function forwardClick(event) {
    goNextSong = Math.floor(prevClick + 1);

    if (goNextSong !== prevClick) {
        showSongInfo(goNextSong, globalData);
        prevClick = goNextSong;
    }
}

function backwardClick(event) {
    goPrevSong = Math.floor(prevClick - 1);
    if (goPrevSong !== prevClick) {
        showSongInfo(goPrevSong, globalData);
        prevClick = goPrevSong;
    }
}

getData();