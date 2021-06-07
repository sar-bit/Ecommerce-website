import React, {useEffect, useState} from "react";
import Card from "@material-ui/core/Card";


const PaymentDetailCard = ({ products }) => {
const [length, setlength]= useState('');
  let total = 0;

  useEffect(()=>{
    setlength(products.length) 
  },[])
  return (
    <Card>
      <div style={{ padding: "15px" }}>
        {products &&
          products.map((i) => {
            total = total + 1 * i.price;
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
