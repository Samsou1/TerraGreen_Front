import { useState, useEffect } from "react";
import APIManager from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import { countriesAtom } from "../../store/country";
import { projectStatusesAtom } from "../../store/projectStatus";

const NewProject = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("France");
  const [GPS, setGPS] = useState("");
  const [status, setStatus] = useState("To plan");
  const countryOptions = useAtomValue(countriesAtom);
  const [regionOptions, setRegionOptions] = useState([]);
  const projectStatusesOptions = useAtomValue(projectStatusesAtom);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      project: {
        title: title,
        content: content,
        address: address,
        city: city,
        postal_code: postalCode,
        country: country,
        region: region,
        GPS: GPS,
        project_status: status,
      },
    };
    try {
      await APIManager.newProject(data);
      navigate("/myprojects");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    regionOptions[0] ? setRegion(regionOptions[0].name) : setRegion("");
  });

  useEffect(() => {
    const fetchRegions = async () => {
      await APIManager.getRegionsFromCountry(country).then((data) =>
        setRegionOptions(data)
      );
    };
    fetchRegions().catch(console.error);
  }, [country]);

  return (
    <>
      <h1 className="new-title">New project</h1>
      <form onSubmit={handleSubmit} className="new-container-form">
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="input-container">
          <label htmlFor="content">Content</label>
          <input
            onChange={(e) => setContent(e.target.value)}
            value={content}
            type="textarea"
            id="content"
            placeholder="Content"
          />
        </div>
        <div className="input-container">
          <label htmlFor="address">Address</label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            type="text"
            id="address"
            placeholder="Address"
          />
        </div>
        <div className="input-container">
          <label htmlFor="city">City</label>
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            type="text"
            id="city"
            placeholder="City"
          />
        </div>
        <div className="input-container">
          <label htmlFor="postalCode">ZIP Code</label>
          <input
            onChange={(e) => setPostalCode(e.target.value)}
            value={postalCode}
            type="text"
            id="postalCode"
            placeholder="Postal Code"
          />
        </div>
        <div className="input-container">
          <label htmlFor="country">Country</label>
          <select
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            type="text"
            id="country"
            placeholder="Country"
          >
            {countryOptions.map((countryOption) => {
              return (
                <option
                  key={countryOption.id + countryOption.name}
                  value={countryOption.name}
                >
                  {countryOption.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="">
          <label htmlFor="region">Region</label>
          <select
            onChange={(e) => setRegion(e.target.value)}
            value={region}
            type="text"
            id="region"
            placeholder="Region"
          >
            {regionOptions.map((regionOption) => {
              return (
                <option
                  key={regionOption.id + regionOption.name}
                  value={regionOption.name}
                >
                  {regionOption.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="GPS">GPS</label>
          <input
            onChange={(e) => setGPS(e.target.value)}
            value={GPS}
            type="text"
            id="gps"
            placeholder="GPS"
          />
        </div>
        <div className="input-container">
          <label htmlFor="status">Status</label>
          <select
            onChange={(e) => setStatus(e.target.value)}
            value={status}
            type="text"
            id="status"
            placeholder="Status"
          >
            {projectStatusesOptions.map((projectStatusesOption) => {
              return (
                <option
                  key={projectStatusesOption.id + projectStatusesOption.name}
                  value={projectStatusesOption.name}
                >
                  {projectStatusesOption.name}
                </option>
              );
            })}
          </select>
        </div>
        <input type="submit" value="Begin" />
      </form>
    </>
  );
};

export default NewProject;
