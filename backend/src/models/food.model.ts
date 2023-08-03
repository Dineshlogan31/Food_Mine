import {Schema,model} from 'mongoose'
export interface Food{
    id:string
    name:string
    price:number
    favorite:boolean
    tags?:string[]
    imageUrl:string
    origins:string[]
    cookTime:string
}

export const foodSchema=new Schema<Food>({
    name:{type:String,required:true},
    price:{type:Number,required:true},
    favorite:{type:Boolean,required:true},
    tags:{type:[String],required:true},
    imageUrl:{type:String,required:true},
    origins:{type:[String],required:true},
    cookTime:{type:String,required:true},
   
},{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    },
    timestamps:true,
    validateBeforeSave:true,
    collection:'Foods',
    versionKey:'foodVersion'

})

export const FoodModel=model<Food>('Foods',foodSchema)
