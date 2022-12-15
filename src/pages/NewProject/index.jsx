import APIManager from "../../services/api";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { currentUserId } from "../../services/user";

function FileForm() {
  const navigate = useNavigate();
  const [countryOptions, setCountryOptions] = useState([]);
  const [regionOptions, setRegionOptions] = useState([]);
  const [projectStatusesOptions, setProjectStatusesOptions] = useState([]);
  const [country, setCountry] = useState(78);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("project[user_id]", currentUserId());
    data.append("project[title]", event.target.title.value);
    data.append("project[content]", event.target.content.value);
    data.append("project[date]", event.target.date.value);
    data.append("project[address]", event.target.address.value);
    data.append("project[city]", event.target.city.value);
    data.append("project[postal_code]", event.target.postal_code.value);
    data.append("project[project_status_id]", event.target.status.value);
    data.append("project[region_id]", event.target.region.value);
    data.append("project[country_id]", event.target.country.value);
    data.append("project[image]", event.target.image.files[0]);
    try {
      await APIManager.newProject(data);
      navigate("/myprojects");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchCountries = async () => {
      await APIManager.getCountries().then((data) => setCountryOptions(data));
    };
    fetchCountries().catch(console.error);
    const fetchProjectStatuses = async () => {
      await APIManager.getProjectStatuses().then((data) =>
        setProjectStatusesOptions(data)
      );
    };
    fetchProjectStatuses().catch(console.error);
  }, []);

  useEffect(() => {
    if (country) {
      const fetchRegions = async () => {
        await APIManager.getRegionsFromCountryID(country).then((data) =>
          setRegionOptions(data)
        );
      };
      fetchRegions().catch(console.error);
    }
  }, [country]);

  return (
    <div>
      <h1>File Form</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="input-container">
          <label htmlFor="content">Content</label>
          <input type="text" name="content" id="content" />
        </div>
        <div className="input-container">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" />
        </div>
        <div className="input-container">
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" />
        </div>
        <div className="input-container">
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" />
        </div>
        <div className="input-container">
          <label htmlFor="postal_code">Postal Code</label>
          <input type="text" name="postal_code" id="postal_code" />
        </div>
        <div className="input-container">
          <label htmlFor="project_status_id">Status</label>
          <select id="status" name="status">
            {projectStatusesOptions.map((projectStatusesOption) => {
              return (
                <option
                  key={projectStatusesOption.id + projectStatusesOption.name}
                  value={projectStatusesOption.id}
                >
                  {projectStatusesOption.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="region_id">Region</label>
          <select id="region" name="region">
            {regionOptions.map((regionOption) => {
              return (
                <option
                  key={regionOption.id + regionOption.name}
                  value={regionOption.id}
                >
                  {regionOption.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="input-container">
          <label htmlFor="country_id">Country</label>
          <select
            id="country"
            name="country"
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          >
            {countryOptions.map((countryOption) => {
              return (
                <option
                  key={countryOption.id + countryOption.name}
                  value={countryOption.id}
                >
                  {countryOption.name}
                </option>
              );
            })}
          </select>
        </div>
        <div id="image-container">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" id="image" />
        </div>
        <input type="submit" value="Create project" />
      </form>
    </div>
  );
}

export default FileForm;
