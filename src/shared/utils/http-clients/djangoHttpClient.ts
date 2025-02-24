import axios from 'axios'
import djangoRequestInterceptor from "../interceptors/djangoRequestInterceptor";


const httpClient = axios.create();

const [requestInterceptor, errorInterceptor] = djangoRequestInterceptor();

httpClient.interceptors.request.use(requestInterceptor, errorInterceptor);

export default httpClient
