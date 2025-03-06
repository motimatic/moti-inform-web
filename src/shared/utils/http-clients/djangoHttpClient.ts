import axios from 'axios'
import djangoRequestInterceptor from "../interceptors/djangoRequestInterceptor";


const httpClient = axios.create({
                                                withCredentials: true // ✅ Ensure cookies are sent with each request);
                                              }
                                            );

const [requestInterceptor, errorInterceptor] = djangoRequestInterceptor();

httpClient.interceptors.request.use(requestInterceptor, errorInterceptor);

export default httpClient
