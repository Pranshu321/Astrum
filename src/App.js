import React, { useEffect, useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./css/style.scss";
// import "./styles/css/tailwind.css"
// import "./styles/css/base.css"
// import "./styles/css/components.css"
// import "./styles/css/utility-patterns.css"
// import "./styles/css/range-slider.css"
// import "./styles/css/toggle-switch.css"
// import "./styles/css/theme.css"
// import "./styles/css/utilities.css"
// import "./styles/css/aos.css"
import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import Helpform from "./pages/Helpform";
import PastDisasters from "./pages/PastDisasters";
import StatsUpdate from "./pages/StatsUpdate";
import Map from "./pages/map";
import NasaMap from "./pages/nasaMaps";
import axios from "axios";
import AlertCreate from "./pages/AlertCreate";
import AlertScreen from "./pages/AlertScreen";
import Astra from "./partials/Astra";

function App() {
  const location = useLocation();
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  useEffect(() => {
    const getNasaData = async () => {
      const res = await axios.get(
        "https://eonet.gsfc.nasa.gov/api/v2.1/events?limit=100"
      );
      // console.log(res.data.events);
      let temp = [];
      temp = [];
      for (let i = 0; i < res.data.events.length; i++) {
        temp.push({
          title: res.data.events[i].title,
          longitude: res.data.events[i].geometries[0].coordinates[0],
          latitude: res.data.events[i].geometries[0].coordinates[1],
          categories: res.data.events[i].categories[0].title,
        });
      }
      setEventData([{}]);
      setEventData(temp);
      temp = [];
    };

    getNasaData();
  }, []);

  // console.log("Check" , eventData[0].geometries);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/reset-password">
          <ResetPassword />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/help">
          <Helpform />
        </Route>
        <Route path="/pastd">
          <PastDisasters />
        </Route>
        <Route path="/statsUp">
          <StatsUpdate />
        </Route>
        <Route path="/map/:type">
          <Map />
        </Route>
        <Route path="/createalert">
          <AlertCreate />
        </Route>
        <Route path="/news">
          <AlertScreen />
        </Route>
        <Route path="/nasamap">
          <NasaMap eventData={eventData} />
        </Route>
        <Route path="/astra">
          <Astra />
        </Route>
      </Switch>
    </>
  );
}

export default App;