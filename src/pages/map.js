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
    googleMapsApiKey: "AIzaSyCu1YXEvttfZdCaxtYBSgcX7M1EKD5cdV0",
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
