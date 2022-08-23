import { useState, useEffect, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthProviderWrapper(props) {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const authenticateUser = () => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/api/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          setLoading(false);
          setLoggedIn(true);
          setUser(response.data);
        })
        .catch((err) => {
          setLoading(false);
          setLoggedIn(false);
          setUser(null);
        });
    } else {
      setLoading(false);
      setLoggedIn(false);
      setUser(null);
    }
  };

  const logOut = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ loading, loggedIn, user, storeToken, authenticateUser, logOut }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };
