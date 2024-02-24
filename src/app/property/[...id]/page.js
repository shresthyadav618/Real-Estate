'use client';
import { PropertiesContext } from "@/propertiesProvider/propertiesProvider";
// import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import Footer from "../../../../components/Footer";
import Header from "../../../../components/Header";
import NewHeader from "../../../../components/NewHeader";
import FeaturedChild from "../../../../components/featuredChild";
import "../../../../components/styles/featured.css";
import '../../../../components/styles/property.css';
// const DynamicFooter = dynamic(()=>import( "../../../../components/Footer"),{ssr:false})
// const DynamicHeader = dynamic(()=>import( "../../../../components/Header"),{ssr:false})
export default  function Property(){
    const subCategories = { Residential : [
        {name : 'Ready To Move' , value : 'rtm'} , { name : 'New Launches' , value : 'nl' } , {name : 'Under Construction' , value : 'uc'}
      ] ,
      Commercial : [
        {name : 'Ready To Move' , value : 'rtm'} , { name : 'New Launches' , value : 'nl' } , {name : 'Under Construction' , value : 'uc'}
      ] ,
      Rental : [
        {name : 'Commercial For Rental' , value : 'cfrental' } , {name : 'Residential for Rental' , value : 'rfrental'}
      ],
      Resale : [
        {name : 'Residential For Resale' , value : 'rfresale' } , {name : 'Commercial for Resale' , value : 'cfresale'}
      ],
      Plot : [ {name:null,value:null} ]
    
    }
    const propertyContext =  useContext(PropertiesContext);
    const pathname = usePathname();
    const type = pathname.split('/')[2].toString();
    const [data,changeData] = useState(propertyContext);
    const [loader,setLoader] = useState(true);
    const [search,setSearch] = useState(null);
    const [searchLocation,setSearchLocation] = useState(null);
    console.log('search value ',search);
    const [sub,changeSub] = useState(subCategories[type][0].value);
    console.log('the sub category is : ',sub);
    if(type=='Plot' && sub!=='nl'){
        changeSub('nl');
    }
    useEffect(()=>{
        setLoader(true);
        changeData(()=>{
            return propertyContext?.filter((elm)=>{
                console.log(elm);
                return elm.propertyCategory == type && elm.subCategory == sub;
            })
        });
        setLoader(false);
    },[propertyContext,type,sub]);
    console.log('the property data is : ',data , ' and the context was ',propertyContext);
    if(typeof(window) !== "undefined"){
        document?.body?.classList?.add('addBg');
        document?.body?.classList?.remove('addBlack');
      }

      if(loader){
        return <div className="h-[100vh] w-[100vw] flex justify-center items-center"><ScaleLoader color="#36d7b7" /></div>
      }

      function handleSearchButtonClick(){
        if(!propertyContext){return;}
        const newData = propertyContext.filter((property)=>{
          const lowerSearch = property.name.toLowerCase();
          const lowerSearchLocation = property.location.toLowerCase();
          console.log('Search location and value',search,searchLocation);
          
          if(( (search==" " && searchLocation==" ") || (!search && !searchLocation) )&&  property.propertyCategory == type && property.subCategory == sub){
            return true;
          }else
          if(search && search!=" " && searchLocation && searchLocation!=" "){
            console.log('Inside this');
            if( (lowerSearch?.includes(search?.toLowerCase()) && lowerSearchLocation?.includes(searchLocation?.toLowerCase()) ) && property.propertyCategory == type && property.subCategory == sub ){
              return true;
            }
          }else {
          if(search && search.length>0 &&  (lowerSearch?.includes(search?.toLowerCase())) && property.propertyCategory == type && property.subCategory == sub ){
            return true;
          }else if(searchLocation && searchLocation.length>0 && lowerSearchLocation?.includes(searchLocation?.toLowerCase()) && property.propertyCategory == type && property.subCategory == sub  ){
            return true;
          }

        }

        });
        changeData(newData);
      }
console.log('Value of data is : ',data);
  return (
    <>
    <NewHeader/>
    <Header add={true}/>

    {type!=='Plot' && <div className="toggle__property">
    <div>
    {  subCategories[type].map((elm)=>{
        console.log(elm);
        return <div key={elm.value+'property'} className={elm.value==sub ? 'onActive' : ''} onClick={()=>{
            changeSub(()=>{
                return elm.value;
            })
        }}>{elm.name}</div>
    })}
    </div>
    </div>}
   
    <div className={type==='Plot' ? "addSearchMargin search__property" : "search__property" }>
      
      <input placeholder="Property Name" onChange={(e)=>{setSearch(e.target.value)}} type="text" ></input>
      <input placeholder="Enter Location" onChange={(e)=>{setSearchLocation(e.target.value)}} type="text" ></input>
      <button onClick={handleSearchButtonClick} className="search__button">Search</button>
      </div> 

   

    <div className={type=='Plot'?'property__container addMargin':'property__container'}>
        {data && data!=[] && data.map((property)=>{
            return<>
             <FeaturedChild key={property._id+'property'} heading={property.name} addWid={true} location={property.location} img={property.images[0]} type={property.propertyCategory} area={property.area} price={property.price}  _id={property._id} />
            </>
        })}
        {(!data || data.length===0) &&  <h1 className="font-bold text-xl mb-10">
          Oops No Data found!
          </h1> }
    </div>
    <Footer addClr={true}/>
    </>
  )  
}