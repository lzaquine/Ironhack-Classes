import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
//we'll have two request, one to get the information other to edit(put)
function EditProject() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const { id } = useParams();
  const navigate = useNavigate();


  const getProject = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects/${id}`)
      setTitle(response.data.title)
      setDescription(response.data.description)

    } catch (error) {
      console.log(error)
    };
  }
  useEffect(() => {
    getProject()
  }, []);

  const handleTitle = (e) => setTitle(e.target.value)
  const handleDescription = (e) => setDescription(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { title, description };
    axios.put(`${process.env.REACT_APP_API_URL}/api/projects/${id}`, body)
      .then(() => {
        setTitle("")
        setDescription("")
        navigate(`/projects/${id}`)
      })
  }

  const deleteProject = () => {
    axios.delete(`${process.env.REACT_APP_API_URL}/api/projects/${id}`)
      .then(() => {
        navigate("/projects")
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="EditProjectPage">
      <h3>Edit Project</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="name" value={title} onChange={handleTitle} />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="name" value={description} onChange={handleDescription} />
        <button type="submit">Edit Project</button>
      </form>
      <button onClick={deleteProject}>Delete Project</button>
    </div>
  )
}

export default EditProject