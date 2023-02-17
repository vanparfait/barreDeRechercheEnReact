//JSONPLaceholder pour simuler les fausses API
import React, { useEffect, useState } from "react";
import "./Search.css";

const Search = () => {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.cypress.io/posts")
      .then((response) => response.json())
      .then((res) => setDatas(res));
  }, []);
  //console.log(datas);

  function handleSearchTerm(e) {
    const value = e.target.value;
    setSearchTerm(value);
  }
  console.log(searchTerm);

  return (
    <div className="container">
      <div className="searchBar">
        <input
          type="text"
          name="searcBar"
          id="searchBar"
          placeholder="Rechercher"
          onChange={handleSearchTerm}
        />
      </div>
      <div className="searchResults">
        {datas
          .filter((val) =>
            val.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((data) => (
            <div key={data.id} className="searchResult">
              {data.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
