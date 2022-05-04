import axios from "axios";
console.log("acessando a API");
const api = axios.create({
  baseURL: "http://localhost:8000/",
  //baseURL: "http://193.136.189.87:5003/",
  //baseURL: "http://217.112.93.248:5003/",
  //baseURL: "https://server.social-iot.pt"
  //baseURL: "https://server.secclass.pt",
});
console.log("Rodando a API");
export default api;
