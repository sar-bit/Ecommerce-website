import React, { useEffect, useCallback, useState } from "react";
import * as _ from "lodash";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Container from "@material-ui/core/Container";
import "./HomeScreenStyles.css";

import MiniProductCard from "../../components/productcard/MiniProductCard";
import Category from "../../components/category/Category";

const HomeScreen = ({
  getProduct,
  productInfo,
  categoryInfo,
  getCategory,
  addProducttoCart,
  cart,
}) => {
  // useCallback(() => {
  //   getProduct()

  // }, [productInfo]);

  // useCallback(() => {
  //   getCategory()

  // }, [categoryInfo]);

  useEffect(() => {
    getProduct();
    getCategory();
  }, []);

  return (
    <div>
      <Container>
        <div className="content">
          <Row>
            {categoryInfo &&
              categoryInfo.map((item) => <Category name={item} />)}

            <Row>
              {productInfo &&
                productInfo.map((item, index) => (
                  <Col>
                    <MiniProductCard
                      productdetail={item}
                      addProducttoCart={addProducttoCart}
                    />
                  </Col>
                ))}
            </Row>
          </Row>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ product = {} }) => {
  const productInfo = _.get(product, "productInfo", []);
  const categoryInfo = _.get(product, "categoryInfo", []);
  const cart = _.get(product, "cart", []);
  return {
    productInfo,
    categoryInfo,
    cart,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getProduct: (data) => dispatch({ type: "getProductcalled", payload: data }),
  getCategory: (data) => dispatch({ type: "getCategorycalled", payload: data }),
  addProducttoCart: (data) =>
    dispatch({ type: "addProducttoCartcalled", payload: data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
