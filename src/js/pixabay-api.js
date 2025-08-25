import Axios from "axios";

const axios = Axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        key: '47880472-62fa9ffb43bc7b1a2eb88d0d3',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        
    },
});


export function getImagesByQuery(query) {
    return axios
        .get('', {
            params: {
                q: query,
            }
        })
        .then(response => response.data)
}




