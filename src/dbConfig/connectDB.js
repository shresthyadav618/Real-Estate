import mongoose from "mongoose";


export  async function connect(){
    try{
        console.log('trying to connect to the database')
        await mongoose.connect(process.env.MONGODB_URI);
    }
    catch(err){
        console.log('There was some error while connecting to the Mongoose server' , err);
    }
}