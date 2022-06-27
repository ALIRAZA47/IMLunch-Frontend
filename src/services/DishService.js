import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getDishes() {
    return apiClient.get("/dishes");
  },
  getDishByID(id) {
    return apiClient.get("/dishes/" + id);
  },
};
