import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import Dashboard from "./Dashboard";
import { onAuthStateChanged } from "firebase/auth";
import { useHistory } from "react-router-dom";

const AppDashboard = () => {
  const history = useHistory();
  const [typeofuser, settypeuser] = useState("");
  const getDatatype = async () => {
    const querySnapshot = await getDocs(collection(db, "Users"));
    querySnapshot.forEach((doc) => {
      if (doc.id === auth.currentUser?.email) {
        settypeuser(doc.data().type);
      }
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
      } else {
        // User is signed out
        history.push("/");
      }
    });
    getDatatype();
  }, []);
  return <>{typeofuser !== "NGO" ? <Dashboard /> : <Dashboard />}</>;
};

export default AppDashboard;
