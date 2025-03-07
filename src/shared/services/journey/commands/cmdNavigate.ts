import httpClient from "../../../utils/http-clients/djangoHttpClient.js";
import {JourneyContextSerializer} from "../../../models/serializers/journeyContextSerializer.ts";
import { JourneyContext } from "../../../models/journeyContext.model.ts";


export class CommandNavigate {
    RESOURCE_FINDER_SERVICE = import.meta.env.VITE_API_PLATFORM_SERVICE_URL;
    DEFAULT_LIMIT = import.meta.env.VITE_API_DEFAULT_LIMIT;

    getUrl() {
        return  `${this.RESOURCE_FINDER_SERVICE}/journeys/navigate/`;
    }

    async run(journeyContext: JourneyContext) {

        const url = this.getUrl();
        const body: any = {
            ...journeyContext,
            next_page: journeyContext.next_page + 1
        }

        try {

            let response: any = {}

            if( import.meta.env.VITE_API_RUN_LOCAL === "true" )
                response = await this.getTestData(body);
            else
                response = await httpClient.post(url, body);
            return this.deserialize(response.data);

        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }

    }

    deserialize(data: any) : any {
        const serializer = new JourneyContextSerializer();
        const page = serializer.deserialize(data);
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
                            "summary": {
                                "type": "metric",
                                "pre": "We have over",
                                "value": "150",
                                "post": "resource links available",
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
                            
                        },
                        
                        {
                            "name": "Identify Challenges",
                            "title": "How about current challenges? We can help there too.",
                            "prompt": "What challenges is your student currently facing?",
                            "summary": {
                                "type": "text",
                                "pre": "We have over",
                                "value": "150",
                                "post": "resource links available",
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
                                                "label": "Financial",
                                                "value": "1"
                                            },
                                            {
                                                "type": "selector",
                                                "label": "Academic",
                                                "value": "2"
                                            },
                                            {
                                                "type": "selector",
                                                "label": "Wellness",
                                                "value": "3"
                                            },
                                            {
                                                "type": "selector",
                                                "label": "Relationships",
                                                "value": "4"
                                            },
                                            {
                                                
                                                "type": "selector",
                                                "label": "Scheduling",
                                                "value": "5"
                                                
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
                        },
                        {
                            "name": "Links Summary",
                            "title": "Resource Links",
                            "prompt": "Here are the resources we’ve matched for you",
                            "actions": [
                                {
                                    "type": "button",
                                    "label": "Finish"
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