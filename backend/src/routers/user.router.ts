import {Router} from 'express'
import { sampleFoods, sampleTags, sample_users } from '../data'
import jwt from 'jsonwebtoken'
import { UserModel } from '../models/user.model'
import { FoodModel } from '../models/food.model'

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

const generateWebToken=(user:any)=>{
   const token=jwt.sign({
    id:user.id,email:user.email,isAdmin:user.isAdmin
   },'MyNameIsDinesh',{expiresIn:'2d'})

   user.token=token

   return user
}

export default router