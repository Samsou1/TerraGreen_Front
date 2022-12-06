import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className='projectCard'>   
      <div className="product-details">    
        <h3>{project.title}</h3>   
        <p className="information">{project.content}</p>  
        <p className="information">{project.project_status_id}</p>  

        <div className="control">    
          <button className="btn">
            <span className="look"><Link className="link" to={`/projects/${project.id}`}>Have a look</Link></span>
          </button>   
        </div>  
 
      </div>
      
      <div className="product-image">  
        {/* <img src="https://images.unsplash.com/photo-1571055107559-3e67626fa8be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="anouncement_illustration" /> */}
        <div className="info">
          <ul>
            <li><strong>Address: </strong>{project.address}</li>
            <li><strong>ZIP: </strong>{project.postal_code} </li>
            <li><strong>City: </strong>{project.city}</li>
            <li><strong>Postal code: </strong>{project.postal_code}</li>   
            <li><strong>Region ID: </strong>{project.region_id}</li>   
            <li><strong>Country ID: </strong>{project.country_id}</li>   
            <li><strong>GPS: </strong>{project.GPS}</li>   

          </ul>
        </div>       
      </div>
    </div>
  )
}

export default ProjectCard;