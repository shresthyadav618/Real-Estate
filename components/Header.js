'use client'
import Link from "next/link";
import "./Header.css";
export default function Header(props){
const add = props.add;
    // {name  : 'Home' , href: '/'} , {name : 'About' , href: '/about'}
   const headerItems = [{name : 'Residential' , href: '/property/Residential'},{name : 'Commercial' , href: '/property/Commercial'},{name : 'Plots' , href: '/property/Plot'},{name:'Rental',href:'/property/Rental'},{name:'Resale',href:'/property/Resale'},{name : 'Account' , href: '/account'}];
//    ,{name : 'Contact Us' , href: '/contact-us'},

    return (
        <div className={add?'flex items-center justify-center mt-8  text-white add':'flex items-center justify-center mt-8  text-white'}>
            <ul className="flex gap-x-12 header__list">
                <Link className="font-bold text-4xl" href={'/'}>Mohit Bohra</Link>
                {headerItems.map((item)=>{
                    return <Link href={item.href} className={item.name==='Home'?'underline ':'onHoverUnderline '}><p>{item.name}</p></Link>
                })}
                <div className="cursor-pointer" onClick={()=>{
                    if(typeof window !== 'undefined'){
                        const posY = document.getElementsByClassName('contact__container')[0].offsetTop;
                        console.log('the posY is : ',posY);
                        window.scroll({
                            top: posY,
                            behavior: "smooth",
                          });
                    }
                }}>Contact Us</div>
            </ul>
        </div>
    )
}