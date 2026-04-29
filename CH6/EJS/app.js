express=require("express")
app=express()
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('fourth')
    // res.render('third')
    // res.render('second')
    // res.render('first',{name:"Raj"})
})
app.listen(3800)

// tags
// <% %>Scriptlet tag(control flow)
// <%= %>text only(Html escaped)
// <%# %>comment
// <%- %>Real Html(unescaped Html)
// <%% %> Print literal