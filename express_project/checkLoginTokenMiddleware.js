let checkLoginToken = (req, res, next) => {
    if(req.query.token == "" || req.query.token == undefined){
        return res.send({
            status: false,
            message: "Re-Login Again!"
        });
    }else if(process.env.TEMPTOKKEN !== req.query.token){
        return res.send({
            status: false,
            message: "Login in Correct Way"
        });
    }else{
        next();
    }
};

module.exports={checkLoginToken}