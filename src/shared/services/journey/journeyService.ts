
import { CommandContext } from "./commands/cmdContext.ts";
import {CommandNavigate} from "./commands/cmdNavigate.ts";

export class JourneyService {

    navigate(fromPage: string | null = null, action=null, offset=0, limit=20) {

        const cmd = new CommandNavigate();
        const results = cmd.run(fromPage, action, offset, limit);
        return results
    }

    context(adId: string, page_url:string) {
        const cmd = new CommandContext();
        const results = cmd.run(adId, page_url);
        return results
    }

}
