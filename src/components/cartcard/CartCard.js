import React from "react";
import "./CartCardStyles.css";
import Container from "@material-ui/core/Container";


const CartCard = ({image,title,price,quantity}) => {
  // console.log(productdetail,'productdetail')
  return (
    <Container>
      <div className="smallcardarea">
        <div className="imagearea">
          <img src={image} />
        </div>

        <div className="detailsarea">
          <h6 className="chead">{title}</h6>
          
          <span>{price}$ </span>
          <span>Qnty:{quantity}</span>
        </div>
      </div>
    </Container>
  );
};

export default CartCard;
