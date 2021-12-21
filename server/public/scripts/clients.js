$(document).ready(onReady);

let operator;
let oldResult;

function onReady() {
    console.log('on ready');
    // when the button is clicked
    // then it would save the value to the operator variable
    // https://stackoverflow.com/questions/16611012/innerhtml-of-clicked-element
    $('.operatorBtn').on('click', mathOperator);
    $('#equalBtn').on('click', storeInputs);
    $('#clearBtn').on('click', clearAll);
    
    getResults();
}

function mathOperator(event) {
    event.preventDefault();
    operator = event.target.innerHTML;
    console.log('operator', operator);
}

// storing the numbers input and operator inside an object
function storeInputs() {
    let inputs = {
        num1:   parseInt($('#numOne').val()),
        num2:   parseInt($('#numTwo').val()),
        operatorSign:   operator,
        answer: " "
    };
    sendInputs(inputs);
}

// clear handling
function clearAll(){
    event.preventDefault();
    // empty the input fields
    $('#numOne').val('');
    $('#numTwo').val('');
    $('#history').empty();
    $('#answer').text('');
} // end of clear handling

// sending the input data to server
function sendInputs(inputs) {
    event.preventDefault
    $.ajax({
        method: 'POST',
        url:    '/doMath',
        data:   inputs
    })
    .then((reponse) => {
        console.log('in POST /doMath', reponse);
    getResults();   
    })
}

// GET /oldResults...receving the oldResults from server
// copy from the refresh function from express
function getResults() {
    $.ajax({
        method: 'GET',
        url:    '/oldResults',
    })
    .then((reponse) => {
        oldResults = reponse;
    // render to the DOM    
    render();
    })
}

function render() {
    // empty it before append the new one
    $('#history').empty();
    // looping through the oldResults and appending the object
    for (let result of oldResults) {
        // turn answer text into empty string 
        $('#answer').text('')
        // append a new answer
        $('#answer').append(`${result.answer}`)
        $('#history').append(`
            <li>
            ${result.num1} ${result.operatorSign} ${result.num2} = ${result.answer}
            </li>
        `)
    }
}