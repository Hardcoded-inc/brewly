import { useEffect, useState } from "react";
import { CoffeeListing, Layout } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/App.css";
import "./css/Layout.css";
import "./css/CoffeeListing.css";

import Home from "./pages/Home";
import List from "./pages/List";
import CoffeeSingle from "./pages/CoffeeSingle";
import Add from "./pages/Add";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<List />} />
          <Route path="/listing/:id" element={<CoffeeSingle />} />
          <Route path="/add-coffee" element={<Add />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
