$(Ready);

let tacos;

function Ready() {
    console.log('In onReady');
    $('#userInputs').on('click','#submitBtn', collectInputsTurnToNumber )
    
    $('#plusBtn').on('click', doAdditon)
    
    $('#minusBtn').on('click', doSubtraction)
    
    $('#timesBtn').on('click', doMultiplication)

    $('#divideBtn').on('click', doDivison)
    
}

    

 // decided to make global variable so all functions can access it
// = button collects inputs and listens to see which button is clicked next which it will then call that function
function collectInputsTurnToNumber(event) { 
    event.preventDefault();
     // https://stackoverflow.com/a/58050152
    // let getValues =  $('.inputVal').map((_, el) => el.value).get()
    //console.log(getValues);
    let holdValues = {
        firstInput: $('#firstInput').val(),
        secondInput: $('#secondInput').val(),
        operator: tacos 
    }

    console.log(holdValues);
    // for (value of getValues) {
    //     value = (Number(value))
    //     console.log(value);
    //     convertedValues.push(value)

    // }
 

    $.ajax({
        url: '/submit-for-calc',
        type: "POST",
        data: holdValues

    }).then(function (res){
        console.log(res);
    });


    event.preventDefault();
   
}

function doAdditon(event) {
    event.preventDefault();
    tacos = '+'
    console.log('do addition',tacos);
    
}

function doSubtraction(event) {
    event.preventDefault();
    tacos = '-'
    console.log('do addition',tacos);
    
}

function doMultiplication(event) {
    event.preventDefault();
    tacos = '*'
    console.log('do addition',tacos);
    
}

function doDivison(event) {
    event.preventDefault();
    tacos = '/'
    console.log('do addition',tacos);
    
}