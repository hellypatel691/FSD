
// build an express js app with html form with user name and submit button. use post method. 
// on visting / show the form .
// On submiting to login page if username is admin display welcome admin else show please login with admin name and a link back to the form 

const express = require("express");
const app = express();

// Middleware to parse POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname,{ index:'4.html'}));

// 2. Handle the POST request to "/login"
app.post("/login", (req, res) => {
    const user = req.body.username;
    if (user === "admin") {
        res.send(`<h1>Welcome admin</h1>`);
    } else {
        res.send(`
            <p>Please login with admin name</p>
            <a href="/">Back to Form</a>
        `);
    }
});

app.listen(3035)
