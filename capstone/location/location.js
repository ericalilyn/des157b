Parse.initialize("rWC0HUiG9YuvLApeDHeRz9ttz3lCXDLdU7caKs8P","GQCP2oGKxBzbC4S0uvdR5UF1YU6lhXm4I8LS4MDh");
Parse.serverURL = 'https://parseapi.back4app.com/';

(function(){
    'use strict';

    // header variables
    const header = document.querySelector('header');
    const navIcon = document.querySelector('header i');
    // location section variables
    const locationName = document.querySelector('#location-name');
    const locationIcon = document.querySelector('#location-name i');
    const locationFigure = document.querySelector('#location-figure');
    const locationHistory = document.querySelector('#location-history');
    const viewBtn = document.querySelector('#location-history button');
    const locationGallery = document.querySelector('#location-gallery');
    const addBtn = document.querySelector('#add-btn');
    const noPhotosMsg = document.querySelector('#no-photos');
    const locationPost = document.querySelector('#location-post');
    const addPhoto = document.querySelector('#add-photo');
    const addPhotoBack = document.querySelector('#add-photo button');
    const photoForm = document.querySelector('#form-inputs');
    const nameInput = document.querySelector('#name');
    const captionInput = document.querySelector('#caption');
    const locationInput = document.querySelector('#location-id');;

    // direct to main page
    navIcon.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'https://ericawithac.github.io/des157b/capstone/development/index.html';
    });

    // show location gallery section
    viewBtn.addEventListener('click', function(event) {
        event.preventDefault();
        locationFigure.className = 'removed';
        locationHistory.className = 'removed';
        locationGallery.className = 'displayed';
        noPhotosMsg.className = 'displayed';
        locationName.style.marginTop = '70px';
        locationIcon.className = 'fas fa-chevron-left';
    });
    locationIcon.addEventListener('click', function(event) {
        event.preventDefault();
        locationFigure.className = 'displayed';
        locationHistory.className = 'displayed';
        locationGallery.className = 'removed';
        noPhotosMsg.className = 'removed';
        locationPost.className = 'removed';
        locationName.style.marginTop = '70px';
        locationIcon.className = 'fas fa-map-marker-alt';
    });

    // show posts
    // document.querySelector('#item-[objectId]').addEventListener('click', function(event) {
    //     // document.querySelector('#post-[objectId]').className = 'post displayed';
    //     locationPost.className = 'displayed';
    //     locationGallery.className = 'removed';
    // })
    // hide posts
    // document.querySelector('.fa-times').addEventListener('click', function(event) {
    //     // document.querySelector('#post-[objectId]').className = 'post removed';
    //     locationPost.className = 'removed';
    //     locationGallery.className = 'displayed';
    // });

    // show and hide add photo screen
    addBtn.addEventListener('click', function(event) {
        event.preventDefault();
        header.className = 'removed';
        locationFigure.className = 'removed';
        locationGallery.className = 'removed';
        addPhoto.className = 'displayed';
        locationName.style.marginTop = '0px';
        locationIcon.className = 'fas fa-map-marker-alt';
    });
    addPhotoBack.addEventListener('click', function(event) {
        event.preventDefault();
        goBackToGallery();
    });

    function goBackToGallery() {
        header.className = 'displayed';
        locationGallery.className = 'displayed';
        addPhoto.className = 'removed';
        locationName.style.marginTop = '70px';
        locationIcon.className = 'fas fa-chevron-left';
    }

    photoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const fileUpload = document.querySelector('#imgfile');
        if (fileUpload.files.length > 0) {
            const location = locationInput.value;
            const name = nameInput.value;
            const caption = captionInput.value;
            const file = fileUpload.files[0];
            const filename = fileUpload.files[0].name;
            uploadPhoto(location, name, caption, filename, file);
            goBackToGallery();
        }
    });

    async function uploadPhoto(location, name, caption, filename, file) {
        const newPhoto = new Parse.Object('Uploads');
        newPhoto.set('location', location);
        newPhoto.set('name', name);
        newPhoto.set('caption', caption);
        newPhoto.set('filename', filename);
        newPhoto.set('file', new Parse.File(filename, file));
        try {
            const result = await newPhoto.save();
        }
        catch (error) {
            console.error('Error while uploading photo: ', error);
        }
    }
}());