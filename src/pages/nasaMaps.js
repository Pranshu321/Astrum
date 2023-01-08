import React, { useEffect, useState } from "react";
import "../css/cssfiles/maps.css";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import processPlugins from "tailwindcss/lib/util/processPlugins";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

import fire from "../images/icons/fire.png";
import iceberg from "../images/icons/iceberg.png";
import thunder from "../images/icons/thunder.png";
import volcano from "../images/icons/volcano.png";

export default function NasaMap({ eventData }) {

  console.log("naana mao ", eventData);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC1mpaHajUPWU696t2u2xboKThZC-lRnnA",
  });
  const markers = eventData.map((ev, index) => {
    return (
      <Marker
        key={index}
        position={{
          lat: ev.latitude,
          lng: ev.longitude,
        }}
        icon={{
          url:
            ev.categories == "Severe Storms"
              ? thunder
              : ev.categories == "Volcanoes"
              ? volcano
              : ev.categories == "Sea and Lake Ice"
              ? iceberg
              : ev.categories == "Wildfires"
              ? fire
              : fire,
        }}
      />
    );
  });

  const center2 = useMemo(() => ({ lat: 28.677592, lng: 77.2913126 }), []);
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <GoogleMap
        zoom={10}
        center={center2}
        mapContainerClassName="map-container"
        ClassName="map-container"
      >
        {markers}
      </GoogleMap>
    </>
  );
}
