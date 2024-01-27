
'use client';
import { createContext, useEffect, useState } from "react";
// import { connect } from "../dbConfig/connectDB";
// await connect();
export const PropertiesContext = createContext();
export default function PropertiesProvider({children}){

    const [allProperties,changeAllProperties] = useState();
    
    useEffect(()=>{
        async function getProperties(){
            const res = await fetch('http://localhost:3001/api/property/getAll',{
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


