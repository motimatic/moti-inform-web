
// interceptor.js
/*
   Interceptor used to talk to the Django DRF service.
 */

// import {getAuth} from "../../../modules/auth";


const djangoRequestInterceptor = () => {

    return [
        config => {

        /*
            let auth = getAuth();

            config.headers['Content-Type'] = 'application/json';

            if (auth) {
                config.headers.Authorization = `Token ${auth.token}`;
            }

         */

            return config;
        },
        err => Promise.reject(err)
    ];
};

export default djangoRequestInterceptor;
