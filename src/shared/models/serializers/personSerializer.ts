import {Person} from "../person.model.ts";
import { BaseSerializer } from "./baseSerializer";


export class PersonSerializer extends BaseSerializer {
    //TODO ADD TYPE
    public deserialize( data: any ): object {

        const person = new Person();

        this._copyAttributes(person, data);

        /* Example of how a child list is deserialized */
        /*
        const childServices = this.deserializeList(data.children)

        service.children = childServices

        if (Array.isArray(data.service_methods)) {
            let serviceMethodSerializer = new ServiceMethodSerializer();
            service.service_methods = data.service_methods.map(method => serviceMethodSerializer.deserialize(method));
        }

         */

        return person;

    }

}
