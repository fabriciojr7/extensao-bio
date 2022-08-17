import axios from "axios";

export const api = axios.create({
  baseURL: "https://semabio-api.herokuapp.com/api/",
});

export const getDados = (endpoint) => {
  return api.get(endpoint);
}

export const listagem = (endpoint) => {
  return api.get(endpoint);
}

export const create = (endpoint, dados) => {
  return api.post(endpoint, dados);
}

export const updateCampo = (endpoint, campo) => {
  return api.patch(endpoint, campo);
}

export const update = (endpoint, dados) => {
  return api.patch(endpoint, dados);
}

export const realizaLogin = (dados) => {
  return api.post('login', dados);
}

export const realizaLogout = () => {
  return api.post('logout');
}

export const emailEnvio = (endpoint, dados) => {
  return api.post(endpoint, dados);
}
