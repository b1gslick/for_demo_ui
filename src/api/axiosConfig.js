import axios from "axios";

let apache2_host = process.env.REACT_APP_APACHE2_HOST || "http://localhost";

export default axios.create({
  baseURL: "https://c2b4-3-124-1-234.eu.ngrok.io",
  // baseURL: apache2_host,
  headers: { "ngrok-skip-browser-warning": "true" },
});
