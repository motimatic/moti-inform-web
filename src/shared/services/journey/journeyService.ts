
import { JourneyContext } from "../../models/journeyContext.model.ts";
import { CommandContext } from "./commands/cmdContext.ts";
import {CommandNavigate} from "./commands/cmdNavigate.ts";
import { CommandResources } from "./commands/cmdResources.ts";

export class JourneyService {

    navigate(journeyContext: JourneyContext ) {

        const cmd = new CommandNavigate();
        const results = cmd.run(journeyContext);
        return results
    }

    context(adId: string, page_url:string) {
        const cmd = new CommandContext();
        const results = cmd.run(adId, page_url);
        return results
    }

    resources(journeyId: number, journeyStepId: number) {
        const cmd = new CommandResources();
        const results = cmd.run(journeyId, journeyStepId);
        return results
    }

}
