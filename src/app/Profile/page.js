'use client'
import { useSession } from "next-auth/react";
import Header from "../../../components/Header";



export default function Profile(){
    const {data : session} = useSession();
    return (
        <>
        <Header/>
        <h1>Welcome {session?.user?.name}</h1>
        

        </>
    )
}