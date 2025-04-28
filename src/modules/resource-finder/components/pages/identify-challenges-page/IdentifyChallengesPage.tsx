import {Box, Button, LoadingOverlay, Title} from "@mantine/core";
import { useSnapshot } from "valtio";
import { resourceFinderStore } from "../../../../../state/resourceFinderStore";
import { Field } from "../../../../../shared/models/pageSectionmodel";
import { ResourceSelected } from "../../../../../shared/models/resourceSelected";
const IdentifyChallengesPage = () => {

    const snapshot = useSnapshot(resourceFinderStore);
    const { title, prompt, form_data, name } = snapshot.context.getCurrentPage();
    const { isLoading } = resourceFinderStore;
    snapshot.resourceSelected.filter((resource)=> resource.journeyName == name)

    const actions =  (field: Field) => {
       resourceFinderStore.selectResource(name , field.value, field.label);
    }
    console.log("resourceFinderStore.resourceSelected ", resourceFinderStore.resourceSelected)
    return (
        <div className="inner">
                   {/* <h2  className="font-normal text-2xl">{prompt || "No summary available"}</h2> */}
            <LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
            <Title className="title roobert-medium" order={1} mt={0} pb={20}>{title || "No summary available"}</Title>
           
            <div className='flex flex-wrap flex-col'>
                { form_data.sections[0].fields.map(((field: Field)=> {
                    const isSelected = resourceFinderStore.resourceSelected.findIndex(
                        (resource: ResourceSelected) => (resource.value === field.value && resource.label === field.label)
                      ) !== -1;
                    return (
                        <button key={field.value} 
                        onClick={()=>{actions(field)}} 
                        className={`my-2 custom-button ${isSelected ? "selected" : ""}`}>
                        {field.label} 
                    </button>
                    )
                    }))  
                }
            </div>
        </div>
    );
};

export default IdentifyChallengesPage;
