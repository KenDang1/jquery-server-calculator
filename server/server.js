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

let oldResults = [];

// GET /oldResults endpoint
app.get('/oldResults', (req, res) => {
  res.send(oldResults)
})

app.post('/doMath', (req, res) => {
  // req.body is the inputs in storeInputs function on clients side
  let numbers = req.body;
  // mumbers.operatorSign is how you access the object value
  // same as numbers.num1 and numbers.num2
  let operator = numbers.operatorSign;
  let num1 = parseFloat(numbers.num1);
  let num2 = parseFloat(numbers.num2);
  // if the operator is +
  if (operator === '+') {
    console.log('operator', operator);
    // numbers.result equal to num1 + num2
    // numbers.result was send over as an empty string
    numbers.answer = num1 + num2;
  } else if (operator === '-') {
    numbers.answer = num1 - num2;
  } else if (operator === '*') {
    numbers.answer = num1 * num2;
  } else if (operator === '/') {
    numbers.answer = num1 / num2;
  }
console.log('result', numbers.result);

// pushing or adding the math that just did to the oldResult array
oldResults.push(numbers)
console.log('old math:', oldResults);

res.sendStatus(201);
})