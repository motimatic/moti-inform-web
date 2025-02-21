import {CommandGetLandingPageConfig} from "./command/cmdGetLandingPageConfig.ts";


export class LandingPageService {

    getInfo(adId) {

        const cmd = new CommandGetLandingPageConfig();
        const results = cmd.run(adId);

        return results
    }

}
