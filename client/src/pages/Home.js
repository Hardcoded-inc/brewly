import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home_wrapper">
      <div className="home_container">
        <h1>
          ZANURZ SIĘ
          <br />W ŚWIAT KAWY
        </h1>
        <p>
          Napój sporządzany z palonych, a następnie zmielonych lub poddanych
          instantyzacji ziaren kawowca, zwykle podawany na gorąco. Pochodzi z
          Etiopii, w Europie pojawiła się około XVI wieku. Jedna z
          najpopularniejszych używek na świecie i główne źródło kofeiny.
        </p>
        <Link to="add-coffee">
          <button>Dodaj nową kawę</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
