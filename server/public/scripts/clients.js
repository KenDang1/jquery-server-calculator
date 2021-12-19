$(document).ready(onReady);

function onReady() {
    console.log('on ready');

    
    $(document).on('click', '#addBtn', add);
    $(document).on('click', '#subtractBtn', subtract);
    $(document).on('click', '#multipleBtn', multiple);
    $(document).on('click', '#divideBtn', divide);
    $(document).on('click', '#equalBtn', equal);
    $(document).on('click', '#clearBtn', clearAll);
}

function getResult(){

}

// sending add buton to server
function add(event){
    event.preventDefault();
    $.ajax({
        method: 'POST',
        url:    '/calculation',
        data:   $('#addBtn').data()
    })
    console.log($('#addBtn'.data()));
} //  end of sending add button to server

// sending subtract button to server
function subtract(event){
    event.preventDefault();
    $.ajax({
        method: 'POST',
        url:    '/calculation',
        data:   $('#subtractBtn').data()
    })
    console.log($('#subtractBtn'.data()));
} //  end of sending subtract button to server

// sending multiple button to server
function multiple(event){
    event.preventDefault();
    $.ajax({
        method: 'POST',
        url:    '/calculation',
        data:   $('#multipleBtn').data()
    })
    console.log($('#multipleBtn'.data()));
} //  end of sending multiple button to server

// sending divide button to server
function divide(event){
    event.preventDefault();
    $.ajax({
        method: 'POST',
        url:    '/calculation',
        data:   $('#divideBtn').data()
    })
    console.log($('#divideBtn'.data()));
} //  end of sending divide button to server


// sending equal button to server
function equal(event) {
    event.preventDefault();
    $ajax({
        method: 'POST',
        url:    '/calculation',
        data:   $('#equalBtn').data()
    })
} // end of sending equal button 

// sending clear button to server
function clearAll(event){
    event.preventDefault();
    $ajax({
        method: 'POST',
        url:    '/calculation',
        data:   $('#clearBtn').data()
    })
} // end of sending clear button

