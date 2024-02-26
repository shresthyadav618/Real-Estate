import Contact from "./contact"

export const metadata = {
    title: 'Contact Prime Associates Group',
    description: 'Prime Associates Group : CONTACT US ',
    metadataBase : new URL('https://primeassociatesgroup.com/contact')
  }

export default function Page(){
    return (
        <>
        <Contact/>
        </>
    )
}