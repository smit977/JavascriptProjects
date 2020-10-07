// Initialize storage class
const storage = new Storage();
    // Get storage location data
    const weatherLocation = storage.getLocationData();

// Initialize weather class
const weather = new Weather(weatherLocation.city , weatherLocation.state);

// Initialize UI class
const ui = new UI();

// Add LS event Listener
document.getElementById('w-change-btn').addEventListener('click' ,(e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // Change location
    weather.changeLocation(city ,state);
    
    // Set location in LS
    storage.setLocationData(city ,state);

    // Get and display weather
    getWeather();

    // close modal (JQuery)
    $('#locModal').modal('hide');
});

// Load webpage when it opens up
document.addEventListener('DOMContentLoaded' ,getWeather);


function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}