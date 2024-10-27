const Blog=require("../models/Blog")
const User=require("../models/User")
exports.createBlog = async(req,res) => {
  try{
    const id=req.user.id;
    // console.log(req.user)
    const {heading,desc,date,coverImage}=req.body
    if(!heading || !desc){
      return res.status(403).json({
        status:false,
        message:"Title and description are compulsory"
      })
    }
    // create the blog
    const newBlog=await Blog.create({
      heading,desc,
      date:date|| new Date(),
      author:id,
      coverImage
    })

    // add this blog to the user schema also 
    await User.findByIdAndUpdate({
      _id:id,
    },
  {
    $push:{
      blogs:newBlog._id
    }
  },
  {new:true}
  )

    res.status(200).json({
      status:true,
      message:"Blog Created Successfully"
    })
  }catch(err){
    console.log(err);
    res.status(404).json({
      status:false,
      message:"Error occurred"
    })   
  }
}


exports.getMyBlogs=async(req,res)=>{
  try{
    const id=req.user.id;
    const myBlogs=await User.find({_id:id}).populate("blogs").exec();
    // console.log(allBlogs);
    return res.status(200).json({
      status:true,
      data:myBlogs,
      message:"My blogs fetched"
    })
  }catch(err){
    console.log(err)
    return res.status(404).json({
      status:false,
      message:"Error occurred"
    })
  }
}

exports.getAllBlogs=async(req,res)=>{
  try{
    const allBlogs=await Blog.find({}).populate("author").exec();
    // console.log(allBlogs);
    return res.status(200).json({
      status:true,
      data:allBlogs,
      message:"All blogs fetched"
    })
  }catch(err){
    return res.status(404).json({
      status:false,
      message:"Error occurred"
    })
  }
}

exports.deleteBlog=async(req,res)=>{

  try{
    // console.log(req)
    const {userId,blogId}=req.body;
    // const blogId=req.params.id;
    

    const blogToDelete=await Blog.findByIdAndDelete(blogId);

    if(!blogToDelete){
      return res.status(404).json({
        status:false,
        message:"Blog not found"
      })
    }
    await User.findByIdAndUpdate(userId,{
      $pull:{
        blogs:blogId,
      }
    });

    return res.status(200).json({
      status:true,
      data:{userId,blogId},
      message:"Blog deleted and User blogs list updated"
    })

  }catch(err){
console.log(err);
return res.status(404).json({
  status:false,
  message:"Error occured",
  
})
  }

}
