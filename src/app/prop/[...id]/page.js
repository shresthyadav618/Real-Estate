
import { headers } from "next/headers";
import PropertyId from "./PropertyId";



export async function generateMetadata(){

    

    const heads = await headers();

    const pathname = heads.get('next-url');
    if(!pathname){
        return {
            title : 'Prime Assoicates Property',
            description : 'This is a property listed on Prime Assoicates Group'
        }
    }
    const domain = heads.get('host') || "";
    const fullUrl = heads.get('referer') || "";
    console.log('THE PATHNAME IS : ',pathname,domain,fullUrl);
    // const BASE_URL = 'http://localhost:3001';
    const BASE_URL = 'https://www.primeassociatesgroup.com';
    const _id = pathname?.split('/')[2];
    console.log('THE ID IS : ',_id);
    const res = await fetch(`${BASE_URL}/api/property/getById`,{
        method : 'POST',
        body : JSON.stringify(_id),
        headers : {'Content-Type' : 'application/json'}
    });
    const response = await res.json();
    const propertyName = response?.propertyDetail?.name;

    return {
        title : propertyName,
        description : `The Property ${propertyName} is listeed Prime Associates Group`,
    }
    
  }

export default function Page(){
    return (
        <>
        <PropertyId/>
        </>
    )
}