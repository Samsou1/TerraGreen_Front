import APIManager from "../../services/api";
import { useNavigate } from "react-router-dom";
import Errors from "../../components/Errors";
import React, { useEffect, useState } from "react";
import { currentUserId } from "../../services/user";

function FileForm() {
  const navigate = useNavigate();
  const [countryOptions, setCountryOptions] = useState([]);
  const [regionOptions, setRegionOptions] = useState([]);
  const [projectStatusesOptions, setProjectStatusesOptions] = useState([]);
  const [country, setCountry] = useState(78);
  const [errors, setErrors] = useState([]);

  const checkData = (event) => {
    let validate = true;
    if (event.target.title.value.length < 3) {
      setErrors((errs) => [
        ...errs,
        { message: "Your title must be at least 3 characters long" },
      ]);
      validate = false;
    }
    if (event.target.content.value.length < 5) {
      setErrors((errs) => [
        ...errs,
        { message: "Your content must be at least 5 characters long" },
      ]);
      validate = false;
    }
    if (event.target.address.value.length < 1) {
      setErrors((errs) => [
        ...errs,
        { message: "You must give the address of the project" },
      ]);
      validate = false;
    }
    if (event.target.city.value.length < 1) {
      setErrors((errs) => [
        ...errs,
        { message: "You must give the city of the project" },
      ]);
      validate = false;
    }
    if (!event.target.date.value) {
      setErrors((errs) => [
        ...errs,
        { message: "You must give a date to your project" },
      ]);
      validate = false;
    }
    if (event.target.postal_code.value.length < 1) {
      setErrors((errs) => [
        ...errs,
        { message: "You must give the ZIP code of your project" },
      ]);
      validate = false;
    }
    if (!event.target.image.files[0]) {
      setErrors((errs) => [
        ...errs,
        { message: "You must post a picture of the project" },
      ]);
      validate = false;
    }
    return validate;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors([]);
    if (checkData(event)) {
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
      <h1 className="newproject-title">Create your project:</h1>
      <Errors errors={errors}></Errors>
      <form
        onSubmit={(event) => handleSubmit(event)}
        className="newproject-form-container"
      >
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="CleanForest..."
          />
        </div>
        <div className="input-container">
          <label htmlFor="content">Content</label>
          <input
            type="text"
            name="content"
            id="content"
            placeholder="To reduce polution..."
          />
        </div>
        <div className="input-container">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" />
        </div>
        <div className="input-container">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="18 rue barthelemy"
          />
        </div>
        <div className="input-container">
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" placeholder="Paris" />
        </div>
        <div className="input-container">
          <label htmlFor="postal_code">Postal Code</label>
          <input
            type="text"
            name="postal_code"
            id="postal_code"
            placeholder="75000"
          />
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
