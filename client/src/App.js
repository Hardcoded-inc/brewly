import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const baseUrl = "http://localhost:3000";

function App() {
  const [items, setItems] = useState([]);

  console.log(items);

  useEffect(() => {
    fetch(`${baseUrl}/items`)
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items);
        setItems(items);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {items.map((item) => (
          <p>{item.name}</p>
        ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
