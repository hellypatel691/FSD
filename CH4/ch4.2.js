const express = require("express")
app = express()
employee = {name:"Siya",age:20,role:"developer"}
app.get('/home',(req,res)=>{
    res.json(employee)
})
app.get('/about',(req,res)=>{
    res.write(employee.role+" "+ employee.name+" "+"is "+employee.age+" years old")
    res.send()
})
app.get('/contact',(req,res)=>{
    res.send(employee.name)
})
app.listen(6007)