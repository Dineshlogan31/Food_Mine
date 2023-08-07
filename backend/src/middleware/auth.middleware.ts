import { verify } from "jsonwebtoken"

export default (req:any,res:any,next:any)=>{

    const token=req.headers.access_token as string
    if(!token) return res.status(401).send()


    try {
        const decodeUser=verify(token,process.env.JWT_SECRET_KEY!)
        req.user=decodeUser
    } catch (error) {
        res.status(401).send()
    }

    return next();
}