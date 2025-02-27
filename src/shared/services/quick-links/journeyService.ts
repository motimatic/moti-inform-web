import { CommandQuickLinks } from "./commands/cmdQuickLinks.ts";


export class QuickLinksService {

    getQuickLinks() {

        const cmd = new CommandQuickLinks();
        const results = cmd.run();
        return results
    }

}
