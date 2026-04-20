// write an express script to define one json array of three objects having properties like comedians name and age. Sort this objectsnjects according to age
// if user request sorted names in url then all names along with age should be printed according to descending order of age. Also display this sorted values
// on sort page and display json object on home page.

const express = require("express")
app = express()
comedian = [{name:"LJU",age:1},{name:"LJU1",age:2},{name:"LJU2",age:3}]
app.get("/home",(req,res)=>{
    res.json(comedian)
})
app.get("/sort",(req,res)=>{
    res.set("content-type","text/html")
    data=comedian.sort((a,b)=>b.age-a.age)
    for(i of data){
        res.write("<center><h2>"+i.name+"="+i.age+"</h2></center>")
    }
    res.send()
})
app.listen(3025)