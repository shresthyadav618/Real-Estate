import Link from "next/link";
import "./Header.css";
export default function Header(props){
const add = props.add;
    // {name  : 'Home' , href: '/'} , {name : 'About' , href: '/about'}
   const headerItems = [{name : 'Residential' , href: '/property/Residential'},{name : 'Commercial' , href: '/property/Commercial'},{name : 'Plots' , href: '/property/Plot'},{name : 'Account' , href: '/account'}];
//    ,{name : 'Contact Us' , href: '/contact-us'},

    return (
        <div className={add?'flex items-center justify-center mt-8  text-white add':'flex items-center justify-center mt-8  text-white'}>
            <ul className="flex gap-x-12 header__list">
                <Link className="font-bold text-4xl" href={'/'}>Mohit Bohra</Link>
                {headerItems.map((item)=>{
                    return <Link href={item.href} className={item.name==='Home'?'underline ':'onHoverUnderline '}><p>{item.name}</p></Link>
                })}
            </ul>
        </div>
    )
}