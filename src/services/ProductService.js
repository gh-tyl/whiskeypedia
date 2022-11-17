import http from "../http-commons.js";

class ProductService {
  getJson() {
    return http.get("data/json/productJson.json");
  }
}
export default new ProductService();
