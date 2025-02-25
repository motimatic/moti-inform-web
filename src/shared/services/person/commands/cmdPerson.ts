import httpClient from "../../../utils/http-clients/djangoHttpClient.ts";
import { PersonSerializer } from "../../../models/serializers/personSerializer";

export class CommandPerson {
    PERSON_SERVICE = import.meta.env.VITE_API_PLATFORM_SERVICE_URL;
    getUrl() {
        return  `${this.PERSON_SERVICE}/person/`;
    }

    async run(service_id: number) {

        const url = this.getUrl()

        const params = {
            params: {
                service: service_id,
            }
        }

        try {
            const response = await httpClient.get(url, params);
            return this.deserialize(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }finally {

        }

    }
    //TODO: add input and output type
    deserialize(data: any) {
        const serializer = new PersonSerializer();
        const person = serializer.deserialize(data)

        return person
    }

}
