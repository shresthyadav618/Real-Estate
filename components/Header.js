'use client'
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/final_logo.png";
import "./Header.css";
export default function Header(props){
    console.log('executing header')
const add = props.add;
    // {name  : 'Home' , href: '/'} , {name : 'About' , href: '/about'}
//    const headerItems = [{name : 'Residential' , href: '/property/Residential'},{name : 'Commercial' , href: '/property/Commercial'},{name : 'Plots' , href: '/property/Plot'},{name:'Rental',href:'/property/Rental'},{name:'Resale',href:'/property/Resale'}];
const headerItems = [{name : 'Home' , href: '/'}, {name : 'About Us' , href: '/about'}, {name : 'Services' , href: '#', pop_up : true , pop_up_items : [{name : 'Residential' , href: '/property/Residential'},{name : 'Commercial' , href: '/property/Commercial'},{name : 'Plots' , href: '/property/Plot'},{name:'Rental',href:'/property/Rental'},{name:'Resale',href:'/property/Resale'}]},{name : 'Contact Us' , href: '/contact'},]
//    {name : 'Account' , href: '/account'}
//    ,{name : 'Contact Us' , href: '/contact-us'},

{/* <nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Portfolio</a>
      <ul>
        <li><a href="#">Graphic</a></li>
        <li><a href="#">Web</a></li>
      </ul>
    </li>
    <li><a href="#">Contact</a>
      <ul>
        <li><a href="#">Map</a></li>
        <li><a href="#">Form</a></li>
      </ul>
    </li>
  </ul>
</nav> */}


    return (
        <>
       
        <div className={add?'flex items-center justify-center mt-8  text-white add':'flex items-center justify-center mt-8  text-white'}>
        <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>
    {/* Home 
About us
Services 
Contact us */}
    <ul class="menu__box">
      <li><a className="menu__item" href={'/'}><Image src={logo} width={252} height={90}></Image></a></li>
      {/* <li><Link>Home</Link> </li>
      <li><Link> About Us</Link></li>
      <li><Link> Services </Link> */}
      {/* // yaha se neeche jayege */}
      {/* <ul>
        <li><Link href="#">Graphic</Link></li>
        <li><Link href="#">Web</Link></li>
      </ul> */}
{/* // yaha tk */}
      {/* </li> */}



      
      <li><Link class="menu__item" href="/">Home</Link></li>
      <li><Link class="menu__item" href="/about">About Us</Link></li>
      {/* <li><Link class="menu__item" href="/property/Residential">Services</Link></li> */}
      <li><Link class="menu__item" href="/property/Residential">Residential</Link></li>
      <li><Link class="menu__item" href="/property/Commercial">Commercial</Link></li>
      <li><Link class="menu__item" href="/property/Plot">Plot</Link></li>
      {/* <li><Link class="menu__item" href="/property/Rental">Rental</Link></li>
      <li><Link class="menu__item" href="/property/Resale">Resale</Link></li> */}
      <li><Link class="menu__item" href="/account">Account</Link></li>
      <li><Link className="menu__item" href={'/contact'}>Contact Us</Link></li>
    </ul>

  </div>
            

            {/* <div className="flex flex-col">
                <div>Huehue</div> */}
            <ul className="flex gap-x-12 header__list add">
                
                <Link className="font-bold text-4xl" href={'/'}><Image src={logo} width={200} height={65}></Image></Link>
                {/* <div className="flex flex-col phone"><p>9810898280</p><p>9810898280</p></div> */}
                <ul>
                {headerItems.map((item)=>{
                    return <li key={item.name+'li'}> <Link key={item.name} href={item.href} className={item.name==='Home'?'underline hide':'onHoverUnderline hide'}>{item.name} </Link>
                    {item.pop_up && 
                    <ul className="sub__list">
                        {item.pop_up_items && item.pop_up_items.map((elm)=>{
                            return <li key={elm.name+'popup'}><Link href={elm.href}>{elm.name}</Link></li>
                        })}
                  </ul>
                    }
                    </li>
                })}
                </ul>
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
                    <div className="numbers">
                    <div>+91 9999261355</div>
                    <div>+91 9654000756</div>
                    </div>

                </div>
            </ul>

            {/* </div> */}


        </div>
        </>
    )
}