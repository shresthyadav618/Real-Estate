'use client';
import { PropertiesContext } from "@/propertiesProvider/propertiesProvider";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import FeaturedChild from "../../../../components/featuredChild";
import "../../../../components/styles/featured.css";
import '../../../../components/styles/property.css';

export default  function property(){
    const propertyContext =  useContext(PropertiesContext);
    const pathname = usePathname();
    const type = pathname.split('/')[2].toString();
    const [data,changeData] = useState(propertyContext);
    
    useEffect(()=>{
        changeData(()=>{
            return propertyContext?.filter((elm)=>{
                console.log(elm);
                return elm.propertyCategory == type;
            })
        });
    },[propertyContext,type]);
    console.log('the property data is : ',data , ' and the context was ',propertyContext);
   
  return (
    <>
    <Header add={true}/>
    <div className="property__container">
        {data && data.map((property)=>{
            return <FeaturedChild heading={property.name} addWid={true} location={property.location} img={property.images[0]} type={property.propertyCategory} area={property.area} price={property.price}  _id={property._id} />
        })}
    </div>
    <Footer addClr={true}/>
    </>
  )  
}