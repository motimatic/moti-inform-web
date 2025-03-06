import { ResourceSelected } from "../../../../../shared/models/resourceSelected.ts";
import { resourceFinderStore } from "../../../../../state/resourceFinderStore.ts";
import LinksSummaryRow from "./components/LinksSummaryRow.tsx";
import {useSnapshot} from "valtio/index";


const LinksSummaryPage = () => {

    const snapshot = useSnapshot(resourceFinderStore);
    const { title, prompt } = snapshot.context.getCurrentPage();
    return (
        <>
            <label>{title || "No summary available"}</label>
            <h4>{prompt || "No summary available"}</h4>
            {
                resourceFinderStore.resourceSelected.map((resource: ResourceSelected) =>
                    <LinksSummaryRow key={resource.value} resourceName={resource.label}/>
                )
            }
          
        </>
    );
};

export default LinksSummaryPage;
