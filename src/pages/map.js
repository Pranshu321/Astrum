import React from "react";
import "../css/cssfiles/maps.css";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useLocation, useParams } from "react-router-dom";

export default function Map() {
  const { type } = useParams();
  const lat = useLocation().state.lat;
  const lng = useLocation().state.lng;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC1mpaHajUPWU696t2u2xboKThZC-lRnnA",
  });

  const center = useMemo(() => ({ lat: lat, lng: lng }), []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName="map-container"
        ClassName="map-container"
      >
        <Marker position={center} />
      </GoogleMap>
    </>
  );
}
