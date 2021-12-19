$(document).ready(onReady);

function onReady() {
    console.log('on ready');

    
    $('#add').on('click', add);
    $('#equal').on('click', doMath);
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

// sending to server
function add(){
    $.ajax({
        method: 'POST',
        url:    'calculation',
        data:   $('#addBtn').data()
    })
    console.log($('#addBtn'.data()));
}

function clearAll(){

}

