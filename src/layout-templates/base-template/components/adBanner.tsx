import {useSnapshot} from "valtio/react";
import {appStore} from "../../../appStore.ts";
import { getExtension } from "../../../shared/utils/common.ts";
import RenderVideo from "./renderVideo.tsx";
import RenderImage from "./renderImage.tsx";

const AdBanner = () => {
    useSnapshot(appStore);
    const mediaType = getExtension(appStore.landingPageConfig.ad.media_url);
    return (
            mediaType == "mp4" ? 
            <RenderVideo url={appStore.landingPageConfig.ad.media_url} /> :
            <RenderImage url={appStore.landingPageConfig.ad.media_url} />
        
    );
};

export default AdBanner;
