'use client';
import { usePathname } from "next/navigation";

export default function property(){

    const pathname = usePathname();
    const type = pathname.split('/')[2].toString();
    
  return (
    <div>You are viewing {type}</div>
  )  
}