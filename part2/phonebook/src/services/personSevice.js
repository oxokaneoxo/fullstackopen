import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = async () => {
    const request = axios.get(baseUrl)
    const response = await request;
    return response.data;
}

const create = async (newObject) => {
    const request = axios.post(baseUrl, newObject)
    const request_1 = await request;
    return request_1.data;
}

const remove = async (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    const response = await request;
    return response.data;
}

const update = async (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    const response = await request;
    return response.data;
}

export default { getAll, create, remove, update }