import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '6ded2faf58754ea18970b3c974361443'
    }
});