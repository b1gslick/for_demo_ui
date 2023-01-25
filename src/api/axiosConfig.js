import axios from "axios";

export default axios.create({
  baseURL: "https://c5a8-62-228-157-150.eu.ngrok.io",
  headers: { "ngrok-skip-browser-warning": "true" },
});
