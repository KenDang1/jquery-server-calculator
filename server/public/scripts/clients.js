$(document).ready(onReady);

let operator;
let oldResult;

function onReady() {
    console.log('on ready');
    getResults();

    // when the button is clicked
    // then it would save the value to the operator variable
    // https://stackoverflow.com/questions/16611012/innerhtml-of-clicked-element
    $('.operatorBtn').on('click', mathOperator);
    $('#equalBtn').on('click', storeInputs);
    $('#clearBtn').on('click', clearAll);

    

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
        answer: ' '
    };
    sendInputs(inputs);
}

// clear handling
function clearAll(event){
    event.preventDefault();
    // empty the input fields
    $('#numOne').val('');
    $('#numTwo').val('');
    $('#history').empty();
} // end of clear handling

// sending the input data to server
function sendInputs(inputs) {
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
    $('#history').empty();
    // looping through the oldResults and appending the object
    for (let result of oldResults) {
        $('#history').append(`
            <li>
            ${result.num1} ${result.operatorSign} ${result.num2} = ${result.answer}
            </li>
        `)
    }
}