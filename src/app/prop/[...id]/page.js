
'use client';
import { PropertiesContext } from "@/propertiesProvider/propertiesProvider";
// import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import ScaleLoader from "react-spinners/ScaleLoader";
import Footer from "../../../../components/Footer";
import NewHeader from "../../../../components/NewHeader";
import PropertyChild from "../../../../components/featuredChild";
import '../../../../components/styles/ContactForm.css';
import "../../../../components/styles/featured.css";
import "../../../../components/styles/indiProperty.css";
// const DynamicHeader = dynamic(()=>import( "../../../../components/Header"),{ssr:false})
import Header from "../../../../components/Header";
// const DynamicFooter = dynamic(()=>import( "../../../../components/Footer"),{ssr:false})

export default function Residential(){
    // const BASE_URL = 'https://prime-associates-real.vercel.app';
    const BASE_URL = 'https://www.primeassociatesgroup.com';
    // const BASE_URL = 'http://localhost:3001';
    const [data,changeData] = useState([]);
    const pathname = usePathname();
    const pp = useContext(PropertiesContext);
    console.log(pp);
    const [allP,changeAllp] = useState(pp);
    const [loader,setLoader] = useState(true);
    useEffect(()=>{
        changeAllp(pp);
    },[pp]);

    console.log(allP);
    const _id = pathname.split('/')[2].toString();
    console.log('the id is : ',_id);
    useEffect(()=>{
        setLoader(true);
        if(typeof(window) !== "undefined"){
            document?.body?.classList?.add('addBg');
            document?.body?.classList?.remove('addBlack');
          }
        async function getPropertyData(){
            const res = await fetch(`${BASE_URL}/api/property/getById`,{
                method : 'POST',
                body : JSON.stringify(_id),
                headers : {'Content-Type' : 'application/json'}
            });
            console.log('the res is : ',res);
            if(res.ok && res.status==200){
                const response = await res.json();
                console.log('the response was : ',response);
                changeData(response.propertyDetail);
                if(typeof(window) !== "undefined"){
                    document?.body?.classList?.add('addBg');
                  }
                setLoader(false);
            }else{
                const response = await res.json();
                console.log('there was some error getting the property data',response);
            }
        }

        getPropertyData();
    },[]);

    // width: 100%!important;
    // height: 100%!important;
    // border-radius: 10px;
    // margin-bottom: 10px;

    function see(){
        if (typeof(window) !== "undefined") {
        let contactForm = document?.getElementById(`${data._id}xyz`)?.getBoundingClientRect()?.top;
        let heightOfLeft5 = document?.getElementById(`${data._id}`)?.getBoundingClientRect()?.top;
        // console.log(contactForm,heightOfLeft5);
        if(heightOfLeft5<0){
            const e = document?.getElementById(`${data._id}xyz`);
            const po = document?.getElementById(`${data._id}`);
            if(e){
                const xx = po.offsetTop;
                e.classList.add('removeFixed');
                e.style.transform = `translate3d(76px, ${xx-50}px, 0px)`;
            }
        }else{
            const e = document?.getElementById(`${data._id}xyz`);
            if(e){
                e.classList.remove('removeFixed');
                e.style.transform = '';
            }
        }
    }
    }
    
    if (typeof(window) !== "undefined") {
    window?.addEventListener("scroll",see)
    }
    console.log(data);
    console.log(data.floorPlans);
    const [toggle,setToggle] = useState(0);
    console.log('the toggle value is : ',toggle);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 2000,
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

    const settingsForFront = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      const settingsFloor = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        rtl : false,
        autoplaySpeed : 2000,
        infinite : true,
      }

      if(loader){
        return <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-black"><ScaleLoader color="#36d7b7" /></div>
      }
      
    return(
        <>
        <NewHeader/>
        <Header add={true}/>
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
                        <div className="links items-center justify-between text-black">
                        <Link href={''}><i class="fa-brands fa-square-facebook"></i></Link>
                    <Link href={''}><i class="fa-brands fa-x-twitter"></i></Link>
                    <Link href={''}><i class="fa-brands fa-linkedin"></i></Link>
                    <Link href={''}><i class="fa-brands fa-instagram"></i></Link>
                        </div>
                    </div>

                </div>
                <div className="left1__img">
                    {data && data.images.length>1 && <Slider {...settingsForFront}>
                    {data && data.images && data.images.map((elm)=>{
                        return <Image alt="No Image Found" key={elm+'prop1'} src={elm} width={200} height={200} quality={100}></Image>
                    })}

                    </Slider>}
                    {data && data.images.length==1 && data.images.map((elm)=>{
                        return <Image alt="No Image Found" key={elm+'prop2'} src={elm} width={200} height={200}></Image>
                    }) }
                </div>
                <div className="left1__bottom">
                    {data && data.details && data.details?.map((p)=>{
                        for(let key in p){
                            if(p.hasOwnProperty(key)){
                                return (
                                    <div key={key+'prop3'} className="flex flex-col"> <div className=" text-black"> {key} </div> <div className="font-bold"> {p[key]} </div>  </div>
                                )
                            }
                        }
                    })}
                </div>
            </div>

            <div className="left2">
                <h1 className="text-3xl text-black font-extrabold">Overview</h1>
                <div  dangerouslySetInnerHTML={{__html:data.description}}></div>
            </div>
            {/* text-[#97B618] removing */}
            <div className="left3">
            <h1 className="text-3xl text-black font-extrabold">Amenities</h1>
                <div className="font-bold" dangerouslySetInnerHTML={{__html : data.amenities}}></div>
            </div>

            <div className="left4"  id={data._id}>
            <h1 className="text-3xl text-black font-extrabold mb-4">Floor Plans</h1>
            {data && data.floorPlansImages && data.floorPlansImages.length>1 && <Slider {...settingsFloor}>
            {data && data.floorPlansImages && data.floorPlansImages.map((elm)=>{
                return <Image alt="No Image Found" key={elm+'prop4'} src={elm} onClick={(e)=>{
                    window.location.href=`https://prime-associates-real.vercel.app/_next/image?url=${elm}&w=640&q=75`
                }} width={200} height={200}></Image>
            })}
            </Slider>}
            
            {data && data.floorPlansImages && data.floorPlansImages.length==1 && data.floorPlansImages.map((elm)=>{
                return <Image alt="No Image Found" key={elm+'prop5'} src={elm} onClick={(e)=>{
                    window.location.href=`https://prime-associates-real.vercel.app/_next/image?url=${elm}&w=640&q=75`
                }} width={200} height={200}></Image>
            })
            
            }

            

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
                    return <PropertyChild key={property._id +'prop'} present={true}  heading={property.name} location={property.location} img={property.images[0]} type={property.propertyCategory} area={property.area} price={property.price}  _id={property._id} />
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

    


        <div className={'indi__right'} id={data._id+'xyz'}>
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