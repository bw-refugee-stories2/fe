import React, { useState } from "react";
import axios from "axios";

const SignUp = (props) => {

  const [credentials, setCredentials] = useState({});

  const signUp = event => {
      event.preventDefault();
      axios.post("https://bw-refugee-stories-2.herokuapp.com/api/auth/register")
      .then(response => {
          console.log(response.data)
      })
  }

  const handleChange = event => {
      setCredentials({
          ...credentials,
          [event.target.name]: event.target.value
    })
  }


  return (
    <div className="box">
      <h1>Sign up as an admin.</h1>
      <form onSubmit={signUp} >
        <input
            label="name"
            placeholder="name"
            name="name"
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
  );
};

export default SignUp;
