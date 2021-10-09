import React from "react";
import { useDispatch } from "react-redux";
import { activeCountry } from "../actions/covid";

const TableRow = ({ country }) => {
  const dispatch = useDispatch();
  const test = () => {
    dispatch(activeCountry('asdasdasd'));
  }

  return (
    <div className="table-body">
      {country.map((item, key) => {
        return (
          <div className="cell" key={key } onClick={test}>
            <div className="row">{item.country}</div>
            <div className="row">{item.cases}</div>
            <div className="row">{item.active}</div>
            <div className="row">{item.recovered}</div>
            <div className="row">{item.deaths}</div>
          </div>
        );
      })}
    </div>
  );
};

export default TableRow;
