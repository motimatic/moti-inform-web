import { Progress, Text, Box } from '@mantine/core';
import { resourceFinderStore } from '../../../../state/resourceFinderStore';
import { appStore } from '../../../../appStore';

interface ProgressBarProps {
    currentProgress: number;
}
const ProgressBar :  React.FC<ProgressBarProps> = ({ currentProgress }) => {
    const currentPage = resourceFinderStore.context.current_page;
    if( appStore.showStudentForm) return null;
    return (
            <Box style={{ position: 'relative', width: '100%' }}>
            <Text
              size="sm"
              style={{
                position: 'absolute',
                top: -25,
                left: currentPage != 2 ? `${currentProgress}%` : "98%",
                transform: 'translateX(-50%)',
                color: "#888",
                fontSize: "15px",
              }}
              className="roobert-regular"
            >
              {currentProgress.toFixed(0)}%
            </Text>
            <Progress radius="xl" size="xl" value={currentProgress} color="#D4FC81"/>
            
          </Box>
    );
};

export default ProgressBar;
