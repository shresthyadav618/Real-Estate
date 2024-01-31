'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/prime.png";
import "./Header.css";
export default function Header(props){
    console.log('executing header')
const add = props.add;
    // {name  : 'Home' , href: '/'} , {name : 'About' , href: '/about'}
   const headerItems = [{name : 'Residential' , href: '/property/Residential'},{name : 'Commercial' , href: '/property/Commercial'},{name : 'Plots' , href: '/property/Plot'},{name:'Rental',href:'/property/Rental'},{name:'Resale',href:'/property/Resale'}];
//    {name : 'Account' , href: '/account'}
//    ,{name : 'Contact Us' , href: '/contact-us'},




    return (
        <>
       
        <div className={add?'flex items-center justify-center mt-8  text-white add':'flex items-center justify-center mt-8  text-white'}>
        <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>
    
    <ul class="menu__box">
      <li><a className="menu__item" href={'/'}><Image src={logo} width={100} height={100}></Image></a></li>
      <li><Link class="menu__item" href="/property/Residential">Residential</Link></li>
      <li><Link class="menu__item" href="/property/Commercial">Commercial</Link></li>
      <li><Link class="menu__item" href="/property/Plot">Plot</Link></li>
      <li><Link class="menu__item" href="/property/Rental">Rental</Link></li>
      <li><Link class="menu__item" href="/property/Resale">Resale</Link></li>
      <li><Link class="menu__item" href="/account">Account</Link></li>
    </ul>

  </div>
            

            {/* <div className="flex flex-col">
                <div>Huehue</div> */}
            <ul className="flex gap-x-12 header__list add">
                
                <Link className="font-bold text-4xl" href={'/'}><Image src={logo} width={100} height={100}></Image></Link>
                {/* <div className="flex flex-col phone"><p>9810898280</p><p>9810898280</p></div> */}
                {headerItems.map((item)=>{
                    return <Link key={item.name} href={item.href} className={item.name==='Home'?'underline hide':'onHoverUnderline hide'}><p>{item.name}</p></Link>
                })}
                <div className="cursor-pointer phone__container  font-bold flex items-center justify-center gap-x-4 mr-4" 
                // onClick={()=>{
                //     if(typeof(window) !== 'undefined'){
                //         const posY = document?.getElementsByClassName('contact__container')[0]?.offsetTop;
                //         console.log('the posY is : ',posY);
                //         window?.scroll({
                //             top: posY,
                //             behavior: "smooth",
                //           });
                //     }
                // }}
                >
                    {/* Contact Us */}
                    <i class="fa-solid fa-phone phone__class fa-xl"></i>
                    <div>
                    <div>+91 9999261355</div>
                    <div>+91 9999261355</div>
                    </div>

                </div>
            </ul>

            {/* </div> */}


        </div>
        </>
    )
}