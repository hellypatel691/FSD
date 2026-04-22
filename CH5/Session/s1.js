// write express js using session to display how many times a user visited a website. If user is visiting the website for 1st timeyhen display
// "Welcome...Ty for visiting our website" else display the count how many times user visited the website for that particular session
sess=require("express-session")
const express = require("express");
const app = express();
app.use(sess({
    secret:"LJU123",
    saveUninitialized:true,
    resave:true
}))
app.get("/",(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send(`<h1 style="color:blue">
            You have visited page ${req.session.page_views}
            times</h1>`);
    }
    else{
        req.session.page_views=1
        res.send(`<h1 style="color:green">
           Welcome! Thankyou for visiting our website</h1>`);
    }
})
app.listen(3000)