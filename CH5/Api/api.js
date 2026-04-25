// Write an express js code in which rest api is created for json object named data...which contains names,id,branch,city and contact properties
// 1. On "/api" page it should display all the contents
// 2. Upon passing id on the browser url it should display the content having that id(localhost:7899/api/101)
// 3. Upon passing branch on the browser url...it should display the content having that branch(localhost:7899/api/branch/it)
expr=require("express")
router=expr.Router()
data=[{id:101,naam:"ABC",branch:"CSE",contact:9898989898,city:"surat"},
    {id:102,naam:"BCD",branch:"CE",contact:9898989898,city:"ahmedabad"},
    {id:103,naam:"XYZ",branch:"CSE",contact:9898989898,city:"rajkot"},
    {id:104,naam:"PQR",branch:"IT",contact:9898989898,city:"mumbai"},
    {id:105,naam:"ABC",branch:"CSE",contact:9898989898,city:"jaipur"},
    {id:106,naam:"ABC",branch:"IT",contact:9898989898,city:"banglore"}
]
router.get("/",(req,res)=>{
    res.set("content-type","text/html")
    for(i of data){
        res.write("<h3> ID: "+i.id+" Name: "+i.naam+" Branch: "+i.branch+" Contact"+i.contact+" City: "+i.city+"</h3>")
    }
    res.send()
})
router.get("/:id",(req,res)=>{
    var current_data=data.filter((i1)=>i1.id==req.params.id)
    if(current_data.length>0){
        res.send(current_data)
    }
    else{
        res.send("Not found")
    }
})
router.get("/branch/:branch",(req,res)=>{
    var cd=data.filter((b)=>b.branch.toLowerCase()==req.params.branch.toLowerCase())
    if(cd.length>0){
        res.send(cd)
    }
    else{
        res.send("Not found")
    }
})
router.get("/city/:city",(req,res)=>{
    var cd=data.filter((b)=>b.city.toLowerCase()==req.params.city.toLowerCase())
    if(cd.length>0){
        res.send(cd)
    }
    else{
        res.send("Not found")
    }
})
module.exports=router
