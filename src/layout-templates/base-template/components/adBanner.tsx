import { Image } from '@mantine/core';
import {useSnapshot} from "valtio/react";
import {appStore} from "../../../appStore.ts";


const AdBanner = () => {
    useSnapshot(appStore);
    return (
        <div className='' >
            <figure  className=''>
                <Image
                    src={'https://placehold.co/1920x800'}
                />
            </figure>
        </div>
    );
};

export default AdBanner;
