import { Grid } from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ViewProduct.css";
import Favorite from "@material-ui/icons/Favorite";

function ViewProduct({ data }) {
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const [available, setAvailable] = useState(false);
  const [posterType, setPosterType] = useState(null);
  const [product, setProduct] = useState(data);

  useEffect(() => {
    console.log(data);
    console.log(productId);
    if (data.length === 0) {
      // get data from api
      console.log("getting data since no data from previous state");
      const api = `https://weeb-store.herokuapp.com/api/product/${productId}`;

      axios
        .get(api)
        .then((res) => {
          console.log(res.data);
          if (res.data.length === 0) {
            console.log("data for the given id is not found");
            setProduct(res.data);
            setAvailable(false);
            setLoading(false);
          } else {
            console.log("data for the given id is found, gg");
            setProduct(res.data);
            setAvailable(true);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      if (data["p_id"] === productId) {
        console.log("got data from navigation");
        setAvailable(true);
        setLoading(false);
        setProduct(data);
        console.log(available);
      } else {
        console.log("no product found");
        setAvailable(false);
        setLoading(false);
      }
    }
  }, [data, available, productId]);

  const setPoster = (p_type) => {
    console.log("setting poster type");
    setPosterType(p_type);
    console.log(p_type);
    console.log(posterType);
  };
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : available ? (
        <div className="view-product">
          <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={5}>
              <div className="view-single-card">
                <img
                  src={product.p_image}
                  alt="bruh"
                  className="view-card-image "
                ></img>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={7}>
              <div className="product-details">
                <div className="heading">
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={8}
                      lg={8}
                      className="product-heading"
                    >
                      <p>{product.p_name}</p>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={4}
                      lg={2}
                      className="view-price"
                    >
                      <p>₹ {product.p_price}.00</p>
                    </Grid>
                  </Grid>
                </div>

                <div className="stock">In stock</div>
                <div>
                  <ul className="description">
                    <li className="description-list">
                      Super High Quality Poster
                    </li>
                    <li className="description-list">
                      Free Shipping in Chennai
                    </li>
                    <li className="description-list">
                      Dimension of the product is 24x12(cm)
                    </li>
                  </ul>
                </div>
                <div className="poster-type">
                  {/* <p className="poster-type-name"> Poster Type </p> */}
                  <button
                    className="view-btn poster-type-btn"
                    onClick={() => {
                      setPoster("Normal");
                    }}
                  >
                    Normal
                  </button>
                  <button
                    className="view-btn poster-type-btn"
                    onClick={() => {
                      setPoster("Glossy");
                    }}
                  >
                    Glossy
                  </button>
                  <button
                    className="view-btn poster-type-btn"
                    onClick={() => {
                      setPoster("Matte");
                    }}
                  >
                    Matte
                  </button>
                </div>
                <div className="three-buttons">
                  <button className="view-btn buy-now-btn"> Buy Now </button>
                  <button className="view-btn add-to-bag-btn">
                    {" "}
                    Add to Bag{" "}
                  </button>
                  <button className="view-btn wish-list-btn">
                    <Favorite />
                  </button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div>Product Not Found</div>
      )}
    </div>
  );
}

export default ViewProduct;
