import React from "react";

const StockSelector = ({ onSelect }) => {
  const stockList = ["abc", "stock1", "stock2", "stock3"];

  return (
    <div>
      <label>Select Stock: </label>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select...</option>
        {stockList.map((stock) => (
          <option key={stock} value={stock}>
            {stock}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StockSelector;
