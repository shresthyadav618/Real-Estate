
import PropertyId from "./PropertyId";
// import { useId } from "./getPathId";

// import { _id } from "./PropertyId";
// import { useId } from "./getPathId";
import { headers } from "next/headers";




export async function generateMetadata(){

    

    const heads = await headers();
    console.log('THE HEADS IS : ',heads);
    const pathname = heads.get('next-url');
    if(!pathname){
        return {
            title : 'Properties Prime Associates Group',
            description : 'This are the  properties listed on Prime Assoicates Group'
        }
    }

    const _id = pathname?.split('/')[2];
    console.log('THE ID IS : ',_id);

    return {
        title : _id + ' Properties',
        description : `${_id} Properties are available on Prime Assoicates Group`,
    }
    
  }

export default function Page(){
    return (
        <>
        <PropertyId/>
        </>
    )
}