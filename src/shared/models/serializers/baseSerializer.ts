import { AppDate } from "../../utils/date-time/AppDate";


export abstract class BaseSerializer {

    public static serialize(model: object, omit: string[] = []) {

        if (!model || typeof model !== 'object') {
            throw new Error('Model must be a non-null object');
        }

        const jsonString = JSON.stringify(model, (key, value) => {
            if (omit.includes(key)) {
                return undefined;
            }

            return value;
        });

        return jsonString;
    }

    abstract deserialize( data ): object;

    deserializeList( data ): object [] {

        if (data === undefined)
            return []

        const itemList:object[] = [];

        for (const dataItem of data) {

            const item = this.deserialize(dataItem);
            itemList.push(item);

        }

        return itemList;
    }

    _copyAttributes(target, source){

        if (source === null || source === undefined){
            return target;
        }

        Object.keys(target).forEach(key => {
            if (Object.prototype.hasOwnProperty.call(source, key) && source[key] != null && source[key] !== '') {

                if (target[key] instanceof AppDate){
                    target[key].parseDate(source[key])
                }else {
                    target[key] = source[key];
                }
            }
        });
        return target;
    }

}
