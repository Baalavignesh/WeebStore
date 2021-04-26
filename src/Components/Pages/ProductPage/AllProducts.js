import { React, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Filter from "./Filter";
import "./AllProducts.css";
import ProductCard from "../ProductPage/ProductCard/ProductCard";
import { Route, useRouteMatch } from "react-router-dom";
import axios from "axios";
import ViewProduct from "../ViewProduct/ViewProduct";
import Loading from "../../Images/gojo_loading.gif";
import FadeIn from "react-fade-in";
import Nav from "../Navigation/Nav"

function AllProducts() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const { url } = useRouteMatch();

  useEffect(() => {
    console.log("hi");
    console.log("runs everytime the component is rendered");
    const api = "https://weeb-store.herokuapp.com/api/product";

    axios
      .get(api)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        console.log();
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const productPage = (item) => {
    console.log(item.id);
    console.log("brr");
  };

  return (
    <div>
      <Nav />
      <Grid container>
        <Route path={`${url}/:productId`}>
          <ViewProduct data={selectedProduct} />
        </Route>
        <Route exact path={url}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <div className="filter-grid">
              <Filter />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={9} lg={9}>
            {loading ? (
              <div className="loading-style">
                <img
                  src={Loading}
                  alt="this slowpoke moves"
                  width={500}
                  className="loading-image"
                />
                <h1>Loading...</h1>
              </div>
            ) : (
              <div>
                <h1 style = {{textAlign: "center", padding: "10px"}}>All Products</h1>
                <FadeIn>
                  <div className="all-cards">
                    {products.map((product, index) => {
                      return (
                        <ProductCard
                          data={product}
                          key={index}
                          url={url}
                          click={() => {
                            productPage(product);
                            setSelectedProduct(product);
                          }}
                        />
                      );
                    })}
                  </div>
                </FadeIn>
              </div>
            )}
          </Grid>
        </Route>
      </Grid>
    </div>
  );
}

export default AllProducts;
