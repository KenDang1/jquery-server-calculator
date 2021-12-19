const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET & POST Routes go here


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

let numOne
let numTwo
let operator = ''
let answer = 0

let math = {};
console.log('math', math);



app.post('/calculation', (req, res) => {

    let mathOperator = req.body;
    console.log('in mathOperator', mathOperator);
    //testing
    res.send(req.body);


    res.sendStatus(201);
})