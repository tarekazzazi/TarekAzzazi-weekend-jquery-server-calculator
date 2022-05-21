$(Ready);

function Ready() {
    console.log('In onReady');
    $('#userInputs').on('click','#plusBtn', addValues)
    
}

function addValues(event) {
    console.log('In addValues');

    event.preventDefault();
}