import {Text, Title} from "@mantine/core";
const MetricPanel = () => {

    return (
        <div className="py-10 px-6">
            <Title order={3}>We have over</Title>
            <Title order={2}  className="border-b-3 w-20 border-yellow-500 rounded-x">150</Title>
            <Text size="lg" mt={10}>Resource links available, Let's personalize your journey.</Text>
        </div>
    );
};

export default MetricPanel;
