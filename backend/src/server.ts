import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

import {dbConnect} from './configs/database.config'
import { sampleFoods, sampleTags, sample_users } from './data'

import foodRouter from './routers/food.router'
import userRouter from './routers/user.router'
dbConnect()
const app=express()

app.use(express.json())
app.use(cors({
    credentials:true,
    origin:['http://localhost:4200']
}))

app.use('/api/food',foodRouter)
app.use('/api/user',userRouter)

app.listen(5000,()=>{
    console.log("listening on port 5000 ");
})