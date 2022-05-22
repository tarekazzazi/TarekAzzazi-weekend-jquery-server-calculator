

const express = require('express')
const app = express();
const bodyParser = require("body-parser");

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


let historyArray = [];


app.post('/submit-for-calc', (req,res) => {

    let holdValues = req.body

    holdValues.firstInput = Number(holdValues.firstInput)
    holdValues.secondInput = Number(holdValues.secondInput)
    
    console.log('checking object',req.body); // = holdvalues 
    console.log('In server.js');
    
    console.log('The total value is', historyArray);

    let answer = doMath(holdValues)
    console.log('before', holdValues);
    holdValues.answer = answer
  
    console.log('after', holdValues);

    historyArray.push(holdValues)

    res.send({
        answer: answer
        
    })
})

app.get('/display-history', (req,res) => {
    console.log('In app.get');

    res.send({historyOfArrays: historyArray});
    
})

function doMath(holdValues) {
    let sum;

    if (holdValues.operator === '+') {
        console.log('Addition');

        sum = holdValues.firstInput + holdValues.secondInput

        console.log('does it add',sum);

    } else if (holdValues.operator === '-') {
        console.log('Subtraction');

        sum = holdValues.firstInput - holdValues.secondInput

        console.log('does it subtraction',sum);

    } else if (holdValues.operator === '*') {
        console.log('Multiply');

        sum = holdValues.firstInput * holdValues.secondInput

        console.log('does it multiply',sum);

    } else if (holdValues.operator === '/'){

        console.log('Divide');

        sum = holdValues.firstInput / holdValues.secondInput

        console.log('does it divide',sum);

    }
       return sum; 
}
  

   

    /*
    $('#minusBtn').on('click',subtractValues)
       

    $('#timesBtn').on('click',multiplyValues)
        

    $('#divideBtn').on('click',divideValues)
        */




 // decided to make global variable so all functions can access it
// = button collects inputs and listens to see which button is clicked next which it will then call that function

// console log what operation is clicked

app.listen(5000, () => {
    console.log('Siri is Lisitening');
})