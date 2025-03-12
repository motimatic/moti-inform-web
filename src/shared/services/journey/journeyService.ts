
import { JourneyContext } from "../../models/journeyContext.model.ts";
import { Student } from "../../models/student.model.ts";
import { CommandContext } from "./commands/cmdContext.ts";
import {CommandNavigate} from "./commands/cmdNavigate.ts";
import { CommandResources } from "./commands/cmdResources.ts";
import { CommandSendResources } from "./commands/cmdSendResources.ts";

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

    resources(personId: number, journeyStepId: number) {
        const cmd = new CommandResources();
        const results = cmd.run(personId, journeyStepId);
        return results
    }

    sendResources(student: Student) {
        const cmd = new CommandSendResources();
        const results = cmd.run(student);
        return results
    }


}
