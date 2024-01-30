'use client'
import { useSession } from "next-auth/react";
import Header from "../../../components/Header";
// import dynamic from "next/dynamic";
// const DynamicHeader = dynamic(()=>import( "../../../components/Header"),{ssr:false})


export default function Profile(){
    const {data : session} = useSession();
    return (
        <>
        {/* <DynamicHeader/> */}
        <Header/>
        <h1>Welcome {session?.user?.name}</h1>
        

        </>
    )
}