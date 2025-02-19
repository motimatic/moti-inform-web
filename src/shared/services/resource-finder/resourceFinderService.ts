import {CommandNavigate} from "./commands/cmdNavigate.ts";


export class ResourceFinderService {

    navigate(fromPage=null, action=null, offset=0, limit=20) {

        const cmd = new CommandNavigate();
        const results = cmd.run(fromPage, action, offset, limit);

        return results
    }

}
