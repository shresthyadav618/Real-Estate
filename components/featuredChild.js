// 
"use client"
import Image from "next/image";
import { useState } from "react";
export default function featuredChild(props){
    const heading = props.heading;
    const location = props.location;
    const img = props.img;
    const bed = props.bed;
    const bath = props.bath;
    const area = props.area;
    const price = props.price;
    const relevance = props.relevance;

    const [toggle,setToggle] = useState("all");

    return (
        <div className="featured__display">
        <Image src={img} className="w-[100%]"></Image>

        <h1 className="font-bold">{heading}</h1>
        <div className="l">{location}</div>

        <div className="featured__icons font-bold ">

        <div className="flex">
        <i class="fa-solid fa-bed"></i>
        <div>{bed}</div>
        </div>

        <div className="flex">
        <i class="fa-solid fa-shower"></i>
        <div>{bath}</div>
        </div>

        <div className="flex">
        <i class="fa-solid fa-layer-group"></i>
        <div>{area}</div>
        </div>

        </div>
        <div className="featured__buttons">
            <div className="price font-bold text-2xl">{price}</div>
            <button className="rounded-lg font-bold">View Details</button>
        </div>
    </div>
    )
}