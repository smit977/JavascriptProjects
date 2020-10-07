class Storage {
    constructor() {
        this.city;
        this.state;
        this.defaultCity = 'Pune';
        this.defaultState = 'MH';
    }

    getLocationData() {
        if(localStorage.getItem('city') === null){
            localStorage.setItem('city' ,this.defaultCity);
            localStorage.setItem('state' ,this.deafultState);
        } else {
            localStorage.setItem('city', this.city);
            localStorage.setItem('state' ,this.state);
        }
        return {
            city: this.city,
            state: this.state
        }
    }

    setLocationData(city ,state) {
        localStorage.setItem('city' ,city);
        localStorage.setItem('state' ,state);
    }
}