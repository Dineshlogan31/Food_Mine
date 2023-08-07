import { CartItems } from "./CartItems"

export class Order{
    id!:string
    items!:CartItems[]
    name!:string
    address!:string
    totalPrice!:number
    status!:string
    createdAt!:string
    paymentId!:string
}