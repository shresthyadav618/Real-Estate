'use client'
import Image from "next/image";
import o1 from "../assets/o1.jpg";
import o2 from "../assets/o2.jpg";
import o3 from "../assets/o3.jpg";
import o4 from "../assets/o4.jpg";
import "./styles/overview.css";
export default function overview(){

return (
    <div className="overview__container text-white">

        <div className="overview__child1">
            <h1>Discover Unmatched Opportunities in Gurgaon Real Estate Landscape</h1>
            <p>Welcome to our premier real estate platform showcasing a diverse array of plots, commercial spaces, and residential lands in the thriving city of Gurgaon, Haryana. Immerse yourself in a curated selection of major projects that redefine luxury living and investment opportunities</p>
            <button>Read More</button>
        </div>

        <div className="overview__child2">

            <div className="sub__child1">
                <Image src={o1} className="h-[60%]"></Image>
                <Image src={o2} className="h-[40%]"></Image>
            </div>

            <div className="sub__child2">
            <Image src={o3} className="h-[40%]"></Image>
            <Image src={o4} className="h-[60%]"></Image>
            </div>

        </div>

    </div>
)

}