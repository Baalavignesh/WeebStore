import { React, Component } from "react";
import { Grid } from "@material-ui/core";
import Filter from "./Filter";
import "./AllProducts.css";
import ProductCard from "./ProductsPage/ProductCard";

class AllProducts extends Component {
  state = {
    loading: true,
    products: null,
  };

  async componentDidMount() {
    const url = "https://weeb-store.herokuapp.com/api/product";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    this.setState({
      products: data,
      loading: false,
    });
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <div className="filter-grid">
              <Filter />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={9}>
            {this.state.loading ? (
              <div>
                <h1>Loading...</h1>
              </div>
            ) : (
              <div>
                <h1>All Products</h1>
                <div className= "all-cards">
                  {this.state.products.map((product, index) => {
                    return <ProductCard data={product} key={index} />;
                  })}
                </div>
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default AllProducts;
