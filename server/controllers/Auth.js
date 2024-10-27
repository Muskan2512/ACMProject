// controllers uses models
const User=require("../models/User")
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken")
require("dotenv").config()

// need to signup to create an account.
exports.signup = async(req,res) => {
  try{
    // console.log("request ki body is:",req.body);
    const {firstName,lastName,email,password,confirmPassword}=req.body;
  //  console.log(firstName,lastName,email,password,confirmPassword);
    // if any of the data is missing -error
    if(!firstName || !lastName || !email || !password || !confirmPassword){
      return res.status(403).send({
        success:false,
        message:"All Fields are compulsory"
      })
    }

    // check if password and confirm password matches or not
    if(password!=confirmPassword){
      return res.status(400).send({
        success:false,
        message:"Password and confirm Password does not match"
      })
    }

    // check if the user already exist i.e an account is already there with this email id
    // db call should always be preceded with await 
    const existUser=await User.findOne({email});
    // if user exist then cannot create account.
    if(existUser){
      return res.status(400).send({
        status:false,
        message:"User already exist"
      })
    } 

    // now hash the password using bcrypt
    // here the random salt is 10
    const hashedPassword=await bcrypt.hash(password,10);

    // create the entry in the db
    const userData=new User({
      firstName,
      lastName,
      email,
      password:hashedPassword,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
    })
    await userData.save();

    return res.status(200).send({
      success:true,
      message:"Account created successfully"
    })

  }catch(e){
    console.log("error occurred:",e);
    res.status(404).send({
      success:false,
      message:e
    })
  }
}
exports.login=async(req,res)=>{
  try{
    const {email,password}=req.body;
    if(!email || !password){
      return res.status(400).json({
        status:false,
        message:"All fields are must"
      })
    }
    // check if the user exist
    const existUser= await User.findOne({email});
    if(!existUser){
      return res.status(400).send({
        status:false,
        message:"User not registered yet"
      })
    }

    // now check if the given password is correct or not
    if(await bcrypt.compare(password,existUser.password)){
      // server will generate the token
      const secret=process.env.JWT_SECRET
      // const token = jwt.sign(payload,secret)
      const token=jwt.sign({
        firstName:existUser.firstName,
        lastName:existUser.lastName,
        email:existUser.email,
        id:existUser._id,
      },secret);

      // now this token is to be sent
      // the name of the cookie is token
      return res.cookie("token", token, {
        httpOnly: true, // Prevents client-side JavaScript from accessing the token
        secure: false, // Set this to true if your site is served over HTTPS
        sameSite: 'None'
      }).status(200).json({
        success: true,
        token,
        existUser,
        message: "User Login successful"
      });     
    }else{
      return res.status(401).json({
        success:false,
        message:"Password incorrect",
      })
    }
  }catch(err){
    console.log(err);
    return res.status(404).json({
      success:false,
      message:"Error occurred while login"
    })
  }
}
