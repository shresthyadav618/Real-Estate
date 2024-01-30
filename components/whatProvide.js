
'use client'
import Image from "next/image";
import "./styles/overview.css";
export default function whatProvide(props){
    const img = props.img;
    const heading = props.heading;
    const para = props.para;
    return (
        <div className="child__provider">
            <Image src={img}></Image>
            <h1 className="font-bold text-lg text-justify">{heading}</h1>
            <p className="text-justify">{para}</p>
        </div>
    )


}