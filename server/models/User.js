const mongoose=require("mongoose");


const UserSchema=new mongoose.Schema({
  firstName:{
    type:String,
    required:true,
  },
  lastName:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
  image:String,
  blogs:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Blog"
    }
  ]
})

const User=mongoose.model("User",UserSchema);
module.exports=User