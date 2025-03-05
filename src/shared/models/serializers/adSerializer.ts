import { BaseSerializer } from "./baseSerializer";
import {Ad} from "../ad.model.ts";


export class AdSerializer extends BaseSerializer {

    public deserialize( data: any ): any {

        const ad = new Ad();
        this._copyAttributes(ad, data);

        return ad;

    }

}
