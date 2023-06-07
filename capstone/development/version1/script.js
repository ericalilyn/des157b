(function(){
    'use strict';

    // add your script here
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
}());