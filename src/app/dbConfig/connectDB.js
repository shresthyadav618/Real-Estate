import mongoose from "mongoose";


export default async function connect(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
    }
    catch(err){
        console.log('There was some error while connecting to the Mongoose server' , err);
    }
}