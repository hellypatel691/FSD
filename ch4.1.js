const express = require("express")
app = express()
student = {name:"LJU",age:18}
// M1
// app.get("/",(req,res)=>{
//     res.write(JSON.stringify(student))
//     res.send()
// })
// M2
// app.get("/",(req,res)=>{
//     res.send(student)
// })
// M3
app.get("/",(req,res)=>{
    res.json(student)
})
app.listen(6007)