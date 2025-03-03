import { Ad } from "./ad.model.ts";
import {Brand} from "./brand.model.ts";


export class LandingPageConfig {

    analytics_tracking_code: string;
    template_name: string;
    brand: Brand;
    ad: Ad;

    constructor() {
        this.analytics_tracking_code = '';
        this.template_name = '';
        this.brand = new Brand;
        this.ad = new Ad
    }

}

