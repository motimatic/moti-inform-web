import { Box, Button, LoadingOverlay } from '@mantine/core';
import {useSnapshot} from "valtio/index";
import { resourceFinderStore } from '../../../../../state/resourceFinderStore';
import { Field, PageSection } from '../../../../../shared/models/pageSectionmodel';

const JourneyConfirmationPage = () => {
    const snapshot = useSnapshot(resourceFinderStore);
    const { title, prompt, form_data, name } = snapshot.context.getCurrentPage();
    const { isLoading } = resourceFinderStore;
    const x = snapshot.resourceSelected.filter((resource)=> resource.journeyName == name)
    
    const journeyActions =  (field: Field) => {
        resourceFinderStore.selectResource(name , field.value, field.label)
        resourceFinderStore.triggerAction();
    }
    return (
        <Box pos="relative">
        	<LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
            <label>{title || "No summary available"}</label>
            <h4>{prompt || "No summary available"}</h4>
            
            <div className='flex flex-wrap'>
                { form_data.sections?.filter((section: PageSection) => section.name.toLocaleLowerCase() == "collector").map((section: PageSection)=>{
                    return(
                        section.fields.map((field: Field)=>
                            <Button key={field.value} 
                                onClick={()=>{journeyActions(field)}} 
                                className='mx-2 my-2 bg-amber-300' 
                                variant={x.length > 0 && x.find((el)=> el.value == field.value ) ? "variant": "outline" }>
                                {field.label} 
                            </Button> 
                            )
                        )
                    })
                }
            </div>
        </Box>
    );
};

export default JourneyConfirmationPage;
