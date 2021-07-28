// Import express, cors and node-fetch
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const { json } = require('express');

// Creating the app and enabling cors
const app = express();
app.use(cors());


//Middleware

app.get('/kanye', function (req, res) {
    
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then((json) => {
            json.quote 
            res.send(json)
        })
        
});

app.get('/cat', function (req, res) {
    fetch('https://api.thecatapi.com/v1/images/search?')
        .then(res => res.json())
        .then((json) => {
            json.url
            res.send(json)
        })
});

const port = process.env.PORT || 7079;
app.listen(port, function () {
    console.log('Backend is working at port ' + port);
});