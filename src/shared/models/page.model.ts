import { FormData } from "./formData.model.ts";
import {PageSummary} from "./pageSummary.model.ts";
export class Page {

    name: string;
    title: string;
    prompt: string;
    summary: PageSummary;
    form_data: FormData;

    constructor() {
        this.name = "";
        this.title = "";
        this.prompt = '';
        this.summary = new PageSummary();
        this.form_data = new FormData;
    }

}

