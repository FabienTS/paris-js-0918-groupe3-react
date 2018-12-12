import { GET_OFFERS, FETCH_CITIES } from "./types";
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN_NAME;

export const searchOffers = data => dispatch => {
  const { title, place, contract_type } = data;
  const url = `${domain}api/offers?search=${title}&place=${place}&type=${contract_type}`;
  axios.get(url).then(res => {
    dispatch({
      type: GET_OFFERS,
      offersList: res.data,
    });
  });
};

export const fetchCities = inputPlace => dispatch => {
  const url = `https://geo.api.gouv.fr/communes?nom=${inputPlace}&fields=nom&format=json&geometry=centre`
  axios.get(url).then(res => {
    dispatch({
      type: FETCH_CITIES,
      citiesList: res.data.splice(0,8),
    });
  });
};
