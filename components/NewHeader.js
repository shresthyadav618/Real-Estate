
import Link from "next/link";
import './Header.css';
export default function newHeader(){

   return(
    <div className="top__header p-4 font-bold ">
    <a href={'https://maps.app.goo.gl/tJuLL9ccmUWY5BSV9'} className="flex items-center gap-x-2"><i class="fa-solid fa-location-dot"></i><p>Location</p></a>
    <div className="flex items-center mr-4"><Link href={'/contact'} className="flex gap-x-2 items-center"> <i class="fa-solid fa-address-book"></i> <p>Contact Us</p>  </Link></div>
</div>
   )
}