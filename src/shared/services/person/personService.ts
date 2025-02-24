import {CommandGetPersonList} from "./commands/cmdGetPersonList.ts";
import { CommandPerson } from "./commands/cmdPerson.ts";


export class PersonService {

    getList(org_id: number, offset: number = 0, limit: number = 10, search: any = null) {

        const cmd = new CommandGetPersonList()
        const results = cmd.run(org_id, offset, limit, search)

        return results
    }

    getPerson(service_id: number) {

        const cmd = new CommandPerson()
        const results = cmd.run(service_id)

        return results

    }


}
