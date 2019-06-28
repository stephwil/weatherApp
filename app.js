const config = require('./secret/config.json')
const express = require('express');
const app = express();
const port = config.port;

//listen for requests
app.listen(port, () => console.log(`Listening on port ${port}`))

//lets use the weather route inside of index.js
var weather = require('./index');

app.use('/weather', weather);

app.get('/', (req,res) => {
  //give a friendly message for / endpoint
  res.send('Weather to the Current Weather API!')
})

module.exports = app;
