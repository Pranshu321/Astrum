import React, { useState } from 'react'
import '../css/cssfiles/helpform.css'
import axios from "axios";
import Header from '../partials/Header';
import firebase from 'firebase/compat/app';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';

const Helpform = () => {
    const [loc, setloc] = useState("");
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("Error");
        }
    }


    const [formdata, setformdata] = useState({
        FName: "",
        LName: "",
        Gender: "",
        Age: "",
        Phone: "",
        Email: "",
        long: "",
        lat: ""
    });
    function showPosition(position) {
        setloc(`${position.coords.longitude} ${position.coords.latitude}`);
        setformdata({...formdata , lat:position.coords.latitude , long:position.coords.longitude});
    }

    const SendData = async () => {
        const docRef = await addDoc(collection(db, "HelpForm"), formdata);
        console.log("Document written with ID: ", docRef.id);
    }

    return (
        <>
            <Header />
            <div className='bg-back' style={{ padding: "60px" }}>

            </div>
            <div className='forms'>
                <div class="form">
                    <div class="title">Welcome</div>
                    <div class="subtitle">Let us know Your Problem!</div>
                    <div class="input-container ic1">
                        <input onChange={(e) => setformdata({ ...formdata, FName: e.target.value })} id="firstname" class="input" type="text" placeholder="" required />
                        <div class="cut"></div>
                        <label for="firstname" class="placeholder">First name</label>
                    </div>
                    <div class="input-container ic2">
                        <input onChange={(e) => setformdata({ ...formdata, LName: e.target.value })} id="lastname" class="input" type="text" placeholder="" required={true} />
                        <div class="cut"></div>
                        <label for="lastname" class="placeholder">Last name</label>
                    </div>
                    <div class="input-container ic2">
                        <input onChange={(e) => setformdata({ ...formdata, Gender: e.target.value })} id="gender" class="input" type="text" placeholder="" required={true} />
                        <div class="cut cut-short"></div>
                        <label for="email" class="placeholder">Gender</label>
                    </div>
                    <div class="input-container ic2">
                        <input onChange={(e) => setformdata({ ...formdata, Age: e.target.value })} id="email" class="input" type="number" placeholder="" required />
                        <div class="cut cut-short"></div>
                        <label for="email" class="placeholder">Age Group</label>
                    </div>
                    <div class="input-container ic2">
                        <input onChange={(e) => setformdata({ ...formdata, Phone: e.target.value })} id="email" class="input" type="number" placeholder="" required />
                        <div class="cut cut-short"></div>
                        <label for="email" class="placeholder">Phone</label>
                    </div>
                    <div class="input-container ic2">
                        <input onChange={(e) => setformdata({ ...formdata, Email: e.target.value })} id="email" class="input" type="text" placeholder="" />
                        <div class="cut cut-short"></div>
                        <label for="email" class="placeholder">Email</label>
                    </div>
                    <div class="input-container ic2">
                        <input id="text" style={{ marginBottom: "10px" }} class="input" defaultValue={loc} type="text" placeholder="" required />
                        <div class="cut cut-short"></div>
                        <label for="email" class="placeholder">Location</label>
                        <a onClick={getLocation} className='text-green-600 font-semibold cursor-pointer'>Locate Me</a>
                    </div>
                    <button type="text" class="submit" onClick={SendData}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Helpform;
