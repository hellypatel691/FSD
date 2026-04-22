//  Write a script to meet following requirement using ExpressJS.
//  1. Create index.html which contains login page having fields like 
// Username, Password & Gender. Open it on localhost.
//  2. After clicking on submit button, it should jump to savesession 
// page. store username & gender in session.
//  3. After saving session, redirect to fetchsession page and read session 
// values. Put a logout link button here.
//  4. After clicking logout button, it jumps to deletesession page.
//  5. Destroy the session on this page & redirect to index.html page.

const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname,{ index:'s2.html'}));

app.post('/savesession', (req, res) => {
    username=req.body.username
    gender=req.body.gender
    req.session.username = username;
    req.session.gender = gender;

    res.redirect("/fetchsession")
});

app.get("/fetchsession",(req,res)=>{
    res.send(`
        <h1>Session Details</h1>
        <p>Username: ${req.session.username}</p>
        <p>Gender: ${req.session.gender}</p>
        <a href="/deletesession"><button>Logout</button></a>
    `);
})
app.get("/deletesession",(req,res)=>{
    req.session.destroy();
    res.redirect("/")
})

app.listen(3000);
