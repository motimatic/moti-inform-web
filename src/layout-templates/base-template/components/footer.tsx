import { Grid, Title } from '@mantine/core';
import {useSnapshot} from "valtio/react";
import {appStore} from "../../../appStore.ts";

const Footer = () => {
    useSnapshot(appStore);
    const { landingPageConfig } = appStore;
    return (
        <Grid className='py-4 px-3 text-center' style={{background: landingPageConfig.brand.primary_color_code}} >
           <Grid.Col >
            <Title order={6}>{landingPageConfig.brand.name}</Title>
    
                <a 
                    className='text-center text-white'
                    href={landingPageConfig.brand.company_site_url}
                    target='_blank'
                >
                    {landingPageConfig.brand.company_site_url.replace(/^https?:\/\//, '')}
                </a>
      
           </Grid.Col>
        </Grid>
    );
};

export default Footer;
