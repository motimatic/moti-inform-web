import {CommandGetLandingPageConfig} from "./command/cmdGetLandingPageConfig.ts";


export class LandingPageService {

    getInfo(adId: string, page_url:string) {

        const cmd = new CommandGetLandingPageConfig();
        const results = cmd.run(adId, page_url);

        return results
    }

}
