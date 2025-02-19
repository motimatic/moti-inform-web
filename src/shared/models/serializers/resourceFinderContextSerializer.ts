import { BaseSerializer } from "./baseSerializer";
import {ResourceFinderContext} from "../resourceFinderContext.model.ts";
import {PageSerializer} from "./pageSerializer.ts";


export class ResourceFinderContextSerializer extends BaseSerializer {

    public deserialize( data ): object {

        const context = new ResourceFinderContext();

        this._copyAttributes(context, data);

        const pageSerializer = new PageSerializer();
        const pages = data.pages.map(page => pageSerializer.deserialize(page));

        context.pages = pages

        return context;

    }

}
