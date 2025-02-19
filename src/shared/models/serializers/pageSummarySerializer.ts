import { BaseSerializer } from "./baseSerializer";
import {PageSummary} from "../pageSummary.model.ts";


export class PageSummarySerializer extends BaseSerializer {

    public deserialize( data ): PageSummary {

        const summary = new PageSummary();

        this._copyAttributes(summary, data);

        return summary;

    }

}
