require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use('/users',require('./routes/user'));

app.listen(process.env.SERVER_PORT, () =>{
    console.log('Server listening at:' + process.env.SERVER_PORT);
});