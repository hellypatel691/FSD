// write express script to retrive data using post method and display data in json format
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname,{ index:'5.html'}));
app.post("/data", (req, res) => {
    const final = {
        n : req.body.name,
        c : req.body.city
    }
    res.json(final);
});
app.listen(3035);
