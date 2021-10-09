import React from "react";
import { useSelector } from "react-redux";
import TableRow from "./TableRow";

const Table = () => {
  const country = useSelector((state) => state.covid.countries);
  return (
    <div className="table-container">
      <div className="table-heading">
        <div className="row">Country</div>
        <div className="row">Confirmed</div>
        <div className="row">Active</div>
        <div className="row">Recovered</div>
        <div className="row">Deceased</div>
      </div>
      {country && <TableRow country={country} />}
    </div>
  );
};

export default Table;
