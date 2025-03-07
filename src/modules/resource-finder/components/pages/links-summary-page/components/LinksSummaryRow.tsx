import { useDisclosure } from '@mantine/hooks';
import MatchingResourcesModal from './MatchingResourcesModal';

interface LinksSummaryRowProps {
    resourceName: string;
}
const LinksSummaryRow : React.FC<LinksSummaryRowProps> = ({ resourceName }) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>  <MatchingResourcesModal opened={opened} open={open} close={close}/>
            <div style={{padding: '10px', margin: '10px', border: 'solid 1px grey', borderRadius: '4px'}}>
                {resourceName}
            </div>
        </>
    );
};

export default LinksSummaryRow;
