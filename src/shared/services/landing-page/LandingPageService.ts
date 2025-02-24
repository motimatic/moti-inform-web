import {CommandGetLandingPageConfig} from "./command/cmdGetLandingPageConfig.ts";


export class LandingPageService {

    getInfo(adId: string) {

        const cmd = new CommandGetLandingPageConfig();
        const results = cmd.run(adId);

        return results
    }

}
