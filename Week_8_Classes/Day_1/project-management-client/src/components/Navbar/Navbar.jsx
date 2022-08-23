import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";

function Navbar() {
  const { loggedIn, user, logOut } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      <Link to="/">
        <button>Home</button>
      </Link>

      {loggedIn && (
        <>
          <Link to="/projects">
            <button>Projects</button>
          </Link>
          <span>{user.username}</span>
          <button onClick={logOut}>Log Out</button>
        </>
      )}

      {!loggedIn && (
        <>
          <Link to="/login">
            <button>Log In</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
