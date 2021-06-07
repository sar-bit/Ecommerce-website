import React, { useEffect } from "react";
import * as _ from "lodash";
import { connect } from "react-redux";
import CartCard from "../../components/cartcard/CartCard";
import Container from "@material-ui/core/Container";


const CartCardHandle = ({productId,singleProduct,getSingleProduct,quantity}) => {
  useEffect(()=>{
    getSingleProduct({productId});
  },[])
 
  return (
    <Container >
      
            <CartCard image={singleProduct.image} title={singleProduct.title} price={singleProduct.price} quantity={quantity}/>
         
    </Container>
  );
};

const mapStateToProps = ({ product = {} }) => {
  const singleProduct = _.get(product, "singleProduct", []);
  return {
    singleProduct,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getSingleProduct: (data) => dispatch({ type: "getSingleProductcalled", payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartCardHandle);
