const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

app.use( express.static( "public" ) );
app.use(bodyParser.urlencoded({ extended: true }));

let loggedIn = false;

app.get('/', (req, res) => {
  res.render((__dirname + '/index.ejs'), { __dirname : path.join(__dirname, "..") })
})

app.get('/index.html', (req, res) => {
    res.render((__dirname + '/index.ejs'))
})

app.get('/login.html', (req, res) => {
    res.sendFile((path.join(__dirname, "..") + '/public/src/login.html'))
})

app.get('/signup.html', (req, res) => {
    res.sendFile((path.join(__dirname, "..") + '/public/src/signup.html'))
})

app.get('/contracts.html', (req, res) => {
    res.sendFile((path.join(__dirname, '..') + '/public/src/contracts.html'))
})

app.get('/bazaar.html', (req, res) => {
    res.sendFile((path.join(__dirname, '..') + '/public/src/bazaar.html'))
})

app.get('/texting.html', (req, res) => {
    res.sendFile((path.join(__dirname, '..') + '/public/src/texting.html'))
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})