import { React } from "react";
import "./ProductsCard.css";

const ProductCard = (props) => {
  return (
    <div className="single-card">
      <img src={props.data.url} className="card-image" alt = {props.data.name}></img>
      <p className="product-name">{props.data.name}</p>
      <p className="product-price">₹{props.data.price}</p>
    </div>
  );
};

export default ProductCard;
