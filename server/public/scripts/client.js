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
   
 

    $.ajax({
        url: '/submit-for-calc',
        type: "POST",
        data: holdValues

    }).then(function (res){
        console.log('result',res);

    });

    displayHistory();
    event.preventDefault();
   
}

function displayHistory (){
    $.ajax({
        url: '/display-history',
        type: "GET"
    }).then(function (res) {
        console.log(res);
        console.log('request success');
    
        for (const history of res.historyOfArrays) {
            console.log('for loop',history);
            
        }
    
    });

}


function doAdditon(event) {
    event.preventDefault();
    tacos = '+'
    console.log('do addition',tacos);
    
}

function doSubtraction(event) {
    event.preventDefault();
    tacos = '-'
    console.log('do subtraction',tacos);
    
}

function doMultiplication(event) {
    event.preventDefault();
    tacos = '*'
    console.log('do multiplication',tacos);
    
}

function doDivison(event) {
    event.preventDefault();
    tacos = '/'
    console.log('do divison',tacos);
    
}

function displayHistoryToDom() {
    console.log('Yey lets display the history');
}