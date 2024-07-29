import React, { useState, useEffect } from "react";

function Search() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then(response => response.json())
      .then(json => {
        setData(json.results);
      });
  }, []);

  useEffect(() => {
    if (query) {
      const filtered = data.filter(pokemon => pokemon.name.toLowerCase().includes(query.toLowerCase()));
      setFilteredData(filtered);
    } else {
      setFilteredData([]);
    }
  }, [query, data]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="Rechercher"
          value={query}
          onChange={handleInputChange}
          className="form-control"
        />
      </div>
      <div className="search_results">
        {filteredData.map((pokemon, index) => (
          <div key={index} className="search_result">
            {pokemon.name}
          </div>
        ))}
      </div>
    </>
  );
}

export default Search;