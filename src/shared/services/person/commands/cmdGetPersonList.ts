import httpClient from "../../../utils/http-clients/djangoHttpClient.js";
import { PersonSerializer } from "../../../models/serializers/personSerializer";


export class CommandGetPersonList {
    PERSON_SERVICE = import.meta.env.VITE_API_PLATFORM_SERVICE_URL;

    getUrl() {
        return  `${this.PERSON_SERVICE}/persons/`;
    }

    async run(organization_id, offset=0, limit=Number.MAX_SAFE_INTEGER, search=null) {

        const url = this.getUrl()

        const params = {
            params: {
                organization: organization_id,
                offset: offset,
                limit: limit
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

    deserialize(data) {

        const serializer = new PersonSerializer();
        const persons = serializer.deserializeList(data)

        return persons
    }

}
