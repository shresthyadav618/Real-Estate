
// import Image from 'next/image';
'use client'
import Image from "next/image";
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
import TopHeader from "../../components/NewHeader";
import Agent from "../../components/agents";
import Contact from "../../components/contact";
import Featured from "../../components/featured";
import Overview from "../../components/overview";
import Slider from "../../components/slider";
import VideoComponent from "../../components/videoContainer";
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
      document?.body?.classList?.remove('addBlack');
    }

    
  },[])

  if(typeof window !== 'undefined'){
    console.log('q');
      const contactform = document?.querySelector('.contact-form');
  const container = document?.querySelector('.container-f');
  
  contactform?.addEventListener('submit', (event) => {
      event.preventDefault();
      container.innerHTML = '<p>Thanks for your message. <br /> I\'ll respond to you shortly</p>';
  });
  
  const connectbtn = document?.querySelector('.connect-btn');
  console.log('the connect btn is : ',connectbtn);
  const crossbtn = document?.querySelector('.cross-btn');
  const socialcontainer = document?.querySelector('.social-container');
  
  connectbtn?.addEventListener('click', () => {
    console.log('clicked connect btn');
    console.log(socialcontainer.classList.contains('visible'))
    socialcontainer.classList.add('visible');
  });
  
  crossbtn?.addEventListener('click', () => {
      socialcontainer.classList.remove('visible')
  });
  }

  // console.log(Img);
  // {name,role,since,number,l1,l2,l3,l4}
  const whatProvide = [{img : p1,heading : "Property Management" , para : 'We provide a range of services to property owners and landlords to help them effectively manage their real estate investments.'},{img: p2 , heading : "House Buying" , para : "Planning to buy home? We offer a range of assistance to make the home buying process smoother and more convenient for the buyer."},{img :p3 , heading : "Consulting Services" , para : "A team of professionals to advice and expertise to individuals, businesses, or organizations involved in various aspects of the real estate industry."},{img : p4 , heading : "House Leasing", para : "Whether you are an individual homeowner, real estate investor, we assist in marketing, selling, and closing the sale of your property."},{
    img :  p5 , heading : "House Selling" , para : "Selling your home? Partner with us for a seamless experience. From pricing strategy to negotiations, we handle every aspect of the selling process. "},{img :  p6 , heading : "Escrow Services" , para : "We are serving as a neutral third party that facilitates the closing process and ensures that the terms and conditions of the sale are met."}]

    const allAgents = [{img : ag1,name : "Mohit Yadav" , role : "Director , CEO , Founder" , since : "2018" , number : "91919999261355", l1 :'' , l2: '' , l3 : '', l4 :''},{img : ag1,name : "Sudhir" , role : "Exclusive Team Agent" , since : "2020" , number : "919698685685", l1 :'' , l2: '' , l3 : '', l4 :''},{img : ag1,name : "Mohit" , role : "Exclusive Team Agent" , since : "2020" , number : "918448674123", l1 :'' , l2: '' , l3 : '', l4 :''},{img : ag1,name : "Sumit Yadav" , role : "Exclusive Team Agent" , since : "2020" , number : "918448686123", l1 :'' , l2: '' , l3 : '', l4 :''},
    {img : ag1,name : "Sachin" , role : "Exclusive Team Agent" , since : "2020" , number : "919717922616", l1 :'' , l2: '' , l3 : '', l4 :''},
    {img : ag1,name : "Sandeep" , role : "Exclusive Team Agent" , since : "2020" , number : "919717532616", l1 :'' , l2: '' , l3 : '', l4 :''},
    {img : ag1,name : " Deepanshu" , role : "Exclusive Team Agent" , since : "2020" , number : "", l1 :'' , l2: '' , l3 : '', l4 :''},
    
    {img : ag1,name : "prahlad" , role : "Exclusive Team Agent" , since : "2020" , number : "919717532616", l1 :'' , l2: '' , l3 : '', l4 :''}];
     
  return (
   <div className="relative">
    <a href={'https://api.whatsapp.com/send?phone=919999261355'}><Image className="wp" width={100} height={100} src={wp}></Image></a>
    <div className="image__container m-h-[80%] flex flex-col gap-y-[100px]">
      <VideoComponent videoSrc={'https://app.vidzflow.com/v/H0LDXZjsnq?dq=576&ap=true&muted=true&loop=true&ctp=false&bc=%234E5FFD&controls='} />
    <TopHeader/>
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

    
    <h1 className="text-bold text-4xl w-[78vw] mx-auto mb-6 mt-6">Meet Our Agents</h1>
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
