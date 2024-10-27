const jwt=require("jsonwebtoken")
require("dotenv").config()
exports.authMiddleWare=(req,res,next)=>{
  try{
    const token = req.body.token || req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");
    if(!token){
      return res.status(401).json({
        status:false,
        message:"Token missing"
      })
    }else{
      const secret=process.env.JWT_SECRET;
      // iska matlab token hai
      const verifyToken=jwt.verify(token,secret)
      req.user=verifyToken;
      // call the next middleware present
      next()
    }
  }catch(err){
    return res.status(404).json({
      status:false,
      message:"Error occured while validating the token"
    })
  }
}