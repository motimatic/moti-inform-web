import { Button } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { resourceFinderStore } from '../../state/resourceFinderStore.ts'


const ButtonBar = () => {

    const arrowIcon = <IconArrowRight size={14} />

    return (
        <div style={{paddingTop:'10px', paddingBottom:'10px'}}>
            <Button fullWidth size="lg"
                    color="#af2e34"
                    rightSection={arrowIcon}
                    onClick={resourceFinderStore.triggerAction}
            >
                Next Question
            </Button>
        </div>
    );
};
// #882e34
export default ButtonBar;
