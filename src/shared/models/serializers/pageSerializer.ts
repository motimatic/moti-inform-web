import { BaseSerializer } from "./baseSerializer";
import {Page} from "../page.model.ts";
import {PageSummarySerializer} from "./pageSummarySerializer.ts";
export class PageSerializer extends BaseSerializer {
    public deserialize( data: any ): object {

        const page = new Page();
        this._copyAttributes(page, data);
        const summarySerializer = new PageSummarySerializer();
        page.summary = summarySerializer.deserialize(data.summary);

        return page;

    }

}
