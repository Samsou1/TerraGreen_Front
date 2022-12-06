import { useState, useEffect } from "react";
import APIManager from "../../services/api";
import { useNavigate } from "react-router-dom";

const EditProject = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [GPS, setGPS] = useState("");
  const [status, setStatus] = useState("");
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
        country_id: country,
        region_id: region,
        GPS: GPS,
        project_status_id: status,
      },
    };
    try {
      const id = window.location.pathname.split("/")[2];
      await APIManager.editProject(id, data);
      navigate("/myprojects");
    } catch (err) {
      console.error(err);
    }
  };

  const SetAll = (project) => {
    project.title ? setTitle(project.title) : setTitle("");
    project.content ? setContent(project.content) : setContent("");
    project.address ? setAddress(project.address) : setAddress("");
    project.city ? setCity(project.city) : setCity("");
    project.postal_code
      ? setPostalCode(project.postal_code)
      : setPostalCode("");
    project.country_id ? setCountry(project.country_id) : setCountry("");
    project.region_id ? setRegion(project.region_id) : setRegion("");
    project.GPS ? setGPS(project.GPS) : setGPS("");
    project.project_status_id
      ? setStatus(project.project_status_id)
      : setStatus("");
  };

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    const fetchProject = async () => {
      await APIManager.getProject(id).then((data) => SetAll(data));
    };
    fetchProject().catch(console.error);
  }, []);

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
          <input
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            type="text"
            id="country"
            placeholder="Country"
          />
        </div>
        <div className="input-container">
          <label htmlFor="region">Region</label>
          <input
            onChange={(e) => setRegion(e.target.value)}
            value={region}
            type="text"
            id="region"
            placeholder="Region"
          />
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
          <input
            onChange={(e) => setStatus(e.target.value)}
            value={status}
            type="text"
            id="status"
            placeholder="Status"
          />
        </div>
        <input type="submit" value="Update" />
      </form>
    </>
  );
};

export default EditProject;
