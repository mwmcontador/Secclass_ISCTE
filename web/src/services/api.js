import axios from "axios";
console.log("acessando a API");
const api = axios.create({
  baseURL: "http://localhost:8000",
});
console.log("Rodando a API");
export default api;
