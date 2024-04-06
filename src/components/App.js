import React, { useState, useEffect } from "react";
import "./../styles/App.css";
import "regenerator-runtime/runtime";

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const calculateSum = async () => {
      // Simulate asynchronous calculation
      const total = await calculateTotal(numbers);
      setSum(total);
    };
    calculateSum();
  }, [numbers]);

  const calculateTotal = async (numbers) => {
    // Simulate asynchronous calculation
    return new Promise((resolve) => {
      setTimeout(() => {
        const total = numbers.reduce((acc, curr) => acc + curr, 0);
        resolve(total);
      }, 0);
    });
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setNumbers([...numbers, value]);
    }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        placeholder="Enter a number"
        onChange={handleInputChange}
      />
      <p>Sum: {sum}</p>
    </div>
  );
};
export default App;
