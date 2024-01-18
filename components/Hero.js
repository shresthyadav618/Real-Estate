import "./Header.css";
export default function Hero(){
    return(
        <div className="hero__container">
            <div className="hero__container__one">
                <h1 className="text-4xl font-bold">Your Gateway to Exceptional Living and Business Spaces</h1>
                <p className="text-justify w-[90%]">Explore a curated collection of residential, commercial, and plot listings designed to cater to every aspect of your lifestyle and business needs. Your perfect property is just a click away.</p>
            </div>
            <div className="hero__container__two">
              <div className="form__container">
                <div className="text-3xl font-bold">Book An Appointment</div>
                <form className="flex flex-col">
                    <div className="flex">
                        <input placeholder="First Name"></input>
                        <input placeholder="Last Name"></input>
                    </div>

                    <div className="flex">
                        <input placeholder="Your Email"></input>
                        <input placeholder="Phone Number"></input>
                    </div>

                    <textarea placeholder="Enter Message or Your Query"></textarea>

                </form>
              </div>
            </div>
        </div>
    )
}