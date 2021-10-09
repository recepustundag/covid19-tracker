import React, { useCallback, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { CloseIcon, SearchIcon, CircleRightIcon } from "./icons";

const Search = () => {
  const searchInput = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState([]);
  const countries = useSelector((state) => state.covid.countries);

  const handleChange = useCallback(
    (event) => {
      const val = event.target.value;
      setSearchValue(val);
      if (val != "") {
        const filterData = countries.filter((item) => item.country.toLowerCase().includes(val.toLowerCase())).slice(0, 5);
        setResult(filterData);
      } else {
        setResult([]);
      }
    },
    [countries]
  );
  return (
    <div className="search">
      <label>Search your country</label>
      <div className="form-group">
        <SearchIcon />
        <input type="text" value={searchValue} onChange={handleChange} ref={searchInput} />
        {searchValue != "" && (
          <div className="close">
            <button type="button">
              <CloseIcon />
            </button>
          </div>
        )}
      </div>
      {searchValue != "" && result.length > 0 && (
        <div className="search-results">
          {result.map((item) => {
            return (
              <div key={item.countryInfo.iso2}>
                <span>{item.country}</span>
                <span>
                  {item.countryInfo.iso2} <CircleRightIcon />
                </span>
              </div>
            );
          })}
        </div>
      )}
      {searchValue != "" && result.length == 0 && (
        <div className="search-results">
          <div>
            <span className="no-result">No results</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
