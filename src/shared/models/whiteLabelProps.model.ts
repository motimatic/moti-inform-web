
export class WhiteLabelProps {

    id: number;
    organization_id: number;
    organization_name: string;
    appName: string;
    appUrl: string;
    appImageBackgroundColor: string;
    mascot_name: string;
    primary_color: string;
    primary_color_light: string;
    contrast_color: string;
    kt_icon_color: string;
    default_page_size: number;

    constructor() {
        this.id = 0;
        this.organization_id = 0;
        this.organization_name = '';
        this.appName = '';
        this.mascot_name = '';
        this.appUrl = '';
        this.appImageBackgroundColor = '#333333'
        this.primary_color = '#15aa78'
        this.primary_color_light = '#5ec3a1'
        this.contrast_color = '#fff'
        this.kt_icon_color = 'text-white'
        this.default_page_size = 10;
    }

}

