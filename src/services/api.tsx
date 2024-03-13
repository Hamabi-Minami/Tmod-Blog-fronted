import axios from "axios";
const BASE_URL = "http://localhost:8000/api"


export const getBlogs = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/blog/`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching data');
    }
}

export const getBlog = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/blog/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching data');
    }
}

export const getFeatures = async (id: number) => {
    try{
        const response = await axios.get(`${BASE_URL}/blog/${id}/features`);
        return response.data;
    }catch (error){
        throw new Error('Error fetching data')
    }
}
