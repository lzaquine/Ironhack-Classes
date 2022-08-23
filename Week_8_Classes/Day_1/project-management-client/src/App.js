import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './Pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import EditProject from './Pages/EditProject/EditProject';
import SignupPage from './Pages/SignupPage/SignupPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import Private from './components/Private/Private';
import Anon from './components/Anon/Anon';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/projects" element={ <Private> <ProjectsPage /> </Private> } />
      <Route path="/projects/:id" element={ <ProjectDetails /> } />
      <Route path="/projects/edit/:id" element={ <EditProject /> } />
      <Route path="/signup" element={ <Anon> <SignupPage /> </Anon> } />
      <Route path="/login" element={ <Anon> <LoginPage /> </Anon> } />
      </Routes>
    </div>
  );
}

export default App;


// lembrar de fazer o negocio pra funcionar o projeto e etc