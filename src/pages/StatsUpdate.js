import React, { useState, useEffect } from "react";
import Header from "../partials/Header";
import "../css/cssfiles/helpform.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import toast, { Toaster } from "react-hot-toast";

const StatsUpdate = () => {
  const history = useHistory();
  const [formdata, setformdata] = useState({
    Injured: 0,
    Evacuated: 0,
    Deaths: 0,
    Timestamp: new Date().toLocaleTimeString("en-US"),
  });

  const sendData = async () => {
    try {
      const docRef = await addDoc(collection(db, "stats"), formdata);
      console.log("Document written with ID: ", docRef.id);
      toast.success("Stats Updated");
    } catch (error) {
      toast.error("Stats Can't Update");
      console.log(error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        history.push("/");
        // ...
      }
    });
  }, []);

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
      {/* <div className='bg-back' style={{ padding: "60px" }}>

            </div> */}
      <div className="forms" style={{ height: "100vh" }}>
        <div className="form">
          <div className="title">Update Stats</div>
          <div className="subtitle">Let us know whats the current senerio?</div>
          <div className="input-container ic1">
            <input
              onChange={(e) =>
                setformdata({ ...formdata, Injured: e.target.value })
              }
              id="firstname"
              className="input"
              type="number"
              placeholder=""
              required
            />
            <div className="cut"></div>
            <label for="firstname" className="placeholder">
              Injured
            </label>
          </div>
          <div className="input-container ic1">
            <input
              onChange={(e) =>
                setformdata({ ...formdata, Evacuated: e.target.value })
              }
              id="firstname"
              className="input"
              type="number"
              placeholder=""
              required
            />
            <div className="cut"></div>
            <label for="firstname" className="placeholder">
              Evacuated
            </label>
          </div>
          <div className="input-container ic1">
            <input
              onChange={(e) =>
                setformdata({ ...formdata, Deaths: e.target.value })
              }
              id="firstname"
              className="input"
              type="number"
              placeholder=""
              required
            />
            <div className="cut"></div>
            <label for="firstname" className="placeholder">
              Deaths
            </label>
          </div>
          <div className="ic1">
            <p className="text-red-600 font-semibold cursor-pointer">
              Note : If there is any discripency kindly{" "}
              <a
                href="mailto:hello@astrum.com"
                target={"_blank"}
                className="text-blue-600"
              >
                mail us
              </a>
            </p>
          </div>
          <button type="text" className="submit" onClick={sendData}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default StatsUpdate;
