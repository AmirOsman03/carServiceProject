import axiosInstance from "../axios/axios.js";


const serviceRepository = {
    findAll: async () => {
        return await axiosInstance.get("/services");
    },
    startService: async (serviceId) => {
        return await axiosInstance.post(`/services/${serviceId}/start`);
    },
    cancelService: async (serviceId) => {
        return await axiosInstance.post(`/services/${serviceId}/cancel`);
    },
    completeService: async (serviceId) => {
        return await axiosInstance.post(`/services/${serviceId}/complete`);
    },
};

export default serviceRepository;