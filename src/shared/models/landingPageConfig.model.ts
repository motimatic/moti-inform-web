import {Brand} from "./brand.model.ts";


export class LandingPageConfig {

    analytics_tracking_code: string;
    template_name: string;
    brand_info: Brand;

    constructor() {
        this.analytics_tracking_code = '';
        this.template_name = '';
        this.brand_info = new Brand();
    }

}

