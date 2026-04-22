const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'mySecretKey',
    resave: false,
    saveUninitialized: false
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname,{ index:'s3.html'}));

app.post("/login",(req,res,next)=>{
    username=req.body.username
    email=req.body.email
    subscribe=req.body.subscribe
    req.session.username = username;
    req.session.gender = email;
    req.session.subscribe = subscribe;
    res.type("text/html")
    res.write(`
        
        <p>Welcome! ${req.session.username}</p>
        <p>Your email id is  ${req.session.gender}</p>
    `)
    
    next()
    })
app.post("/login",(req,res)=>{
    if(req.session.subscribe=='on'){
        res.send(`Thankyou for subscription
            <a href="/"><button>Logout</button></a>`);
    }
    else{
        
        res.send(`You can subscribe for daily updates
            <a href="/"><button>Subscribe</button></a>`);
    }
})
app.listen(3060)