console.log("Cleaning site loaded successfully");

const map = L.map('map', {
    center: [49.8397, 24.0297], // Львів
    zoom: 8
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);
