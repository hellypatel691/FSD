// write express js to print msg in next line splitting by dot, and use get method to submit the data. Html file contains a text area and a submit button
express=require("express")
app=express()
app.use(express.static(__dirname,{index:'2.html'}))
app.get("/mess",function(req,res){
    res.set("content-type","text/html")
    let msg = req.query.mess;
    let data = msg.split(".");
    for (let i = 0; i < data.length; i++) {
            res.write(data[i]+"<br>");
        }
    res.send();
})
app.listen(3035)