class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-location');
        this.string = document.getElementById('w-location');
        this.details = document.getElementById('w-location');
        this.icon = document.getElementById('w-location');
        this.humidity = document.getElementById('w-location');
        this.feelsLike = document.getElementById('w-location');
        this.dewpoint = document.getElementById('w-location');
        this.wind = document.getElementById('w-location');
    }

    paint(weather) {
        this.location.textContent = weather.display_Location.full;  
        this.desc.textContent = weather.weather;
        this.string.textContent = weather.temperature_string;
        this.icon.setAttribute('src' , weather.icon_url);
        this.humidity.textContent = `Realtive Humidity: ${weather.relative_humidity}`;
        this.feelsLike.textContent = `Dewpoints: ${weather.dewpoint_string}`;
        this.dewpoint.textContent = `Feels Like: ${weather.feelslike_string}`;
        this.wind.textContent = `Wind: ${weather.wind_string}`;
    }
}