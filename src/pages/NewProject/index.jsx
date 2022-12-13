import { AppContext } from "../../App";
import React, { useContext, useState } from "react";

function FileForm() {
  const { latestProject, setLatestProject } = useContext(AppContext);
  const [projectStatus, setProjectStatus] = useState("");
  const [userId, setUserId] = useState("");
  const [regionId, setRegionId] = useState("");
  const [countryId, setCountryId] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();
    data.append("project[title]", event.target.title.value);
    data.append("project[image]", event.target.image.files[0]);
    data.append("project[content]", event.target.content.value);
    data.append("project[date]", event.target.date.value);
    data.append("project[city]", event.target.city.value);
    data.append("project[address]", event.target.address.value);
    data.append("project[postal_code]", event.target.postal_code.value);
    data.append("project[project_status_id]", parseInt(projectStatus));
    data.append("project[user_id]", parseInt(userId));
    data.append("project[region_id]", parseInt(regionId));
    data.append("project[country_id]", parseInt(countryId));
    submitToAPI(data);
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
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <br />
        <label htmlFor="content">Content</label>
        <input type="text" name="content" id="content" />
        <br />
        <label htmlFor="date">Date</label>
        <input type="datetime-local" name="date" id="date" />
        <br />
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" />
        <br />
        <label htmlFor="city">City</label>
        <input type="text" name="city" id="city" />
        <br />
        <label htmlFor="postal_code">Postal Code</label>
        <input type="text" name="postal_code" id="postal_code" />
        <br />
        <label htmlFor="project_status_id">Project_Status</label>
        <input
          type="number"
          name="project_status"
          onChange={(e) => setProjectStatus(e.target.value)}
          value={projectStatus}
        />
        <br />
        <label htmlFor="user_id">User_id</label>
        <input
          type="number"
          name="user_id"
          onChange={(e) => setUserId(e.target.value)}
          value={userId}
        />
        <br />
        <label htmlFor="region_id">Region_id</label>
        <input
          type="number"
          name="region_id"
          onChange={(e) => setRegionId(e.target.value)}
          value={regionId}
        />
        <br />
        <label htmlFor="country_id">Country_id</label>
        <input
          type="number"
          name="country_id"
          onChange={(e) => setCountryId(e.target.value)}
          value={countryId}
        />
        <br />
        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image" />
        <br />

        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default FileForm;
