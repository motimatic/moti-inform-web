import { useSnapshot } from "valtio";
import { resourceFinderStore } from "../../../../../../state/resourceFinderStore";
import { Title, Text } from "@mantine/core";


const TextPanel = () => {
    useSnapshot(resourceFinderStore);
    const currentPage = resourceFinderStore.context.getCurrentPage();
    const summary = currentPage?.summary;
    if (!summary) return null;
    return (
        <div className="py-10 px-6">
            <Title order={3}>{summary?.pre || ""}</Title>
            { summary.value != null &&
                <Title order={2}  className="border-b-3 w-fit border-yellow-500 rounded-x">{summary?.value}</Title>
            }
            <Text size="lg" mt={10}>{summary?.post != "" && `${summary?.post}`} {summary?.prompt || ""}</Text>
        </div>
    );
};

export default TextPanel;
