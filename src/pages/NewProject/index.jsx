import { useState, useEffect } from "react";
import APIManager from "../../services/api";
import { useNavigate } from "react-router-dom";
import { countriesAtom } from "../../store/country";
import { projectStatusesAtom } from "../../store/projectStatus";
import { useAtomValue } from "jotai/utils";

const NewProject = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("France");
  const [GPS, setGPS] = useState("");
  const [date, setDate] = useState("");
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
        date: date,
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
            required={true}
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
            required={true}
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
          <label htmlFor="date">Date</label>
          <input
            onChange={(e) => setDate(e.target.value)}
            value={date}
            type="date"
            id="date"
            placeholder="Date"
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
            required={true}
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
            required={true}
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
            required={true}
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
