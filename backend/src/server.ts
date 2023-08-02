import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { sampleFoods, sampleTags, sample_users } from './data'

const app=express()

app.use(express.json())
app.use(cors({
    credentials:true,
    origin:['http://localhost:4200']
}))

app.get('/api/foods',(req,res)=>{
    res.send(sampleFoods)
})

app.get('/api/foods/search/:searchTerm',(req,res)=>{
    const searchItem=req.params.searchTerm
    const foods=sampleFoods.filter(food=>food.name.toLowerCase().includes(searchItem.toLowerCase()))
    res.send(foods)
})

app.get('/api/foods/tags',(req,res)=>{
    res.send(sampleTags)
})

app.get('/api/foods/tag/:tagName',(req,res)=>{
  const tagName=req.params.tagName
const foods= sampleTags.filter(food=>food.tags?.includes(tagName))
res.send(foods)
})

app.get('/api/foods/:foodId',(req,res)=>{
    const foodId=req.params.foodId
    const food=sampleFoods.find(food=>food.id === foodId)
    res.send(food)
})

app.post('/api/user/login',(req,res)=>{
    const {email,password}=req.body
    const user=sample_users.find(user=>user.email === email && user.password === password)

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
    email:user.email,isAdmin:user.isAdmin
   },'MyNameIsDinesh',{expiresIn:'2d'})

   user.token=token

   return user
}

app.listen(5000,()=>{
    console.log("listening on port 5000 ");
})