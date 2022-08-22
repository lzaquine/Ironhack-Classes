import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='Navbar'>
        <Link to="/">
            <button>Home</button>
        </Link>
        <Link to="/projects">
            <button>Projects</button>
        </Link>
    </nav>
  )
}

export default Navbar