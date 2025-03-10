
import { resourceFinderStore } from "../../../../../state/resourceFinderStore.ts";
import LinksSummaryRow from "./components/LinksSummaryRow.tsx";
import {useSnapshot} from "valtio/index";
import { useDisclosure } from "@mantine/hooks";
import MatchingResourcesModal from "./components/MatchingResourcesModal.tsx";
import { Field, PageSection } from "../../../../../shared/models/pageSectionmodel.ts";
import { Box, LoadingOverlay, Text } from "@mantine/core";

const LinksSummaryPage = () => {

    const snapshot = useSnapshot(resourceFinderStore);
    const { title, prompt, form_data } = snapshot.context.getCurrentPage();
    const [opened, { close }] = useDisclosure(false);
    const { isLoading } = resourceFinderStore;
    const fields =  form_data.sections.find((section: PageSection)=> section.name.toLowerCase() == "display");
    return (
        <Box pos="relative">
            <LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
            <MatchingResourcesModal opened={opened}close={close}/>
            <Text size="md">{title || "No summary available"}</Text>
            <Text size="xl">{prompt || "No summary available"}</Text>
            {
                fields && fields.fields.map((field: Field)=> {
                    return(
                        <LinksSummaryRow key={field.value} field={field} />
                    )
                })
            }
          
        </Box>
    );
};

export default LinksSummaryPage;

