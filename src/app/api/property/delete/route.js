import { PropertyModel } from "@/models/property";
import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/connectDB";
await connect();
export async function POST(NextRequest){
try{

const resBody = await NextRequest.json();

console.log('the resBody is ', resBody);
const _id = resBody;
const DeleteProperty = await PropertyModel.findByIdAndDelete(_id);

return NextResponse.json({
    status : 200,
    DeleteProperty
})

}catch(err){
    console.log('got an error',err);
    return NextResponse.json({
        status : 404,
        err
    })
}
}