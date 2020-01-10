import React, { useState } from "react";
import { axiosWithAuth } from "../axiosWithAuth";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the protected route

  const [credentials, setCredentials] = useState({});

  const login = event => {
      event.preventDefault();
      axiosWithAuth().post("https://refugee-stories2.herokuapp.com/api/auth/login", credentials)
      .then(response => {
          console.log(response.data)
          localStorage.setItem('token', response.data.token);
          props.history.push('/');
      })
  }

  const handleChange = event => {
      setCredentials({
          ...credentials,
          [event.target.name]: event.target.value
    })
    console.log(credentials);
  }

  return (
    <div className="container">
        <div className="box">
          <h1> Login to continue</h1>
          <form onSubmit={login} >
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
