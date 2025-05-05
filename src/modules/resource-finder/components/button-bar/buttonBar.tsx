import { IconArrowRight } from "@tabler/icons-react";
import { resourceFinderStore } from "../../../../state/resourceFinderStore";
import { useSnapshot } from "valtio";
import { useDisclosure } from "@mantine/hooks";
import BackButton from "../back-button/backButton";

const ButtonBar = () => {
  useSnapshot(resourceFinderStore);
  const [_opened, { open }] = useDisclosure(false);
  const actions = () => {
   
    if(resourceFinderStore.context.current_page == 2){
        open();
    }else {
        resourceFinderStore.updateNextPage(resourceFinderStore.context.next_page + 1);
        resourceFinderStore.triggerAction();    
    }
  }
  return (
    <div style={{display: "flex", justifyContent: "flex-end"}} className="mt-4">
    
        <div className={`${resourceFinderStore.context.current_page != 0 ? 'w-full md:w-1/2 flex justify-between' : 'w-full flex justify-end' }` }>
        {  resourceFinderStore.context.current_page != 0 &&
            <BackButton/>
        }
         
          <button
              color={resourceFinderStore.context.current_page == 2 ? "green" :"#af2e34"}
              className="custom-dark-button"
              onClick={actions}
          >
          NEXT <IconArrowRight size={25} />
        </button>
        </div>
    </div>
  );
};
export default ButtonBar;
