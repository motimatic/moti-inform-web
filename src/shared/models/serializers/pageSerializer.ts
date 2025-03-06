import { BaseSerializer } from "./baseSerializer";
import {PageActionSerializer} from "./pageActionSerializer.ts";
import {Page} from "../page.model.ts";
import {PageSummarySerializer} from "./pageSummarySerializer.ts";


export class PageSerializer extends BaseSerializer {
    //TODO add type
    public deserialize( data: any ): object {

        const page = new Page();

        this._copyAttributes(page, data);

        const actionSerializer = new PageActionSerializer();
        if(data.actions)
            page.actions = data.actions.map((method: any) => actionSerializer.deserialize(method));

        const summarySerializer = new PageSummarySerializer();
        page.summary = summarySerializer.deserialize(data.summary);

        return page;

    }

}
