import axios from 'axios';

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params:{
        key:AIzaSyAMoLR5bV_HyT0fbzqx0ODjBAO_KIg3BNI
    }
})

export default request
