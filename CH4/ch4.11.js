const express = require("express")
const app = express()
const addName = (req,res,next)=>{
    req.name="Siya"
    console.log("Name added")
    next()
}

const addCollege = (req,res,next)=>{
    req.college="LJU"
    console.log("College added")
    next()
}

const addMarks = (req,res,next)=>{
    req.total=50+40
    console.log("Marks added")
    next()
}

app.get("/student",addName,addCollege,addMarks,(req,res)=>{
    res.send("Name: "+req.name+" College: "+req.college+" Marks: "+req.total)
})

app.listen(2002,()=>{
    console.log("Running");
    
})