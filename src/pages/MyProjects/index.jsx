import { useState, useEffect } from 'react';
import APIManager from '../../services/api';
import { Link } from 'react-router-dom';
import MyProjectsCard from './MyProjectsCard';

const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => { await APIManager.getMyProjects().then(data => setProjects(data)) };
    fetchData().catch(console.error);
  }, [])

  return (
  <section className=''>
    <h2 className="">My projects:</h2>
    <div className=''>
      {projects.map(project => {
        return <MyProjectsCard key={project.id + project.title} project={project}
        />
        
      })}
    </div>
    <span className="new_btn_footer"><Link className="new_btn" to='/newproject'>New project</Link></span>
  </section>
  )
}

export default MyProjects;