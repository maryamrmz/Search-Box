import React, { useState } from "react";
import Cities from "./components/cities/Cities";
import Search from "./components/cities/Search";
import axios from "axios";
import "./App.css";

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);

  // Search API cities
  const searchCities = async text => {
    setLoading(true);
    const url = `http://api.dev.fastreserve.net/v1/cities/${text}`;
    const res = await axios.request({
      url: url,
      method: "get",
      headers: {
        "Client-Token": "$2y$10$VXF2k/LK6NEF8fEQ1wdnhunqsPNsRX2Y.p782CKGdA00vhPNiz.By"
      }
    });
    setCities(res.data.value.cities);
    setLoading(false);
  };
  return (
    <div className="App">
      <div className="container">
        <Search searchCities={searchCities} />
        <Cities cities={cities} loading={isLoading} />
      </div>
    </div>
  );
};

export default App;
