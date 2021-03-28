import "./Nav.css";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

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
  const headfont = {
    fontFamily: "inter, sans-serif",
    marginTop: "10px",
    textAlign: "center"
  };


  const useStyles = makeStyles({
    root: {}
  });

  const classes = useStyles();

  return (
    <div className="main-nav">
      <Grid container>
        <Grid item xs={12}  md={3} lg={2}>
          <Link to="/" className="nav-style">
            <h1 style={headfont}>Weeb Store</h1>
          </Link>
        </Grid>
        <Grid item xs={12} md={7} lg={8}>
          <input
            type="text"
            classes={classes}
            style={searchBox}
            placeholder="Search poster and products"
          ></input>
        </Grid>
        <Grid item xs={12}md={2} lg={2}>
          <div className="nav-right">
            <ul className="nav-links">
              <Link to="/products" className="nav-style-buttons">
                <li>Products</li>
              </Link>

              <Link to="/cart" className="nav-style-buttons">
                <li>Cart</li>
              </Link>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Nav;
