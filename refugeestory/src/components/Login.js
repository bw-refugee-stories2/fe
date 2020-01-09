import React, { useState } from "react";
// Utils
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  const [credentials, setCredentials] = useState({});

  const login = event => {
    event.preventDefault();
    axiosWithAuth()
      .post(
        "https://bw-refugee-stories-2.herokuapp.com/api/auth/login",
        credentials
      )
      .then(response => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        props.history.push("/");
      });
  };

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
    console.log(credentials);
  };

  return (
    <div className="container">
      <div className="box">
        <h1> Login to continue</h1>
        <form onSubmit={login}>
          <input
            label="username"
            placeholder="username"
            name="username"
            type="text"
            onChange={handleChange}
          />
          <input
            label="password"
            placeholder="password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <button> Login </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
