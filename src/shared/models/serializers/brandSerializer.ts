import { BaseSerializer } from "./baseSerializer";
import {Brand} from "../brand.model.ts";


export class BrandSerializer extends BaseSerializer {

    public deserialize( data ): Brand {

        const brand = new Brand();

        this._copyAttributes(brand, data);

        return brand;

    }

}
