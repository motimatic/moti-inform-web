import { BaseSerializer } from "./baseSerializer";
import { JourneyResource } from "../journeyResource.model.ts";


export class JourneyResourceSerializer extends BaseSerializer {

    public deserialize( data: any ): object {
        const context = new JourneyResource();

        this._copyAttributes(context, data);


        return context;

    }

}
