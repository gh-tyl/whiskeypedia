import http from "../http-commons.js";

class UserService {
  getJson() {
    return http.get("data/json/userJson.json");
  }
}
export default new UserService();
