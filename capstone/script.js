(function(){
    'use strict';

    // header variables
    const header = document.querySelector('header');
    const navIcon = document.querySelector('header i');
    // map screen variables
    const mapDiv = document.querySelector('#map');
    // location list variables
    const nav = document.querySelector('nav');
    const loc1Icon = document.querySelector('#loc1 i');
    const loc2Icon = document.querySelector('#loc2 i');
    const loc3Icon = document.querySelector('#loc3 i');
    const loc4Icon = document.querySelector('#loc4 i');
    const loc5Icon = document.querySelector('#loc5 i');
    const loc1Name = document.querySelector('#loc1 h2');
    const loc2Name = document.querySelector('#loc2 h2');
    const loc3Name = document.querySelector('#loc3 h2');
    const loc4Name = document.querySelector('#loc4 h2');
    const loc5Name = document.querySelector('#loc5 h2');
    const loc1Btn = document.querySelector('#loc1 button');
    const loc2Btn = document.querySelector('#loc2 button');
    const loc3Btn = document.querySelector('#loc3 button');
    const loc4Btn = document.querySelector('#loc4 button');
    const loc5Btn = document.querySelector('#loc5 button');
    const userDisplay = document.querySelector('#username-display ');
    // unlock screen variables
    const loc1Unlock = document.querySelector('#loc1-unlock');
    const loc2Unlock = document.querySelector('#loc2-unlock');
    const loc3Unlock = document.querySelector('#loc3-unlock');
    const loc4Unlock = document.querySelector('#loc4-unlock');
    const loc5Unlock = document.querySelector('#loc5-unlock');
    const loc1Back = document.querySelector('#loc1-unlock button');
    const loc2Back = document.querySelector('#loc2-unlock button');
    const loc3Back = document.querySelector('#loc3-unlock button');
    const loc4Back = document.querySelector('#loc4-unlock button');
    const loc5Back = document.querySelector('#loc5-unlock button');
    const loc1Form = document.querySelector('#loc1-unlock form');
    const loc2Form = document.querySelector('#loc2-unlock form');
    const loc3Form = document.querySelector('#loc3-unlock form');
    const loc4Form = document.querySelector('#loc4-unlock form');
    const loc5Form = document.querySelector('#loc5-unlock form');
    const loc1Label = document.querySelector('label[for="loc1key"]');
    const loc2Label = document.querySelector('label[for="loc2key"]');
    const loc3Label = document.querySelector('label[for="loc3key"]');
    const loc4Label = document.querySelector('label[for="loc4key"]');
    const loc5Label = document.querySelector('label[for="loc5key"]');
    const loc1Key = document.querySelector('#loc1key');
    const loc2Key = document.querySelector('#loc2key');
    const loc3Key = document.querySelector('#loc3key');
    const loc4Key = document.querySelector('#loc4key');
    const loc5Key = document.querySelector('#loc5key');
    // start screen variables
    const startScreen = document.querySelector('#start');
    const startBtn = document.querySelector('#start-btn');
    const aboutIcon = document.querySelector('#start i');
    const aboutPopup = document.querySelector('#about');
    // sign in screen variables
    const signinScreen = document.querySelector('#sign-in');
    const signinForm = document.querySelector('#sign-in form');

    // leaflet map setup
    var map = L.map('map').setView([38.540000, -121.755000], 14);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const gold = "hue-rotate(185deg)";
    const green = "hue-rotate(-60deg)";
    const gray = "grayscale(1)";

    var loc1Marker = L.marker([38.540415, -121.741697]).addTo(map);
    loc1Marker.bindPopup("Location #1");
    loc1Marker._icon.style.filter = gray;

    var loc2Marker = L.marker([38.538850, -121.752870]).addTo(map);
    loc2Marker.bindPopup("Location #2");
    loc2Marker._icon.style.filter = gray;

    var loc3Marker = L.marker([38.544555, -121.759730]).addTo(map);
    loc3Marker.bindPopup("Location #3");
    loc3Marker._icon.style.filter = gray;

    var loc4Marker = L.marker([38.546330, -121.759578]).addTo(map);
    loc4Marker.bindPopup("Location #4");
    loc4Marker._icon.style.filter = gray;

    var loc5Marker = L.marker([38.543700, -121.764300]).addTo(map);
    loc5Marker.bindPopup("Location #5");
    loc5Marker._icon.style.filter = gray;

    var startMarker = L.marker([38.543150, -121.740700]).addTo(map);
    startMarker.bindPopup("Davis Centennial Seal").openPopup();
    startMarker._icon.style.filter = gold;

    // show sign in screen 
    startBtn.addEventListener('click', function(event) {
        event.preventDefault();
        startScreen.className = 'hidden';
        signinScreen.className = 'showing';
    });

    aboutIcon.addEventListener('click', function(event) {
        event.preventDefault();
        if (aboutPopup.className === 'hidden') {
            aboutPopup.className = 'showing';
        }
        else {
            aboutPopup.className = 'hidden';
        }
    });

    // create new user and show map screen
    signinForm.addEventListener('submit', function (event) {
        event.preventDefault();
        //TO ADD: Parse User added
        console.log('user added');
        signinScreen.className = 'hidden';
    });

    // show location list 
    navIcon.addEventListener('click', function(event) {
        event.preventDefault();
        if (nav.className === 'displayed' || nav.className === 'nav-closed') {
            nav.className = 'nav-opened';
        }
        else if (nav.className === 'nav-opened') {
            nav.className = 'nav-closed';
        }

        nav.addEventListener('animationend', function(event) {
            event.preventDefault();
            if (nav.className === 'nav-opened') {
                nav.style.top = '50%';
            }
            else if (nav.className === 'nav-closed') {
                nav.style.top = '-50%';
            }
        });
    });

    // show and hide unlock screens for each location
    loc1Btn.addEventListener('click', function(event) {
        loc1Unlock.className = 'unlock displayed';
    });
    loc1Back.addEventListener('click', function(event) {
        loc1Unlock.className = 'unlock removed';
        loc1Key.value = '';
        loc1Label.className = 'removed';
    });

    loc2Btn.addEventListener('click', function(event) {
        loc2Unlock.className = 'unlock displayed';
    });
    loc2Back.addEventListener('click', function(event) {
        loc2Unlock.className = 'unlock removed';
        loc2Key.value = '';
        loc2Label.className = 'removed';
    });

    loc3Btn.addEventListener('click', function(event) {
        loc3Unlock.className = 'unlock displayed';
    });
    loc3Back.addEventListener('click', function(event) {
        loc3Unlock.className = 'unlock removed';
        loc3Key.value = '';
        loc3Label.className = 'removed';
    });

    loc4Btn.addEventListener('click', function(event) {
        loc4Unlock.className = 'unlock displayed';
    });
    loc4Back.addEventListener('click', function(event) {
        loc4Unlock.className = 'unlock removed';
        loc4Key.value = '';
        loc4Label.className = 'removed';
    });

    loc5Btn.addEventListener('click', function(event) {
        loc5Unlock.className = 'unlock displayed';
    });
    loc5Back.addEventListener('click', function(event) {
        loc5Unlock.className = 'unlock removed';
        loc5Key.value = '';
        loc5Label.className = 'removed';
    });

    // direct to each location page
    loc1Form.addEventListener('submit', function (event) {
        event.preventDefault();
        //TO ADD: Parse User location boolean true
        if (loc1Key.value.toLowerCase() === 'shovel') {
            window.location.href = 'https://ericawithac.github.io/des157b/capstone/location/arboretum-gateway-garden.html';
        }
        else {
            loc1Label.className = 'displayed';
        }
    });

    loc2Form.addEventListener('submit', function (event) {
        event.preventDefault();
        //TO ADD: Parse User location boolean true
        if (loc2Key.value.toLowerCase() === 'cow') {
            window.location.href = 'https://ericawithac.github.io/des157b/capstone/location/the-silo.html';
        }
        else {
            loc2Label.className = 'displayed';
        }
    });

    loc3Form.addEventListener('submit', function (event) {
        event.preventDefault();
        //TO ADD: Parse User location boolean true
        if (loc3Key.value.toLowerCase() === '10' || loc3Key.value.toLowerCase() === 'ten') {
            window.location.href = 'https://ericawithac.github.io/des157b/capstone/location/sprocket-bike-tunnel.html';
        }
        else {
            loc3Label.className = 'displayed';
        }
    });

    loc4Form.addEventListener('submit', function (event) {
        event.preventDefault();
        //TO ADD: Parse User location boolean true
        if (loc4Key.value.toLowerCase() === 'bike' || loc3Key.value.toLowerCase() === 'bicycle') {
            window.location.href = 'https://ericawithac.github.io/des157b/capstone/location/the-big-bike.html';
        }
        else {
            loc4Label.className = 'displayed';
        }
    });

    loc5Form.addEventListener('submit', function (event) {
        event.preventDefault();
        //TO ADD: Parse User location boolean true
        if (loc5Key.value.toLowerCase() === 'dome') {
            window.location.href = 'https://ericawithac.github.io/des157b/capstone/location/baggins-end-domes.html';
        }
        else {
            loc5Label.className = 'displayed';
        }
    });
}());