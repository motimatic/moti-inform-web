import { IconRotateClockwise } from "@tabler/icons-react";
import { useSnapshot } from "valtio";
import { resourceFinderStore } from "../../../../state/resourceFinderStore";

const BackButton = () => {
	useSnapshot(resourceFinderStore);

	const goBack = () => {
 	if(resourceFinderStore.context.current_page == 1) {
    	resourceFinderStore.updateNextPage(0);
    	resourceFinderStore.updateCurrentPage(0);
    }else {
    	resourceFinderStore.updateNextPage(resourceFinderStore.context.next_page - 1)
    	resourceFinderStore.updateCurrentPage(resourceFinderStore.context.current_page - 1);
    }
   		resourceFinderStore.triggerAction();
    }
  return (
      <IconRotateClockwise size={22} onClick={()=>{goBack()}} className="cursor-pointer" />
  );
};

export default BackButton;
