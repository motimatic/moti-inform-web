import httpClient from "../../../utils/http-clients/djangoHttpClient.js";
import {LandingPageConfigSerializer} from "../../../models/serializers/landingPageConfigSerializer.ts";
export class CommandGetLandingPageConfig {
    PERSON_SERVICE = import.meta.env.VITE_API_PLATFORM_SERVICE_URL;

    getUrl(_adId: string) {
        //const origin = window.location.origin;
        return  `http://localhost:5000/api/v1/landing_pages/configs/?ad_id=123456&url=https://www.pima.edu/`;
    }

    async run(adId: string) {

        const url = this.getUrl(adId);
        const params: any = {
            ad_id: adId
        }
      
        try {
            let response: any = {}
            if( import.meta.env.VITE_API_RUN_LOCAL === "true")
                response = await this.getTestData(params);
            else
                response = await httpClient.get(url, params);
            return this.deserialize(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }finally {

        }

    }
    deserialize(data: any) {
        const serializer = new LandingPageConfigSerializer();
        const landingPageConfig = serializer.deserialize(data);

        return landingPageConfig;
    }

    private getTestData(params: any) {

        const response = {
            data: {
                analytics_tracking_code: '123',
                template_name: 'base',
                brand: {
                    name: "Pima",
                    logo_url: "https://pima.edu/_files/images/logo-white.svg",
                    company_site_url: "https://www.pima.edu/",
                    primary_color_code: "#3B54BE",
                    secondary_color_code: "#85BDF2",
                    tertiary_color_code: "#D79A47",
                    tag_line: "Make Someday Today",
                    ad: {
                        media_url: "https://pima.edu/_files/images/logo-white.svg",
                      
                    }
                }
            }
        }

        if (params.ad_id == '2'){
            response.data.template_name = 'fafsa';
        }

        return response;

    }

}
