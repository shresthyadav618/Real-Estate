
import Image from 'next/image';
import Img from '../../assets/real-home.jpg';
import Footer from "../../components/Footer";
import Header from "../../components/Header";
export default function Home() {
  console.log(Img);
  return (
   <div>
    <Header/>
    <div className='image__container'>
    <Image className='bg-img' src={Img}></Image>
    </div>
    
    <Footer/>

   </div>
  )
}
