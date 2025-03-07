import { proxy } from 'valtio';
import {LandingPageConfig} from "./shared/models/landingPageConfig.model.ts";


export const appStore = proxy({
    landingPageConfig: new LandingPageConfig(),
    pageHostName: "",
    adId: "1",

    setLandingPageConfig: (newConfig: LandingPageConfig) => {
        appStore.landingPageConfig = newConfig;
    },

    setPageHostName: (name: string) => {
        appStore.pageHostName = name;
    },

    setAdId: (adId: string) => {
        appStore.adId = adId;
    }

});
