import { BaseSerializer } from "./baseSerializer";
import {PageAction} from "../pageAction.model.ts";


export class PageActionSerializer extends BaseSerializer {

    public deserialize( data: any ): PageAction {

        const action = new PageAction();

        this._copyAttributes(action, data);

        return action;

    }

}
