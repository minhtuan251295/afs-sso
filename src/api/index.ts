import axios from "axios";
import globalConfig from "config";

const api = axios.create({
  baseURL: `${globalConfig.service}/api`
})

export default api;