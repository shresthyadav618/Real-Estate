
'use client';
import { PropertiesContext } from "@/propertiesProvider/propertiesProvider";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick-theme.css";
// import "~slick-carousel/slick/slick.css";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import PropertyChild from "../../../../components/featuredChild";
import '../../../../components/styles/ContactForm.css';
import "../../../../components/styles/featured.css";
import "../../../../components/styles/indiProperty.css";
export default function Residential(){
    const [data,changeData] = useState([]);
    const pathname = usePathname();
    const pp = useContext(PropertiesContext);
    console.log(pp);
    const [allP,changeAllp] = useState(pp);

    useEffect(()=>{
        changeAllp(pp);
    },[pp]);

    console.log(allP);
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
    console.log(data.floorPlans);
    const [toggle,setToggle] = useState(0);
    console.log('the toggle value is : ',toggle);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    return(
        <>
        <Header/>
        {data && 
        <div className="indi__container">
        <div className="indi__left">
            <div className="left1">
                <div className="left1__top">
                    <div className="flex justify-between items-center ">
                        <h1 className="font-extrabold text-3xl fontClr">{data?.name}</h1>
                        <div className="price flex">Price : <p className="font-bold ml-1">{data?.price}</p></div>
                    </div>

                    <div className="flex justify-between items-center ">
                        <div className="flex gap-x-2 items-center justify-between"> <i class="fa-solid fa-location-dot"></i> <p className="font-bold">{data.location}</p> </div>
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
                <div  dangerouslySetInnerHTML={{__html:data.description}}></div>
            </div>

            <div className="left3">
            <h1 className="text-3xl text-[#97B618] font-extrabold">Amenities</h1>
                <div className="font-bold" dangerouslySetInnerHTML={{__html : data.amenities}}></div>
            </div>

            <div className="left4">
            <h1 className="text-3xl text-[#97B618] font-extrabold">Floor Plans</h1>
            {data && data.floorPlansImages && data.floorPlansImages.map((elm)=>{
                return <Image src={elm} onClick={(e)=>{
                    window.location.href=`http://localhost:3001/_next/image?url=${elm}&w=640&q=75`
                }} width={200} height={200}></Image>
            })}
            </div>

            <div className="left5 relative">
                {/* related projects section */}
                
                {allP && <h1 className="font-bold text-3xl fontClr">Related Projects</h1>}
                <div>
                <Slider {...settings}>
                   
                
                {allP && allP.map((property,index)=>{
                    // let present = false;
                    // if(index==toggle || index==toggle+1){
                    //     present=true;
                    // }
                    // if(toggle+1>=allP.length && index==0){
                    //     present = true;
                    // }
                    // present={present} removed
                    return <PropertyChild present={true}  heading={property.name} location={property.location} img={property.images[0]} type={property.propertyCategory} area={property.area} price={property.price}  _id={property._id} />
                })}
                
                

                {/* <span className="slider__icon__left" onClick={()=>{
                    setToggle((prev)=>{
                        if(prev==0){
                            return allP.length-1;
                        }
                        return prev-1;
                    })
                }}><i class="fa-solid fa-caret-left"></i></span>
                <span className="slider__icon__right" onClick={()=>{
                    setToggle((prev)=>{
                        if(prev==allP.length-1){
                            return 0;
                        }
                        return prev+1;
                    })
                }}><i class="fa-solid fa-caret-right"></i></span> */}


                
                </Slider>
                </div>
            </div>

        </div>

    


        <div className="indi__right">
        <div className="form__container">
                <div className="text-2xl font-bold"> <i class="fa-regular fa-envelope"></i>  <h1>CONTACT US</h1> </div>
                <form className="flex flex-col form">
                    <div className="flex">
                        <input placeholder="First Name"></input>
                        <input placeholder="Last Name"></input>
                    </div>

                    <div className="flex">
                        <input placeholder="Your Email"></input>
                        <input placeholder="Phone Number"></input>
                    </div>

                    <textarea  placeholder="Enter Message or Your Query"></textarea>
                    <button type="submit">Submit</button>
                </form>
              </div>
        </div>




    </div>
        }
        <Footer hmm = {true}/>
        </>
    )

}