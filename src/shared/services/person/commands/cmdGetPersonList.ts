import httpClient from "../../../utils/http-clients/djangoHttpClient.ts";
import { PersonSerializer } from "../../../models/serializers/personSerializer";

export class CommandGetPersonList {
    PERSON_SERVICE = import.meta.env.VITE_API_PLATFORM_SERVICE_URL;
    getUrl() {
        return  `${this.PERSON_SERVICE}/persons/`;
    }

    async run(organization_id: number, offset: number = 0, limit: number = Number.MAX_SAFE_INTEGER, search: any = null) {

        const url = this.getUrl()

        const params = {
            params: {
                organization: organization_id,
                offset,
                limit,
                search
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
    deserialize(data: any) {

        const serializer = new PersonSerializer();
        const persons = serializer.deserializeList(data)

        return persons
    }

}
