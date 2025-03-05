import { BaseSerializer } from "./baseSerializer";
import { QuickLink } from "../quickLink.model.ts";


export class QuickLinkSerializer extends BaseSerializer {

    public deserialize( data: any ): any {
        const ql = new QuickLink();
        this._copyAttributes(ql, data);
        return ql;

    }

}
