import {Button} from "@mantine/core";
import { useSnapshot } from "valtio";
import { resourceFinderStore } from "../../../../../state/resourceFinderStore";
import { Field } from "../../../../../shared/models/pageSectionmodel";
const IdentifyChallengesPage = () => {

    const snapshot = useSnapshot(resourceFinderStore);
    const { title, prompt, form_data, name } = snapshot.context.getCurrentPage();
    const x = snapshot.resourceSelected.filter((resource)=> resource.journeyName == name)
    return (
        <>
            <label>{title || "No summary available"}</label>
            <h4>{prompt || "No summary available"}</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            { form_data.sections[0].fields.map(((field: Field)=>
                  <Button key={field.value} 
                    onClick={()=>{resourceFinderStore.selectResource(name , field.value, field.label)}} 
                    className='mx-2 my-2 bg-amber-300' 
                    variant={x.length > 0 && x.find((el)=> el.value == field.value ) ? "variant": "outline" }>
                    {field.label} 
                </Button> 
                ))  
            }
            </div>
        </>
    );
};

export default IdentifyChallengesPage;
