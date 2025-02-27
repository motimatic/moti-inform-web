import { BaseSerializer } from "./baseSerializer";
import { QuickLinks } from "../quiclLinks.model.ts";


export class QuickLinksSerializer extends BaseSerializer {

    public deserialize( data: any ): any {
        const ql = new QuickLinks();
        this._copyAttributes(ql, data);
        return ql;

    }

}
