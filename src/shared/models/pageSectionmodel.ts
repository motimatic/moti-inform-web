
export class PageSection {

    name: string;
    fields: Field[];
    constructor() {
        this.name = "";
        this.fields = [];
    }
}

export class Field {
    type: string;
    label: string;
    value: string;
    constructor() {
        this.type = "";
        this.label = "";
        this.value = "";
    }

}