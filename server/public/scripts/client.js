$(Ready);

let setOperator;

function Ready() {
    console.log('In onReady');
    // listens for a click on form specifically the '#submitBtn' then runs function collectInputsTurnToNumber
    $('#userInputs').on('click','#submitBtn', collectInputsTurnToNumber )
    
    // Listens for a click on '#plusBtn' then runs function sendToDoAdditon
    $('#plusBtn').on('click', sendToDoAdditon)
    
    // Listens for a click on '#minusBtn' then runs function sendToDoSubtraction
    $('#minusBtn').on('click', sendToDoSubtraction)
    
    // Listens for a click on '#timesBtn' then runs function sendToDoMultiplication
    $('#timesBtn').on('click', sendToDoMultiplication)

    // Listens for a click on '#divideBtn' then runs function sendToDoDivison
    $('#divideBtn').on('click', sendToDoDivison)

    $('#clearBtn').on('click', clearInputs)
    
}

    

function collectInputsTurnToNumber(event) { 
    // prevents form from reloading page
    event.preventDefault(); 
    // makes a Object called holdValues
    // inside object firstinput is set to the value of the firstInput entered on the form
    // secondInput grabs the secondInput value from the form and sets it to secondInput
    // The operator is set to a global variable I called setOperator which is to start undefined
    let holdValues = {
        firstInput: $('#firstInput').val(),
        secondInput: $('#secondInput').val(),
        operator: setOperator
    }

    console.log(holdValues);
   
    // ajax POST
    // under the url of /submit-for-calc
    // the object I called holdValues is sent to the server

    $.ajax({
        url: '/submit-for-calc',
        type: "POST",
        data: holdValues

    }).then(function (res){
        console.log('result',res);

    });

    // function displayHistory(); is called
    displayHistory();
    event.preventDefault();
   
}

function displayHistory (){

    // ajax GET request 
    // under url /display-history
    // I am requesting that the history sent back from server to client.js
    $.ajax({
    
        url: '/display-history',
        type: "GET"
    }).then(function (res) {

        // logs what was recived
        console.log(res); 

        console.log('request success');

        // emptys the ul with a id of #historyOfAnswers
        $('#historyOfAnswers').empty()
    
        // loops through the historyOfArrays array 
        // appends the objects firstInput then Operator then secondInput and lastly the answer
        // all in the ul with a id #historyOfAnswers under a new <li> tag
        for (const history of res.historyOfArrays) {

            console.log('for loop',history);

            $('#historyOfAnswers').append(`
                <li>${history.firstInput} ${history.operator} ${history.secondInput} = ${history.answer} </li>
            
            `)
            
        }
    
    });

}

function clearInputs(event){

    // targets class '.inputVal' and emptys the values
    event.preventDefault();
    $('.inputVal').val('')
}

// all this function does is set the operator to the string '+'
function sendToDoAdditon(event) {
    event.preventDefault();
    setOperator = '+'
    console.log('do addition',setOperator);
    
}
// all this function does is set the operator to the string '-'
function sendToDoSubtraction(event) {
    event.preventDefault();
    setOperator = '-'
    console.log('do subtraction',setOperator);
    
}
// all this function does is set the operator to the string '*'
function sendToDoMultiplication(event) {
    event.preventDefault();
    setOperator = '*'
    console.log('do multiplication',setOperator);
    
}
// all this function does is set the operator to the string '/'
function sendToDoDivison(event) {
    event.preventDefault();
    setOperator = '/'
    console.log('do divison',setOperator);
    
}

