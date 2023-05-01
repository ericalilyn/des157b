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
    // change styling of control elements
    document.querySelector('#changebutton').removeEventListener('click', playClick);
    document.querySelector('#changebutton').className = "fa-solid fa-pause-circle";
    document.querySelector('#forwardbutton').style.color = 'white';
    document.querySelector('#backbutton').style.color = 'gray';
    document.querySelector('#timebar').style.visibility = 'visible';
    // mouse click interaction added to change between data points
    document.querySelector('#forwardbutton').addEventListener('click', forwardClick);
    document.querySelector('#backbutton').addEventListener('click', backwardClick);
    
    startedSongs = true;
    if (startedSongs === true) {
        startedSongs = false;
        showSongInfo(0, globalData);
    }

    document.querySelector('#result').className = 'textappear';
    setTimeout(removeResultClass, 1000);

    document.querySelector('#timebar').className = 'timecount';
    
    // playing car driving sound
    carSound.play();
    carSound.loop = true;
}

function forwardClick(event) {
    event.preventDefault;

    goNextSong = Math.floor(prevClick + 1);

    if (goNextSong !== prevClick) {
        showSongInfo(goNextSong, globalData);
        prevClick = goNextSong;
    }

    if (prevClick === 9) {
        document.querySelector('#forwardbutton').style.color = 'gray';
    }
    document.querySelector('#backbutton').style.color = 'white';

    document.querySelector('#result').className = 'textappear';
    setTimeout(removeResultClass, 1000);
    changeTimeBarClass();
}

function backwardClick(event) {
    goPrevSong = Math.floor(prevClick - 1);

    if (goPrevSong !== prevClick) {
        showSongInfo(goPrevSong, globalData);
        prevClick = goPrevSong;
    }

    if (prevClick === 0) {
        document.querySelector('#backbutton').style.color = 'gray';
    }
    document.querySelector('#forwardbutton').style.color = 'white';

    document.querySelector('#result').className = 'textappear';
    setTimeout(removeResultClass, 1000);
    changeTimeBarClass();
}

function removeResultClass(event) {
    document.querySelector('#result').classList.remove('textappear');
}

function changeTimeBarClass(event) {
    document.querySelector('#timebar').classList.remove('timecount');

    void document.querySelector('#timebar').offsetWidth;

    document.querySelector('#timebar').classList.add('timecount');
}

getData();