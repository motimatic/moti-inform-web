
export class JourneyResource {
    id: number;
    name: string;
    resources: Resource[]
    
    constructor() {
        this.id = 0;
        this.name = "";
        this.resources = [];
     
    }

}

export class Resource {
    id: number;
    name: string;
    url: string;

    constructor() {
        this.id = 0;
        this.name = "";
        this.url = ""
    }
}