import { BaseSerializer } from "./baseSerializer";
import {JourneyContext} from "../journeyContext.model.ts";
import {PageSerializer} from "./pageSerializer.ts";


export class JourneyContextSerializer extends BaseSerializer {

    public deserialize( data ): object {

        const context = new JourneyContext();

        this._copyAttributes(context, data);

        const pageSerializer = new PageSerializer();
        const pages = data.pages.map(page => pageSerializer.deserialize(page));

        context.pages = pages

        return context;

    }

}
