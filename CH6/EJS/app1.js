express=require("express")
app=express()
app.set('view engine','ejs')
path=require("path")
app.set('views',path.join(__dirname))
app.get('/',(req,res)=>{
    res.render('fifth',{name:"RAM"})
})
app.listen(3800)