$(document).ready(onReady);

function onReady() {
    console.log('on ready');

    
    $('#addBtn').on('click', add);
    $('#subtractBtnsubtractBtn').on('click', subtract);
    $('#multipleBtn').on('click', multiple);
    $('#divideBtn').on('click', divide);
    $('#equal').on('click', doMath);
    $('#clear').on('click', clearAll);
}

function doMath(event) {
    // don't reload the page
    event.preventDefault();

    let result = {
        numOne: $('#inputOne').val(),
        numTwo: $('#inputTwo').val()
    }
    console.log('result', result);

    $.ajax({
        method: 'POST',
        url:    '/calculation',
        data:   math
    })
    .then ((reponse) =>{
        console.log('in reponse', reponse);
        
    })

}

// sending add buton to server
function add(){
    $.ajax({
        method: 'POST',
        url:    '/calculation',
        data:   $('#addBtn').data()
    })
    console.log($('#addBtn'.data()));
} //  end of sending add button to server

// sending subtract button to server
function subtract(){
    $.ajax({
        method: 'POST',
        url:    '/calculation',
        data:   $('#subtractBtn').data()
    })
    console.log($('#subtractBtn'.data()));
} //  end of sending subtract button to server

// sending multiple button to server
function multiple(){
    $.ajax({
        method: 'POST',
        url:    '/calculation',
        data:   $('#multipleBtn').data()
    })
    console.log($('#multipleBtn'.data()));
} //  end of sending multiple button to server

// sending divide button to server
function divide(){
    $.ajax({
        method: 'POST',
        url:    '/calculation',
        data:   $('#divideBtn').data()
    })
    console.log($('#divideBtn'.data()));
} //  end of sending divide button to server


// sending equal button to server
function euqal() {
    $ajax({
        method: 'POST',
        url:    '/calculation',
        data:   $('#equalBtn').data()
    })
} // end of sending equal button 

// sending clear button to server
function clearAll(){
    $ajax({
        method: 'POST',
        url:    '/calculation',
        data:   $('#clearBtn').data()
    })
} // end of sending clear button

