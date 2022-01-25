const express = require('express');
const path = require('path');
const hbs = require('hbs');

var assert = require('assert');
var http = require('http');
var https = require('https');
const { status } = require('express/lib/response');
const app = express();
const port = process.env.PORT || 8000;

console.log("Deployed first app in heroku:Mousam")

app.listen(port, () =>{
    console.log('listening to the port at' ,{port})
})
app.get('/', function (req, res) {
    //res.header('Content-Type', 'text/css').send("Deployed first app in heroku:Mousam");
    res.sendFile('index.html',{root : '.'});
 });


// https.post('https://bikebazaar--bbdev.my.salesforce.com/services/oauth2/token?grant_type=password&username=maheswar@bikebazaar.com.bbdev&password=Ascii@12345&client_id=3MVG9Se4BnchkASl02LDbSve.FsMFlRoo3.JTAGi13uymO.LkuOte4DopCQprvzifbHHDMHwA1HW7nsTzukxe&client_secret=E449A00F8877115CA27E974AB1D14E9314B70DF4D0FBE38A4F23DC6B6C4E634F', (res) => {
//   console.log('statusCode:', res.statusCode);
//   console.log('headers:', res.headers);

//   res.on('data', (d) => {
//       console.log(d)
//     process.stdout.write(d);
//   });

// }).on('error', (e) => {
//   console.error(e);
// });