
'use client'
import { useEffect, useState } from "react";
import o5 from "../assets/o5.jpg";
import FeaturedChild from "./featuredChild";
import "./styles/featured.css";
export default function featured(){
    // {heading,location,img,bed,bath,area,price}
    const properties = [{heading :"Villa in Voila'Vatika" , location :"Deering Bay Drive,Vatika Sector-117" , img :o5 ,bed :"3" ,bath :"3",area: "3500 sq ft",price: "$530000",relevance : ['all','comm','res']},{heading :"Villa in Voila'Vatika" , location :"Deering Bay Drive,Vatika Sector-117" , img :o5 ,bed :"3" ,bath :"3",area: "3500 sq ft",price: "$530000"},{heading :"Villa in Voila'Vatika" , location :"Deering Bay Drive,Vatika Sector-117" , img :o5 ,bed :"3" ,bath :"3",area: "3500 sq ft",price: "$530000"}];



    const [p,changeP] = useState([]);
    const [relevance,changeRelevance] = useState("All");
    console.log('the relevance is : ',relevance);
    useEffect(()=>{
        async function getProperties(){
            const res = await fetch('http://localhost:3001/api/property/getAll',{
                method : 'GET'
            });

            if(res.ok){
                const resJson = await res.json();
                console.log('the response is : ',resJson);

                if(relevance!=="All"){
                changeP(resJson.allProperties.filter((prop)=>{
                    console.log('the parent category is : ',prop.parentCategory);
                    console.log('the prop is  : ',prop);
                    return prop.propertyCategory == relevance
                }));}else{
                    changeP(resJson.allProperties);
                }
            }else{
                const resJson = await res.json();
                console.log('there was some error while fetching properties',resJson);
            }
        }
        getProperties();
    },[relevance])
    
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
                    changeRelevance("Plots")
                }}>Plots</div>
                <div onClick={()=>{
                    changeRelevance("Rental")
                }}>Rental</div>
            </div>
        <div className="featured__container">
            {p!=[] && p.map((property)=>{
                return <FeaturedChild heading={property.name} location={property.location} img={property.images[0]} type={property.propertyCategory} area={property.area} price={property.price} relevance={relevance} />
                
            })}
        </div>


        </div>
    )
}