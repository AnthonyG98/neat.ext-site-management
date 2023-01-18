import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
export function Login() {
  let url = "http://localhost:3001";
  let history = useNavigate();

  const dispatch = useDispatch();
  const userUsername = useSelector((state) => state.auth.username);
  const userPassword = useSelector((state) => state.auth.password);
  const changeUsername = (username) => {
    dispatch(authActions.inputUsername(username));
  };
  const changePassword = (password) => {
    dispatch(authActions.inputPassword(password));
  };

  const onLogin = () => {
    const loginData = {
      username: userUsername.payload,
      password: userPassword.payload,
    };
    axios.post(`${url}/users/login`, loginData).then((response) => {
      if (response.data.error) {
        loginErrText.innerText = response.data.error;
      } else {
        history("/dashboard");
      }
    });
  };

  return (
    <div className="login-container">
      <div className="login-entry-container">
        <div className="login-entry">
          <input
            type="text"
            className="login-input"
            placeholder="username"
            onChange={(e) => changeUsername(e.target.value)}
          />
          <input
            type="password"
            className="login-input"
            placeholder="password"
            onChange={(e) => changePassword(e.target.value)}
          />
          <button className="login-btn" onClick={() => onLogin()}>
            LOGIN
          </button>
          <p className="sign-up-text">
            Are you a new user?{" "}
            <Link to="/signup" className="link-text">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
