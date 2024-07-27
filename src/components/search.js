import React from "react";
import {useState, useEffect} from "react";

function Search(){

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0)
        .then(response => response.json())
        .then(json =>console.log(json))
    })
    return(
    <>
        <div className="searchBar">
            <input
                type ="text"
                name="searchBar"
                id="searchBar"
                placeholder="Rechercher"
            />
        </div>
        <div className="search_results">
            <div className="search_result">Donnée</div>
        </div>
    </>
    );
}

export default Search