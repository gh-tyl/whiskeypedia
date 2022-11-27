import http from "../http-commons.js";

class readJson {
  getJson(data) {
    // data format('data/user_info.json');
    return http.get(data);
  }
}

export default new readJson();
