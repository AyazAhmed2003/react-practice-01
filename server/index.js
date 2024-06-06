import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"


const app=express();
app.use(cors());
dotenv.config();

const PORT=process.env.PORT
const URL =process.env.MONGOURL


mongoose.connect(URL).then(()=>{

console.log("connected")
app.listen(PORT,()=>console.log(`server is runing on port: ${PORT}`))



})
