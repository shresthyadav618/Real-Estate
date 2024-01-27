'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "../../../../../components/Header";
import "../../../../../components/styles/dashboard.css";
export default function deleteProduct(){

    const pathname = usePathname();
    const _id = pathname.split('/')[3].toString();
    // const Router = useRouter();

    console.log('the id is : ',_id);

    async function handleDelete(){
        const response = await fetch('http://localhost:3001/api/property/delete',{
            method : 'POST',
            body : JSON.stringify(_id),
            headers : {'Content-Type': 'application/json'}
        })

        if(response.ok){
            const res = await response.json();
            console.log('the response was ',res);
            console.log('Deleted');
            alert('Deleted successfully');
            window.location.href = '/Dashboard'
            // Router.push('/Dashboard');
        }else{
            const res = await response.json();

            console.log('Failed to delete',res);
        }
    }

    return (
        <>
        <Header/>
        <div className="flex flex-col gap-y-2 w-[80vw] mx-auto my-8">
            <div className="text-xl font-bold">Do You Really Want to Delete this Property?</div>
            <div className="flex gap-x-2 text-2xl font-bold"><button className="xx" onClick={handleDelete}>Yes</button> <Link className="xx" href={`/Dashboard`}>No</Link></div>
        </div>
        </>
    )



}