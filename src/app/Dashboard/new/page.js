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
import { ReactSortable } from "react-sortablejs";
import { PuffLoader } from "react-spinners";
import "../../../../components/styles/dashboard.css";
// import { useRouter } from "next/navigation";
export default function AddProperty() {
  const [data, changeData] = useState({
    name: "",
    description: "",
    project_type: "",
    sub_type: "",
    images: [],
    floorPlansImages: [],
    amenities: [],
    propertyCategory: "Residential",
    subCategory: [],
    details: "",
    price : ""
  });
  const categories = [
    { name: "Residential" },
    { name: "Commercial" },
    { name: "Rental" },
    { name: "Resale" },
    { name: "Plot" },
  ];

  const subCategories = { Residential : [
    {name : 'Ready To Move' , value : 'rtm'} , { name : 'New Launches' , value : 'nl' } , {name : 'Under Construction' , value : 'uc'}
  ] ,
  Commercial : [
    {name : 'Ready To Move' , value : 'rtm'} , { name : 'New Launches' , value : 'nl' } , {name : 'Under Construction' , value : 'uc'}
  ] ,
  Rental : [
    {name : 'Commercial For Rental' , value : 'cfrental' } , {name : 'Residential for Rental' , value : 'cfresale'}
  ],
  Resale : [
    {name : 'Residential For Resale' , value : 'rfrental' } , {name : 'Commercial for Resale' , value : 'rfresale'}
  ],

}





function handleSubmit(e){
    console.log('Submitting form');

}

function updateImagesOrder(){
    console.log(arguments[0]);
    changeData((prev)=>{
        return {...prev, images : arguments[0]}
    })
}
const check = false;
const [loading,setLoading] = useState(false);
const newPropertyCategory =  (data.propertyCategory);
console.log(newPropertyCategory);

console.log(subCategories[newPropertyCategory]);




  return (
    <div>
      <form className="flex flex-col w-[60%] gap-y-4">
        {check ? (
          <div className="p-[10px]">Edit Property</div>
        ) : (
          <div className="p-[10px]">New Property</div>
        )}
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
        <label className="ml-2 btn font-normal cursor-pointer flex flex-col items-center justify-center gap-y-2">
          {" "}
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
          Upload
          <input
            onChange={(e) => {
              uploadImages(e);
            }}
            type="file"
            className="hidden"
          ></input>
        </label>

        <div className="relative">
          {loading && (
            <div className="p-2">
              <PuffLoader color="#36d7b7" />
            </div>
          )}
          <div className="uploaded__images">
            <ReactSortable list={data.images} setList={updateImagesOrder}>
              {data?.images?.length > 0 &&
                data?.images?.map((imageContent) => {
                  if (imageContent)
                    return (
                      <img
                        src={imageContent}
                        width={"60px"}
                        height={"60px"}
                      ></img>
                    );
                })}
            </ReactSortable>
          </div>
        </div>

        <label htmlFor="desc">Description</label>
        <textarea
          value={data.description}
          rows={"40"}
          onChange={(e) => {
            changeData((prev) => {
              return { ...prev, description: e.target.value };
            });
          }}
          placeholder="Description"
          name="desc"
        ></textarea>
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

        {check ? (
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Edit This Product
          </button>
        ) : (
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Save
          </button>
        )}
      </form>
    </div>
  );
}
