$(Ready);

function Ready() {
    console.log('In onReady');
    $('#userInputs').on('click','#plusBtn', addValues)
    
}

function addValues(event) {
    console.log('In addValues');

    let AddValues =  $('.inputVal').map((_, el) => el.value).get()
    
    console.log(AddValues);

    
    event.preventDefault();
}