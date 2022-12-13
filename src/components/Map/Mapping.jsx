import React, { useState, useEffect } from 'react'
import Map from './index';


  function Mapping({project})  {
  const [coords, setCoords] = useState ({
    latitude: "",
    longitude: ""
  
  });


useEffect(() => {
  let url = `https://nominatim.openstreetmap.org/search?
  street=${project.address}
  &city=${project.city}
  &postalcode=${project.postal_code}&format=json`;
  getData(url)
  console.log(project.address)
}, [project]);





function getData(url) {
  fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "https://o2cj2q.csb.app"
    }
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      
    })
    .then((data) => {
      setCoords({
        latitude: data[0].lat,
        longitude: data[0].lon
      });
      console.log(data)
    })
    
    .catch(() => error("Please Check your input"));
}

  return (
    <>
    <Map coords={coords} />
    
    </>
  )
}

export default Mapping