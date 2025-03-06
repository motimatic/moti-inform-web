import { Progress } from '@mantine/core';

interface ProgressBarProps {
    currentProgress: number;
}
const ProgressBar :  React.FC<ProgressBarProps> = ({ currentProgress }) => {
  

    return (
        <div className='py-5'>
            <Progress radius="xl" size="xl" value={currentProgress} />
        </div>
    );
};

export default ProgressBar;
