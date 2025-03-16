import axios from "axios";

// 88032560/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api