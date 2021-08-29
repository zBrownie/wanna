import axios from "axios";

const WebService = axios.create({
  baseURL: "http://localhost:3030/",
});

export default WebService;
