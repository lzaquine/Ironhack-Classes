import { useState } from 'react';
import axios from 'axios';

function AddProject({getProjects}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitle = (e) => setTitle(e.target.value)
    const handleDescription = (e) => setDescription(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = { title, description }; 

        axios.post(`${process.env.REACT_APP_API_URL}/api/projects`, body)
        .then(() => {
            getProjects();
        }).catch((error) => {
            console.log(error)
        })
        setTitle('');
        setDescription('');
        // gather the values to create a new project (title and description)
        // axios.post
    }

  return (
    <div className='AddProject'>
        <h1>Add Project</h1>
        <form onSubmit={handleSubmit}>
            <h3>Title:</h3>
            <label htmlFor="title">
            <input type='text' value={title} onChange={handleTitle} />
            </label>
            <h3>Description:</h3>
            <label htmlFor="description">
            <input type='text' value={description} onChange={handleDescription} />
            </label>

            <button type='submit'>Add Project</button>
        </form>
    </div>
  )
}

export default AddProject