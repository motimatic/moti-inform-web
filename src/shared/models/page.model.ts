import { ActionButtons } from "./actionButtons.model.ts";
import {PageAction} from "./pageAction.model.ts";
import {PageSummary} from "./pageSummary.model.ts";


export class Page {

    name: string;
    title: string;
    prompt: string;
    actions: PageAction[];
    summary: PageSummary;
    action_buttons: ActionButtons[];

    constructor() {
        this.name = "";
        this.title = "";
        this.prompt = '';
        this.actions = [];
        this.summary = new PageSummary();
        this.action_buttons = [];
    }

}

