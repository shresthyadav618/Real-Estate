
'use client';
import { createContext, useEffect, useState } from "react";
// import { connect } from "../dbConfig/connectDB";
export const PropertiesContext = createContext();
// await connect();
export default function PropertiesProvider({children}){

    const [allProperties,changeAllProperties] = useState();
    // const BASE_URL = 'https://prime-associates-real.vercel.app';
    const BASE_URL = 'https://www.primeassociatesgroup.com';
    // const BASE_URL = 'http://localhost:3001';
// 
    useEffect(()=>{
        async function getProperties(){
            const res = await fetch(BASE_URL+'/api/property/getAll',{
                method : 'GET'
            });

            if(res.ok){
                const resJson = await res.json();
                console.log('RESPONSE AYUAAAA ABHAIIIIIIII : ',resJson);
                changeAllProperties(resJson.allProperties);
            }else{
                const resJson = await res.json();
                console.log('there was some error while fetching properties',resJson);
            }
        }
        getProperties();
    },[]);
    
    return ( <PropertiesContext.Provider value={allProperties}>{children}</PropertiesContext.Provider>)

}


