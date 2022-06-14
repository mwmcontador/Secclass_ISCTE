import axios from "axios";
//import React from "react";

const rest_api = axios.create({
  //baseURL: 'https://server.secclass.pt',
  baseURL: "http://localhost:8000",
  timeout: 1000,
  //headers: {'X-Custom-Header': 'foobar'}
});
console.log("Connecting Server API");
export default rest_api;


async function getComments() {
  try {
    const response = await axios.get(`/comment?status=New`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
