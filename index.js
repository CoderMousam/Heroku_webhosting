const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

console.log("Deployed first app in heroku:Mousam")

app.listen(port, () =>{
    console.log('listening to the port at' ,{port})
})
