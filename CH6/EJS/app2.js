// write an express js application to perform the following task
// 1.Create an ejs file named contact.ejs that displays a heading,contact form, and contains a form with
// i.text input for name
// ii.email input for email
// iii.submit button
// 2.Render this ejs file on the contact route
// 3.Handle form submission using the post method on the submit route
// 4.After form submission display a message on the browser Thankyou {name}..We have recieved your mail. {mail}

express = require("express")
app=express()
app.set('view engine','ejs')
app.use(express.urlencoded())
app.get('/contact',(req,res)=>{
    res.render('contact')
})
app.post("/submit",(req,res)=>{
    nam=req.body.name
    email=req.body.email
    res.send(`Thankyou ${nam}...We have recieved your email ${email}`)
})
app.listen(3800)