import React from "react";

const PriceDisplay = ({ stock, price }) => {
  return (
    <div>
      <h2>Stock: {stock}</h2>
      <h3>Price: {price !== null ? `${price}` : "Loading..."}</h3>
      {/* <h3> Price: {price}</h3> */}
    </div>
  );
};

export default PriceDisplay;
