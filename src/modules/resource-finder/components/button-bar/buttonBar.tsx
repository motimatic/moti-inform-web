import { Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { resourceFinderStore } from '../../../../state/resourceFinderStore';
import { useSnapshot } from 'valtio';


const ButtonBar = () => {

    const arrowIcon = <IconArrowRight size={14} />
    useSnapshot(resourceFinderStore);
    const currentPage = resourceFinderStore.context.getCurrentPage()
    
    return (
        <div style={{paddingTop:'10px', paddingBottom:'10px'}}>
            <Button fullWidth size="lg"
                    color="#af2e34"
                    rightSection={arrowIcon}
                    onClick={resourceFinderStore.triggerAction}
            >
                {currentPage && currentPage.actions[0].label}
            </Button>
        </div>
    );
};
// #882e34
export default ButtonBar;
