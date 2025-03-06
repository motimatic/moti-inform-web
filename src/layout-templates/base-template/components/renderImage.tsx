import {useSnapshot} from "valtio/react";
import {appStore} from "../../../appStore.ts";
import { Image } from '@mantine/core';

interface RenderImageProps {
    url: string;
}

const RenderImage :  React.FC<RenderImageProps> = ({ url }) => {
    useSnapshot(appStore);

    return (
            <Image
                style={{
                    maxHeight: "600px"
                }}
                src={url}
            />
    );
};

export default RenderImage;
