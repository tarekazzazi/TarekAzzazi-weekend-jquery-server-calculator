

const express = require('express')
const app = express();
const bodyParser = require("body-parser");

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.listen(5000, () => {
    console.log('Siri is Lisitening');
})