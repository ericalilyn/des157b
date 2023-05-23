Parse.initialize("t4HjtqjYpYPznZIeJ7aPDwyf7b5levSCeNqg9XSq","M05FTXfNotdVzSTGzzkliavA94bAG0kNKdtR1OZ4");
Parse.serverURL = 'https://parseapi.back4app.com/';

(function() {
    'use strict';

    let file;
    let saveCount = 0;
    const photoSound = new Audio('sounds/polaroid-photo.mp3');

    document.querySelector('#upload').addEventListener('submit', function(event) {
        event.preventDefault();

        const fileUpload = document.querySelector('#file-upload');
        if (fileUpload.files.length > 0) {
            file = fileUpload.files[0];
            const name = fileUpload.files[0].name;
            const type = fileUpload.files[0].type;
            if (type == 'image/jpeg' || type == 'image/png') {
                window.fileAsDataURL = window.URL.createObjectURL(file);
                handlePhoto(window.fileAsDataURL, name);
                showPhotos();
                photoSound.play();
            }
            else {
                alert('The file is not a .jpg or .png')
            }
        }

        document.querySelector('#reveal').addEventListener('click', function(event) {
            event.preventDefault();
            
            document.querySelector('#display').style.zIndex = '3';
            document.querySelector('#screenshot').style.cursor = 'crosshair';
            document.querySelector('#note').className = 'showing';
            document.querySelector('#note').innerHTML = `<h2>Decorate the photo and save your work</h2>`;
            hideReveal();
        });
    
        document.querySelector('#save').addEventListener('click', function(event) {
            event.preventDefault();
    
            saveCount += 1;
            if (saveCount === 1) {
                savePhoto();
                setInterval(savedSketch, 500);
            }

            document.querySelector('#reveal').className = 'reset';
            document.querySelector('#note').className = 'showing';
            document.querySelector('#note').innerHTML = `<h2>Photo is saved (right click on it to get a copy)</h2>`;
        })

        document.querySelector('#new').addEventListener('click', function(event) {
            event.preventDefault();
    
            var newConfirm = window.confirm('Do you wish to create a new photo?');
            if (newConfirm == true) {
                window.location.reload();
            }
        })
    });

    async function handlePhoto(photoURL, name) {
        let smallCroppedPhoto;
        const photo1 = await Jimp.read(photoURL);
        photo1.cover(143, 191).getBase64('image/jpeg', (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                smallCroppedPhoto = result;
            }
        });

        let bigCroppedPhoto;
        const photo2 = await Jimp.read(photoURL);
        photo2.cover(300, 400).getBase64('image/jpeg', (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                bigCroppedPhoto = result;
            }
        });

        document.querySelector('#reveal img').src = smallCroppedPhoto;
        document.querySelector('#display img').src = bigCroppedPhoto;

        uploadData(name, file, smallCroppedPhoto, bigCroppedPhoto);
    }

    async function uploadData(name, originalPhoto, smallCroppedPhoto, bigCroppedPhoto) {
        const newObject = new Parse.Object('Photos');
        newObject.set('filename', name);
        newObject.set('file', new Parse.File(name, originalPhoto));
        newObject.set('smallcroppedfile', new Parse.File(name, {base64: smallCroppedPhoto}));
        newObject.set('bigcroppedfile', new Parse.File(name, {base64: bigCroppedPhoto}));
        try {
            const result = await newObject.save();
        }
        catch (error) {
            console.error('Error while creating photo: ', error);
        }
    }
})();

    function showPhotos() {
        document.querySelector('#reveal').className = 'animate';
        setInterval(pauseAnimation, 2500);
    }

    function pauseAnimation() {
        document.querySelector('.animate').style.animationPlayState = 'paused';
        document.querySelector('#note').className = 'showing';
    }

    function hideReveal() {
        document.querySelector('.animate').style.animationPlayState = 'running';
        document.querySelector('#reveal').className = 'reset';
    }

    function setup() {
        const canvas = createCanvas(360, 580);
        canvas.parent('sketch');
    }

    function draw() {
        if (mouseIsPressed) {
            fill(0);
        }
        else {
            fill(0, 0);
            noStroke();
        }
        ellipse(mouseX, mouseY, 7, 7);
    }

    function savePhoto() {
        let photoToSave = document.querySelector('#display');
        
        html2canvas(photoToSave, {proxy: window.fileAsDataURL}).then(function(canvas) {
            document.querySelector('#screenshot').appendChild(canvas);
        });

        document.querySelector('#screenshot').style.cursor = 'default';
    }

    function savedSketch() {
        document.querySelector('#sketch').className = 'hidden';
    }