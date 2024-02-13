


import { PropertyModel } from "@/models/property";
import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/connectDB";
await connect();
export async function GET(NextRequest){

try{
await connect();
const allProperties = await PropertyModel.find({});    
if(allProperties){
    // console.log('got all the properties',allProperties);
    return NextResponse.json({
        status : 200,
        allProperties
    })
}else{
    console.log('No product is found');
    return NextResponse.json({
        status : 200,
        data : 'No Products found'
    })
}

}catch(err){
    console.log('THERE WAS SOME ERROR WHILE GETTING ALL THE PROPERTIES',err);
    return NextResponse.json({
        status : 500,
        error : err
    })
}

}