import * as api from "../utils/api";
import * as types from "./types";

export const fetchCountries = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCountries();
    dispatch({
      type: types.FETCH_COUNTRY,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchMapInfo = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMapInfo();
    dispatch({
      type: types.FETCH_MAPINFO,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const activeCountry = (param) => async (dispatch) => {
  console.log(param);
};