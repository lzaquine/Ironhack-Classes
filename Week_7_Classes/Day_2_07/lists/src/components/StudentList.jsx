/* let listItems = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>];
let students = ['Simao', 'Raquel', 'Luiz', 'Paulo'];

function StudentList() {
  return (
    <div key={index}>
        <h2>Student List</h2>
        {students.map(student => {
        <p>{student}</p>
        }}
    </div>
  )
}

export default StudentList */

let students = [
    { name: 'Adriana', bootcamp: 'WebDev' },
    { name: 'Andrea', bootcamp: 'WebDev' },
    { name: 'Brenda', bootcamp: 'WebDev' },
    { name: 'Gabriella', bootcamp: 'WebDev' },
    { name: 'Jason', bootcamp: 'WebDev' },
    { name: 'John', bootcamp: 'WebDev' },
    { name: 'Lucas', bootcamp: 'WebDev' },
    { name: 'Luis', bootcamp: 'WebDev' },
    { name: 'Luisa', bootcamp: 'WebDev' },
    { name: 'Luiz', bootcamp: 'WebDev' },
    { name: 'Majid', bootcamp: 'WebDev' },
    { name: 'Matulan', bootcamp: 'WebDev' },
    { name: 'Miguel', bootcamp: 'WebDev' },
    { name: 'Paulo', bootcamp: 'WebDev' },
    { name: 'Philip', bootcamp: 'WebDev' },
    { name: 'Raquel', bootcamp: 'WebDev' },
    { name: 'Simão', bootcamp: 'WebDev' },
  ];

function StudentList() {
  return (
    <div>
      <h2>Student List:</h2>
      
      {students.map((student, index) => {
        return (
            <div key={index}>
            <img src="http://www.fullhousemagazine.co.uk/images/stories/quickies/Hulse39_main.jpg" alt="ugly cat" style={{ width: '10em' }} />
            <p>Name: {student.name} <br/> Bootcamp: {student.bootcamp}</p>
            <hr />
            </div>
        )})}
    </div>
    )
};

export default StudentList


// Create a component called StudentList
// Import into app.js
// map over an array of objects and print the name and the bootcamp
// add a default img to each one

