import "./Nav.css";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Popup from "./Popup";
import PopupUser from './PopupUser'
import { useSelector, useDispatch } from "react-redux";
import { popupSignInClose, popupSignInOpen, popupSignOutClose, popupSignOutOpen } from "../../../Actions/actionPopupStates";

function Nav() {
  const searchBox = {
    width: "100%",
    padding: "12px 20px",
    border: "1px",
    borderStyle: "solid",
    borderColor: "#ccc",
    borderRadius: "4px",
    boxSizing: "border-box",
    margin: "10px",
  };

  const isLogged = useSelector((state) => state.logged);

  const handleSignIn = useSelector((state) => state.popupSignIn);
  const handleSignOut = useSelector((state) => state.popupSignOut);

  const dispatch = useDispatch();

  const handleClickOpenSignIn = () => {
    dispatch(popupSignInOpen());
  };

  const handleCloseSignIn = () => {
    dispatch(popupSignInClose());
  };

  const handleClickOpenSignOut= () => {
    dispatch(popupSignOutOpen());
  };

  const handleCloseSignOut = () => {
    dispatch(popupSignOutClose());
  };

  return (
    <div className="main-nav">
      {/*  popup to signin */}
      <Popup handleMethod={handleCloseSignIn} setOpenVal={handleSignIn}></Popup>

      <PopupUser handleMethod={handleCloseSignOut} setOpenVal={handleSignOut}></PopupUser>
      <Grid container>
        <Grid item xs={12} md={3} lg={2}>
          <Link to="/" className="nav-style">
            <h1 className="nav-bar-heading">Weeb Store</h1>
          </Link>
        </Grid>
        <Grid item xs={12} md={7} lg={7}>
          <input
            type="text"
            style={searchBox}
            placeholder="Search poster and products"
          ></input>
        </Grid>
        <Grid item xs={12} md={2} lg={3}>
          <div className="nav-right">
            <ul className="nav-links">
              <Link to="/products" className="nav-style-buttons">
                <li>Products</li>
              </Link>

              <Link to="/cart" className="nav-style-buttons" style={{ textDecoration: 'none' }}>
                <li>Cart</li>
              </Link>
              {isLogged ? (
                <div className="nav-style-buttons" onClick={handleClickOpenSignOut}>
                <p> User </p>
              </div>
              ) : (
                <div className="nav-style-buttons" onClick={handleClickOpenSignIn}>
                  <p> Sign-In</p>
                </div>
              )}
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Nav;
