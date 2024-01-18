
// import Image from 'next/image';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
export default function Home() {
  // console.log(Img);
  return (
   <div>
    <div className="image__container">
    <Header/>
    <Hero/>
    </div>
    
    <Footer/>

   </div>
  )
}
