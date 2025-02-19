import { BaseSerializer } from "./baseSerializer";
import {PageActionSerializer} from "./pageActionSerializer.ts";
import {Page} from "../page.model.ts";
import {PageSummarySerializer} from "./pageSummarySerializer.ts";


export class PageSerializer extends BaseSerializer {

    public deserialize( data ): object {

        const page = new Page();

        this._copyAttributes(page, data);

        const actionSerializer = new PageActionSerializer();
        page.actions = data.actions.map(method => actionSerializer.deserialize(method));

        const summarySerializer = new PageSummarySerializer();
        page.summary = summarySerializer.deserialize(data.summary);

        return page;

    }

}
