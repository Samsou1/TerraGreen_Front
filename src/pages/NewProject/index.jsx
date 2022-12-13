import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { currentUserId } from "../../services/user";
import { useAtomValue } from "jotai";
import { countriesAtom } from "../../store/country";
import { regionsAtom } from "../../store/region";
import { projectStatusesAtom } from "../../store/projectStatus";

function FileForm() {
  const navigate = useNavigate();
  const { latestProject, setLatestProject } = useContext(AppContext);
  const countryOptions = useAtomValue(countriesAtom);
  const regionOptions = useAtomValue(regionsAtom);
  const projectStatusesOptions = useAtomValue(projectStatusesAtom);

  function handleSubmit(event) {
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
    submitToAPI(data);
    navigate("/myprojects")
  }

  function submitToAPI(data) {
    fetch("http://localhost:3000/projects", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        setLatestProject(data.image_url);
      })
      .catch((error) => console.error(error));
  }

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
          <select
            id="status"
            name="status"
          >
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
          <select
            id="region"
            name="region"
          >
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
