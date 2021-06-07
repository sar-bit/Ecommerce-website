import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";

import Container from "@material-ui/core/Container";
import footware from "../../features/images/footware.jpg";

const PaymentDetailCard = ({ products, singleProduct }) => {
  const { price } = singleProduct || {};
  let total = 0;
  let length = products.length;
  return (
    <Card>
      <div style={{ padding: "15px" }}>
        {products &&
          products.map((i) => {
            total = total + i.quantity * price;
          })}
        <div
          style={{
            backgroundColor: "#FFBB33",
            fontWeight: "600",
            padding: "4px",
          }}
        >
          PAYMENT DETAILS
        </div>
        <div>Total items:{length}</div>
        <hr />
        <div>
          Total:
          <strong> {total}$</strong>
        </div>
      </div>
    </Card>
  );
};

export default PaymentDetailCard;
