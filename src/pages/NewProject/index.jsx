import { AppContext} from "../../App"
import React, { useContext, useState } from "react";


function FileForm() {
  const { latestProject, setLatestProject } = useContext(AppContext);
  const [projectStatus, setProjectStatus] = useState(3)
  const [userId, setUserId] = useState(11)
  const [regionId, setRegionId] = useState(2)
  const [countryId, setCountryId] = useState(2)

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData();

    data.append("project[title]", event.target.title.value);
    data.append("project[image]", event.target.image.files[0]);
    data.append("project[content]", event.target.content.value);
    data.append("project[date]", event.target.date.value)
    data.append("project[")
    data.append("project[project_status_id]", projectStatus);;
    data.append("project[user_id]", userId);
    data.append("project[region_id]", regionId);
    data.append("project[country_id]", countryId);
    
  
   

 

    
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
  console.log(setLatestProject)
  return (
    <div>
      <h1>File Form</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <br />
        <label htmlFor="content">Content</label>
        <input type="text" name="content" id="content"/>
        <br />
        <label htmlFor="project_status_id">Project_Status</label>
        <input type="number" name="project_status" onChange={(e)=> setProjectStatus(e.target.value)} value={projectStatus}/>
        <br />
        <label htmlFor="user_id">User_id</label>
        <input type="number" name="user_id" onChange={(e)=> setUserId(e.target.value)} value={userId}/>
        <br />
        <label htmlFor="region_id">Region_id</label>
        <input type="number" name="region_id" onChange={(e)=> setRegionId(e.target.value)} value={regionId}/>
        <br />
        <label htmlFor="country_id">Country_id</label>
        <input type="number" name="country_id" onChange={(e)=> setCountryId(e.target.value)} value={countryId}/>
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