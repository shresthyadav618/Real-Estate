import About from "./about"

export const metadata = {
    title: 'About Prime Associates Group',
    description: 'Prime Associates Group , a real estate agency which helps you to choose your Dream Home. Your Dream is one step away , visit US.',
    metadataBase : new URL('https://primeassociatesgroup.com/about')
  }


export default function Page(){
 return (
    <>
    <About/>
    </>
 )
}