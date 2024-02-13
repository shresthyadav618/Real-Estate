
'use client'
import { createContext, useState } from "react";
export const AgentContext = createContext();

  export default function AgentProvider({children}){
   
    const [agent,changeAgent] = useState([{img : '',name : "Mohit Yadav" , role : "Director , CEO , Founder" , since : "2018" , number : "9999261355", l1 :'' , l2: '' , l3 : '', l4 :''},{img : '',name : "Sumit Yadav" , role : "Exclusive Team Agent" , since : "2020" , number : "8448686123", l1 :'' , l2: '' , l3 : '', l4 :''},
    {img : '',name : "Sachin" , role : "Exclusive Team Agent" , since : "2020" , number : "9717922616", l1 :'' , l2: '' , l3 : '', l4 :''},
    {img : '',name : "Sandeep" , role : "Exclusive Team Agent" , since : "2020" , number : "9717532616", l1 :'' , l2: '' , l3 : '', l4 :''},
    {img : '',name : " Deepanshu" , role : "Exclusive Team Agent" , since : "2020" , number : "", l1 :'' , l2: '' , l3 : '', l4 :''},
    {img : '',name : "Sudheer" , role : "Exclusive Team Agent" , since : "2020" , number : "9698685685", l1 :'' , l2: '' , l3 : '', l4 :''},
    {img : '',name : "prahlad" , role : "Exclusive Team Agent" , since : "2020" , number : "9717532616", l1 :'' , l2: '' , l3 : '', l4 :''}]);

    return (<AgentContext.Provider value={agent}>{children}</AgentContext.Provider>);

  }
