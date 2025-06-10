import axiosInstance from "../axios/axios.js";


const carRepository = {
    findAll: async () => {
        return await axiosInstance.get("/cars");
    },
    findById: async (id) => {
        return await axiosInstance.get(`/cars/${id}`);
    },
    add: async (data) => {
        return await axiosInstance.post("/cars/add", data);
    },
    edit: async (id, data) => {
        return await axiosInstance.put(`/cars/edit/${id}`, data);
    },
    delete: async (id) => {
        return await axiosInstance.delete(`/cars/delete/${id}`);
    },
    addToService: async (carId, data) => {
        return await axiosInstance.post(`/cars/addToService/${carId}/`, data);
    },
};

export default carRepository;