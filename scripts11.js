
const map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
let marker = L.marker([51.505, -0.09]).addTo(map);


const locationUrl = `https://api.thingspeak.com/channels/YOUR_CHANNEL_ID/fields/3/last.json?api_key=YOUR_API_KEY`;


function fetchLocation() {
    fetch(locationUrl)
        .then(response => response.json())
        .then(data => {
            const locationData = data.field3 || "27.960288,76.404020";
            const [lat, long] = locationData.split(',').map(Number);

            map.setView([lat, long], 13);
            marker.setLatLng([lat, long]);
        })
        .catch(error => console.error("Error fetching location:", error));
}


document.addEventListener("DOMContentLoaded", fetchLocation);


setInterval(fetchLocation, 60000);

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('active');
        if (card.classList.contains('active')) {
            card.style.transform = "translateY(-10px)";
        } else {
            card.style.transform = "translateY(0)";
        }
    });
});
