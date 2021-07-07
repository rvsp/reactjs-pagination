import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./components/Card";
import Pagination from "./components/Pagination";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(8);

  useEffect(() => {
    const fetchRestCountries = async () => {
      setLoading(true);
      const resp = await axios.get("https://restcountries.eu/rest/v2/all");
      setData(resp.data);
      setLoading(false);
    };

    fetchRestCountries();
  }, []);

  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentData = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="row">
        <Card cards={currentData} loading={loading} />
      </div>
      <Pagination
        dataPerPage={dataPerPage}
        totalCard={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
