(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([37.780079, -122.420174], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker1 = L.marker([37.8119998, -122.4776255]).addTo(map);
    var marker2 = L.marker([37.7982400, -122.3778055]).addTo(map);
    var polygon = L.polygon([
        [37.7275008, -122.5078174],
        [37.7775008, -122.5138174],
        [37.7775008, -122.5109999],
        [37.7275008, -122.5049999],
    ]).addTo(map);

    marker1.bindPopup("Golden Gate Bridge");
    marker2.bindPopup("Bay Bridge");
    polygon.bindPopup("Ocean Beach");
}());