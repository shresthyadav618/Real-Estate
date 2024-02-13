'use client'
import Link from "next/link";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import "../../../components/Header.css";
import NewHeader from "../../../components/NewHeader";
import Contact from "../../../components/contact";
export default function ContactPage(){

if(typeof window!=="undefined"){
    document.body.classList.remove('addBg');
    document?.body?.classList?.remove('addBlack');
}

    return(
        <>
        <div className="main__contact__container">
        <NewHeader/>
        <Header/>
        
        <div className="contact__info ">

            <div className="contact__info__first">

            <h1>Contact Info</h1>
            <div className="flex gap-x-2"> <i class="fa-solid fa-location-dot"></i> <div>Plot no 7, TOWER-A11, Sector 82A, Gurugram, Haryana 122004</div> </div>
            <div className="flex gap-x-2"> <i class="fa-regular fa-envelope"></i> <div>vatikaprime@gmail.com</div> </div>
            <div className="flex gap-x-2"> <i class="fa-solid fa-phone"></i> <div>9999261355</div>  </div>
            <div className="footer__links">
                        <Link href={''}><i class="fa-brands fa-square-facebook"></i></Link>
                        <Link href={''}><i class="fa-brands fa-x-twitter"></i></Link>
                        <Link href={''}><i class="fa-brands fa-linkedin"></i></Link>
                        <Link href={''}><i class="fa-brands fa-instagram"></i></Link>
                             </div>
            </div>

            <div className="contact__info__second">
            <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.064973632628!2d76.96891342722034!3d28.38710546542939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3d8d07115b71%3A0x4bc859f8cff6f796!2sPrime%20Associates!5e0!3m2!1sen!2sin!4v1706715581238!5m2!1sen!2sin"
      width={"100%"}
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
            </div>

        </div>
        <div><Contact/></div>
        
        <Footer/>
        </div>
        </>
        
    )

}