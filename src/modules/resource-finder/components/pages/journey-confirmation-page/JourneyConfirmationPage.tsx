import {  Title } from '@mantine/core';
import {useSnapshot} from "valtio/index";
import { resourceFinderStore } from '../../../../../state/resourceFinderStore';
import { Field, PageSection } from '../../../../../shared/models/pageSectionmodel';

const JourneyConfirmationPage = () => {
    const snapshot = useSnapshot(resourceFinderStore);
    const { title, form_data, name } = snapshot.context.getCurrentPage();
    
    snapshot.resourceSelected.filter((resource)=> resource.journeyName == name)
    
    const actions =  (field: Field) => {
        resourceFinderStore.selectResource(name , field.value, field.label)
        resourceFinderStore.updateNextPage(resourceFinderStore.context.next_page + 1);
        resourceFinderStore.triggerAction();
    }
    return (
        <div className="inner">
               {/* <h1  className="font-normal text-2xl">{prompt || "No summary available"}</h1> */}
            <Title className="title roobert-medium" order={1} mt={0} pb={20}>{title || "No summary available"}</Title>
            <div className='flex flex-wrap flex-col'>
                { form_data.sections?.filter((section: PageSection) => section.name.toLocaleLowerCase() == "collector").map((section: PageSection)=>{
                    return(
                        section.fields.map((field: Field)=>
                            <button key={field.value} 
                                onClick={()=>{actions(field)}} 
                                className='my-2 custom-button' 
                                // variant={x.length > 0 && x.find((el)=> el.value == field.value ) ? "variant": "outline" }
                                >
                                {field.label} 
                            </button> 
                            )
                        )
                    })
                }
            </div>
        </div>
    );
};

export default JourneyConfirmationPage;
