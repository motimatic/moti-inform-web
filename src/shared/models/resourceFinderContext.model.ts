import {Page} from "./page.model.ts";


export class ResourceFinderContext {

    current_page: number;
    pages: Page[] = [];

    constructor() {
        this.current_page = 0;
        this.pages = []
    }

    getCurrentPage() {

        return this.pages[this.current_page];

    }

}

