import React, { useState } from "react";
import {axiosWithAuth} from "../axiosWithAuth";

const SignUp = (props) => {

  const [credentials, setCredentials] = useState({});

  const signUp = event => {
      event.preventDefault();
      console.log("submitted!")
      console.log(credentials);
      axiosWithAuth().post("https://refugee-stories2.herokuapp.com/api/auth/register", credentials)
      .then(response => {
          console.log(response.data)
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
    <div className="box">
          <h1>Sign up as an admin.</h1>
          <form onSubmit={signUp} >
            <input
                label="username"
                placeholder="username"
                name="username"
                type="text"
                onChange={handleChange}
            />

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
            <button> Sign Up </button>
            </form>
        </div>
    </div>
  );
};

export default SignUp;
