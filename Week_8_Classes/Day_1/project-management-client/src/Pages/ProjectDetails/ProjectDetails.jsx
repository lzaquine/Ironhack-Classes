import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ProjectDetails() {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    const getProject = async () => {
        try {
            let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects/${id}`)
            setProject(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProject();
    }, []);

  return (
    <div className='ProjectDetails'>
        <h1>Project Details:</h1>
        {project && (
            <>
                <h1>{project.title}</h1>
                <p>Description:</p>
                <p>{project.description}</p>
            {project.tasks.map((task) => (
                    <li className="TaskCard card" key={task._id}>
                        <h1>{task.title}</h1>
                        <p>Description:</p>
                        <p>{task.description}</p>
                    </li>
                ))}
            </>
    )}
    </div>
  )
}

export default ProjectDetails