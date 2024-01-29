
'use client'
import { PropertiesContext } from "@/propertiesProvider/propertiesProvider";
import { useContext, useEffect, useState } from "react";
import o5 from "../assets/o5.jpg";
import FeaturedChild from "./featuredChild";
import "./styles/featured.css";
export default function featured(){
    // {heading,location,img,bed,bath,area,price}
    const properties = [{heading :"Villa in Voila'Vatika" , location :"Deering Bay Drive,Vatika Sector-117" , img :o5 ,bed :"3" ,bath :"3",area: "3500 sq ft",price: "$530000",relevance : ['all','comm','res']},{heading :"Villa in Voila'Vatika" , location :"Deering Bay Drive,Vatika Sector-117" , img :o5 ,bed :"3" ,bath :"3",area: "3500 sq ft",price: "$530000"},{heading :"Villa in Voila'Vatika" , location :"Deering Bay Drive,Vatika Sector-117" , img :o5 ,bed :"3" ,bath :"3",area: "3500 sq ft",price: "$530000"}];

    const propertyContext = useContext(PropertiesContext);
    console.log('the propertyCotnext is : ', propertyContext);

    const [p,changeP] = useState([]);
    const [relevance,changeRelevance] = useState("All");
    console.log('the relevance is : ',relevance);
    const [loader,setLoader] = useState(true);
    useEffect(()=>{
        if(propertyContext){
            if(relevance!=="All"){
                changeP(propertyContext.filter((prop)=>{
                    console.log('the prop is  : ',prop);
                    return prop.propertyCategory == relevance
                }));}else{
                    changeP(propertyContext);
                }
                setLoader(false);
        }else{
            console.log('THE CONTEXT IS NULL PLEASE CHECK THE ERROR!!!');
        }
    },[propertyContext,relevance])
    
    console.log('the value of  p is : ',p);
    
      
    return(
        <div className="featured__parent">
            <h1 className="text-2xl font-bold">Our Featured Products</h1>
            <div className="featured__toggle font-bold text-lg">
                <div onClick={()=>{
                    changeRelevance("All")
                }}>All</div>
                <div onClick={()=>{
                    changeRelevance("Commercial")
                }}>Commercial</div>
                <div onClick={()=>{
                    changeRelevance("Residential")
                }}>Residential</div>
                <div onClick={()=>{
                    changeRelevance("Plot")
                }}>Plots</div>
                <div onClick={()=>{
                    changeRelevance("Rental")
                }}>Rental</div>
            </div>
        <div className="featured__container">
            {p!=[] && p.map((property)=>{
                return <FeaturedChild heading={property.name} location={property.location} img={property.images[0]} type={property.propertyCategory} area={property.area} price={property.price} relevance={relevance} _id={property._id} />
                
            })}
        </div>


        </div>
    )
}