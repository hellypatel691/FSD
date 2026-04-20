express=require("express")
app=express()

app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send(`<h1> User Form </h1> <form action="/user" method="POST">
         Name : <input type="text" name="n1"> <br>
         age :  <input type="number" name="m1"> <br> 
         city <input type="text" name="m2"> <br> 
         marks <input type="number" name="m3"> <br> 
         course : <input type="number" name="m4"> 
         <button type="submit">calculate</button> 
         </form>`)
})
app.post('/user',(req,res)=>{
    n = req.body.n1
    m1 = req.body.m1
    m2 = req.body.m2
    m3 = req.body.m3
    m4 = req.body.m4
   
    res.send('<p>name : '+n+'<br> age : '+m1+'<br> city : '+m2+'<br> marks : '+m3+'<br>m course'+m4+' </p>')})
app.listen(5000)