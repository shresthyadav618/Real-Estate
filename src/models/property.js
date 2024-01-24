import mongoose from "mongoose";


const PropertySchema = mongoose.Schema = (
    {
        // Number Format 
        // bedrooms : {
        //     type  : number
        // } , 
        // bathrooms : {
        //     type : number,
        // },
        // year_built : {
        //     type : number,
        // } , 
        // saleable_area : {
        //     type : number,
        // } ,
        // carpet_area : {
        //     type : number
        // } , 
        // price : {
        //     type : number
        // },
        // builder : {
        //     type : String
        // },
        description : {
            type  :String
        } , 
        
        project_type : {
            type : String //residentail , commercial etc
        },
        sub_type:  {
            type :String // apartment
        },
        images : {
            type : Object,
            required  : true // the front cover images of the property
        },
        floorPlansImages : {
            type : Object,
            required : true // the floor plans images of the property
        },
        amenities :  {
            type : Object,
            required : true // the amenities of the property eg swimming etc
        },
        propertyCategory : {
            type : String,
            required: true 
            // this will be commercial , residential , resale, rental or plot categories
        },
        subCategory : {
            type : String,
            required : true 
            //plots will be singular 
            // residential ->  newLaunches , underConstruction or ReadyToMove
            // commercial -> newLaunches, underConstruction or ReadyToMove
            // plots - > noSubCategory
            // resale and rental -> commercial for resale or rental OR residential for resale or rental
        },
        details: {
            type: mongoose.Schema.Types.Mixed,
            required: true,
          },
    },
    {
        timestamps : true
    }
);

const PropertyModel =  mongoose.models.PropertySchema || mongoose.model('property',PropertySchema);
export { PropertyModel };


// THIS IS FOR RESIDENTIAL 
// BUILDER:
// ALPHA CROP
// PROJECT TYPE:
// RESIDENTIAL
// SUB TYPE:
// APARTMENT
// PROJECT SIZE:
// 12 ACRES
// UNIT SIZE:
// 1270 - 3434 SQ.FT
// PRICE:
// 1.15 - 3.10 CR.
// PRICE PER SQ. FEET:
// PRICE ON CALL
// STATUS:
// READY TO MOVE
// TOTAL FLOORS:
// 20