import "./Home.css";
import stickers from "../../Images/stickers.jpg";
import poster from "../../Images/poster.jpg";
import Carosol from "./Carousel";
import { Grid } from "@material-ui/core";
import Nav from "../Navigation/Nav"

function Home() {
  const footerStyle = {
    fontSize: "20px",
    padding: "5px",
  };

  const tileStyle = {
    // margin: "50px"
  };

  return (
    <div className="main-body">
      <Nav />
      <Grid container>
        <Grid item xs={12}>
          <Carosol />

          <h1 className={"simple-text"}>Product Range</h1>
        </Grid>
      </Grid>
      <div className="all-cards-home">
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          <Grid item xs={12} sm={12} md={6} lg={8} style={tileStyle}>
            <div className="items-cards">
              <img src={poster} alt="poster" className="home-image" />
              <h1 className="image-text">Posters</h1>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} style={tileStyle}>
            <div className="items-cards">
              <img src={stickers} alt="sticker" className="home-image" />
              <h1 className="image-text">Stickers</h1>
            </div>
          </Grid>
        </Grid>
      </div>

      <hr className="line"></hr>
      <div className="footer">
        <div>
          <p style={footerStyle}> © 2021 WeebStore, Inc. </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
