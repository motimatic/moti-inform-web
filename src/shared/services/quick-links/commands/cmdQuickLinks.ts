import httpClient from "../../../utils/http-clients/djangoHttpClient.js";

import { QuickLinkSerializer } from "../../../models/serializers/quickLinkSerializer.ts";
import { QuickLink } from "../../../models/quickLink.model.ts";

export class CommandQuickLinks {
    RESOURCE_FINDER_SERVICE = import.meta.env.VITE_API_PLATFORM_SERVICE_URL;
    DEFAULT_LIMIT = import.meta.env.VITE_API_DEFAULT_LIMIT;

    getUrl() {
        return  `${this.RESOURCE_FINDER_SERVICE}/journey/context/`;
    }

    async run() {

        const url = this.getUrl();
        const params: any = {};

        try {

            let response: any = {}
            if( import.meta.env.VITE_API_RUN_LOCAL === "true" )
                response = await this.getTestData();
            else
                response = await httpClient.get(url, params);

            return this.deserialize(response.data);

        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }

    }

    deserialize(data: any) : QuickLink[] {
        const serializer = new QuickLinkSerializer();
        return serializer.deserializeList(data);
    }

    private getTestData() {

        const response = {
            data: [
                {
                    id:"1",
                    name:"Ready to Apply",
                    description:"Get help getting started, request more information, or take a tour.",
                    action:"Contact Admissions"
                },
                {
                    id:"2",
                    name:"Paying for College",
                    description:"Need financial aid assistance? Reach out to our office for help.",
                    action:"Contact Financial Aid"
                }
            ]
        }

     

        return response;

    }


}
