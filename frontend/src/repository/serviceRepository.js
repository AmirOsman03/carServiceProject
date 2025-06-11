import axiosInstance from "../axios/axios.js";


const serviceRepository = {
    findAll: async () => {
        return await axiosInstance.get("/services");
    },
};

export default serviceRepository;