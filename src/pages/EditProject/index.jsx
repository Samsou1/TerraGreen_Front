import { useState, useEffect } from "react";
import APIManager from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai/utils";
import { countriesAtom } from "../../store/country";
import { projectStatusesAtom } from "../../store/projectStatus";
import { currentUserId } from "../../services/user";

const EditProject = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [date, setDate] = useState("");
  const projectStatusesOptions = useAtomValue(projectStatusesAtom);
  const [status, setStatus] = useState("");
  const [regionOptions, setRegionOptions] = useState([]);
  const [region, setRegion] = useState("");
  const countryOptions = useAtomValue(countriesAtom);
  const [country, setCountry] = useState("France");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("project[user_id]", currentUserId());
    data.append("project[title]", title);
    data.append("project[content]", content);
    data.append("project[date]", date);
    data.append("project[address]", address);
    data.append("project[city]", city);
    data.append("project[postal_code]", postalCode);
    data.append("project[project_status_id]", status);
    data.append("project[region_id]", region);
    data.append("project[country_id]", country);
    data.append("project[image]", event.target.image.files[0]);
    try {
      const id = window.location.pathname.split("/")[2];
      await APIManager.editProject(id, data);
      // navigate("/myprojects");
    } catch (err) {
      console.error(err);
    }
  };

  const SetAll = (data) => {
    console.log(data)
    data.project.title ? setTitle(data.project.title) : setTitle("");
    data.project.content ? setContent(data.project.content) : setContent("");
    data.project.date ? setDate(data.project.date) : setDate("");
    data.project.address ? setAddress(data.project.address) : setAddress("");
    data.project.city ? setCity(data.project.city) : setCity("");
    data.project.postal_code ? setPostalCode(data.project.postal_code) : setPostalCode("");
    data.project.project_status_id ? setStatus(data.project.project_status_id) : setStatus("");
    data.project.region_id ? setRegion(data.project.region_id) : setRegion("");
    data.project.country_id ? setCountry(data.project.country_id) : setCountry("");
    data.image_url ? setImage(data.image_url) : setImage("");
  };

  useEffect(() => {
    const id = window.location.pathname.split("/")[2];
    const fetchProject = async () => {
      await APIManager.getProject(id).then((data) => SetAll(data));
    };
    fetchProject()
      .then(regionOptions[0] ? setRegion(regionOptions[0].name) : setRegion(""))
      .catch(console.error);
  }, []);

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
          <label htmlFor="project_status_id">Status</label>
          <select
            onChange={(e) => setStatus(e.target.value)}
            value={status}
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
            onChange={(e) => setRegion(e.target.value)}
            value={region}
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
            onChange={(e) => setCountry(e.target.value)}
            value={country}
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
        <input type="submit" value="Update" />
      </form>
      <div>
        {image && <img src={image} alt="The current file" />}
      </div>
    </>
  );
};

export default EditProject;
