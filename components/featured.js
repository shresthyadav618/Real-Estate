import o5 from "../assets/o5.jpg";
import FeaturedChild from "./featuredChild";
import "./styles/featured.css";
export default function featured(){
    // {heading,location,img,bed,bath,area,price}
    const properties = [{heading :"Villa in Voila'Vatika" , location :"Deering Bay Drive,Vatika Sector-117" , img :o5 ,bed :"3" ,bath :"3",area: "3500 sq ft",price: "$530000"},{heading :"Villa in Voila'Vatika" , location :"Deering Bay Drive,Vatika Sector-117" , img :o5 ,bed :"3" ,bath :"3",area: "3500 sq ft",price: "$530000"},{heading :"Villa in Voila'Vatika" , location :"Deering Bay Drive,Vatika Sector-117" , img :o5 ,bed :"3" ,bath :"3",area: "3500 sq ft",price: "$530000"}];
    return(
        <div className="featured__parent">
            <h1 className="text-2xl font-bold">Our Featured Products</h1>
            <div className="featured__toggle font-bold text-lg">
                <div>All</div>
                <div>Commercial</div>
                <div>Residential</div>
                <div>Plots</div>
                <div>Rental</div>
            </div>
        <div className="featured__container">
            {properties.map((property)=>{
                return <FeaturedChild heading={property.heading} location={property.location} img={property.img} bed={property.bed} bath={property.bed} area={property.area} price={property.price} />
            })}
        </div>


        </div>
    )
}