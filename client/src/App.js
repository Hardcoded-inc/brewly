import { useEffect, useState } from "react";
import { CoffeeListing, Layout } from "./components";

import "./css/App.css";
import "./css/Layout.css";
import "./css/CoffeeListing.css";

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
      <Layout>
        <CoffeeListing coffeeList={coffeeList} />
      </Layout>
    </div>
  );
}

export default App;
