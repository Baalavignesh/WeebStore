import { Grid } from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ViewProduct.css";
import Favorite from "@material-ui/icons/Favorite";

function ViewProduct({ data }) {
  const { productId } = useParams();
  const [available, setAvailable] = useState(false);
  const [product, setProduct] = useState(data);

  useEffect(() => {
    console.log(data);
    console.log(productId);
    if (data.length === 0) {
      // get data from api
      console.log("getting data");
      const api = `https://weeb-store.herokuapp.com/api/product/${productId}`;

      axios
        .get(api)
        .then((res) => {
          console.log(res.data);
          setProduct(res.data);
          setAvailable(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (data["p_id"] === productId) {
      console.log("got data from navigation");
      setAvailable(true);
      setProduct(data);
      console.log(available);
    }
  }, [data, available, productId]);

  return (
    <div>
      {available ? (
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
                  <p className="product-heading">{product.p_name}</p>
                  <p className="view-price">₹ {product.p_price}.00</p>
                </div>

                <div className="rating">Rating : 5/5</div>
                <div>
                <ul className="description">
                  <li className="description-list">
                    Super High Quality Poster
                  </li>
                  <li className="description-list">Free Shipping in Chennai</li>
                  <li className="description-list">
                    Dimension of the product is 24x12(cm)
                  </li>
                </ul>
                </div>
                
                <div>
                <button> Buy Now </button>
                <button> Add to Bag </button>
                <button>
                  <Favorite />
                </button>
              </div>
              </div>
             
            </Grid>
          </Grid>
        </div>
      ) : (
        <div>Sorry, Product Not Found</div>
      )}
    </div>
  );
}

export default ViewProduct;
