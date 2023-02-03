import axios from "axios";

let apache2_host = process.env.REACT_APP_APACHE2_HOST || "http://localhost:8081";

export default axios.create({
  baseURL: "http://2670-62-228-157-150.ngrok.io",
  //baseURL: apache2_host,
  headers: { "ngrok-skip-browser-warning": "true" },
});
