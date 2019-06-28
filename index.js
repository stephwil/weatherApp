const express = require('express');
const router = express.Router();
const config = require('./secret/config.json');
const rp = require('request-promise');
const common = require('./common');

/**
 * GET /:location API:
 * You can use any of the following as the {location}: City name, City ID, Geographic Coordinates, or Zip Code
 * (see https://openweathermap.org/current#list for formatting of each parameter above)
 * The OpenWeatherMap API is used to retrieve the results, which are rendered and returned in the response.
 * Errors from the OpenWeatherMap API will be returned.
 * You can specify an optional query parameter {unit} to specify 
 * Fahrenheit (imperial) or celcius (metric), ex: ?unit=imperial (default is Kelvin)
 */
router.get('/:location', (req, res) => {
    const location = req.params.location;
    const unit = req.query.unit ? req.query.unit : undefined;
    var url;
    if(unit){
        url = `http://${config.url}${location}&units=${unit}&APPID=${config.apiKey}`
    }else{
        url = `http://${config.url}${location}&APPID=${config.apiKey}`;
    }
    rp(url) 
        .then((response) => {
            common.fillWeatherData(response, location)
                .then((data) => {
                    res.json(data)
                })
                .catch((err) => {
                    //err.error contains the nice JSON error
                    res.status(err.statusCode).send(err.error);
                })
        })
        .catch((err) => {
            //err.error contains the nice JSON error
            res.status(err.statusCode).send(err.error);
        })
});


module.exports = router;