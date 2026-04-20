// write an express js script to check the cookies of submitted values and perform following task
// 1. Create an html file which contains a form with field fname,lname,pswd and submit button
// 2. Once form submitted store all this values to the respective cookies on next page
// 3. Then redirect user to admin page and clear cookie set for the last name. Display remaining set of the cookie on this page using post method

cp=require('cookie-parser')
const express = require("express")
path = require('path')
app = express()
app.use(cp())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname,{ index:'c2.html'}));
   
app.post('/submit', (req, res) => {
    const { fname, lname, pswd } = req.body;
    res.cookie('fname', fname);
    res.cookie('lname', lname);
    res.cookie('pswd', pswd);

    res.redirect('/admin');
});

app.get('/admin', (req, res) => {
    res.clearCookie('lname');
    res.send(req.cookies.lname+"<br>"+req.cookies.fname+"<br>"+req.cookies.pswd)
})

app.listen(5001)