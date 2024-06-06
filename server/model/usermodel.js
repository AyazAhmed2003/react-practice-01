import mongoose, { model } from "mongoose";


const userSchema=new mongoose.Schema({
name:{
    String
},
Email:{
    String
},
Password:{
    String
}
})

export default mongoose.model("user",userSchema)