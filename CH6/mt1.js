// write an express js script that accepts single file to be uploaded using the multer middleware and saves the file to the specific directory called lju
express=require("express")
app=express()
multer=require("multer")
app.use(express.static(__dirname,{index:'mt1.html'}))
store=multer.diskStorage({
    destination:"LJU",filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
var upload=multer({storage:store})
app.post("/uploadfile",upload.single("mypic"),(req,res)=>{
    const file=req.file
    if(file){
        res.send("<h1>File "+file.originalname+" has been uploaded "+file.destination+" folder</h1>")
    }
})
app.listen(6168) 