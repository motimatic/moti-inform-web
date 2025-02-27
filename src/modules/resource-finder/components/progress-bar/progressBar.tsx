import { Progress } from '@mantine/core';

const ProgressBar = () => {


    return (
        <div className='py-5'>
            <Progress radius="xl" size="xl" value={60} />
        </div>
    );
};

export default ProgressBar;
