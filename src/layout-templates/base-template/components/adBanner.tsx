import {useSnapshot} from "valtio/react";
import {appStore} from "../../../appStore.ts";


const AdBanner = () => {
    useSnapshot(appStore);
    return (
        <div className='' >
            <figure  className=''>
                {/* <Image
                    src={appStore.landingPageConfig.ad.media_url}
                /> */}
                 <video
                        key={appStore.landingPageConfig.ad.media_url}
                        width="100%"
                        controls
                        autoPlay
                        muted
                        loop
                      >
                        <source
                          src={appStore.landingPageConfig.ad.media_url}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
            </figure>
        </div>
    );
};

export default AdBanner;
