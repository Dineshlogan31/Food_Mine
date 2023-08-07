import {Schema,model} from 'mongoose'

export interface User{
    name:string
    email:string
    password:string
    address:string
    isAdmin:boolean
    token:string
}

export const userSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    address:{type:String,required:true},
    isAdmin:{type:Boolean,required:true,default:false},
    token:{type:String}
},{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    },
    timestamps:true,
    versionKey:'UserVersion',
    collection:'FoodUsers',
    validateBeforeSave:true
})

export const UserModel=model<User>('FoodUsers',userSchema)


