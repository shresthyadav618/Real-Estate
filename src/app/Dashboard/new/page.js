// description
// project_type
// sub_type:
// images
// floorPlansImages
// amenities
// propertyCategory
// subCategory
// details
"use client";
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { ReactSortable } from "react-sortablejs";
import { PuffLoader } from "react-spinners";
import Header from "../../../../components/Header";
import "../../../../components/styles/dashboard.css";
// import { useRouter } from "next/navigation";
export default function AddProperty() {
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

}
  const [data, changeData] = useState({
    name: "",
    description: "",
    images: [],
    floorPlansImages: [],
    amenities: "",
    propertyCategory: "Residential",
    subCategory: "rtm",
    details: [],
    price : "",
    area : "",
    location : ""
  });
  const categories = [
    { name: "Residential" },
    { name: "Commercial" },
    { name: "Rental" },
    { name: "Resale" },
    { name: "Plot" },
  ];

  


async function handleSubmit(e){
  e.preventDefault();
  console.log('Submitting form');
  console.log('the data submitted in the api req ',data);
  const res = await fetch('http://localhost:3001/api/property/add',{
    headers : {'Content-Type': 'application/json'},
    method : 'POST',
    body : JSON.stringify(data),
    
  });
  console.log('the response is : ',res);
  if(res.ok){
  const jsonRes = await res.json();
  console.log('received the json response',jsonRes);
  }else{
    console.log('entered the error path')
    const errorRes = await res.json();
    console.log('Received some error',errorRes);
  }

}
const [loading,setLoading] = useState(false);
const [loading1,setLoading1] = useState(false);
const [loading2,setLoading2] = useState(false);
async function uploadImages(e){
  console.log(e.target.name);
  if(e.target.name=="images"){
    setLoading1(true);
  }else{
    setLoading2(true);
  }
  console.log('UPLOADING IMAGES');
  setLoading(true);
  console.log(e);
  const files = e.target?.files;
  console.log(files);
  if(files?.length>0){
   const dataForm = new FormData();
   for(const file of files){
      dataForm.append('file',file);
   }
   const response = await fetch('http://localhost:3001/api/upload',{
      method : 'POST',
      body : dataForm
   });
   console.log('the response is : ',response);
   const bodyResponse = await response.json();
   console.log('the json response is : ',bodyResponse);
   if(e.target.name=="images"){
    console.log(data.images);
   const newImages = data.images? data.images: [];
   newImages.push(bodyResponse[0]);
   console.log('the new images are : ',newImages);
   
   changeData((prev)=>{
      
      
      return {
          ...prev , images : newImages
      }
   })
   }else{
    console.log(data.floorPlansImages);
   const newImages = data.floorPlansImages? data.floorPlansImages: [];
   newImages.push(bodyResponse[0]);
   console.log('the new images are : ',newImages);
   
   changeData((prev)=>{
      
      
      return {
          ...prev , floorPlansImages : newImages
      }
   })
   }
   console.log(bodyResponse);
   console.log('the updated data is : ',data);
  
  }else{
      console.log('No file found')
  } 
  if(e.target.name=="images"){
    setLoading1(false);
  }else{
    setLoading2(false);
  }
  }

function updateImagesOrder(){
    // console.log(arguments[0]);
    // changeData((prev)=>{
    //     return {...prev, images : arguments[0]}
    // })
}
const check = false;

const newPropertyCategory =  (data.propertyCategory);
console.log(newPropertyCategory);

console.log(subCategories[newPropertyCategory]);


const [key,changeKey] = useState('');
const [value,changeValue] = useState('');
console.log(key,value);
console.log(data.details);

