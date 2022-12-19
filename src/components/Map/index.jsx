import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { popupContent, popupHead, popupText } from "./popupStyles";

function Map({ coords, name }) {
  const { latitude, longitude } = coords;

  function MapView() {
    let map = useMap();
    map.setView([latitude, longitude], map.getZoom());
    return null;
  }
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup className="request-popup">
          <div style={popupContent}>
            <img
              src="https://img.icons8.com/external-flat-kendis-lasman/64/null/external-take-care-of-the-earth-ecology-flat-kendis-lasman.png"
              width="100"
              height="100"
              alt="no img"
            />
            <div className="m-2" style={popupHead}>
              Cleaning area
            </div>
            <span style={popupText}>
              Here you can find the area that needs cleaning. That's where the group will gather on the day of the event: <strong>"{name}"</strong>
              <br/>Don't forget to bring your gear to clean up the area (gloves, boots et trashbags)
            </span>
          </div>
        </Popup>
      </Marker>
      <MapView />
    </MapContainer>
  );
}

export default Map;
