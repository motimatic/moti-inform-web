import { Progress } from '@mantine/core';

const ProgressBar = () => {


    return (
        <div style={{padding: '20px'}}>
            <Progress radius="xl" size="xl" value={60} />
        </div>
    );
};

export default ProgressBar;
