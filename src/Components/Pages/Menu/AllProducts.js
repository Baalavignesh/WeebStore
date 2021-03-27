import { React, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Filter from "./Filter";
import "./AllProducts.css";
import ProductCard from "./ProductCard/ProductCard";
import { Link, Route, useRouteMatch } from "react-router-dom";
import axios from "axios";
import ViewProduct from "../ViewProduct/ViewProduct";

function AllProducts() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState(null);
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
      <Grid container>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <div className="filter-grid">
            <Filter />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          {loading ? (
            <div>
              <h1>Loading...</h1>
            </div>
          ) : (
            <div>
              <h1>All Products</h1>
              <div className="all-cards">
                <Route path={`${url}/:productId`}>
                  <ViewProduct />
                </Route>
                <Route exact path={url}>
                  {products.map((product, index) => {
                    return (
                      <ProductCard
                        data={product}
                        key={index}
                        url = {url}
                        click={() => {productPage(product)}}
                      />
                    );
                  })}
                </Route>
              </div>
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

// class AllProducts extends Component {
//   state = {
//     loading: true,
//     products: null,
//   };

//   async componentDidMount() {
//     const url = "https://weeb-store.herokuapp.com/api/product";
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);

//     this.setState({
//       products: data,
//       loading: false,
//     });
//   }

//   productPage = (item) => {
//     console.log(item.id);
//     console.log("brr");
//   };

//   render() {
//     // const url = useRouteMatch();

//     return (
//       <div>
//         <Grid container>
//           <Grid item xs={12} sm={12} md={3} lg={3}>
//             <div className="filter-grid">
//               <Filter />
//             </div>
//           </Grid>
//           <Grid item xs={12} sm={12} md={9} lg={9}>
//             {this.state.loading ? (
//               <div>
//                 <h1>Loading...</h1>
//               </div>
//             ) : (
//               <div>
//                 <h1>All Products</h1>
//                 <div className="all-cards">
//                   <Route path={`${url}/:productId`}>
//                     {this.state.products.map((product, index) => {
//                       return (
//                         <ProductCard
//                           data={product}
//                           key={index}
//                           click={this.productPage.bind(this, product)}
//                         />
//                       );
//                     })}
//                   </Route>
//                 </div>
//               </div>
//             )}
//           </Grid>
//         </Grid>
//       </div>
//     );
//   }
// }

export default AllProducts;
