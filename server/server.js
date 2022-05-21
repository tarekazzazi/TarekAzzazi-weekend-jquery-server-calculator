

const express = require('express')
const app = express();
const bodyParser = require("body-parser");

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


let totalValue = [];

app.post('/submit-for-calc', (req,res) => {

    let holdValues = req.body
    
    console.log('checking object',req.body); // = holdvalues 
    console.log('In server.js');
    
    totalValue.push(req.body)
    console.log('The total value is',totalValue);

    doMath(holdValues)
    res.sendStatus(201)
})


function doMath(holdValues) {
    if (holdValues.operator === '+') {
        console.log('Addition');
    } else if (holdValues.operator === '-') {
        console.log('Subtraction');
    } else if (holdValues.operator === '*') {
        console.log('Multiply');
    } else if (holdValues.operator === '/')
    console.log('divide');
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