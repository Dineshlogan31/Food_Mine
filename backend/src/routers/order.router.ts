import {Router} from 'express'

import { OrderModel } from '../models/order.model';
import { OrderStatus } from '../constants/order_status';
import auth from '../middleware/auth.middleware'

const orderRouter=Router();

orderRouter.use(auth)

orderRouter.post('/create',async(req:any,res:any)=>{
    const OrderRequest=req.body
    if(OrderRequest.items.length <= 0)
    {
        res.status(400).send('Cart is Empty')
        return;
    }

    await OrderModel.deleteOne({
        user:req.user.id,
        status:OrderStatus.NEW
    })

    const newOrder=new OrderModel({...OrderRequest,user:req.user.id})
    await newOrder.save();
    res.send(newOrder)
})

orderRouter.get('/newOrderForCurrentUser',async(req:any,res:any)=>{
    const order=await OrderModel.findOne({user:req.user.id,status:OrderStatus.NEW})
    if(order) res.send(order)
    else res.status(400).send();
})
export default orderRouter