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

    // direct to main page
    navIcon.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'http://127.0.0.1:5504/index.html';
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
        locationName.style.marginTop = '70px';
        locationIcon.className = 'fas fa-map-marker-alt';
    });

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
        header.className = 'displayed';
        locationGallery.className = 'displayed';
        addPhoto.className = 'removed';
        locationName.style.marginTop = '70px';
        locationIcon.className = 'fas fa-chevron-left';
    });
}());