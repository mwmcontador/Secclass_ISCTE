import axios from "axios";
console.log("acessando a API");
const api = axios.create({
  baseURL: "http://193.136.189.87:5003/",
});
console.log("Rodando a API");
export default api;
