import {Organization} from "./organization.model.ts";


export class Person {

    id: number;
    organization: Organization;
    name: string;
    description: string;

    constructor() {
        this.id = 0;
        this.organization = new Organization();
        this.name = '';
        this.description = '';
    }

}

