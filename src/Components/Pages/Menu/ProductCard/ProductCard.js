import { React } from "react";
import { Link } from "react-router-dom";
import "./ProductsCard.css";

const ProductCard = (props) => {
  return (
<Link to={`${props.url}/${props.data.id}`} className = "full-card">
      <div className="single-card" onClick={props.click} key={props.data.id}>
        <img
          src={props.data.url}
          className="card-image"
          alt={props.data.name}
        ></img>
        <p className="product-name">{props.data.name}</p>
        <p className="product-price">₹{props.data.price}</p>
      </div>
    </Link>
    
  );
};

export default ProductCard;
