import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4bd0ed126e784925ae829d4de2059fc5",
  },
});
