import { Grid, Image } from '@mantine/core';
import {useSnapshot} from "valtio/react";
import {appStore} from "../../../appStore.ts";
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const PageHeader = () => {
    useSnapshot(appStore);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 992);
    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 992);
      };
      window.addEventListener('resize', handleResize);
      // Call once to make sure it's accurate
      handleResize();
      return () => window.removeEventListener('resize', handleResize);

    }, []);
    return (
        <div className='py-4 px-7 header' style={{backdropFilter: "blur(7px)"}}>
                <figure>
                    <Image
                        width={100}
                        fit="contain"
                        src={appStore.landingPageConfig.brand.logo_url}
                    />
                </figure>
                {
                   (isSmallScreen && appStore.showQuickLinksMenu == false || !isSmallScreen) &&
                   <button onClick={()=>{appStore.setShowQuickLinksMenu(true)}} className="transparent-button close-quick-link-header">
                    <IconMenu2 size={26}  className="icon" />
                    <span className='label'>Quick Links</span>
                    </button>
                }
                {
                   isSmallScreen && appStore.showQuickLinksMenu == true &&
                   <button onClick={()=>{appStore.setShowQuickLinksMenu(false)}} className="transparent-button close-quick-link-header">
                    <IconX size={26}  className="icon" />
                    </button>
                }
           
        
        </div>
    );
};

export default PageHeader;
