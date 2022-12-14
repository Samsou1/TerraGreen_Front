import React from 'react'
//import { MapContainer , TileLayer, Marker, Popup, useMap } from "react-leaflet"

function Map({coords}) {
  const { latitude, longitude } = coords;

  function MapView() {
    let map = useMap();
    map.setView([latitude, longitude], map.getZoom());
    return null;
  }
  return (
    <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[latitude, longitude]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
  <MapView />
</MapContainer>
  )
}

export default Map