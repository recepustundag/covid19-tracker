import * as types from "../actions/types";

const initialState = {
  countries: [],
  mapInfo: {},
  activeCountry: [],
  theme: 'light',
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COUNTRY:
      return {
        ...state,
        countries: action.payload
      };
    case types.FETCH_MAPINFO:
      return {
        ...state,
        mapInfo: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default covidReducer;
