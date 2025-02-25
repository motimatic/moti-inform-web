import httpClient from "../../../utils/http-clients/djangoHttpClient.js";
import {JourneyContextSerializer} from "../../../models/serializers/journeyContextSerializer.ts";


export class CommandNavigate {
    RESOURCE_FINDER_SERVICE = import.meta.env.VITE_API_PLATFORM_SERVICE_URL;
    DEFAULT_LIMIT = import.meta.env.VITE_API_DEFAULT_LIMIT;

    getUrl() {
        return  `${this.RESOURCE_FINDER_SERVICE}/journey/navigate/`;
    }

    async run(fromPage: string  | null  = null, action=null, offset=0, limit=this.DEFAULT_LIMIT) {

        const url = this.getUrl()

        const params: any = {

            from_page: fromPage,
            action: action,
            offset: offset,
            limit: limit
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
        const page = serializer.deserialize(data.context);

        return page;
    }

    private getTestData(params: any) {

        const response = {
            data: {
                context: {
                    current_page: 0,
                    pages: [
                        {
                            "name": "Journey Confirmation",
                            "title": "Ready to help your student plan for success?",
                            "prompt": "Select a milestone below",
                            "actions": [
                                {
                                    "type": "button",
                                    "label": "Next Question >"
                                }
                            ],
                            "summary": {
                                "type": "metric",
                                "pre": "We have over",
                                "value": "150",
                                "post": "resource links available",
                                "prompt": "Let's personalize your journey"
                            }
                        },
                        {
                            "name": "Identify Challenges",
                            "title": "How about current challenges? We can help there too.",
                            "prompt": "What challenges is your student currently facing?",
                            "actions": [
                                {
                                    "type": "button",
                                    "label": "Next Question >"
                                }
                            ],
                            "summary": {
                                "type": "text",
                                "pre": "We have over",
                                "value": "150",
                                "post": "resource links available",
                                "prompt": "Let's personalize your journey"
                            }
                        },
                        {
                            "name": "Links Summary",
                            "title": "Resource Links",
                            "prompt": "Here are the resources we’ve matched for you",
                            "actions": [
                                {
                                    "type": "button",
                                    "label": "Next Question >"
                                }
                            ],
                            "summary": {
                                "type": "metric",
                                "pre": "We have over",
                                "value": "150",
                                "post": "resource links available",
                                "prompt": "Let's personalize your journey"
                            }
                        }
                    ]
                }
            }
        }

        if (params.from_page == 'Journey Confirmation'){
            response.data.context.current_page = 1;
        }

        if (params.from_page == 'Identify Challenges'){
            response.data.context.current_page = 2;
        }

        return response;

    }


}
