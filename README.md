# Weather API
Uses the APIs at https://openweathermap.org/current to display location information and today's weather for a specified location.

## How to use

1. Run `node app.js` 
2. Open browser or Postman to `localhost:3000`
3. GET /weather/:location

You can use any of the following as the location: City name, City ID, Geographic Coordinates, or Zip Code

See [OpenWeather](https://openweathermap.org/current#list) for formatting of each parameter above

You can specify an optional query parameter `unit` to specify Fahrenheit (imperial) or Celcius (metric). The default unit is Kelvin.

example endpoint: `localhost:3000/weather/Raleigh,NC,US?unit=imperial` 

