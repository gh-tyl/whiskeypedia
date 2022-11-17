import axios from "axios";

export default axios.create({
  baseURL: "",
  headers: {
    "content-type": "application/json",
  },
});
