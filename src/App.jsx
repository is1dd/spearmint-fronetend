import React, { useState, useEffect } from "react";
import StockSelector from "./components/StockSelector";
import PriceDisplay from "./components/PriceDisplay";

const App = () => {
  const [selectedStock, setSelectedStock] = useState("");
  const [stockPrice, setStockPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedStock) {
          const response = await fetch(
            `https://energetic-sheath-dress-goat.cyclic.app/api/stocks/${selectedStock}`
          );
          const data = await response.json();

          setStockPrice(data.price);
        } else {
          setStockPrice(null);
        }
      } catch (error) {
        console.error("Error fetching stock price:", error);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 11000);

    return () => clearInterval(interval);
  }, [selectedStock]);

  // const appStyles = {
  //   fontFamily: "Arial, sans-serif",
  //   textAlign: "center",
  //   marginTop: "30px",
  // };
  const appStyles = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  }

  const headingStyles = {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  };

  return (
    <div style={appStyles}>
      <h1 style={headingStyles}>Mini Stock Price Tracker</h1>
      <StockSelector onSelect={(stock) => setSelectedStock(stock)} />
      <PriceDisplay stock={selectedStock} price={stockPrice} />
      <p>Note: Refetching the price of every stock in 11 seconds instead of 1 minute for your convenience to see given task is implemented faster.</p>
    </div>
  );
};

export default App;
