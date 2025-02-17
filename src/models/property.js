import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: String,
    images: [String], // Assuming URLs
    floorPlansImages: [String], // Assuming URLs
    amenities: String,
    propertyCategory: {
        type: String,
        required: true
    },
    subCategory: {
        type: String,
        required: true
    },
    area : {
        type : String,
        required : true
    },
    location  :{
        type : String,
        required : true
    },
    details: Object // Consider a more specific schema if needed.
},{
    timestamps : true
});

const PropertyModel = mongoose.models.propertys || mongoose.model('propertys', PropertySchema);

export { PropertyModel };



// import mongoose from "mongoose";
// import { connect } from "../dbConfig/connectDB";
// await connect();

// export const PropertySchema = mongoose.Schema = (
//     {
//         // name,description,images,floorPlansImages,amenities,propertyCategory,subCategory,details,price
//         name : { //done
//             type : String,
//             // required:  true
//         },
//         description : { //done
//             type  :String
//         } , 
//         price : { //done
//             type : String
//         },
//         images : { //done
//             type : Object,
//             // required  : true // the front cover images of the property
//         },
//         floorPlansImages : { //done
//             type : Object,
//             // required : true // the floor plans images of the property
//         },
//         amenities :  {
//             type : String,
//             // required : true // the amenities of the property eg swimming etc
//         },
//         propertyCategory : { //done
//             type : String,
//             // required: true 
//             // this will be commercial , residential , resale, rental or plot categories
//         },
//         subCategory : { //done
//             type : String,
//             // required : true 
//             //plots will be singular 
//             // residential ->  newLaunches , underConstruction or ReadyToMove
//             // commercial -> newLaunches, underConstruction or ReadyToMove
//             // plots - > noSubCategory
//             // resale and rental -> commercial for resale or rental OR residential for resale or rental
//         },
//         details: { 
//             type: Object,
//             // required: true,
//           },
//     }
// );

// const PropertyModel =  mongoose.models.propertys || mongoose.model('propertys',PropertySchema);
// export { PropertyModel };


// // THIS IS FOR RESIDENTIAL 
// // BUILDER:
// // ALPHA CROP
// // PROJECT TYPE:
// // RESIDENTIAL
// // SUB TYPE:
// // APARTMENT
// // PROJECT SIZE:
// // 12 ACRES
// // UNIT SIZE:
// // 1270 - 3434 SQ.FT
// // PRICE:
// // 1.15 - 3.10 CR.
// // PRICE PER SQ. FEET:
// // PRICE ON CALL
// // STATUS:
// // READY TO MOVE
// // TOTAL FLOORS:
// // 20
