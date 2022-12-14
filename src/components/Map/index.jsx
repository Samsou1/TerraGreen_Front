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
              Le site de nettoyage
            </div>
            <span style={popupText}>
              Ici se trouve le site, sur lequel tu te rendras pour participer au projet <strong>"{name}"</strong>
            </span>
          </div>
        </Popup>
      </Marker>
      <MapView />
    </MapContainer>
  );
}

export default Map;
