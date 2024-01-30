
// import Image from 'next/image';
'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ag1 from "../../assets/ag1.jpg";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.svg";
import wp from "../../assets/whatsapp.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Agent from "../../components/agents";
import Contact from "../../components/contact";
import Featured from "../../components/featured";
import Overview from "../../components/overview";
import Slider from "../../components/slider";
import WhatProvide from "../../components/whatProvide";
// import dynamic from "next/dynamic";
// const DynamicHeader = dynamic(()=>import( "../../components/Header"),{ssr:false})
// const DynamicHero = dynamic(()=>import( "../../components/Hero"),{ssr:false})
// const DynamicAgent = dynamic(()=>import( "../../components/agents"),{ssr:false})
// const DynamicContact = dynamic(()=>import( "../../components/contact"),{ssr:false})
// const DynamicFeatured = dynamic(()=>import( "../../components/featured"),{ssr:false})
// const DynamicOverview = dynamic(()=>import( "../../components/overview"),{ssr:false})
// const DynamicSlider = dynamic(()=>import( "../../components/slider"),{ssr:false})
// const DynamicFooter = dynamic(()=>import( "../../components/Footer"),{ssr:false})
// const DynamicWhatProvide = dynamic(()=>import( "../../components/whatProvide"),{ssr:false})
export default function Home() {
  
  useEffect(()=>{
    if(typeof(window) !== "undefined"){
      document?.body?.classList?.remove('addBg');
    }
  },[])

  // console.log(Img);
  // {name,role,since,number,l1,l2,l3,l4}
  const whatProvide = [{img : p1,heading : "Property Management" , para : 'We provide a range of services to property owners and landlords to help them effectively manage their real estate investments.'},{img: p2 , heading : "House Buying" , para : "Planning to buy home? We offer a range of assistance to make the home buying process smoother and more convenient for the buyer."},{img :p3 , heading : "Consulting Services" , para : "A team of professionals to advice and expertise to individuals, businesses, or organizations involved in various aspects of the real estate industry."},{img : p4 , heading : "House Leasing", para : "Whether you are an individual homeowner, real estate investor, we assist in marketing, selling, and closing the sale of your property."},{
    img :  p5 , heading : "House Selling" , para : "Selling your home? Partner with us for a seamless experience. From pricing strategy to negotiations, we handle every aspect of the selling process. "},{img :  p6 , heading : "Escrow Services" , para : "We are serving as a neutral third party that facilitates the closing process and ensures that the terms and conditions of the sale are met."}]

    const allAgents = [{img : ag1,name : "Ramu" , role : "Exclusive Team Agent" , since : "2015" , number : "94732875455", l1 :'' , l2: '' , l3 : '', l4 :''},
    {img : ag1,name : "Ramu" , role : "Exclusive Team Agent" , since : "2015" , number : "94732875455", l1 :'' , l2: '' , l3 : '', l4 :''},
    {img : ag1,name : "Ramu" , role : "Exclusive Team Agent" , since : "2015" , number : "94732875455", l1 :'' , l2: '' , l3 : '', l4 :''},
    {img : ag1,name : "Ramu" , role : "Exclusive Team Agent" , since : "2015" , number : "94732875455", l1 :'' , l2: '' , l3 : '', l4 :''},
    {img : ag1,name : "Ramu" , role : "Exclusive Team Agent" , since : "2015" , number : "94732875455", l1 :'' , l2: '' , l3 : '', l4 :''},
    {img : ag1,name : "Ramu" , role : "Exclusive Team Agent" , since : "2015" , number : "94732875455", l1 :'' , l2: '' , l3 : '', l4 :''}];
     
  return (
   <div className="relative">
    <Link href={'https://api.whatsapp.com/send?phone=919999261355'}><Image className="wp" width={100} height={100} src={wp}></Image></Link>
    <div className="image__container m-h-[80%] flex flex-col gap-y-[100px]">
    <Header/>
    {/* <DynamicHeader/> */}
    <Hero/>
    {/* <DynamicHero/> */}
    </div>
    <Featured/>
    <div className="new_class">
    <h1 className="font-bold text-4xl text-black w-[78vw] m-auto">What are we providing</h1>
    <div className="provide__container">
      
    {whatProvide.map((item)=>{
      return <WhatProvide key={item.img+'app'} heading={item.heading} para={item.para} img={item.img}/>
      // return <DynamicWhatProvide key={item.img+'app'} heading={item.heading} para={item.para} img={item.img}/>
    })}
    </div>
    </div>
    <Overview/>
    {/* <DynamicOverview/> */}
    <Slider/>
    {/* <DynamicSlider/> */}
    
    {/* <DynamicFeatured/> */}

    
    <h1 className="text-bold text-4xl w-[78vw] mx-auto mb-6">Meet Our Agents</h1>
    <div className="agent__container">
    {allAgents.map((agent)=>{
      
      return <Agent key={agent.name+'agent'} name={agent.name} role={agent.role} since={agent.since} number={agent.number} l1={agent.l1} l2={agent.l2} l3={agent.l3} l4={agent.l4} img={agent.img}/>
      // return <DynamicAgent key={agent.name+'agent'} name={agent.name} role={agent.role} since={agent.since} number={agent.number} l1={agent.l1} l2={agent.l2} l3={agent.l3} l4={agent.l4} img={agent.img}/>
      
    })}
    </div>
    <Contact/>
    {/* <DynamicContact/> */}
    <Footer/>
    {/* <DynamicFooter/> */}
   </div>
  )
}
