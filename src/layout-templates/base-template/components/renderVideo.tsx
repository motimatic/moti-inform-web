import {useSnapshot} from "valtio/react";
import {appStore} from "../../../appStore.ts";


interface RenderVideoProps {
    url: string;
}

const RenderVideo :  React.FC<RenderVideoProps> = ({ url }) => {
    useSnapshot(appStore);

    return (
        <video
            key={url}
            width="100%"
            controls
            autoPlay
            muted
            loop
        >
        <source
            src={url}
            type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

    );
};

export default RenderVideo;
