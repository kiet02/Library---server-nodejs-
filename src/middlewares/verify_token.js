import  Jwt  from "jsonwebtoken"
import { badRequest } from "./handle_error"
 const vetifytoken = (req,res,next)=>{
        
    const token = req.headers.authorization
    if(!token) return badRequest('Require authrization',res)
    
    Jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
            if(err) return badRequest('Access token fail',res)
            req.user = user
            next()
    })
}

export default vetifytoken