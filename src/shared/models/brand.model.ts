
export class Brand {

    name: string;
    logo_url: string | null;
    company_site_url: string;
    primary_color_code: string;
    secondary_color_code: string;
    tertiary_color_code: string;
    tag_line: string;

    constructor() {
        this.name = "";
        this.logo_url = null;
        this.company_site_url = "";
        this.primary_color_code = "";
        this.secondary_color_code = "";
        this.tertiary_color_code = "";
        this.tag_line = "";
    }

}

