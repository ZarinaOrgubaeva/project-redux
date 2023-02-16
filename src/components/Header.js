import { useDispatch, useSelector } from "react-redux";
import { authActionsTypes } from "../store/auth/authReducer";
import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  const logoutBtnHandler = () => {
    dispatch({ type: authActionsTypes.LOG_OUT });
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthorized && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutBtnHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
