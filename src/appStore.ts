import { proxy } from 'valtio';
import {LandingPageConfig} from "./shared/models/landingPageConfig.model.ts";


export const appStore = proxy({
    landingPageConfig: new LandingPageConfig(),

    setLandingPageConfig: (newConfig: LandingPageConfig) => {
        appStore.landingPageConfig = newConfig;
    },

});
