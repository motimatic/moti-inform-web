
import { resourceFinderStore } from "../../../../../state/resourceFinderStore.ts";
import LinksSummaryRow from "./components/LinksSummaryRow.tsx";
import {useSnapshot} from "valtio/index";
import { Field, PageSection } from "../../../../../shared/models/pageSectionmodel.ts";
import { Box, LoadingOverlay, Text } from "@mantine/core";

const LinksSummaryPage = () => {

    const snapshot = useSnapshot(resourceFinderStore);
    const { title, prompt, form_data } = snapshot.context.getCurrentPage();
    const { isLoading } = resourceFinderStore;
    const fields =  form_data.sections.find((section: PageSection)=> section.name.toLowerCase() == "display");
    return (
        <Box pos="relative">
            <LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        
            <Text size="md" mt={0} pb={20}>{title || "No summary available"}</Text>
            <h2  className="font-normal text-2xl">{prompt || "No summary available"}</h2>
            {
                fields && fields.fields.map((field: Field)=> {
                    if(field.value == 0) return null;
                    return(
                        <LinksSummaryRow key={field.value} field={field} />
                    )
                })
            }
          
        </Box>
    );
};

export default LinksSummaryPage;

