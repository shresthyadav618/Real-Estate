

import { PropertyModel } from "@/models/property";
import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/connectDB";

await connect();
export const dynamic = 'force-dynamic';
export async function POST(NextRequest){
try{

const body = await NextRequest.json();
const _id = body;
// console.log('the id received in edit api is : ',_id);
const pp = await PropertyModel.findById(_id);
// console.log('found the property',pp);
if(pp){
    return NextResponse.json({
        status : 200,
        propertyDetail : pp
    })
}
return NextResponse.json({
    status : 400,
    err : 'Not able to find the property with given id',
})

}catch(err){
    // console.log('the error is  : ',err);
    return NextResponse.json({
        status : 500,
        err
    })
}

}