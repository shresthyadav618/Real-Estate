
'use client'
import Link from "next/link";
import "./styles/footer.css";
export default function Footer(props){
    const hmm = props.hmm;
    console.log(hmm);
    const addClr = props.addClr;
    // background-color: #101010;
    // position: absolute;
    // bottom: 0px;
    return (
        <div className={hmm?'addClr footer__container':`footer__container ${addClr?'newClr':''}`}>
            <div className="footer__parent ">

                <div className="footer__child1">

                    <div className="footer__heading">Prime Associates</div>
                    <div className="flex gap-x-2 items-center ">  <i class="fa-solid fa-location-dot"></i> <p className="ls">Plot no 7, TOWER-A11,Sector 82A,Gurugram, Haryana</p> </div>
                    <div className="flex gap-x-2 items-center "> <i class="fa-solid fa-phone"></i> <p className="ls">9999261355</p> </div>
                    <div className="flex gap-x-2 items-center "> <i class="fa-regular fa-envelope"></i> <p className="ls">vatikaprime@gmail.com</p> </div>

                </div>


                <div className="footer__child2 cursor-pointer">

                    <h1 className="font-bold text-xl footer__heading">Quick Links</h1>
                    <Link href={'/contact'}>Contact</Link>
                    <Link href={'/property/Residential'}>Residential</Link>
                    <Link href={'/property/Commercial'}>Commercial</Link>
                </div>


                <div className="footer__child3 cursor-pointer">
                <h1 className="font-bold text-xl footer__heading">Other Pages</h1>
                    <Link href={'/property/Plot'}>Plots</Link>
                    <Link href={'/property/Rental'}>Rental</Link>
                    <Link href={'/property/Resale'}>Resale</Link>

                </div>


                <div className={'footer__child4 relative cursor-pointer'}>
                    <h1 className="font-bold text-xl footer__heading">Talk to an Expert</h1>
                    <div>Get expert consultation regarding you Real Estate needs.</div>
                    {/* <button className="footer__button">Make An Enquiry</button> */}
                    <div className="flex flex-col gap-y-2">
                        <h1>Connect with us</h1>
                        <div className="footer__links">
                        <Link href={''}><i class="fa-brands fa-square-facebook"></i></Link>
                        <Link href={''}><i class="fa-brands fa-x-twitter"></i></Link>
                        <Link href={''}><i class="fa-brands fa-linkedin"></i></Link>
                        <Link href={''}><i class="fa-brands fa-instagram"></i></Link>
                             </div>
                    </div>
                </div>


            </div>
        </div>
    )
}