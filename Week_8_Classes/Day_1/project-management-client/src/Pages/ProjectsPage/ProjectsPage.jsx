import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AddProject from '../../components/AddProject/AddProject'

function ProjectsPage() {
    const [projects, setProjects] = useState([])

    const getProjects = async () => {
        try {
            let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects`)
            setProjects(response.data.reverse())
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // leave the dependecy array empty
    useEffect(() => {
        getProjects();
    }, [])


  return (
      <div className='ProjectListPage'>
    <AddProject getProjects={getProjects} />

        {projects.map(project => {
            return (
                <div className="ProjectCard card" key={project._id}>
                    <Link to={`/projects/${project._id}`}>
                        <h1>{project.title}</h1>
                    </Link>
                </div>
            )})}
    </div>
  )
}

export default ProjectsPage