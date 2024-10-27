const mongoose=require("mongoose");

const BlogSchema=new mongoose.Schema({
  heading:{
    type:String,
    required:true
  },
  desc:{
    type:String,
    required:true,
  },
  date:{
    type: Date,
    default:Date.now,
  },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  coverImage:{
    type:String,
    default:"https://th.bing.com/th/id/OIP.c5KXw-wPcnwyyBNayoXfFQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.6&pid=1.7"
  }

})

module.exports=mongoose.model("Blog",BlogSchema);
