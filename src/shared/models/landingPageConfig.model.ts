import { Ad } from "./ad.model.ts";
import {Brand} from "./brand.model.ts";
import {QuickLink} from "./quickLink.model.ts";


export class LandingPageConfig {

    analytics_tracking_code: string;
    template_name: string;
    brand: Brand;
    ad: Ad;
    quickLinks: QuickLink[];

    constructor() {
        this.analytics_tracking_code = '';
        this.template_name = '';
        this.brand = new Brand();
        this.ad = new Ad();
        this.quickLinks = []
    }

}

