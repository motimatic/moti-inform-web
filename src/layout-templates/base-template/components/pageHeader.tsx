import { Grid, Image } from '@mantine/core';
import {useSnapshot} from "valtio/react";
import {appStore} from "../../../appStore.ts";
import { IconList, IconMenu2 } from '@tabler/icons-react';

const PageHeader = () => {
    useSnapshot(appStore);
    return (
        <Grid className='py-4 px-7 header' justify="space-between" align="center" style={{backdropFilter: "blur(7px)"}}>
                <figure className='xs:w-50 md:w-100'>
                    <Image
                        width={100}
                        fit="contain"
                        src={appStore.landingPageConfig.brand.logo_url}
                    />
                </figure>
                <button onClick={()=>{appStore.setShowQuickLinksMenu(true)}} className="transparent-button">
                    <IconMenu2 size={26} className="icon" />
                    <span className='label'>Quick Links</span>
                </button>
           
        
        </Grid>
    );
};

export default PageHeader;
