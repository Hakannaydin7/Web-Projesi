const {logData} = require("../Model/log");
exports.homePage=(req,res,next)=>
    {
        res.render("../Views/AdminHomePage");
}