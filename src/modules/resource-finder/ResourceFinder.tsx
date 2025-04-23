import PageRenderer from "./components/pages/PageRenderer.tsx";
import ProgressBar from "./components/progress-bar/progressBar.tsx";
import ButtonBar from "./components/button-bar/buttonBar.tsx";
import { useSnapshot } from "valtio";
import { resourceFinderStore } from "../../state/resourceFinderStore.ts";
import { IconX } from "@tabler/icons-react";
import { appStore } from "../../appStore.ts";

const ResourceFinder = () => {
    const snapshot = useSnapshot(resourceFinderStore);
    const { current_page } = snapshot.context;
    const totalPages = 3;
    const currentProgress = ((current_page + 1) / totalPages)* 100;

    const reset = async () => {
        resourceFinderStore.updateCurrentPage(0);
        resourceFinderStore.updateNextPage(0);
        appStore.setShowResourceFinder(false);
    }

    return (
        <div className={`resource-finder  ${appStore.showResourceFinder ? "show-resource-finder" : "hide-resource-finder"}`}>
                <div className="resource-wrapper">
                   <div style={{width: "100%", maxWidth: "1000px", margin: "0 auto", padding: "0 2em"}}>
                    <PageRenderer/>
                    { current_page != 2 && <ButtonBar/>}
                  
                   </div>
                    <div>
                        <ProgressBar currentProgress={currentProgress}/>
                        <div className="close-button flex items-center px-5 md:px-20 pb-4 mt-6 md:mt-9 text-gray-400" onClick={()=>{reset()}}>
                            <IconX size={20} />
                            <span className="roobert-regular fs-18">CLOSE</span>
                        </div>
                    </div>
                </div>
  
            {/* <Grid.Col span={{sm:12, md:3}} style={{background: '#B6C5C7'}} className="rounded-xs">
                <InfoPanel />
            </Grid.Col> */}
      
        </div>

    );
};

export default ResourceFinder;
