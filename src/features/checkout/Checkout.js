import React, { Fragment, useEffect } from "react";
import * as _ from "lodash";
import { connect } from "react-redux";
import CartCard from "../../components/cartcard/CartCard";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { Row, Col } from "react-bootstrap";
import CartCardHandle from "../../components/cartcard/CartCardHandle";
import commonButton from "../../components/commonButton/Button";
import Category from "../../components/category/Category";
import { useHistory } from "react-router-dom";
import PaymentDetailCard from "../../components/paymentdetail/PaymentDetailCard";

const Checkout = ({ getCart, cartInfo,singleProduct }) => {
  const history = useHistory();
  useEffect(() => {
    getCart();
  }, []);
  const { products } = cartInfo || {};
  console.log(singleProduct, "singleProduct");
  return (
    <Container maxWidth="md">
      <div style={{ marginBottom: "15px", marginTop: "15px" }}>
        <Row >
          <Col lg={6} style={{marginBottom:"15px"}}>
            <Card>
              <div style={{ padding: "15px" }}>
                <div
                  style={{
                    backgroundColor: "#FFBB33",
                    fontWeight: "600",
                    padding: "4px",
                  }}
                >
                  DELIVERY ADDRESS
                </div>
                <div style={{ fontWeight: "600" }}>John J Young</div>
                <p>4811 Custer Street Johnstown, PA 15904</p>
              </div>
            </Card>
          </Col>
          <Col lg={6} style={{marginBottom:"15px"}}>
            <PaymentDetailCard products={products} singleProduct={singleProduct}/>
          </Col>
       
        </Row>
        <Row>
          <Col lg={6} style={{marginBottom:"15px"}}>
            <Card>
              <div style={{ padding: "15px" }}>
                <div
                  style={{
                    backgroundColor: "#FFBB33",
                    fontWeight: "600",
                    padding: "4px",
                  }}
                >
                  ORDER DETAILS
                </div>

                {products &&
                  products.map((item) => (
                    <CartCardHandle
                      productId={item.productId}
                      quantity={item.quantity}
                    />
                  ))}
              </div>
            </Card>
          </Col>
          <Col lg={6} style={{marginBottom:"15px"}}>
            <Card>
              <div style={{ padding: "15px" }}>
                <div
                  style={{
                    backgroundColor: "#FFBB33",
                    fontWeight: "600",
                    padding: "4px",
                  }}
                >
                  PAYMENT OPTION
                </div>
              </div>
<div style={{marginLeft:'40%'}}>
<Category name='Pay Now'/>
</div>
            
            </Card>
          </Col>
         
        </Row>
      </div>
    </Container>
  );
};

const mapStateToProps = ({ product = {} }) => {
  const cartInfo = _.get(product, "cartInfo", []);
  const singleProduct = _.get(product, "singleProduct", []);
  return {
    cartInfo,
    singleProduct,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getCart: (data) => dispatch({ type: "getCartcalled", payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
