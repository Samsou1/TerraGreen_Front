import React from 'react'
import { MapContainer , TileLayer, Marker, Popup, useMap } from "react-leaflet"
import { popupContent, popupHead, popupText, okText} from "./popupStyles"

function Map({coords, name}) {
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
    <Popup className="request-popup">
      <div style={popupContent}>
      <img
              src="https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/149_check_ok-512.png"
              width="150"
              height="150"
              alt="no img"
            />
            <div className="m-2"
        </div>
    </Popup>
  </Marker>
  <MapView />
</MapContainer>
  )
}

export default Map