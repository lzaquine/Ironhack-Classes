import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

function LoginPage() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { username, password };

    axios
        .post(`${process.env.REACT_APP_API_URL}/api/auth/login`, body)
        .then((response) => {
            storeToken(response.data.authToken);
            authenticateUser();
            navigate("/");
        })
        .catch((err) => {
            setErrorMessage(err.response.data.message);
        }
    );
  };

  return (
    <div className="LoginPage">


      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" value={username} onChange={handleUsername} />

        <label htmlFor="password">Password</label>
        <input type="password" value={password} onChange={handlePassword} />

        <button type="submit">Log In</button>
      </form>

      {errorMessage && <p>{errorMessage}</p>}

      <p>
        Don't have an account? <Link to="/signup"><br/>Sign Up</Link>
      </p>
    </div>
  );
}

export default LoginPage;
