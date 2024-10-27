const mongoose=require("mongoose");
require("dotenv").config()
async function main(){
  await mongoose.connect(process.env.DB_URL)
}
main().then(()=>{
  console.log("DB connected successfully");
}).catch((err)=>console.log(err))

module.exports=main();
