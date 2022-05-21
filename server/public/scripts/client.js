$(Ready);

function Ready() {
    console.log('In onReady');
    $('#userInputs').on('click','#submitBtn',collectInputsTurnToNumber )
    
}
// = button collects inputs and listens to see which button is clicked next which it will then call that function
function collectInputsTurnToNumber(event) { 
    let getValues =  $('.inputVal').map((_, el) => el.value).get()
    let convertedValues = [];
    
    for (value of getValues) {
        value = (Number(value))
        console.log(value);
        convertedValues.push(value)

    }
    console.log(convertedValues);
    event.preventDefault();
}

/*
function addValues(event) {
    console.log('In addValues');


    }
    console.log(value);
  


    event.preventDefault();
}
*/