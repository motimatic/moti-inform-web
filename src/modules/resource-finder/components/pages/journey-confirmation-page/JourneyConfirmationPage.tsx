import { Button } from '@mantine/core';
import {useSnapshot} from "valtio/index";
import { resourceFinderStore } from '../../../../../state/resourceFinderStore';
import { ActionButtons } from '../../../../../shared/models/actionButtons.model';

const JourneyConfirmationPage = () => {

    const snapshot = useSnapshot(resourceFinderStore);
    const { title, prompt, action_buttons, name } = snapshot.context.getCurrentPage();
    const x = snapshot.resourceSelected.filter((resource)=> resource.journeyName == name)
    return (
        <>
            <label>{title || "No summary available"}</label>
            <h4>{prompt || "No summary available"}</h4>
            <div className='flex flex-wrap'>
                { action_buttons.map(((action: ActionButtons)=>
                  <Button key={action.value} 
                    onClick={()=>{resourceFinderStore.selectResource(name , action.value, action.label)}} 
                    className='mx-2 my-2 bg-amber-300' 
                    variant={x.length > 0 && x[0].value==action.value ? "variant": "outline"}>
                    {action.label} 
                </Button> 
                ))  
                }
                
            </div>
        </>
    );
};

export default JourneyConfirmationPage;
