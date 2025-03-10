import { IconClock } from "@tabler/icons-react";
import { useSnapshot } from "valtio";
import { resourceFinderStore } from "../../../../state/resourceFinderStore";
import { JourneyContext } from "../../../../shared/models/journeyContext.model";
const BackButton = () => {
  useSnapshot(resourceFinderStore);
  const goBack =() =>{
    const context = resourceFinderStore.context;
    context.current_page = context.current_page - 1;
    context.next_page = context.next_page - 1;
    context.getCurrentPage()
    resourceFinderStore.setContext(context as JourneyContext);
    
  }
  return (
      <IconClock size={22} onClick={goBack} />
  );
};
export default BackButton;
