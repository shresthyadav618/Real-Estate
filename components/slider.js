'use client'
import Image from "next/image"
import b1 from "../assets/b1.png"
import b10 from "../assets/b10.png"
import b11 from "../assets/b11.png"
import b12 from "../assets/b12.png"
import b2 from "../assets/b2.png"
import b3 from "../assets/b3.png"
import b4 from "../assets/b4.png"
import b5 from "../assets/b5.png"
import b6 from "../assets/b6.png"
import b7 from "../assets/b7.png"
import b8 from "../assets/b8.png"
import b9 from "../assets/b9.png"
import "./styles/slider.css"

export default function slider(){
    return (
        <div className="flex justify-center  w-screen p-[20px] max-w-full container gap-x-4">
      <div className="first__container flex flex-col w-[25%] gap-y-4 mt-[25px]">
        <h1 className="font-bold text-4xl">Innovative Minds, Exceptional Builds</h1>
        <div className="font-semibold">
        Embark on a journey with Mohit Yadav and explore the talent and proficiency of our renowned builder network.
        </div>
        <div className="text-blue-900 font-bold flex gap-x-2">
          <div>Meet Our Skilled Builders</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>

      <div className="second__container relative flex flex-col w-[60%]  p-[20px]  gap-y-6 text-black">


        <div className="con1 flex h-[85px] justify-between relative text-black">  
           
            <div className="con1-in flex gap-x-4">
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b1} className="object-contain w-[160px] h-[60px] "></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >WhiteLand</h1>  </div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b2} className="object-contain w-[160px] h-[60px] " ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >LandMark</h1>  </div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b3} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >ElAn</h1>  </div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b4} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >M3M</h1>  </div>   </div> 
            </div>
    
            <div className="con1-in flex gap-x-4">
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b1} className="object-contain w-[160px] h-[60px] "></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >WhiteLand</h1>  </div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b2} className="object-contain w-[160px] h-[60px] " ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >LandMark</h1>  </div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b3} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >ElAn</h1>  </div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b4} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >M3M</h1>  </div>   </div> 
            </div>

            <div className="con1-in flex gap-x-4">
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b1} className="object-contain w-[160px] h-[60px] "></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >WhiteLand</h1>  </div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b2} className="object-contain w-[160px] h-[60px] " ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >LandMark</h1>  </div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b3} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >ElAn</h1>  </div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b4} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >M3M</h1>  </div>   </div> 
            </div> alt="No Image Found"

        </div>


        <div className="con2 flex h-[85px] justify-between relative">  
        
            <div className="con2-in flex gap-x-4">
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b5} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >AiplA</h1> </div>    </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b6} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >SmartWorld</h1> </div>    </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b7} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >DLF</h1> </div>    </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b8} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >BpTp</h1>  </div>    </div> 
            </div>
        
            <div className="con2-in flex gap-x-4">
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b5} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >AiplA</h1> </div>    </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b6} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >SmartWorld</h1> </div>    </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b7} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >DLF</h1> </div>    </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b8} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >BpTp</h1>  </div>    </div> 
            </div>

            <div className="con2-in flex gap-x-4">
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b5} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >AiplA</h1> </div>    </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b6} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >SmartWorld</h1> </div>    </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b7} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >DLF</h1> </div>    </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b8} className="object-contain w-[160px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >BpTp</h1>  </div>    </div> 
            </div>
       
        

        </div>


        <div className="con3 flex h-[85px] justify-between relative">  
            <div className="con3-in flex gap-x-4">
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b9} className="object-contain w-[60px] h-[60px]"></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >Conscient</h1>  </div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b10} className="object-contain w-[60px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >Paras</h1></div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b11} className="object-contain w-[60px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >GodRej</h1> </div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b12} className="object-contain w-[60px] h-[60px]"></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >EmaaR</h1>  </div>   </div>
            </div>

            <div className="con3-in flex gap-x-4">
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b9} className="object-contain w-[60px] h-[60px]"></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >Conscient</h1>  </div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b10} className="object-contain w-[60px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >Paras</h1></div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b11} className="object-contain w-[60px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >GodRej</h1> </div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b12} className="object-contain w-[60px] h-[60px]"></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >EmaaR</h1>  </div>   </div>
            </div>


            <div className="con3-in flex gap-x-4">
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b9} className="object-contain w-[60px] h-[60px]"></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >Conscient</h1>  </div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b10} className="object-contain w-[60px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >Paras</h1></div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b11} className="object-contain w-[60px] h-[60px]" ></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >GodRej</h1> </div>   </div>    
                <div className=" relative flex gap-x-2 bg-white  p-4 w-[300px]  justify-start rounded-xl "> <Image alt="No Image Found" src={b12} className="object-contain w-[60px] h-[60px]"></Image>   <div className="flex justify-center flex-col"> <h1 className="font-bold text-lg" >EmaaR</h1>  </div>   </div>
            </div>

           
        </div>



      </div>
    </div>
    )
}