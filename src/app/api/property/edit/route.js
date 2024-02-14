
import { PropertyModel } from "@/models/property";
import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/connectDB";
await connect();
export const dynamic = 'force-dynamic';
export async function PUT(NextRequest){

try{
    const resBody = await NextRequest.json();
    console.log('the body is : ',resBody);
    const {name,description,price,images,floorPLansImages,amenities,propertyCategory,subCategory,area,location,details} = resBody;
    const {_id} = resBody;
    console.log('the id is : ',_id);
    // const updatedProperty = await PropertyModel.findByIdAndUpdate(_id);
    const prevProperty = await PropertyModel.findById(_id);
    if(prevProperty){
        const updatedProperty = await prevProperty.updateOne({
            name , description,price,images,floorPLansImages,amenities,propertyCategory,subCategory,area,location,details
        });
        if(updatedProperty){
            return NextResponse.json({
                status : 200,
                updatedProperty
            })
        }else{
            return NextResponse.json({
                status : 404,
                error : 'Unable to updated the property'
            })
        }
        
    }else{
        return NextResponse.json({
            status : 404,
            error : 'Not able to find property with given id'
        })
    }
   

}catch(err){
    return NextResponse.json({
        status : 500,
        err
    })
}

}