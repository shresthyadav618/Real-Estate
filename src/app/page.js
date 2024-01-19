
// import Image from 'next/image';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Featured from "../../components/featured";
import Overview from "../../components/overview";
import Slider from "../../components/slider";
export default function Home() {
  // console.log(Img);
  return (
   <div>
    <div className="image__container m-h-[80%] flex flex-col gap-y-[100px]">
    <Header/>
    <Hero/>
    </div>
    <Overview/>
    
    <Slider/>
    <Featured/>
    <Footer/>
   </div>
  )
}
