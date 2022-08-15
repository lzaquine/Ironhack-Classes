// To use local images we need to import 
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import StudentCard from './components/StudentCard/StudentCard';
import Navbar from './components/Navbar/Navbar';

//Create a component called StudentCard
// Create an object that has name, cohort, city
// Use an img
// At the end of the card, a link to github
// Import it into app.js and display it


//jsx - javascript extended
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}


// This is ok, passing variables into jsx
let name = 'Leticia';
let ta = {
  name: 'xico',
  profession: 'QA'
}
let myId = 'special-one';
let myLink = 'https://imagens3.ne10.uol.com.br/blogsne10/coisasdepet/uploads//2018/12/wilfred.jpg'

// Don't do this
let myh1 = <h1>Hello {name}</h1>;

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <h1 id={myId}> Hello {name}</h1>
    <img src={logo} alt="logo for react" />
  
    {/* Using string methods */}
    {/* <h3>Hello {ta.name.toUpperCase()}. Are you a {ta.profession.toLowerCase()}?</h3> */}

    {/* Using our own functions */}
    <h3 style={
      {
        color: 'red',
      }
    }>Hello {capitalize(ta.name)}. Are you a {capitalize(ta.profession)}?</h3> 

      <Button></Button>
      
      <img src={myLink} alt="Ugly cat" />
      <label htmlFor=""></label>
      <btn className='btn btn-yellow' onClick={() => alert('Hello')}>Click me</btn>

      <StudentCard></StudentCard>

      <StudentCard firstName="Luiz" cohort="Web Dev" city="Bh" /> 
      <StudentCard firstName="João" cohort="UX/UI" city="Mexico City" />
    </div>
  
  );
}

export default App;
