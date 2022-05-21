import { useEffect, useState } from "react";
import "./App.css";

const baseUrl = "http://localhost:3001";

function App() {
  const [coffee, setCoffee] = useState([]);

  console.log(coffee);

  useEffect(() => {
    fetch(`${baseUrl}/coffee`)
      .then((res) => res.json())
      .then((coffee) => {
        console.log(coffee);
        setCoffee(coffee);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {coffee.map((item) => (
          <p key={item.id}>
            {Object.keys(item).map((key) => (
              <div style={{ fontSize: 24 }}>
                {key}: {item[key]}
              </div>
            ))}
          </p>
        ))}
      </header>
    </div>
  );
}

export default App;
