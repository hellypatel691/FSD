// write an express js script that accpts multiple files maximum no 5 to be uploaded using multer middleware and saves the file to the specific directory 
// called multiple

express = require("express")
app = express()
multer = require("multer")
app.use(express.static(__dirname, { index: 'mt2.html' }))
store = multer.diskStorage({
    destination: "multiple",
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
var upload = multer({ storage: store})
app.post("/uploadmultiple", upload.array("mypics", 5), (req, res) => {
    const files = req.files
    let result = "<h1>Files Uploaded:</h1><ul>"
    
    if (files && files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            result += "<li>" + files[i].originalname + " uploaded to " + files[i].destination + "</li>"
        }
        result += "</ul>"
        res.send(result)
    }
})
app.listen(6168)
