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

let numOne;
let numTwo;
let operator = '';
let answer = 0;
let oldResult = [];

// Reveiving data from client
app.post('/calculation', (req, res) => {

    let mathOperator = req.body;
    console.log('in mathOperator', mathOperator);

    // if client send add data then it become this
      if (mathOperator.method === 'add') {
        operator = 'add';
        // if data send over subtract
      } else if (mathOperator.method === 'subtract') {
        operator = 'subtract';
      } else if (mathOperator.method === 'multiply') {
        operator = 'multiply';
      } else if (mathOperator.method === 'divide') {
        operator = 'divide';
      }
      console.log('operator is:', operator);
      

    res.sendStatus(201);
})

// receiving first input number data
app.post('/fistNumber', (req, res) => {
  numOne = req.body
  console.log('firstNumber input:', numOne);

  res.send(201);
})

// reveiving second input number data
app.post('/secondNumber', (req, res) => {
  numTwo = req.body
  console.log('secondNumber is:', numTwo)

  res.send(201)
})