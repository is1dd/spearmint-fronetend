import React from "react";

const StockSelector = ({ onSelect }) => {
  const stockList = ["abc", "stock1", "stock2", "stock3"];
  const selectStyle = {
    width: "25rem",
  padding: "0.8rem 0.2rem"
  }

  return (
    <div>
      <label>Select Stock: </label>
      <select style={selectStyle} onChange={(e) => onSelect(e.target.value)}>
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
