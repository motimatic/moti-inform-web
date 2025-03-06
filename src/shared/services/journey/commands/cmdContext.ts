import httpClient from "../../../utils/http-clients/djangoHttpClient.js";
import {JourneyContextSerializer} from "../../../models/serializers/journeyContextSerializer.ts";
export class CommandContext {
    RESOURCE_FINDER_SERVICE = import.meta.env.VITE_API_PLATFORM_SERVICE_URL;
    DEFAULT_LIMIT = import.meta.env.VITE_API_DEFAULT_LIMIT;

    getUrl(adId: string, page_url:string) {
        return  `${this.RESOURCE_FINDER_SERVICE}/journeys/contexts/?ad_id=${adId}&url=${page_url}`;
    }

    async run(adId: string, page_url:string) {

        const url = this.getUrl(adId, page_url);
        const params: any = {
            ad_id: adId,
        }

        try {
            let response: any = {}
            if( import.meta.env.VITE_API_RUN_LOCAL === "true" )
                response = await this.getTestData(params);
            else
                response = await httpClient.get(url, params);

            return this.deserialize(response.data);

        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }

    }

    deserialize(data: any) : any{
        const serializer = new JourneyContextSerializer();
        const page = serializer.deserialize(data);
        return page;
    }

    private getTestData(params: any) {

        const response = {
            data: {
                    "current_page": 0,
                    "pages": [
                        {
                            "name": "Journey Confirmation",
                            "title": "Ready to help your student plan for success?",
                            "prompt": "Select a milestone below",
                            "summary": {
                                "type": "metric",
                                "pre": "We have over",
                                "value": "150",
                                "post": "resource links available.",
                                "prompt": "Let's personalize your journey"
                            },
                            "form_data": {
                                "name": "Milestone Selector",
                                "description": "This is the form to grab milestone information",
                                "sections": [
                                    {
                                        "name": "Collector",
                                        "fields": [
                                            {
                                                "type": "selector",
                                                "label": "Returning to School",
                                                "value": "1"
                                            },
                                            {
                                                "type": "selector",
                                                "label": "First Time Student",
                                                "value": "2"
                                            },
                                            {
                                                "type": "selector",
                                                "label": "Applying",
                                                "value": "3"
                                            },
                                            {
                                                "type": "selector",
                                                "label": "Financial Preparation",
                                                "value": "4"
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Actions",
                                        "fields": [
                                            {
                                                "type": "button",
                                                "label": "Next Question >",
                                                "value": "5"
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
            }
        }

        if (params.from_page == 'Journey Confirmation'){
            response.data.current_page = 1;
        }

        if (params.from_page == 'Identify Challenges'){
            response.data.current_page = 2;
        }

        return response;

    }


}
