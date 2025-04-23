import {useSnapshot} from "valtio/react";
import {appStore} from "../../../appStore.ts";
import { getExtension } from "../../../shared/utils/common.ts";
import RenderVideo from "./renderVideo.tsx";
import RenderImage from "./renderImage.tsx";
import { IconArrowRight } from "@tabler/icons-react";

const AdBanner = () => {
    useSnapshot(appStore);
    const mediaType = getExtension(appStore.landingPageConfig.ad.media_url);
    return (
            <div className="banner-wrapper">
                    {
                        mediaType == "mp4" ? 
                        <RenderVideo url={appStore.landingPageConfig.ad.media_url} /> :
                        <RenderImage url={appStore.landingPageConfig.ad.media_url} />
                    }
                    <div className="banner-degraded">
                        <h1 className="orbikular-light-italic text-xs md:text-lg "><span className="roobert-medium">Find the right support to </span> <br/>keep your education on track.</h1>
                        <span className="roobert-regular fs-20">Whether you need financial aid, academic help, or motivation to <br/> keep going, we’re here to guide you.</span>
                    </div>
                    <div className="banner-mask">
                       <button className="custom-button roobert-regular" onClick={() => appStore.setShowResourceFinder(true)}>
                        Find My Resources Now
                        <IconArrowRight size={40} />
                       </button>
                    </div>
            </div>

        
    );
};

export default AdBanner;
