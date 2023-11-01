const express = require('express');
const app = express();
const port = 5001;
const datefunc = require('./Date'); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/home.html');
});

app.get('/services', datefunc, (req, res) => {
    res.sendFile(__dirname + '/public/services.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Le serveur est en cours d\'exécution sur le port ' + port);
    }
});
