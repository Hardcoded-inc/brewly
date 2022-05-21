import { useEffect, useState } from "react";
import "./App.css";
import { CoffeeListing } from "./components";

const baseUrl = "http://localhost:3001";

function App() {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/coffee`)
      .then((res) => res.json())
      .then((coffeeList) => {
        console.log(coffeeList);
        setCoffeeList(coffeeList);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <CoffeeListing coffeeList={coffeeList} />
    </div>
  );
}

export default App;
