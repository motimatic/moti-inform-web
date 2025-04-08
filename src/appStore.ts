import { proxy } from 'valtio';
import {LandingPageConfig} from "./shared/models/landingPageConfig.model.ts";


export const appStore = proxy({
    landingPageConfig: new LandingPageConfig(),
    pageHostName: "",
    adId: "1",
    showQuickLinksMenu: false,  
    showResourceFinder: false,
    showStudentForm: false,
    setLandingPageConfig: (newConfig: LandingPageConfig) => {
        appStore.landingPageConfig = newConfig;
    },
    setPageHostName: (name: string) => {
        appStore.pageHostName = name;
    },
    setAdId: (adId: string) => {
        appStore.adId = adId;
    },
    setShowQuickLinksMenu: (value: boolean) => {
        appStore.showQuickLinksMenu = value;
    },
    setShowResourceFinder: (value: boolean) => {
        appStore.showResourceFinder = value;
    },
    setShowStudentForm: (value: boolean) => {
        appStore.showStudentForm = value;
    }
    }); 
