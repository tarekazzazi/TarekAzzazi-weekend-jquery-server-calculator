$(Ready);

let tacos;

function Ready() {
    console.log('In onReady');
    $('#userInputs').on('click','#submitBtn', collectInputsTurnToNumber )
    
    $('#plusBtn').on('click', sendToDoAdditon)
    
    $('#minusBtn').on('click', sendToDoSubtraction)
    
    $('#timesBtn').on('click', sendToDoMultiplication)

    $('#divideBtn').on('click', sendToDoDivison)
    
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

        $('#historyOfAnswers').empty()
    
        for (const history of res.historyOfArrays) {
            console.log('for loop',history);

            $('#historyOfAnswers').append(`
                <li>${history.firstInput} ${history.operator} ${history.secondInput} = ${history.answer} </li>
            
            `)
            
        }
    
    });

}


function sendToDoAdditon(event) {
    event.preventDefault();
    tacos = '+'
    console.log('do addition',tacos);
    
}

function sendToDoSubtraction(event) {
    event.preventDefault();
    tacos = '-'
    console.log('do subtraction',tacos);
    
}

function sendToDoMultiplication(event) {
    event.preventDefault();
    tacos = '*'
    console.log('do multiplication',tacos);
    
}

function sendToDoDivison(event) {
    event.preventDefault();
    tacos = '/'
    console.log('do divison',tacos);
    
}

