const express = require('express');
const app = express();
const path = require("path");
const { logData } = require('./Model/log');
app.set("view engine","ejs");
const adminrouter = require("./Routers/adminrouter");
const userrouter = require("./Routers/userrouter");

app.use("/static",express.static(path.join(__dirname,"public")));

app.use((req,res,next)=>{
    logrecord = [
        url = req.url,
        date = new Date().toLocaleDateString(),
        time = new Date().toLocaleTimeString()
    ]
    logData.push(logrecord);
    next();
});

app.use("/admin",adminrouter);
app.use("/user",userrouter);

app.use((req,res,next)=>
    {
        res.send("Sayfa sikildi!!!!!");
        next();
});

app.use((err,req,res,next)=>
    {
        res.status(404).send("Hata:" + err);
});


app.listen(3000, () =>
    {
        console.log("Sunucu çalıştı");
    }
);