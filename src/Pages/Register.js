import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = axios.post(
        "http://127.0.0.1:5000/users/signup",
        {
          firstname,
          lastname,
          email,
          password,
        },
        config
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="register-cover "></div>

      <div className="register-content">
        <div>
          <h1>DARK SPACE</h1>
          <p> dark space coffe application </p>
        </div>
        <div>
          <from>
            <div>
              <label> Firstname</label>
              <input
                placeholder="firstName"
                type="text"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>

            <div>
              <label> Lastname</label>
              <input
                placeholder="lastname"
                type="text"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div>
              <label> Email</label>
              <input
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label> Password</label>
              <input
                placeholder="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>submit</button>
          </from>
        </div>
      </div>
    </div>
  );
};

export default Register;
