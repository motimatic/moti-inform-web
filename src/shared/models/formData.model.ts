import { PageSection } from "./pageSectionmodel";

export class FormData {

    name: string;
    description: string;
    sections: PageSection[]

    constructor() {
        this.name = "";
        this.description = "";
        this.sections = [];
    }

}

