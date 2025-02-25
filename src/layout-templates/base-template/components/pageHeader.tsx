import { Image } from '@mantine/core';
import {useSnapshot} from "valtio/react";
import {appStore} from "../../../appStore.ts";


const PageHeader = () => {
    useSnapshot(appStore);

    return (
        <div >
            <Image
                radius="md"
                src={appStore.landingPageConfig.brand_info.logo_url}
            />

        </div>
    );
};

export default PageHeader;
