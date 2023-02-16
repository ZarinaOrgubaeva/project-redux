import classes from "./Auth.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActionsTypes } from "../store/auth/authReducer";
const Auth = () => {
  const dispatch = useDispatch();
  const [formState, setState] = useState({
    email: "",
    password: "",
  });
  const inputChangeHandler = (name) => {
    return (event) => {
      setState((prevState) => ({ ...prevState, [name]: event.target.value }));
    };
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      formState.email === "test@gmail.com" &&
      formState.password === "123123"
    ) {
      dispatch({
        type: authActionsTypes.LOG_IN,
        payload: formState.email,
      });
    }
  };

  return (
    <main className={classes.auth}>
      <section onSubmit={submitHandler}>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={inputChangeHandler("email")}
              value={formState.email}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={inputChangeHandler("password")}
              value={formState.password}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
