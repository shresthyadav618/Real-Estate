'use client'
import "./Header.css";
export default function Hero(){


    if(typeof window !== 'undefined'){
        const contactform = document?.querySelector('.contact-form');
    const container = document?.querySelector('.container-f');
    
    contactform?.addEventListener('submit', (event) => {
        event.preventDefault();
        container.innerHTML = '<p>Thanks for your message. <br /> I\'ll respond to you shortly</p>';
    });
    
    const connectbtn = document?.querySelector('.connect-btn');
    const crossbtn = document?.querySelector('.cross-btn');
    const socialcontainer = document?.querySelector('.social-container');
    
    connectbtn?.addEventListener('click', () => {
        socialcontainer.classList.toggle('visible')
    });
    
    crossbtn?.addEventListener('click', () => {
        socialcontainer.classList.remove('visible')
    });
    }

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


