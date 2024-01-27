
'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import "../../../../components/styles/indiProperty.css";
export default function Residential(){
    const [data,changeData] = useState([]);
    const pathname = usePathname();

    const _id = pathname.split('/')[2].toString();
    console.log('the id is : ',_id);
    useEffect(()=>{
        async function getPropertyData(){
            const res = await fetch(`http://localhost:3001/api/property/getById`,{
                method : 'POST',
                body : JSON.stringify(_id),
                headers : {'Content-Type' : 'application/json'}
            });
            console.log('the res is : ',res);
            if(res.ok && res.status==200){
                const response = await res.json();
                console.log('the response was : ',response);
                changeData(response.propertyDetail);
            }else{
                const response = await res.json();
                console.log('there was some error getting the property data',response);
            }
        }

        getPropertyData();
    },[])
    console.log(data);
    return(
        <>
        <Header/>
        {data && 
        <div className="indi__container">
        <div className="indi__left">
            <div className="left1">
                <div className="left1__top">
                    <div className="flex justify-between items-center ">
                        <h1>{data?.name}</h1>
                        <div className="price flex">Price : <p className="font-bold ml-1">{data?.price}</p></div>
                    </div>

                    <div className="flex justify-between items-center ">
                        <div className="flex gap-x-1 items-center justify-between"> <i class="fa-solid fa-location-dot"></i> <p>{data.location}</p> </div>
                        <div className="links items-center justify-between">
                        <Link href={''}><i class="fa-brands fa-square-facebook"></i></Link>
                    <Link href={''}><i class="fa-brands fa-x-twitter"></i></Link>
                    <Link href={''}><i class="fa-brands fa-linkedin"></i></Link>
                    <Link href={''}><i class="fa-brands fa-instagram"></i></Link>
                        </div>
                    </div>

                </div>
                <div className="left1__img">
                    <Image src={data?.images?.[0]} width={200} height={200}></Image>
                </div>
                <div className="left1__bottom">
                    {data && data.details && data.details?.map((p)=>{
                        for(let key in p){
                            if(p.hasOwnProperty(key)){
                                return (
                                    <div className="flex flex-col"> <div className="text-gray-600"> {key} </div> <div className="font-bold"> {p[key]} </div>  </div>
                                )
                            }
                        }
                    })}
                </div>
            </div>

            <div className="left2">
                <h1 className="text-3xl text-[#97B618] font-extrabold">Overview</h1>
                <div className="font-bold">{data.description}</div>
            </div>

            <div className="left3">
            <h1 className="text-3xl text-[#97B618] font-extrabold">Amenties</h1>
                <div className="font-bold">{data.amenities}</div>
            </div>

            <div className="left4">

            </div>

            <div className="left5">

            </div>

        </div>
        <div className="indi__right"></div>
    </div>
        }
        </>
    )

}