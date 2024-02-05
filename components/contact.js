"use client";
import Image from "next/image";
import { useState } from "react";
import contactImage from "../assets/cf.jpg";
import "./styles/contact.css";
export default function Contact() {
  const BASE_URL = "https://prime-associates-real.vercel.app";
  // const BASE_URL = 'http://localhost:3001';

  const [data, changeData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  });

  const [err, changeErr] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    if (
      data.firstName == "" ||
      data.lastName == "" ||
      data.email == "" ||
      data.number == "" ||
      data.message == ""
    ) {
      alert("Please fill all the details");
      changeErr("Please fill all the details");
      return;
    }
    console.log("the formBody is : ", data);
    const res = await fetch(BASE_URL + "/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      console.log("Email sent successfully");
      alert("Email sent successfully");
      changeData({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        message: "",
      });
    } else {
      console.log("There was an error sending email");
    }
  }

  return (
    <div className="contact__container">
      <div className="contact__image">
        {/* <div> */}
        <Image src={contactImage}></Image>
        {/* </div> */}

        <div className="content__image">
          <h1 className="font-bold text-3xl ">
            Are you looking for a dream home?
          </h1>
          <p>We can help you relize your dream of a new home</p>
        </div>
      </div>
      <div className="form__container mt-2">
        <div className="text-2xl font-bold">
          {" "}
          <i class="fa-regular fa-envelope"></i> <h1>CONTACT US</h1>{" "}
        </div>
        <form className="flex flex-col form">
          <div className="flex">
            <input
              type="text"
              required="true"
              placeholder="First Name"
              onChange={(e) => {
                changeData((prev) => {
                  return { ...prev, firstName: e.target.value };
                });
              }}
            ></input>
            <input
              type="text"
              required="true"
              placeholder="Last Name"
              onChange={(e) => {
                changeData((prev) => {
                  return { ...prev, lastName: e.target.value };
                });
              }}
            ></input>
          </div>

          <div className="flex">
            <input
              type="email"
              required="true"
              placeholder="Your Email"
              onChange={(e) => {
                changeData((prev) => {
                  return { ...prev, email: e.target.value };
                });
              }}
            ></input>
            <input
              type="number"
              required="true"
              placeholder="Phone Number"
              onChange={(e) => {
                changeData((prev) => {
                  return { ...prev, number: e.target.value };
                });
              }}
            ></input>
          </div>

          <textarea
            type="text"
            required="true"
            placeholder="Enter Message or Your Query"
            onChange={(e) => {
              changeData((prev) => {
                return { ...prev, message: e.target.value };
              });
            }}
          ></textarea>
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
