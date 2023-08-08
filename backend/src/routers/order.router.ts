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
    const order=await getNewOrderForCurrentUser(req)
    console.log(order);
    
    if(order) res.send(order)
    else res.status(400).send();
})

orderRouter.post('/pay',async (req:any,res:any)=>{
    const {paymentId}=req.body
    const order=await getNewOrderForCurrentUser(req)
    if(!order)
    {
        res.status(400).send();
        return;
    }
    order.paymentId=paymentId
    order.status=OrderStatus.PAYED;
    await order.save();

    res.send(order._id)
})
orderRouter.get('/track/:id',async (req:any,res:any)=>{
const order=await OrderModel.findById(req.params.id)
res.send(order);
})

async function getNewOrderForCurrentUser(req:any){
    return await OrderModel.findOne({user:req.user.id,status:OrderStatus.NEW})
}
export default orderRouter