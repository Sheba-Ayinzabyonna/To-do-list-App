const express = require('express');

const app = express();


//ROUTES
app.get('/', (req, res) => {
    res.send('We are online');
});


//HOW TO START LISTENING USING THE PORT
app.listen(3000);