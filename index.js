const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

app.listen(port, () =>{
    console.log('listening to the port at' ,{port})
})
