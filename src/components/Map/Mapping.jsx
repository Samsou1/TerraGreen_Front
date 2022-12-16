import React, { useState, useEffect } from "react";
import Map from "./index";

function Mapping({ project }) {
  const [coords, setCoords] = useState({
    latitude: "",
    longitude: "",
  });
  const name = project.title;

  useEffect(() => {
    let url = `https://nominatim.openstreetmap.org/search?
  street=${project.address}
  &city=${project.city}
  &postalcode=${project.postal_code}&format=json`;
    getData(url);
  }, [project]);

  function getData(url) {
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "https://o2cj2q.csb.app",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if(data[0]){
          setCoords({
            latitude: data[0].lat,
            longitude: data[0].lon,
          });
        }
      })

      .catch(console.error);
  }

  return (
    <>
      <Map coords={coords} name={name} />
    </>
  );
}

export default Mapping;
