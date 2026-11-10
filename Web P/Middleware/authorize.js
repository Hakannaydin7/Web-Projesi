exports.isAuth=(req,res,next)=>
    {
        const isauthcontroller = true;
        if (!isauthcontroller) res.send("Yetkisiz erişim");
        else next()
}