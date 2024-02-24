// 
"use client"
import Image from "next/image";
import { useState } from "react";
export default function FeaturedChild(props){
    const name = props.heading;
    const location = props.location;
    const img = props.img;
    // const bed = props.bed;
    // const bath = props.bath;
    const area = props.area;
    const price = props.price;
    const relevance = props.relevance;
    const type = props.type;
    console.log('the images is : ',img);
    const _id = props._id;
    const [toggle,setToggle] = useState("all");
    const present = props.present;
    const addWid = props.addWid;
    console.log(name,location,area,img,price,type,relevance,type);
// all pe default top 4-5 properties display karege, then residential pe filter 
    return (
        // <div className={present?'featured__display w-[100%]!important bg-white':'featured__display'+addWid?'addWid':''}>
            <div className={present ? 'featured__display w-[100%]!important bg-white' : `featured__display ${addWid ? 'addWid' : ''}`}>
        <Image alt="No Image Found" src={img} width={200} height={100} className="w-[100%!important] h-[100%!important]"></Image>

        <h1 className="font-bold">{name}</h1>
        <div className="l">{location}</div>

        <div className="featured__icons font-bold ">

        {/* <div className="flex">
        <i class="fa-solid fa-bed"></i>
        <div>{bed}</div>
        </div>

        <div className="flex">
        <i class="fa-solid fa-shower"></i>
        <div>{bath}</div>
        </div> */}

        <div className="flex">
            <div>{type}</div>
        </div>

        <div className="flex">
        <i class="fa-solid fa-layer-group"></i>
        <div>{area}</div>
        </div>

        </div>
        <div className="featured__buttons">
            <div className="price font-bold text-lg">{price}</div>
            
            {/* //REMOVED ON CLICK CHECK RHISISISISISISISIIS */}
            <button className="rounded-lg font-bold" onClick={()=>{window.location.href=`/prop/${_id}`}}>View Details</button>
        </div>
    </div>
    )
}