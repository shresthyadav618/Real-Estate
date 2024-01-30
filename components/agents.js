"use client"
import Image from "next/image";
import Link from "next/link";
import "./styles/agent.css";
export default function agents(props){
   const {name,role,since,number,l1,l2,l3,l4,img} = props;
    // console.log(img);
    // console.log(name);
    return (
        
            
            <div className="agent__child">
                <div className="agent__sub__child">
                    <Image src={img}></Image>
                    <div className="agent__sub__child__info">
                        <h1>{name}</h1>
                        <div>{role}</div> 
                        <div className="flex gap-x-2 items-center ">  <i class="fa-solid fa-check"></i>  <p>Operating since {since}</p> </div>
                        <div className="flex gap-x-2 items-center "> <i class="fa-solid fa-phone"></i>  <p>{number}</p></div>
                        <button > Contact Agent</button>
                    </div>

                    <div className="links">
                        <Link href={l1}><i class="fa-brands fa-square-facebook"></i></Link>
                        <Link href={l2}><i class="fa-brands fa-x-twitter"></i></Link>
                        <Link href={l3}><i class="fa-brands fa-linkedin"></i></Link>
                        <Link href={l4}><i class="fa-brands fa-instagram"></i></Link>
                    </div>

                </div>
            </div>
        
    )
}