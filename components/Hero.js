'use client'
import { useEffect } from "react";
import "./Header.css";
export default function Hero(){


  useEffect(() => {
      // Your JavaScript code here
      if(typeof window !== 'undefined'){
        console.log('q');
          const contactform = document?.getElementsByClassName('contact-form')[0];
      const container = document?.getElementsByClassName('container-f')[0];
      
      contactform?.addEventListener('submit', (event) => {
          event.preventDefault();
          container.innerHTML = '<p>Thanks for your message. <br /> I\'ll respond to you shortly</p>';
      });
      
      const connectbtn = document?.getElementsByClassName('connect-btn')[0];
      console.log('the connect btn is : ',connectbtn);
      const crossbtn = document?.getElementsByClassName('cross-btn')[0];
      const socialcontainer = document?.getElementsByClassName('social-container')[0];
     
      connectbtn?.addEventListener('click', () => {
        console.log('clicked connect btn');
        // console.log(socialcontainer.classList.value)
        const socialcontainer = document?.querySelectorAll('.social-container');
        socialcontainer.forEach((con)=>{
          con.classList.add('visible');
        })
        // socialcontainer.classList.toggle('visible');
      });
      
      crossbtn?.addEventListener('click', () => {
          socialcontainer.classList.remove('visible')
      });
      }


    
  });

  

    

    return(
        <div className="hero__container">
            <div className="hero__container__one">
                <h1 className="text-4xl font-bold w-[90%]">Your Gateway to Exceptional Living and Business Spaces</h1>
                <p className="text-justify w-[80%]">Explore a curated collection of residential, commercial, and plot listings designed to cater to every aspect of your lifestyle and business needs. Your perfect property is just a click away.</p>
            </div>
            <div className="hero__container__two">

            <div class="container-f">
    <h2>Get in touch</h2>
    {/* <p>
      Feel free to contact me about anything related to Web Development.
    </p> */}
    <form class="contact-form">
      <div class="input-area">
        <input type="text" placeholder="Your name"/>
      </div>
      <div class="input-area">
        <input type="email" placeholder="Email address" />
      </div>
      <div class="input-area">
        <input type="text" placeholder="Subject"/>
      </div>
      <div class="input-area h-less h-80">
        <textarea placeholder="Your message"></textarea>
      </div>
      <button class="sendbtn">Send</button>
    </form>
  </div>
  <div class="social-container">
    <div class="custom-social-container">
      <p>Contact me on</p>
      <div className="flex phone gap-x-2">
      <div className="text-black font-bold">9999261355, </div>
      <div className="text-black font-bold"> 9999261355</div>
      </div>
      <button class="cross-btn"><i class="fas fa-times"></i></button>
      <ul>
        <li>
          <a href="https://instagram.com/" target="_blank" rel="nofollow">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank" rel="nofollow">
            <i class="fab fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="https://facebook.com/" target="_blank" rel="nofollow">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank" rel="nofollow">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/" target="_blank" rel="nofollow">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <button class="connect-btn">
    Get Connected
  </button>


            </div>
        </div>
    )
}


