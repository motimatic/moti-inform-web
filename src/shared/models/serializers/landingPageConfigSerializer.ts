import { BaseSerializer } from "./baseSerializer";
import {LandingPageConfig} from "../landingPageConfig.model.ts";
import {BrandSerializer} from "./brandSerializer.ts";



export class LandingPageConfigSerializer extends BaseSerializer {

    public deserialize( data: any ): LandingPageConfig {

        const config = new LandingPageConfig();

        this._copyAttributes(config, data);

        const brandSerializer = new BrandSerializer();
        config.brand = brandSerializer.deserialize(data.brand);

        return config;

    }

}