function handleKeyValueAdd(e){
e.preventDefault();

const pvkav = data.details;
pvkav.push({[key]:value})
changeData((prev)=>{
  return {...prev, details : pvkav};
})
changeKey("");
changeValue("");
}


  return (
    <>
    <Header/>
    <div className="form__property__add">
    {check ? (
          <div className="p-[10px]">Edit Property</div>
        ) : (
          <div className=" font-bolder text-4xl mb-4 pl-[10px]">New Property</div>
        )}
      <form className="flex flex-wrap w-[100%] dform">
        
        <div>
        <label htmlFor="name">Property Name</label>
        <input
          value={data.name}
          onChange={(e) => {
            changeData((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
          placeholder="Property Name"
          name="name"
        ></input>

        <label>Category</label>
        <select
          onChange={(e) => {
            console.log("trying to change propertyCategory", e.target.value);
            changeData((prev) => {
              return { ...prev, propertyCategory: e.target.value };
            });
            console.log("changed propertyCategory", data.propertyCategory);
          }}
          value={data.propertyCategory}
        >
          {/* <option value={""}>Uncategorized</option>{" "} */}
          {categories &&
            categories.map((cat) => {
              return <option value={cat.name}>{cat.name}</option>;
            })}{" "}
        </select>

        {data.propertyCategory && data.propertyCategory!=="Plot" && (
          <>
            <label>Sub-Category</label>
            <select
              onChange={(e) => {
                console.log("trying to change subCategory", e.target.value);
                changeData((prev) => {
                  return { ...prev, subCategory: e.target.value };
                });
                console.log("changed propertyCategory", data.subCategory);
              }}
              value={data.subCategory}
            >
              
              
              {subCategories && data.propertyCategory && 
                subCategories[data.propertyCategory].map((cat) => {
                  return <option value={cat.value}>{cat.name}</option>;
                })}
            </select>
          </>
        )}

        {/* {propertyToFill &&
          propertyToFill.map((elm) => {
            console.log(elm);
            console.log(typeof elm.value);
            return (
              <div className="flex gap-x-2  flex-col">
                {" "}
                <label>{elm.name}</label>{" "}
                <select
                  onChange={(e) => {
                    handlePropertyChange(e, elm.name);
                  }}
                  value={Properties[elm.name]}
                >
                  {" "}
                  <option>Please select</option>{" "}
                  {elm && Array.isArray(elm.value) ? (
                    elm.value.map((v) => {
                      console.log(v);
                      return <option value={v}>{v}</option>;
                    })
                  ) : (
                    <option value={elm.value}>{elm.value}</option>
                  )}{" "}
                </select>{" "}
              </div>
            );
          })} */}

        <label htmlFor="photos">Photos</label>
        <label className=" btn__property font-normal cursor-pointer flex  items-center justify-center gap-x-4">
          {" "}
          Upload
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
          
          <input name="images"
            onChange={(e) => {
              uploadImages(e);
            }}
            type="file"
            className="hidden"
          ></input>
        </label>

        <div className="relative">
          {loading1 && (
            <div className="p-2">
              <PuffLoader color="#36d7b7" />
            </div>
          )}
          <div className="uploaded__images flex ">
            <ReactSortable list={data.images} setList={updateImagesOrder}>
              {data?.images?.length > 0 &&
                data?.images?.map((imageContent) => {
                  if (imageContent)
                    return (
                  <div className="relative ">
                  
                      <img
                        src={imageContent}
                        width={"160px"}
                        height={"160px"}
                      ></img>
                      <i className="fa-solid fa-trash absolute text-black" onClick={(e)=>{
                        changeData((prev)=>{
                          return {...prev , images : data.images.filter((imgc)=>{
                            return imgc!==imageContent;
                          })}
                        })
                      }}></i>
                      </div>
                    );
                })}
            </ReactSortable>
          </div>
        </div>


        <label htmlFor="photos">Floor Plan Photos</label>
        <label className=" btn__property font-normal cursor-pointer flex  items-center justify-center gap-x-4">
          {" "}
          Upload
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
         
          <input name="floorimages"
            onChange={(e) => {
              uploadImages(e);
            }}
            type="file"
            className="hidden"
          ></input>
        </label>

        <div className="relative">
          {loading2 && (
            <div className="p-2">
              <PuffLoader color="#36d7b7" />
            </div>
          )}
          <div className="uploaded__images">
            <ReactSortable list={data.floorPlansImages} setList={updateImagesOrder}>
              {data?.floorPlansImages?.length > 0 &&
                data?.floorPlansImages?.map((imageContent) => {
                  if (imageContent)
                    return (
                  <div className="relative">
                      <img
                        src={imageContent}
                        width={"160px"}
                        height={"160px"}
                      ></img>
                      <i className="fa-solid fa-trash absolute " onClick={(e)=>{
                        changeData((prev)=>{
                          return {...prev , floorPlansImages : data.floorPlansImages.filter((imgc)=>{
                            return imgc!==imageContent;
                          })}
                        })
                      }}></i>
                      </div>
                    );
                })}
            </ReactSortable>
          </div>
        </div>

        
        <label htmlFor="price">Price (in RS)</label>
        <input
          value={data.price}
          onChange={(e) => {
            changeData((prev) => {
              return { ...prev, price: e.target.value };
            });
          }}
          placeholder="Price"
          name="price"
        ></input>


        <label htmlFor="area">Area (in sqft)</label>
        <input
          value={data.area}
          onChange={(e) => {
            changeData((prev) => {
              return { ...prev, area: e.target.value };
            });
          }}
          placeholder="Area"
          name="area"
        ></input>

        <label htmlFor="location">Location</label>
        <input
          value={data.location}
          onChange={(e) => {
            changeData((prev) => {
              return { ...prev, location: e.target.value };
            });
          }}
          placeholder="Location"
          name="location"
        ></input>

{check ? (
          <button type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }} className="btn__property "
          >
            Edit This Product
          </button>
        ) : ( 
          <button type="submit" className="btn__property addGray first__edit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Save
          </button>
        )}

        </div>
          

          <div>

          <label htmlFor="desc">Description</label>
        <ReactQuill
          value={data.description}
          rows={"10"}
          onChange={newValue => changeData((prev)=>{return {...prev,description:newValue}})}
          placeholder="Description"
          name="desc" className="textarea"
        ></ReactQuill>    
            
        <label htmlFor="amenities">Amenities</label>
        <ReactQuill className="textarea"
          value={data.amenities}
          rows={"10"}
          onChange={newValue => changeData((prev)=>{return {...prev,amenities:newValue}})}
          placeholder="Amenities"
          name="amenities"
        ></ReactQuill>



{/* <div></div> <div> </div> */}

       <div className="flex flex-col gap-y-4 mb-10">
       <label htmlFor="details">Details</label>
       {data.details!=[] && data.details.map((elm,index)=>{
        let newHTML = '';
        for(const newKey in elm){
          if(elm.hasOwnProperty(newKey)){
            console.log(newKey,elm[newKey]);
            newHTML = <div className="flex gap-x-2 items-center ">  <input value={newKey} onChange={(e)=>{
              changeData((prev)=>{
                let newDetails = data.details;
                newDetails[index] = {[e.target.value] : elm[newKey]};
                return {...prev, details : newDetails};
              })
            }} ></input> <input onChange={(e)=>{
              changeData((prev)=>{
                let newDetails = data.details;
                newDetails[index] = {[newKey] : e.target.value};
                return {...prev  , details : newDetails};
              })
            }} value={elm[newKey]}></input>   <button type="button" className="btn__property" onClick={()=>{
              changeData((prev)=>{
                return {...prev, details : data.details.filter((el,id)=>{return id!==index})}
              })
              
            }}>Delete</button> </div>
          }
        }
        // return <div className="flex gap-x-4">    </div>
        return newHTML;
      })}
       <input value={key} name="details" placeholder="Write the Key" onChange={(e)=>{
        changeKey(()=>{return e.target.value});
       }}></input>
       <input value={value} name="details" placeholder="Write the Value" onChange={(e)=>{
        changeValue(()=>{return e.target.value});
       }}></input>
       <button type="button" className="btn__property" onClick={(e)=>{handleKeyValueAdd(e)}}>Add Key-Value Pair</button>
       </div>

       {check ? (
          <button type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }} className="btn__property"
          >
            Edit This Product
          </button>
        ) : ( 
          <button type="submit" className="btn__property addGray second__edit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Save
          </button>
        )}
        
          </div>


      </form>
    </div>
    </>
  );
}
