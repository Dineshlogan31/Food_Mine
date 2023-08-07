import {Router} from 'express'
import { sampleFoods, sampleTags, sample_users } from '../data'
import jwt from 'jsonwebtoken'
import { User, UserModel } from '../models/user.model'
import { FoodModel } from '../models/food.model'
import bcrypt from 'bcrypt'

const router=Router()

router.get('/foodUsers',async (req,res)=>{
//      const userCount= await UserModel.countDocuments();
//  if(userCount > 0)
//  {
//     res.send('Seed is already done')
//     return;
//  }
//  const foods=await UserModel.create(sample_users)
//     res.send("Seed is done!")
const users=await UserModel.find({})
res.send(users)
})

router.post('/login',async(req,res)=>{
    const {email,password}=req.body
    const user=await UserModel.findOne({email,password})
    if(user)
    {
        res.send(generateWebToken(user))
    }
    else{
        res.status(400).send("user email and password is invalid")
    }
})

router.post('/register',async (req,res)=>{
    const {email,password,name,address}=req.body
    console.log(email,password,name,address);
    
    const user=await UserModel.findOne({email})
    if(user)
    {
        res.status(400).send("Email is already exit,try with new one")
        return;
    }
    else{
        const encryptedPassword=await bcrypt.hash(password,10)
        const newUser:User={
            name,
            email:email.toLowerCase(),
            password:encryptedPassword,
            address,
            isAdmin:false,
            token:''
        }
        const user=await UserModel.create(newUser)
        res.send(generateWebToken(user))
    }
})
const generateWebToken=(user:any)=>{
   const token=jwt.sign({
    id:user.id,email:user.email,isAdmin:user.isAdmin
   },process.env.JWT_SECRET_KEY!,{expiresIn:'2d'})

   user.token=token

   return user
}

export default router