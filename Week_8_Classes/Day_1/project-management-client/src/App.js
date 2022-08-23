import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import EditProject from './Pages/EditProject/EditProject';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/projects" element={ <ProjectsPage /> } />
      <Route path="/projects/:id" element={ <ProjectDetails /> } />
      <Route path="/projects/edit/:id" element={ <EditProject /> } />
      </Routes>
    </div>
  );
}

export default App;
