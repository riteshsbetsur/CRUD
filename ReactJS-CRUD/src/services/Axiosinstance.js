import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "http://localhost:5000",
});

export default axiosInstance;






// axiosInstance.get();
// axiosInstance.post();
// axiosInstance.put();
// axiosInstance.delete();


