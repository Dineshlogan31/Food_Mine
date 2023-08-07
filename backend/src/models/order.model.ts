import {Date, model,Schema, Types} from 'mongoose'
import { Food, foodSchema } from './food.model'
import { OrderStatus } from '../constants/order_status'



export interface orderItem{
    food:Food
    price:number,
    quantity:number
}

export const orderItemSchema=new Schema<orderItem>({
    food:{type:foodSchema,required:true},
    price:{type:Number,required:true},
    quantity:{type:Number,required:true}
})

export interface Order{
    id:string
    items:orderItem[]
    name:string
    address:string
    totalPrice:number
    status:OrderStatus
    createdAt:string
    paymentId:string
    user:Types.ObjectId
    updatedAt:Date

}

export const orderSchema=new Schema<Order>({
    name:{type:String,required:true},
    address:{type:String,required:true},
    paymentId:{type:String},
    totalPrice:{type:Number,required:true},
    items:{type:[orderItemSchema],required:true},
    status:{type:String,default:OrderStatus.NEW},
    user:{type:Schema.Types.ObjectId,required:true},
    
},{
    timestamps:true,
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    }
})

export const OrderModel=model('order',orderSchema)