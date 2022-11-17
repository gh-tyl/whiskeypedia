import http from "../http-commons.js";

class PurchasedService {
  getJson() {
    return http.get("data/json/purchacedJson.json");
  }
}
export default new PurchasedService();
