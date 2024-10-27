
const express=require("express")
const router=express.Router();

const {createBlog,getAllBlogs,getMyBlogs,deleteBlog}=require("../controllers/Post")
const {authMiddleWare}=require("../middlewares/authMiddleware")

router.post("/create",authMiddleWare,createBlog);
router.get("/allblogs",getAllBlogs);
router.get("/myblogs",authMiddleWare,getMyBlogs);
router.delete("/delete",authMiddleWare,deleteBlog);


module.exports=router;

