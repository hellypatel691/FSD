// develop a web application using express and ejs that allows a user to enter students name and marks through a form after submission the application 
// should display the entered details and determine the result if the marks are 9 or above. Show pass in green color o/w show fail in red color

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.render('form');
});
app.post('/result', (req, res) => {
    nam= req.body.name;
    marks=req.body.marks
    res.render('result');
});
app.listen(3000);
