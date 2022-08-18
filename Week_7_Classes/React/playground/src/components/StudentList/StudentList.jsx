import React from 'react'

function StudentList(props) {
  return (
    <div style={{border: '2px solid black'}}>
    <h1>Ironhack Students:</h1>
    <hr />
    {props.children}
    </div>
  )
}

export default StudentList