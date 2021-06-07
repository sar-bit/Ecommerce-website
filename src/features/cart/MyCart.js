import React, { Fragment, useEffect } from "react";
import * as _ from "lodash";
import { connect } from "react-redux";
import CartCard from "../../components/cartcard/CartCard";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { Row, Col } from "react-bootstrap";
//import CartCardHandle from "../../components/cartcard/CartCardHandle";

import Category from "../../components/category/Category";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const MyCart = ({ getCart, cartInfo }) => {
  const history = useHistory();

  const localcart = useSelector((state) => state.product.cart);

  useEffect(() => {
    getCart();
  }, []);
  //const { products } = cartInfo || {};
  //console.log(cartInfo, "cartInfocartInfo");
  return (
    <Container maxWidth="md">
      <div style={{ marginBottom: "15px", marginTop: "15px" }}>
        <h4>My Cart</h4>
      </div>

      <Row>
        <Col lg={8}>
          <Card>
            {/* {products &&
              products.map((item) => (
                <CartCardHandle
                  productId={item.productId}
                  quantity={item.quantity}
                />
              ))} */}

            {localcart &&
              localcart.map((item) => (
                <CartCard
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  quantity={1}
                />
              ))}

            <div
              style={{ padding: "15px", marginLeft: "40%" }}
              onClick={() => history.push("/checkout")}
            >
              <Category name="Place Order" />
            </div>
          </Card>
        </Col>
        <Col lg={4}></Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = ({ product = {} }) => {
  const cartInfo = _.get(product, "cartInfo", []);
  return {
    cartInfo,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getCart: (data) => dispatch({ type: "getCartcalled", payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);
