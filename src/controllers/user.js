
import { register,login,comment } from "../server/user";

export const Register= async (req,res)=>{
    const respones = await register(req.query)
    return res.status(200).json(respones)

}
export const Login = async (req,res)=>{
    const respones = await login(req.query)
    return res.status(200).json(respones)

}
export const Comment = async(req,res)=>{
    const respones = await comment(req.query)
    return res.status(200).json(respones)
}

export const getCurrent = async (req,res)=>{
    console.log('SS');
    const {email,role} =  req.user
    return res.status(200).json({
        name:"admin",
        email: email,
        role
        
    })
}
