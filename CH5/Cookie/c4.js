// Write express js script to perform tasks as asked below. 
// 1. Create one HTML file which contains two number type input 
// fields, one dropdown which contains options to select like (addition, 
// subtraction, multiplication, division) and one submit button. 
// 2. The input fields must contain the value greater than 0 else it will 
// give a message “Please enter the valid number”. Also, user must 
// select any type of formula from the dropdown else give a message 
// “You have not selected any formula”. (Message will be displayed on 
// “/calc” page.) 
// 3. If one formula is selected and numbers are entered then Both 
// numbers should be stored in cookies which expires in 50 seconds. 
// Respective calculations will be performed on the page “/calc”.


const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname,{ index:'c4.html'}));
app.get("/calc", function(req, res) {
    n1 = parseInt(req.query.num1);
    n2 = parseInt(req.query.num2);
    formula = req.query.formula;
if (n1 <= 0 || n2 <= 0) {
    return res.send("Please enter the valid number");
}

res.cookie('num1', n1, { maxAge: 50000 });
res.cookie('num2', n2, { maxAge: 50000 });

let result;
if (formula === "add") result = n1 + n2;
else if (formula === "sub") result = n1 - n2;
else if (formula === "mul") result = n1 * n2;
else if (formula === "div") result = n1 / n2;
else{
    return res.send("You have not selected any formula");
}

res.send(`The result of ${formula} is: ${result}`);
});

app.listen(3035);
