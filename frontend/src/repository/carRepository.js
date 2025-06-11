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
        try {
            const response = await axiosInstance.post(`/cars/addToService/${carId}`, data);
            return response.data; // Return only data part if that's what you want
        } catch (error) {
            // You could log it or rethrow it
            console.error("Error adding to service:", error);
            throw error; // Rethrow so the caller can handle it
        }
    },
};

export default carRepository;