import {CommandGetPersonList} from "./commands/cmdGetPersonList.ts";


export class PersonService {

    getList(org_id, offset=0, limit=10, search=null) {

        const cmd = new CommandGetPersonList()
        const results = cmd.run(org_id, offset, limit, search)

        return results
    }

    getPerson(service_id) {

        const cmd = new CommandGetPerson()
        const results = cmd.run(service_id)

        return results

    }


}
