import {Router} from 'express'
import { sampleFoods, sampleTags } from '../data'
import { FoodModel } from '../models/food.model'

const router=Router()

router.get('/',async (req,res)=>{
//  const foodCounts= await FoodModel.countDocuments();
//  if(foodCounts > 0)
//  {
//     res.send('Seed is already done')
//     return
//  }
//  const foods=await FoodModel.create(sampleFoods)
//     res.send("Seed is done!")

const foods=await FoodModel.find({})
res.send(foods)
})

router.get('/search/:searchTerm',async (req,res)=>{
    const searchRegExp=new RegExp(req.params.searchTerm,'i')
    const foods=await FoodModel.find({name:{$regex:searchRegExp}})
    res.send(foods)
})

router.get('/tag',async (req,res)=>{
    const tags=await FoodModel.aggregate([
        {
            $unwind:'$tags'
        },
        {
            $group:{
                _id:'$tags',
                count:{$sum:1}
            }
        },
        {
            $project:{
                _id:0,
                name:'$_id',
                count:'$count'
            }
        }

    ]).sort({count:-1})
    const all={
        name:'All',
        count:await FoodModel.countDocuments()
    }
    tags.unshift(all)
   res.send(tags)
})

router.get('/tag/:tagName',async (req,res)=>{
  const tagName=req.params.tagName
const foods= await FoodModel.find({tags:tagName})
res.send(foods)
})

router.get('/:foodId',async (req,res)=>{
    const foodId=req.params.foodId
    const food=await FoodModel.findById(foodId)
    res.send(food)
})

export default router
