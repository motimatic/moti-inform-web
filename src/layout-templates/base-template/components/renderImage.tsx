import {useSnapshot} from "valtio/react";
import {appStore} from "../../../appStore.ts";

interface RenderImageProps {
    url: string;
}

const RenderImage :  React.FC<RenderImageProps> = ({ url }) => {
    useSnapshot(appStore);

    return (
            // <Image
            //     style={{
            //         maxHeight: "600px"
            //     }}
            //     src={url}
            // />
            <div
                style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    height: "100vh"
                }}
            />

            
    );
};

export default RenderImage;
