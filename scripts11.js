// Initialize the map with Leaflet.js
const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
let marker = L.marker([51.505, -0.09]).addTo(map);

// ThingSpeak API URL (replace placeholders)
const locationUrl = `https://api.thingspeak.com/channels/YOUR_CHANNEL_ID/fields/3/last.json?api_key=YOUR_API_KEY`;

// Fetch location and update the map
function fetchLocation() {
    fetch(locationUrl)
        .then(response => response.json())
        .then(data => {
            const locationData = data.field3 || "27.960288,76.404020";
            const [lat, long] = locationData.split(',').map(Number);

            map.flyTo([lat, long], 13, { animate: true, duration: 1 });
            marker.setLatLng([lat, long]).bindPopup("Latest Location").openPopup();
        })
        .catch(error => console.error("Error fetching location:", error));
}

// Run fetchLocation on page load and every 60 seconds
document.addEventListener("DOMContentLoaded", fetchLocation);
setInterval(fetchLocation, 60000);

// Add interactive card effects
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('hover');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('hover');
    });
});
