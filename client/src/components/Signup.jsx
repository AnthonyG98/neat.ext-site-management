import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  let history = useNavigate();
  let url = `http://localhost:3001`;

  const dispatch = useDispatch();

  const userUsername = useSelector((state) => state.auth.username);
  const userPassword = useSelector((state) => state.auth.password);

  const changeUsername = (username) => {
    dispatch(authActions.inputUsername(username));
  };
  const changePassword = (password) => {
    dispatch(authActions.inputPassword(password));
  };
  const signUpUser = () => {
    const signUpData = {
      username: userUsername.payload,
      password: userPassword.payload,
      profile_picture: "default_nlfrji",
    };
    console.log(signUpData);
    axios.post(`${url}/users`, signUpData).then((response) => {
      console.log(response);
      localStorage.setItem("username", signUpData.username);
      history("/dashboard");
    });
  };
  return (
    <div className="form-container">
      <div className="inputs">
        <h1 className="login-head">SIGN UP</h1>
        <div className="input-container">
          {/* <label>Username:</label> */}
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              changeUsername(e.target.value);
            }}
          />
        </div>
        <div className="input-container">
          {/* <label>Password</label> */}
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              changePassword(e.target.value);
            }}
          />
        </div>
        <button className="form-btn" onClick={signUpUser}>
          SIGN UP
        </button>
        <p className="main-link-text">
          Already have an account?{" "}
          <Link to="/" className="main-link">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
