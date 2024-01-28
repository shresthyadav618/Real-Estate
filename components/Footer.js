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
            <div className="footer__parent">

                <div className="footer__child1">

                    <div>Mohit Bohra</div>
                    <div className="flex gap-x-2 items-center ">  <i class="fa-solid fa-location-dot"></i> <p>Vatika Sector 117</p> </div>
                    <div className="flex gap-x-2 items-center "> <i class="fa-solid fa-phone"></i> <p>9894374344</p> </div>
                    <div className="flex gap-x-2 items-center "> <i class="fa-regular fa-envelope"></i> <p>mail.us@gmail.com</p> </div>

                </div>


                <div className="footer__child2">

                    <h1 className="font-bold text-xl">Quick Links</h1>
                    <div>About</div>
                    <div>Contact</div>
                    <div>Agents</div>
                </div>


                <div className="footer__child3">
                <h1 className="font-bold text-xl">Other Pages</h1>
                    <div>Agents</div>
                    <div>Contact</div>
                    <div>Agents</div>

                </div>


                <div className={'footer__child4 relative'}>
                    <h1 className="font-bold text-xl">Talk to an Expert</h1>
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