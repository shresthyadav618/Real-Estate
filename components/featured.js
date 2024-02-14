
'use client'
import { PropertiesContext } from "@/propertiesProvider/propertiesProvider";
import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import o5 from "../assets/o5.jpg";
import FeaturedChild from "./featuredChild";
import "./styles/featured.css";
export default function Featured(){
    // {heading,location,img,bed,bath,area,price}
    const properties = [{heading :"Villa in Voila'Vatika" , location :"Deering Bay Drive,Vatika Sector-117" , img :o5 ,bed :"3" ,bath :"3",area: "3500 sq ft",price: "$530000",relevance : ['all','comm','res']},{heading :"Villa in Voila'Vatika" , location :"Deering Bay Drive,Vatika Sector-117" , img :o5 ,bed :"3" ,bath :"3",area: "3500 sq ft",price: "$530000"},{heading :"Villa in Voila'Vatika" , location :"Deering Bay Drive,Vatika Sector-117" , img :o5 ,bed :"3" ,bath :"3",area: "3500 sq ft",price: "$530000"}];

    const propertyContext = useContext(PropertiesContext);
    console.log('the propertyCotnext is : ', propertyContext);

    const [p,changeP] = useState([]);
    const [relevance,changeRelevance] = useState("Residential");
    console.log('the relevance is : ',relevance);
    const [loader,setLoader] = useState(true);
    useEffect(()=>{
        if(propertyContext){
                let ct = 0;
                changeP(propertyContext.filter((prop,index)=>{
                    // if(ct<4){
                    console.log('the prop is  : ',prop);
                    let x =  prop.propertyCategory == relevance;
                    if(x){ct++;}
                    return x;
                    // }
                }));
                setLoader(false);
        }else{
            console.log('THE CONTEXT IS NULL PLEASE CHECK THE ERROR!!!');
        }
    },[propertyContext,relevance])
    
    console.log('the value of  p is : ',p);
    

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 4000,
        infinite: true,
        cssEase: 'ease-in-out',
        rtl: false,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 641,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            
            ]
      };
      
    return(
        <div className="featured__parent ">
            <h1 className="text-4xl  font-bold">Our Featured Products</h1>
            <div className="featured__toggle font-bold text-lg">
                {/* <div className={relevance==='All'?'addBdr':''} onClick={()=>{
                    changeRelevance("All")
                }}>All</div> */}
                <div className={relevance==='Residential'?'addBdr':''} onClick={()=>{
                    changeRelevance("Residential")
                }}>Residential</div>
                <line className="line"></line>
                <div className={relevance==='Commercial'?'addBdr':''} onClick={()=>{
                    changeRelevance("Commercial")
                }}>Commercial</div>
                <line className="line"></line>
                <div className={relevance==='Plot'?'addBdr':''} onClick={()=>{
                    changeRelevance("Plot")
                }}>Plots</div>
                {/* <div className={relevance==='Rental'?'addBdr':''} onClick={()=>{
                    changeRelevance("Rental")
                }}>Rental</div>
                <div className={relevance==='Resale'?'addBdr':''} onClick={()=>{
                    changeRelevance("Resale")
                }}>Resale</div> */}
            </div>
        <div className="featured__container w-[100%] h-[100%]">
            <Slider {...settings} >
            {p!=[] &&p.map((property)=>{
                return <FeaturedChild key={property._id} heading={property.name} location={property.location} img={property.images[0]} type={property.propertyCategory} area={property.area} price={property.price} relevance={relevance} _id={property._id} />
                
            })}
            </Slider>
        </div>


        </div>
    )
}