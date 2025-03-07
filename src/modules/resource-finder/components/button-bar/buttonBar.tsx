import { Button } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { resourceFinderStore } from "../../../../state/resourceFinderStore";
import { useSnapshot } from "valtio";
import { Field, PageSection } from "../../../../shared/models/pageSectionmodel";
import { useDisclosure } from "@mantine/hooks";
import MatchingResourcesModal from "../pages/links-summary-page/components/MatchingResourcesModal";

const ButtonBar = () => {
  const arrowIcon = <IconArrowRight size={14} />;
  useSnapshot(resourceFinderStore);
  const currentPage = resourceFinderStore.context.getCurrentPage();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        {/* REMOVE THIS ONCE WE HAVE DATA */}
        <MatchingResourcesModal opened={opened}close={close}/>
    {/* FLOW FOR TESTING PURPOSES, REMOVE THIS ONCE WE HAVE THE DATA */}
      {resourceFinderStore.context.current_page == 1 ?
       
      <Button fullWidth size="lg" color="green" onClick={open}>
        View Matching Resources
      </Button>
      :
      <Button
        fullWidth
        size="lg"
        color="#af2e34"
        rightSection={arrowIcon}
        onClick={resourceFinderStore.triggerAction}
      >
       

        {currentPage &&
          currentPage.form_data.sections
            ?.find(
              (section: PageSection) =>
                section.name.toLocaleLowerCase() == "actions"
            )
            ?.fields.find((field: Field) => field.type == "button")?.label}
      </Button>
    }
    </div>
  );
};
// #882e34
export default ButtonBar;
