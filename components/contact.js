import Image from "next/image"
import contactImage from "../assets/cf.jpg"
import "./Header.css"
export default function contact(){
    return (
        <div className="contact__container">
            <div className="contact__image">
                {/* <div> */}
                     <Image src={contactImage}></Image>
                 {/* </div> */}
            
            <div className="content__image">
                <h1 className="font-bold text-3xl ">Are you looking for a dream home?</h1>
                <p>We can help you relize your dream of a new home</p>
            </div>
            </div>
            <div className="form__container mt-2">
                <div className="text-2xl font-bold"> <i class="fa-regular fa-envelope"></i>  <h1>CONTACT US</h1> </div>
                <form className="flex flex-col form">
                    <div className="flex">
                        <input placeholder="First Name"></input>
                        <input placeholder="Last Name"></input>
                    </div>

                    <div className="flex">
                        <input placeholder="Your Email"></input>
                        <input placeholder="Phone Number"></input>
                    </div>

                    <textarea  placeholder="Enter Message or Your Query"></textarea>
                    <button type="submit">Submit</button>
                </form>
              </div>
        </div>
    )
}