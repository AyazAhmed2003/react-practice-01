import user from "../model/usermodel"
export const create = async(req,res)=>{
    const userdata= new user(req.body)

}