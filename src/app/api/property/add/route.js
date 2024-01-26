
// import { PropertyModel } from "@/models/property";
import { PropertyModel } from "@/models/property";
import { NextResponse } from "next/server";
import { connect } from "../../../../dbConfig/connectDB";
await connect();
export async function POST(NextRequest){
console.log('INSIDE THE POST REQUEST TO ADD PROPERTY');
    try{

        const body = await NextRequest.json();
        console.log('The body is : ',body);
        const {name,description,images,floorPlansImages,amenities,propertyCategory,subCategory,details,price} = body;
        console.log(name,description,images,floorPlansImages,amenities,propertyCategory,subCategory,details,price);
        const newProperty = new PropertyModel({name,description,images,floorPlansImages,amenities,propertyCategory,subCategory,details,price});
        const savedNew = await newProperty.save()

        console.log(savedNew);
        return NextResponse.json({
            status : 200,
            savedNew
        })
        
    }catch(err){
        console.log('Some Error Occured',err);
        return NextResponse.json({
            status : 409,
            error : err
        })
    }

}