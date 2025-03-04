import { Grid, Image } from '@mantine/core';
import {useSnapshot} from "valtio/react";
import {appStore} from "../../../appStore.ts";

const PageHeader = () => {
    useSnapshot(appStore);
    return (
        <Grid className='py-4 px-3' >
           <Grid.Col>
                <figure className='xs:w-50 md:w-100'>
                    <Image
                        width={100}
                        fit="contain"
                        src={appStore.landingPageConfig.brand.logo_url}
                    />
                </figure>
           </Grid.Col>
        </Grid>
    );
};

export default PageHeader;
