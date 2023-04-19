(function() {
    'use strict';

    const myVideo = document.querySelector('#myVideo');
    const loading = document.querySelector('.fa-yin-yang');

    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const poem = {
        start: [0.1, 4.1, 7.1],
        stop: [4, 7, 10],
        line: [line1, line2, line3]
    }

    myVideo.addEventListener('playing', function() {
        loading.style.display = 'none';
    });

    myVideo.addEventListener('mousemove', function(event) {
        console.log(event.clientX);
        myVideo.playbackRate = event.clientX / 300 + .00000000000005;
    });

    const delay = setInterval(checkTime, 1000);

    function checkTime() {
        for (let i = 0; i < poem.start.length; i++) {
            if (poem.start[i] < myVideo.currentTime && myVideo.currentTime < poem.stop[i]) {
                poem.line[i].className = "showing";
            } else {
                poem.line[i].className = "hidden";
            }
        }
    };
})();