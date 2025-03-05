import { BaseSerializer } from "./baseSerializer";
import {LandingPageConfig} from "../landingPageConfig.model.ts";
import {BrandSerializer} from "./brandSerializer.ts";
import {QuickLinkSerializer} from "./quickLinkSerializer.ts";
import {AdSerializer} from "./adSerializer.ts";



export class LandingPageConfigSerializer extends BaseSerializer {

    public deserialize( data: any ): LandingPageConfig {

        const config = new LandingPageConfig();

        this._copyAttributes(config, data);

        const brandSerializer = new BrandSerializer();
        config.brand = brandSerializer.deserialize(data.brand);

        const quickLinkSerializer = new QuickLinkSerializer();
        const links = data.quick_links.map((link:any) => quickLinkSerializer.deserialize(link));

        const adSerializer = new AdSerializer();
        config.ad = adSerializer.deserialize(data.ad);

        config.quickLinks = links;

        return config;

    }

}
