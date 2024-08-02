const express = require('express'); //for making paths
const mongoose = require('mongoose');
require('dotenv/config'); // sets the 

const app = express();
// const port = 3000;

//Import Routes from routes.js file
const routes = require('./routes');

// app.use('/posts', postsRoute); //use: means you are using middleware.



//middleware
app.use('/api', routes);
//ROUTES
app.get('/', (req, res) => {
    res.send('We are online')
});

//CONNECT TO THE DATABASE
mongoose.connect(process.env.MONGODBLINK)
    .then(() => {
        console.log('Connected to the DB');
    })
    .catch(err => {
        console.log('Error connecting to the DB', err);
    });



//HOW TO START LISTENING USING THE PORT
app.listen(process.env.port, () => {console.log(`Connected on port ${(process.env.port)}`);});