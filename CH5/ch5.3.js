// write express js to perform following task
// 1. create one html file which contains two number type field, one dropdown which contains options like select add,sub,mul,div and a submit button
// 2. the input field must contain the value > 0 else it will give a msg("Please enter the valid number"). Also user must select any of the formula 
// from the dropdown else give a msg("You have not selected any formula"). Msg will be displayed on calc page. 
// 3. If one formula is selected and numbers are entered then respective calculations will be performed on calc page. Use get method 

const express = require("express");
const app = express();
app.use(express.static(__dirname,{ index:'3.html'}));
app.get("/calc", function(req, res) {
    n1 = parseInt(req.query.num1);
    n2 = parseInt(req.query.num2);
    formula = req.query.formula;
if (n1 <= 0 || n2 <= 0) {
    return res.send("Please enter the valid number");
}
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
