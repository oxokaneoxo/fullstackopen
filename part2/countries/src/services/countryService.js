import axios from "axios";

const getAllCountries = async () => {
    const request = axios.get("https://restcountries.com/v3.1/all")
    const response = await request;
    return response.data;
}

export default { getAllCountries }