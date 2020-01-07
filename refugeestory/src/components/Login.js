import React, { useState } from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import SignUp from "./SignUp";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the protected route

  const [credentials, setCredentials] = useState({});

  const login = event => {
      event.preventDefault();
      axiosWithAuth().post("https://bw-refugee-stories-2.herokuapp.com/api/auth/login", credentials)
      .then(response => {
          console.log(response.data)
          localStorage.setItem('token', response.data.payload);
          props.history.push('/');
      })
  }

  const handleChange = event => {
      setCredentials({
          ...credentials,
          [event.target.name]: event.target.value
    })
  }


  return (
    <div className="container">
        <SignUp />
        <div className="box">
          <h1> Login to continue</h1>
          <form onSubmit={login} >
            <input
                label="email"
                placeholder="email"
                name="email"
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
