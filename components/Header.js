import Link from "next/link";
import "./Header.css";
export default function Header(){


   const headerItems = [{name  : 'Home' , href: '/'} , {name : 'About' , href: '/about'},{name : 'Residential' , href: '/residential'},{name : 'Commercial' , href: '/commercial'},{name : 'Plots' , href: '/plots'},{name : 'Contact Us' , href: '/contact-us'},{name : 'Account' , href: '/account'}];

    return (
        <div className="flex items-center justify-center mt-8  text-white">
            <ul className="flex gap-x-12 header__list">
                <div className="font-bold text-lg">Mohit Bohra</div>
                {headerItems.map((item)=>{
                    return <Link href={item.href} className={item.name==='Home'?'underline ':'onHoverUnderline '}><p>{item.name}</p></Link>
                })}
            </ul>
        </div>
    )
}