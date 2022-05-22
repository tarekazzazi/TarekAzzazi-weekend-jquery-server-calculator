

const express = require('express')
const app = express();
const bodyParser = require("body-parser");

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


let historyArray = [];

// the post submit-for-calc comes in here
app.post('/submit-for-calc', (req,res) => {

    // I decided to make my rec.body equal holdValues for less confusion
    let holdValues = req.body

        // when I send the object holdValues over for some reason it became a string again
        // so I decided to convert the string to a number on the server side instead by using the word Number()
        holdValues.firstInput = Number(holdValues.firstInput)
        holdValues.secondInput = Number(holdValues.secondInput)
        
        // More testing with console.log
        // checks to see if I get the object inputs as numbers not strings
        console.log('checking object',req.body); // = holdvalues 
        console.log('In server.js');
        
        // checks tp see if my history shows up
        console.log('The total value is', historyArray);

    // sets the variable answer to the return of the function doMath which has a parameter of the holdValues variable
    let answer = doMath(holdValues)

        console.log('before', holdValues);

        holdValues.answer = answer
    
        console.log('after', holdValues);

        historyArray.push(holdValues)

        res.send({
            answer: answer
        })
})
// this is the /display-history I'm requesting be sent back
app.get('/display-history', (req,res) => {

    console.log('In app.get');

    // sends history of arrays back as a object
    res.send({historyOfArrays: historyArray});
    
})

function doMath(holdValues) {
    // sets sum to undefined
    let sum;
    // checks to see if the operator sent over from client.js matches
    // if the operator does match it makes sum = that kind of math
    if (holdValues.operator === '+') {
        // console log to see what math its doing
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
  


app.listen(5000, () => {
    console.log('Siri is Lisitening');
})