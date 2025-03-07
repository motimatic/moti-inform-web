
import { ResourceSelected } from "../../../../../shared/models/resourceSelected.ts";
import { resourceFinderStore } from "../../../../../state/resourceFinderStore.ts";
import LinksSummaryRow from "./components/LinksSummaryRow.tsx";
import {useSnapshot} from "valtio/index";
import { useDisclosure } from "@mantine/hooks";
import MatchingResourcesModal from "./components/MatchingResourcesModal.tsx";
import {Button} from "@mantine/core";


const LinksSummaryPage = () => {

    const snapshot = useSnapshot(resourceFinderStore);
    const { title, prompt } = snapshot.context.getCurrentPage();
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <MatchingResourcesModal opened={opened}close={close}/>
            <label>{title || "No summary available"}</label>
            <h4>{prompt || "No summary available"}</h4>
            {
                resourceFinderStore.resourceSelected.map((resource: ResourceSelected) =>
                    <LinksSummaryRow key={resource.value} resourceName={resource.label}/>
                )
            }

            <Button fullWidth size="lg"
                    color="green"
                    onClick={open}
            >
                View Matching Resources
            </Button>


          
        </>
    );
};

export default LinksSummaryPage;

