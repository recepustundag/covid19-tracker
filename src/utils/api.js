import axios from "axios";
const apiEndpoint = "https://disease.sh/v3/covid-19";

export const fetchMapInfo = async () => await axios.get(`${apiEndpoint}/all`);
export const fetchCountries = async () => await axios.get(`${apiEndpoint}/countries`);