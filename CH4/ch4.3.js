const express = require("express")
app = express()
student = {u1:[{name:"LJU",id:1},{name:"LJU1",id:2},{name:"LJU2",id:3}]}
app.get("/student",(req,res)=>{
    res.set("content-type","text/html")
    res.write('<center><table border="1"><tr><th>Name</th><th>ID</th></tr>')
    for(i of student.u1){
        res.write("<tr><td>"+i.name+"</td>")
        res.write("<td>"+i.id+"</td></tr>")
    }
    res.write("</table></center>")
    res.send()
})
app.listen(3025)
