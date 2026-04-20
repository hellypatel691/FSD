// create a web server that accepts a get request with a dynamic user id in the url also accept additional data name and age using query parameters
// Extracts id from route parameters name and age from query string. Returns a json response containing all recieved data
 const express = require("express")
 const app = express()
 app.get("/user/:id",(req,res)=>{
    userid=req.params.id;
    a=req.query.name;
    age=req.query.age;
    res.json({
        id:userid,
        a1:a,
        age1:age
    })
 })
 app.listen(3030,()=>{
    console.log("Running");
 })