import React, { useState } from "react";
import "./TempConv.css";

export default function TempConv() {
  const [celsius, setCelsius] = useState();
  const [fahrenheit, setFahrenheit] = useState();

  const handleCelsiusChange = (e) => {
    const celsiusValue = parseFloat(e.target.value);
    const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
    setFahrenheit(fahrenheitValue);
  };

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = parseFloat(e.target.value);
    const celsiusValue = ((fahrenheitValue - 32) * 5) / 9;
    setCelsius(celsiusValue);
  };

  return (
    <div>
      <div className="container">
        <h1>Temperature Converter</h1>
        <div className="temp_celsius">
          <label> Celsius: </label>
          <input
            type="number"
            placeholder="Enter Celsius Temperature"
            value={celsius}
            onChange={handleCelsiusChange}
            onBlur={handleCelsiusChange}
          />
        </div>
        <div className="temp_fah">
          <label> Fahrenheit: </label>
          <input
            type="number"
            placeholder=" Enter Fahrenheit Temperature"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            onBlur={handleFahrenheitChange}
          />
        </div>
      </div>
    </div>
  );
}
