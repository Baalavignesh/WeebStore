import { React } from "react";
import { Link } from "react-router-dom";
import "./ProductsCard.css";
import Typography from '@material-ui/core/Typography';


const ProductCard = (props) => {
  return (
    <Link to={`${props.url}/${props.data.p_id}`} className="full-card">
      <div className="single-card" onClick={props.click} key={props.data.id}>
        <img
          src={props.data.p_image}
          className="card-image"
          alt={props.data.p_name}
        ></img>
        <Typography variant="inherit" className="product-name" noWrap>
        {props.data.p_name}
          </Typography>
        {/* <p className="product-name">{props.data.p_name}</p> */}
        <p className="product-price">₹{props.data.p_price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
