import { BaseSerializer } from "./baseSerializer";
import {LandingPageConfig} from "../landingPageConfig.model.ts";
import {BrandSerializer} from "./brandSerializer.ts";



export class LandingPageConfigSerializer extends BaseSerializer {

    public deserialize( data ): LandingPageConfig {

        const config = new LandingPageConfig();

        this._copyAttributes(config, data);

        const brandSerializer = new BrandSerializer();
        config.brand_info = brandSerializer.deserialize(data.brand_info);

        return config;

    }

}
