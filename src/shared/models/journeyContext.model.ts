import {Page} from "./page.model.ts";
export class JourneyContext {
    id: number;
    selected_journey_id: number;
    person_id: number;
    journey_id: number;
    current_page: number;
    next_page: number;
    pages: Page[] = [];
    
    constructor() {
        this.id = 0;
        this.person_id = 0;
        this.journey_id = 0;
        this.current_page = 0;
        this.next_page = 0;
        this.pages = [];
        this.selected_journey_id = 0;
    }

    getCurrentPage() {

        return this.pages[this.current_page];

    }

}