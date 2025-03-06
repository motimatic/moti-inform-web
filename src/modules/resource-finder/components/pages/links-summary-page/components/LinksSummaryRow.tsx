
interface LinksSummaryRowProps {
    resourceName: string;
}
const LinksSummaryRow : React.FC<LinksSummaryRowProps> = ({ resourceName }) => {


    return (
        <>
            <div style={{padding: '10px', margin: '10px', border: 'solid 1px grey', borderRadius: '4px'}}>
                {resourceName}
            </div>
        </>
    );
};

export default LinksSummaryRow;
