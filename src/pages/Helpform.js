import React, { useState } from "react";
import "../css/cssfiles/helpform.css";
import Header from "../partials/Header";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Helpform = () => {
  const [loc, setloc] = useState("");
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Error");
    }
    const axios = require("axios");
  }

  const [formdata, setformdata] = useState({
    FName: "",
    LName: "",
    Gender: "",
    Age: "",
    Phone: "",
    Email: "",
    long: "",
    lat: "",
    Place: "",
    toh: "",
    Evacuated: false,
    FullAddress: "",
    Timestamp: new Date().toLocaleTimeString("en-US"),
  });
  function showPosition(position) {
    const options = {
      method: "GET",
      url: "https://maps.googleapis.com/maps/api/geocode/json",
      params: {
        latlng: position.coords.latitude + "," + position.coords.longitude,

        key: "AIzaSyCu1YXEvttfZdCaxtYBSgcX7M1EKD5cdV0",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setloc(`${response.data.results[0].formatted_address}`);
        setformdata({
          ...formdata,
          FullAddress: response.data.results[0].formatted_address,
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  const SendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "HelpForm"), formdata);
      console.log("Document written with ID: ", docRef.id);
      toast.success("Help registered , We will get back to you soon..");
    } catch (error) {
      toast.error("Currently We are down , try after some time");
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Header />
      <div className="bg-back" style={{ padding: "60px" }}></div>
      <div className="forms">
        <div class="form">
          <div class="title">Welcome</div>
          <div class="subtitle">Let us know Your Problem!</div>
          <div class="input-container ic1">
            <input
              onChange={(e) =>
                setformdata({ ...formdata, FName: e.target.value })
              }
              id="firstname"
              class="input"
              type="text"
              placeholder=""
              required
            />
            <div class="cut"></div>
            <label for="firstname" class="placeholder">
              First name
            </label>
          </div>
          <div class="input-container ic2">
            <input
              onChange={(e) =>
                setformdata({ ...formdata, LName: e.target.value })
              }
              id="lastname"
              class="input"
              type="text"
              placeholder=""
              required={true}
            />
            <div class="cut"></div>
            <label for="lastname" class="placeholder">
              Last name
            </label>
          </div>
          <div class="input-container ic2">
            <input
              onChange={(e) =>
                setformdata({ ...formdata, Gender: e.target.value })
              }
              id="gender"
              class="input"
              type="text"
              placeholder=""
              required={true}
            />
            <div class="cut"></div>
            <label for="gender" class="placeholder">
              Gender
            </label>
          </div>
          <div class="input-container ic2">
            <input
              onChange={(e) =>
                setformdata({ ...formdata, Email: e.target.value })
              }
              id="email"
              class="input"
              type="email"
              placeholder=""
            />
            <div class="cut cut-short"></div>
            <label for="email" class="placeholder">
              Email
            </label>
          </div>
          <div class="input-container ic2">
            <input
              min={0}
              onChange={(e) =>
                setformdata({ ...formdata, Age: e.target.value })
              }
              id="Age"
              class="input"
              type="number"
              placeholder=""
              required
            />
            <div class="cut "></div>
            <label for="Age" class="placeholder">
              Age
            </label>
          </div>
          <div class="input-container ic2">
            <input
              maxLength={10}
              onChange={(e) =>
                setformdata({ ...formdata, Phone: e.target.value })
              }
              id="Phone"
              class="input"
              type="tel"
              placeholder=""
              required
            />
            <div class="cut cut-short"></div>
            <label for="Phone" class="placeholder">
              Phone
            </label>
          </div>
          <div class="input-container ic2">
            <input
              onChange={(e) =>
                setformdata({ ...formdata, toh: e.target.value })
              }
              id="toh"
              class="input"
              type="text"
              placeholder=""
              required
            />
            <div class="cut" style={{ paddingRight: "90px" }}></div>
            <label for="toh" class="placeholder">
              Help Category
            </label>
          </div>
          <div class="input-container ic2">
            <input
              onChange={(e) =>
                setformdata({ ...formdata, Place: e.target.value })
              }
              id="Place"
              class="input"
              type="text"
              placeholder=""
              required
            />
            <div class="cut" style={{ paddingRight: "90px" }}></div>
            <label for="Place" class="placeholder">
              Place of Help
            </label>
          </div>
          <div class="input-container ic2 mb-8">
            <input
              id="text"
              style={{ marginBottom: "10px" }}
              class="input"
              defaultValue={loc}
              type="text"
              placeholder=""
              required
            />
            <div class="cut"></div>
            <label for="email" class="placeholder">
              Location
            </label>
            <button
              onClick={getLocation}
              className="btn-sm mr-3 bg-yell font-semibold text-back hover:text-gray-900 px-5 flex items-center transition duration-150 ease-in-out"
            >
              Locate Me
            </button>
          </div>
          <button type="text" class="submit" onClick={SendData}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Helpform;
