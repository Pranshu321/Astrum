import React, { useState , useEffect} from 'react'
import Header from '../partials/Header'
import '../css/cssfiles/helpform.css'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const StatsUpdate = () => {
    const history = useHistory();
    const [formdata, setformdata] = useState({
        Injured: 0,
        Evacuated: 0,
        Deaths: 0
    });

    const sendData = async () => {
        const docRef = await addDoc(collection(db, "stats"), formdata);
        console.log("Document written with ID: ", docRef.id);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // ...
            } else {
                // User is signed out
                history.push('/');
                // ...
            }
        })
    }, []);

    return (
        <>
            <Header />
            {/* <div className='bg-back' style={{ padding: "60px" }}>

            </div> */}
            <div className='forms' style={{ height: "100vh" }}>
                <div class="form">
                    <div class="title">Update Stats</div>
                    <div class="subtitle">Let us know whats the current senerio?</div>
                    <div class="input-container ic1">
                        <input onChange={(e) => setformdata({ ...formdata, Injured: e.target.value })} id="firstname" class="input" type="number" placeholder="" required />
                        <div class="cut"></div>
                        <label for="firstname" class="placeholder">Injured</label>
                    </div>
                    <div class="input-container ic1">
                        <input onChange={(e) => setformdata({ ...formdata, Evacuated: e.target.value })} id="firstname" class="input" type="number" placeholder="" required />
                        <div class="cut"></div>
                        <label for="firstname" class="placeholder">Evacuated</label>
                    </div>
                    <div class="input-container ic1">
                        <input onChange={(e) => setformdata({ ...formdata, Deaths: e.target.value })} id="firstname" class="input" type="number" placeholder="" required />
                        <div class="cut"></div>
                        <label for="firstname" class="placeholder">Deaths</label>
                    </div>
                    <div className='ic1'>
                        <p className='text-red-600 font-semibold cursor-pointer'>Note : If there is any discripency kindly <a href='mailto:hello@astrum.com' target={"_blank"} className='text-blue-600'>mail us</a></p>
                    </div>
                    <button type="text" class="submit" onClick={sendData}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default StatsUpdate
