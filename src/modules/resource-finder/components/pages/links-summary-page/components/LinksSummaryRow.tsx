import { Title, Text } from "@mantine/core";
import { Field } from "../../../../../../shared/models/pageSectionmodel";

interface LinksSummaryRowProps {
    field: Field;
}
const LinksSummaryRow : React.FC<LinksSummaryRowProps> = ({ field }) => {

    return (
        <>  
            <div className="flex items-center" style={{padding: '10px', margin: '10px', border: 'solid 1px grey', borderRadius: '4px'}}>
               <Title order={5} className="w-2/4 pe-6" >{field.label}</Title>
               <Text>{field.value} resources found</Text>
            </div>
        </>
    );
};

export default LinksSummaryRow;
