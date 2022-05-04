import axios from "axios";
import { stringify } from 'query-string';

const instance = axios.create({
  //baseURL: 'https://server.secclass.pt',
  baseURL: "http://localhost:8000/",
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

// Optionally the request above could also be done as
axios.get('/item', {
    params: {
      code: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });
