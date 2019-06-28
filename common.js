const fillWeatherData = (response, location) => {
    return new Promise((resolve, reject) => {
        const parsed = JSON.parse(response);
        const data = {};
        // below, just in case we don't get one of the fields 
        // in the response, we'll avoid errors by setting value to ""
        data.locationInformation = {
            "name":`${location}`,
            "country": parsed.sys.country ? parsed.sys.country : "",
            "latitude": parsed.coord.lat ? parsed.coord.lat : "",
            "longitude": parsed.coord.lon ? parsed.coord.lon : ""
        }
        data.todaysWeather = {
            "currentTemperature": parsed.main.temp ? parsed.main.temp : "",
            "currentConditions": parsed.weather[0].main ? parsed.weather[0].main : "",
            "highTemperature": parsed.main.temp_max ? parsed.main.temp_max : "",
            "lowTemperature": parsed.main.temp_min ? parsed.main.temp_min : ""
        }
        resolve(data);
    })
}

module.exports = {fillWeatherData};