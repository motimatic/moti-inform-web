import { Box, Button, LoadingOverlay, Text } from '@mantine/core';
import {useSnapshot} from "valtio/index";
import { resourceFinderStore } from '../../../../../state/resourceFinderStore';
import { Field, PageSection } from '../../../../../shared/models/pageSectionmodel';

const JourneyConfirmationPage = () => {
    const snapshot = useSnapshot(resourceFinderStore);
    const { title, prompt, form_data, name } = snapshot.context.getCurrentPage();
    const { isLoading } = resourceFinderStore;
    const x = snapshot.resourceSelected.filter((resource)=> resource.journeyName == name)
    
    const actions =  (field: Field) => {
        resourceFinderStore.selectResource(name , field.value, field.label)
        resourceFinderStore.updateNextPage(resourceFinderStore.context.next_page + 1);
        resourceFinderStore.triggerAction();
    }
    return (
        <Box pos="relative">
        	<LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
            <Text size="md" mt={0} pb={20}>{title || "No summary available"}</Text>
            <h2  className="font-normal text-2xl">{prompt || "No summary available"}</h2>
            
            <div className='flex flex-wrap'>
                { form_data.sections?.filter((section: PageSection) => section.name.toLocaleLowerCase() == "collector").map((section: PageSection)=>{
                    return(
                        section.fields.map((field: Field)=>
                            <Button key={field.value} 
                                onClick={()=>{actions(field)}} 
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
